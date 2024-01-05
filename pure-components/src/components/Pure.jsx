import React, {PureComponent } from 'react'

export default class Pure extends PureComponent {

    constructor(){
        super()
        this.state={
            count:0,
            toggle:true
        }
    }

    changeToggle = ()=>{
        this.setState({
            toggle:!this.state.toggle
        })
    }

    increaseCount = ()=>{
        if(this.state.toggle){
            this.setState({
                count:this.state.count+1
            })
        }
        else{
            this.setState({
                count:this.state.count
            })
        }
    }

  render() {
    console.warn("This is a Pure Component")
    return (
      <div>

        <h1>Pure Component</h1>

        <h2>{this.state.count}</h2>
        <button onClick={this.changeToggle} style={{backgroundColor:`${this.state.toggle ? "green":'red'}`}}>Set Toggle</button>
        &nbsp;
        <button onClick={this.increaseCount}>+</button>
      </div>
    )
  }
}
