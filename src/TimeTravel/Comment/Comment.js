import React from 'react';
import { Rate } from 'antd';
import CommentCard from './CommentCard';

function Comment() {
	return (
		<div>
			<div className="Comment_Top">
				<span>4.3</span>
				<div className="RateAndNumber">
					<Rate disabled defaultValue={4} className="TimeTravel_Rate" />
					<p>437條評論</p>
				</div>
			</div>

			<CommentCard />
			<CommentCard />
			<CommentCard />
			<CommentCard />
			<CommentCard />
		</div>
	);
}

export default Comment;
