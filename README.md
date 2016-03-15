# React SVG chart

Animated SVG charts for React.

**3.9kb gzipped.**

However, you're currently also going to have to bring
[babel polyfill](https://cdnjs.com/libraries/babel-polyfill)
to the party at an additional 30.8kb gzipped. This is to
support Javascript generators which a dependency of this library
makes use of.

![Line chart example](https://www.dropbox.com/s/vnm0u1k8orkc5n8/line-chart.gif?raw=1)

[View line chart example code](./examples/lineChart)

![Bar chart example](https://www.dropbox.com/s/xlmgpmml5og0q1j/bar-chart.gif?raw=1)

[View bar chart example code](./examples/barChart)

## Installation

```
npm install react-svg-chart
```

## Usage

### Bar chart

```js
import React from 'react';
import { BarChart } from 'react-svg-chart';

const App = () => (
  <BarChart
    bars={[
      { label: 'travel', value: 11 },
      { label: 'accomodation', value: 27 },
      { label: 'food', value: 4 },
      { label: 'drink', value: 19 },
      { label: 'tourism', value: 10 },
    ]}
    height={ 400 }
    width={ 600 }
  />
);
```

### Line chart

```js
import React from 'react';
import { LineChart } from 'react-svg-chart';

const App = () => (
  <LineChart
    lines={[
      { points: [
        { label: 'travel', value: 11 },
        { label: 'accommodation', value: 27 },
        { label: 'food', value: 4 },
        { label: 'drink', value: 19 },
        { label: 'tourism', value: 10 },
      ]},
    ]}
    height={ 400 }
    width={ 600 }
  />
);
```
