import React, { createClass, PropTypes } from 'react';
import tween from 'tweening';

const BarChart = createClass({
  propTypes: {
    barClassName: PropTypes.string,
    bars: PropTypes.array.isRequired,
    chartClassName: PropTypes.string,
    easing: PropTypes.oneOfType([ PropTypes.func, PropTypes.string ]),
    height: PropTypes.number,
    preserveAspectRatio: PropTypes.string,
    spacing: PropTypes.number,
    width: PropTypes.number,
  },

  getDefaultProps () {
    return {
      duration: 750,
      easing: 'easeOutBounce',
      height: 500,
      preserveAspectRatio: 'xMidYMid meet',
      spacing: 10,
      width: 800,
    };
  },

  getInitialState () {
    return {
      bars: this.props.bars.map( b => ({ ...b, value: 0 })),
      barHeight: ( this.props.height - this.props.spacing * ( this.props.bars.length - 1 )) / this.props.bars.length,
    };
  },

  componentDidMount () {
    this.animateBars( this.state.bars, this.relativeBars( this.props.bars ));
  },

  componentWillReceiveProps ({ bars }) {
    const relativeBars = this.relativeBars( bars );
    if ( JSON.stringify( relativeBars ) !== JSON.stringify( this.state.bars )) {
      this.animateBars( this.state.bars, relativeBars );
    }
  },

  render () {
    return (
      <svg
        className={ this.props.chartClassName }
        height={ this.props.height }
        preserveAspectRatio={ this.props.preserveAspectRatio }
        width={ this.props.width }
        viewBox={ `0 0 ${ this.props.width } ${ this.props.height }` }
      >
        { this.state.bars.map(( bar, i ) => (
          <rect
            className={ this.props.barClassName }
            height={ this.state.barHeight }
            key={ i }
            width={ bar.value }
            x={ 0 }
            y={( this.state.barHeight + this.props.spacing ) * i }
            fill="rgb(241,76,84)"
          />
        ))}
      </svg>
    );
  },

  animateBars ( from, to ) {
    tween({
      duration: this.props.duration,
      easing: this.props.easing,
      from,
      to,
      next: bars => this.setState({ bars }),
    });
  },

  relativeBars ( bars ) {
    const absolutePercent = this.props.width / 100;
    const relativePercent = Math.max( ...bars.map( b => b.value )) / 100;
    return bars.map( b => ({ ...b, value: b.value / relativePercent * absolutePercent }));
  }
});

export default BarChart;
