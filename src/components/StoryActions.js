import React, { Component } from 'react';
import StoryStatusContainer from '../containers/StoryStatusContainer';
import StoryDeleteContainer from '../containers/StoryDeleteContainer';
import StoryMoveUpContainer from '../containers/StoryMoveUpContainer';
import StoryMoveDownContainer from '../containers/StoryMoveDownContainer';

class StoryActions extends Component {

	render() {
		return(
			<div className="StoryActions">
				<StoryStatusContainer id={this.props.id} />
				<StoryMoveUpContainer id={this.props.id}  />
				<StoryMoveDownContainer id={this.props.id} />
				<StoryDeleteContainer id={this.props.id} />
			</div>
		)
	}
};


export default StoryActions;