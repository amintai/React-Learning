import React from "react";
// import EventBind from "./componentns/EventBind";
import ParentComponent from "./componentns/ParentComponent";
// import ClassClick from "./componentns/ClassClick";
// import FunctionClick from "./componentns/FunctionClick";
// import { Greet } from "./componentns/Greet";
// import Welcome from "./componentns/Welcome";
// import Message from './componentns/Message';
// import Counter from './componentns/Counter'


class App extends React.Component {
  render(){
    return (
      <div>
        <ParentComponent greetHandler/>
      </div>
   
      
      
    
      )}
}

export default App;
