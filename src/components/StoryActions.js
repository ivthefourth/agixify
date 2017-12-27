import React, { Component } from 'react';
import StoryStatus from './StoryStatus';
import StoryDelete from './StoryDelete';
import StoryMoveUp from './StoryMoveUp';
import StoryMoveDown from './StoryMoveDown';

class StoryActions extends Component {

	render() {
		return(
			<div className="StoryActions">
				<StoryStatus />
				<StoryMoveUp />
				<StoryMoveDown />
				<StoryDelete />
			</div>
		)
	}
};


export default StoryActions;