import React, { createClass, PropTypes } from 'react';
import tween from 'tweening';

const LineChart = createClass({
  propTypes: {
    chartClassName: PropTypes.string,
    easing: PropTypes.oneOfType([ PropTypes.func, PropTypes.string ]),
    height: PropTypes.number,
    lineClassName: PropTypes.string,
    lines: PropTypes.array.isRequired,
    preserveAspectRatio: PropTypes.string,
    width: PropTypes.number,
  },

  getDefaultProps () {
    return {
      duration: 400,
      easing: 'easeInOutQuad',
      height: 500,
      preserveAspectRatio: 'xMidYMid meet',
      width: 800,
    };
  },

  getInitialState () {
    return {
      lines: this.relativeLines( this.props.lines ),
      spacing: this.props.width / ( this.props.lines.reduce(( p, c ) => {
        return Math.max( p, c.points.length );
      }, 0 ) - 1 ),
    };
  },

  componentWillReceiveProps ({ lines }) {
    const relativeLines = this.relativeLines( lines );
    if ( JSON.stringify( relativeLines ) !== JSON.stringify( this.state.lines )) {
      this.animateLines( this.state.lines, relativeLines );
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
        { this.state.lines.map(({ points }, i ) => (
          <polyline
            className={ this.props.lineClassName }
            fill="none"
            key={ i }
            points={ points.map(( p, j ) => (
              `${ this.state.spacing * j },${ p.value }`
            )).join( ',' )}
            stroke="rgb(241,76,84)"
            strokeWidth="5"
          />
        ))}
      </svg>
    );
  },

  animateLines ( from, to ) {
    tween({
      duration: this.props.duration,
      easing: this.props.easing,
      from,
      to,
      next: lines => this.setState({ lines }),
    });
  },

  relativeLines ( lines ) {
    const absolutePercent = this.props.height / 100;

    const relativePercent = Math.max(
      ...lines.map( l => Math.max( ...l.points.map( p => p.value )))
    ) / 100;

    return lines.map( l => ({
      ...l,
      points: l.points.map( p => ({ ...p, value: this.props.height - ( p.value / relativePercent * absolutePercent )})),
    }));
  }
});

export default LineChart;
