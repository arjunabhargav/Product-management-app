import React, { Component } from 'react'

export default class ClassComponents extends Component {
    constructor(){
        super();
        this.state={name:"john",age:10}
    }
  render() {
    return (
      <div>
        {this.state.name} {this.state.age}
      </div>
    )
  }
}
