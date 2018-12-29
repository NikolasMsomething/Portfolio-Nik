import React from 'react';
import styled from 'styled-components';
import Img from 'gatsby-image';

export default function({ data }) {
	return (
		<ProjectsContainer>
			<h2>PROJECTS</h2>
			<div className="project-box">
				<ImgX fixed={data.learneryPic.childImageSharp.fixed} />
				<div className="project-box-text-1">
					<div>
						<h3>Learnery</h3>
						<p>
							Learnery is an app that a fellow engineer and I designed to help
							students pass software engineering interviews. Students are guided
							on their quest to succeed through a carefully planned space
							repetition algorithm.
						</p>
					</div>

					<div>
						<h4>Tech Stack</h4>
						<p>
							Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa et
							sit recusandae repellendus consectetur aperiam inventore omnis
							ullam earum praesentium.
						</p>
					</div>
				</div>
			</div>
			<div className="project-box">
				<ImgY fixed={data.swappuyoPic.childImageSharp.fixed} />
				<div className="project-box-text-2">
					<div>
						<h3>Swappuyo</h3>
						<p>
							Swappuyo is an app that I personally built to scratch an itch I
							have had for a while. My app lets me efficiently trade on
							reddit.com without all of the extra social features reddit boasts.
						</p>
					</div>

					<div>
						<h4>Tech Stack</h4>
						<p>
							Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa et
							sit recusandae repellendus consectetur aperiam inventore omnis
							ullam earum praesentium.
						</p>
					</div>
				</div>
			</div>
			<div className="project-box">
				<ImgY fixed={data.buviePic.childImageSharp.fixed} />
				<div className="project-box-text-3">
					<div>
						<h3>Buvie</h3>
						<p>
							Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa et
							sit recusandae repellendus consectetur aperiam inventore omnis
							ullam earum praesentium.
						</p>
					</div>

					<div>
						<h4>Tech Stack</h4>
						<p>
							Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa et
							sit recusandae repellendus consectetur aperiam inventore omnis
							ullam earum praesentium.
						</p>
					</div>
				</div>
			</div>
		</ProjectsContainer>
	);
}

const ProjectsContainer = styled.section`
	background-color: #f6f6f6;
	padding-bottom: 3%;
	padding-top: 3%;

	h2 {
		font-size: 40px;
		font-family: Lora;
		text-align: center !important;
		margin-bottom: 5%;
	}
	.project-box {
		display: flex;
		justify-content: space-around;
		padding: 15px;
		display: flex;
		margin-bottom: 40px;
		border: thin solid rgba(51, 122, 183, 0.1);
		border-radius: 5px;
		box-shadow: 0 12px 12px 0 #d3d3d3;
		box-sizing: border-box;
		background-color: #fff;
		width: 75%;
		line-height: 2rem;

		margin: 2% auto;

		.project-box-text-1 {
			flex: 4;
			display: flex;
			flex-direction: column;
			justify-content: space-around;
			p {
				font-family: Raleway;
				padding-left: 2%;
			}

			border-left: 2px solid #ffca32;
		}
		.project-box-text-2 {
			flex: 4;
			display: flex;
			flex-direction: column;
			justify-content: space-around;
			p {
				font-family: Raleway;
				padding-left: 2%;
			}

			border-left: 2px solid #4b5a68;
		}
		.project-box-text-3 {
			flex: 4;
			display: flex;
			flex-direction: column;
			justify-content: space-evenly;
			p {
				font-family: Raleway;
				padding-left: 2%;
			}

			border-left: 2px solid #fbb8c5;
		}

		@media (max-width: 1024px) {
			flex-direction: column;

			align-items: center;
			width: 80%;
		}

		h3 {
			margin-bottom: 0.5rem;
			font-family: Lora;
			font-weight: 500;
			line-height: 1.2;
			padding-left: 2%;
			font-size: 2rem;
		}

		h4 {
			margin-bottom: 0.5rem;
			font-family: Lora;
			font-weight: 500;
			line-height: 1.2;
			padding-left: 2%;
			font-size: 1.5rem;
		}
	}
`;

const ImgX = styled(Img)`
	flex: 1;
	margin-left: 2%;
	max-height: 381px;
	margin-right: 2px;
	min-width: 380px;
	box-shadow: 0px 2px 22px 4px rgba(0, 0, 0, 0);
`;

const ImgY = styled(Img)`
	flex: 1;
	min-width: 350px;
	max-height: 381px;
	margin-left: 2%;
	margin-right: 30px;

	box-shadow: 0px 2px 22px 4px rgba(0, 0, 0, 0.25);
`;
