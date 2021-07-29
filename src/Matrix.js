import React, { Component } from 'react';
import Cell from './cell'

export default class Matrix extends Component {

  genRow = (vals) => {
    return vals.map(val => <Cell value={val} />)
  }

  genMatrix = () => {
    console.log(this.props.values)
    return this.props.values.map(rowVals => <div className="row">{this.genRow(rowVals)}</div>)
  }

  render() {
    return (
      <div id="matrix" key= {1}>
        {this.genMatrix()}
      </div>
    )
  }
}

Matrix.defaultProps = {
  values: (() => {
    const defaultRow = ['#F00', '#F00', '#F00', '#F00', '#F00', '#F00', '#F00', '#F00', '#F00', '#F00']
    return (new Array(10).fill(defaultRow))
  })()
}
