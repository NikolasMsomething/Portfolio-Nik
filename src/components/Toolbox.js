import React from 'react';
import styled from 'styled-components';

export default function() {
	return (
		<ToolBox>
			<div className="box">
				<h5>Toolbox</h5>
				<p>
					<span>Langauges and Frameworks</span>: Javascript, HTML5, CSS3,
					jQuery, React, NodeJS, ExpressJS, MongoDB, postgreSQL, Mocha, Chai,
					Jest
				</p>
				<p>
					<span>IDE</span>: Microsoft Visual Studios
				</p>
				<p>
					<span>VCS</span>: Git/Github
				</p>
				<p>
					<span>PMS</span>: Trello
				</p>
			</div>
			<div className="box-2">
				<h5>Learning</h5>
				<p>
					Currently: Vue.js, CSS Grid, <br />
					Future: PWA, AWS APIs, Python, Django, Ruby, Rails
				</p>
			</div>
			<div className="box">
				<h5>Building</h5>
				<p>
					1 | Focusing my attention on creating an app with a fellow engineer of
					mine that facilitates the needs of plant lovers alike.
				</p>
				<p>
					{' '}
					2 | Working on a small game that features socket.io and p2p
					connections.{' '}
				</p>
				<p>
					3 | Constantly updating and upgrading the apps I have worked on.
					Always on the quest to better them!
				</p>
			</div>
		</ToolBox>
	);
}

const ToolBox = styled.div`
	display: flex;
	justify-content: space-around;
	width: 75%;
	margin: 0 auto;

	@media (max-width: 1024px) {
		flex-direction: column;
		width: 100%;
		align-items: center;
	}

	h5 {
		margin-bottom: 0.5rem;
		font-family: Lora;
		font-weight: 500;
		line-height: 1.2;
		border-bottom: 2px solid #0a0a0a;
		font-size: 1.5rem;
	}

	p {
		font-family: Raleway;
	}

	.box {
		display: flex;
		flex-direction: column;
		padding: 15px;
		margin-bottom: 40px;
		border: thin solid rgba(51, 122, 183, 0.1);
		border-radius: 5px;
		box-shadow: 0 12px 12px 0 #d3d3d3;
		box-sizing: border-box;
		background-color: #fff;
		width: 30%;

		@media (max-width: 640px) {
			flex-direction: column;

			align-items: center;
			width: 80%;
		}
	}
	.box-2 {
		display: flex;
		flex-direction: column;
		padding: 15px;
		margin-bottom: 40px;
		border: thin solid rgba(51, 122, 183, 0.1);
		border-radius: 5px;
		box-shadow: 0 12px 12px 0 #d3d3d3;
		box-sizing: border-box;
		background-color: #fff;
		width: 30%;
		height: 80%;

		@media (max-width: 640px) {
			flex-direction: column;

			align-items: center;
			width: 80%;
		}
	}
`;
