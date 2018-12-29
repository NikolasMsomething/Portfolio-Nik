import React from 'react';
import Img from 'gatsby-image';
import styled from 'styled-components';

export default function Hero({ data }) {
	return (
		<>
			<HeroDiv>
				<div className="overlay" />
				<ImgX fluid={data.hero.childImageSharp.fluid} className="hero-img" />
				<Main className="hello">
					<h1>NIKOLAS MELGAREJO </h1>
					<p>Full-Stack Web Developer</p>
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
	.overlay {
		z-index: 1;
    	height: 100vh;
		width: 100%;
    	position: absolute;
    	overflow: hidden;
    	top: 0px;
   		left: 0px;
   		background: rgba(0, 0, 0, 0.45);
}
	}
`;

const Main = styled.div`
	margin: 0;
	color: #fff;
	text-align: center;
	position: absolute;
	top: 50%;
	left: 50%;
	transform: translate(-50%, -50%);
	margin-right: -50%;
	z-index: 94;
	h1 {
		font-size: 3.6rem;
		font-weight: 400;
		color: white;
		font-family: Lora;
		cursor: pointer;
	}

	p {
		font-family: Lora;
		font-size: 2.8rem;
		color: white;
		cursor: pointer;
		margin-top: 10px;
	}

	@media (max-width: 780px) {
		h1 {
			font-size: 1.8rem;
			color: white;
			font-family: Lora;
		}

		p {
			font-size: 1rem;
		}
	}
`;

const About = styled.section``;
