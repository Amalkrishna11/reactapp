import React from "react";

class UnMountCounter extends React.Component{
    componentWillUnmount(){
        console.log("component is removed");

        
    }
    render(){
        return
        <h1>Counter</h1>;

    }
}
export default UnMountCounter