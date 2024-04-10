import React, { Component } from 'react'

export default class ClassComponent extends Component {

    constructor(){
        super();
        this.state={name:'asd', age: 10};
    }
  render() {
    return (
      <div>
        {this.state.name}{this.state.age}
      </div>
    )
  }
}