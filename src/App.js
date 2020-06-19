import React, { Component, Fragment } from 'react';
import Counter from './components/Counter/Counter'
import Band from './components/Band/BandHooks';

export default class App extends Component {
  render() {
    return (
      <Fragment>
        <Band />
        <Counter />
        <Counter />
        <Counter />
      </Fragment>
    )
  }
}
