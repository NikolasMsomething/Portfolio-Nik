import React from 'react';
import Img from 'gatsby-image';
import styled from 'styled-components';

export default function Hero({ data }) {
	return (
		<>
			<HeroDiv>
				<ImgX fluid={data.hero.childImageSharp.fluid} className="hero-img" />
				<Main className="hello">
					<h1>MY NAME IS NIKOLAS, </h1>
					<p>Let's grow together</p>
				</Main>
			</HeroDiv>
		</>
	);
}

const ImgX = styled(Img)`
	height: 100vh;
	width: 100%;
	background-position: fixed;
`;

const HeroDiv = styled.div`
	height: 100vh;
`;

const Main = styled.div`
	margin: 0;
	color: #fff;
	text-align: center;
	position: absolute;
	top: 50%;
	left: 50%;
	transform: translate(-50%, -50%);
	h1 {
		font-size: 80px;
		color: white;
		font-family: Lora;
	}

	p {
		font-family: Lora;
		font-size: 2rem;
		color: white;
		margin-top: 10px;
	}
`;

const About = styled.section``;
