import React from 'react';
import styled from 'styled-components';
import Img from 'gatsby-image';

export default function({ data }) {
	return (
		<ProjectsContainer>
			<h2>PROJECTS</h2>
			<div className="project-box">
				<ImgX fixed={data.learneryPic.childImageSharp.fixed} />
				<p>
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa et sit
					recusandae repellendus consectetur aperiam inventore omnis ullam earum
					praesentium.
				</p>
			</div>
			<div className="project-box">
				<ImgY fixed={data.swappuyoPic.childImageSharp.fixed} />
				<p>
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa et sit
					recusandae repellendus consectetur aperiam inventore omnis ullam earum
					praesentium.
				</p>
			</div>
			<div className="project-box">
				<ImgY fixed={data.buviePic.childImageSharp.fixed} />
				<p>
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa et sit
					recusandae repellendus consectetur aperiam inventore omnis ullam earum
					praesentium.
				</p>
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

		margin: 2% auto;

		p {
			flex: 3;
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
