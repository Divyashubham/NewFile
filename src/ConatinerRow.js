import React from "react";

import Dynamic from "./App";
import Reservation from "./Form";
class ContainerRow extends React.Component {
  render(){
     return (
         <div className='rowC'>
             <Dynamic />
             <Reservation />
         </div>
     );
     }
  }
export default ContainerRow;