import React, { Fragment } from 'react';
import Counter from './components/Counter/CounterHooks'
import Band from './components/Band/BandHooks';

export default function App() {
  return (
    <Fragment>
      <Band />
      <Counter />
      <Counter />
      <Counter />
    </Fragment>
  )
}
