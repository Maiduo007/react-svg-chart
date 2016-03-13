import React, { createClass } from 'react';
import { LineChart } from '../../src';

const days = [
  {
    title: 'Thursday, 9th March',
    lines: [
      {
        points: [
          { value: 3.50 },
          { value: 7.45 },
          { value: 1.27 },
          { value: 1.15 },
          { value: 2.93 },
        ],
      },
    ],
  },
  {
    title: 'Wednesday, 8th March',
    lines: [
      {
        points: [
          { value: 1.92 },
          { value: 1.11 },
          { value: 7.20 },
          { value: 6.34 },
          { value: 3.15 },
        ],
      },
    ],
  },
  {
    title: 'Tuesday, 7th March',
    lines: [
      {
        points: [
          { value: 5.37 },
          { value: 7.32 },
          { value: 0.90 },
          { value: 4.78 },
          { value: 2.75 },
        ],
      },
    ],
  },
];

const App = createClass({
  onChange ( e ) {
    this.setState({
      day: days[ e.target.value ],
    });
  },

  getInitialState () {
    return {
      day: days[ 0 ],
    };
  },

  render () {
    return (
      <section className="content">
        <select onChange={ this.onChange }>
          { days.map(( day, i ) => (
            <option key={ i } value={ i }>{ day.title }</option>
          ))}
        </select>
        <LineChart
          chartClassName="chart"
          lines={ this.state.day.lines }
          preserveAspectRatio="xMinYMid meet"
        />
      </section>
    );
  }
});

export default App;