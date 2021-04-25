import React from "react";

const templates = [
  { id: 1, value: "pk", name: "Dress" },
  { id: 2, value: "us", name: "Grocery" },
  { id: 3, value: "ar", name: "Homeclean" },
  { id: 4, value: "ne", name: "Food" },
  { id: 5, value: "vu", name: "Drink" }
];

class Dynamic extends React.Component {
  state = {
    selectedTemplates: ""
  };

  onChange = (e) => {
    console.log(e);
    // selected value store into state
    this.setState({
      selectedTemplates: e.target.value
    });
  };

  render() {
    return (
      <div>
        <h2>shopping Cart</h2>
        <select
          className="form-control"
          value={this.state.value}
          onChange={(e) => this.onChange(e.target.value)}
        >
          {templates.map((msgTemplate) => {
            return (
              <option
                key={msgTemplate.id}
                name={msgTemplate.name}
                value={msgTemplate.text}
              >
                {msgTemplate.name}
              </option>
            );
          })}
        </select>
      </div>
    );
  }
}

export default Dynamic;

//code by rizwan
