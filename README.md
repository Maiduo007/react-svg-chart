# React SVG chart

Animated SVG charts for React.

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
      { value: 11 },
      { value: 27 },
      { value: 4 },
      { value: 19 },
      { value: 10 },
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
        { value: 11 },
        { value: 27 },
        { value: 4 },
        { value: 19 },
        { value: 10 },
      ]},
    ]}
    height={ 400 }
    width={ 600 }
  />
);
```
