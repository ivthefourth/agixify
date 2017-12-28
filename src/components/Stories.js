import React, { Component } from 'react';

class Stories extends Component {
  render() {
    return(
      <pre>{JSON.stringify(this.props.stories, null, 2)}</pre>
    )
  }
};

export default Stories;