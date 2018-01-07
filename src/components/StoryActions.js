import React, { Component } from 'react';
import StoryStatusContainer from '../containers/StoryStatusContainer';
import StoryDeleteContainer from '../containers/StoryDeleteContainer';
import StoryMoveUpContainer from '../containers/StoryMoveUpContainer';
import StoryMoveDownContainer from '../containers/StoryMoveDownContainer';

class StoryActions extends Component {

	render() {
		return(
			<div className="StoryActions">
				<StoryStatusContainer id={this.props.id} number={this.props.number}  />
				<StoryMoveUpContainer id={this.props.id}   number={this.props.number} />
				<StoryMoveDownContainer id={this.props.id}  number={this.props.number} />
				<StoryDeleteContainer id={this.props.id}  number={this.props.number} />
			</div>
		)
	}
};


export default StoryActions;