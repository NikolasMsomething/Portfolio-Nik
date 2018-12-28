import React from 'react';
import styled from 'styled-components';
import './index.css';
import Layout from '../layouts/layout';
import { graphql } from 'gatsby';
import Hero from '../components/Hero';
import AboutMe from '../components/AboutMe';
import ToolBox from '../components/Toolbox';
import Contact from '../components/Contact';
import Project from '../components/Projects';

export default ({ data }) => (
	<>
		<Layout>
			<Hero data={data} />
			<AboutMe data={data} />
			<ToolBox />
			<Project data={data} />
			<Contact />
		</Layout>
	</>
);

const GodContainer = styled.div`
	height: 100%;
	width: 100%;
`;

export const screenshot = graphql`
	fragment screenshot on File {
		childImageSharp {
			fluid(maxWidth: 2160) {
				...GatsbyImageSharpFluid
			}
		}
	}
`;

export const midPic = graphql`
	fragment midPic on File {
		childImageSharp {
			fixed(height: 600, width: 600) {
				...GatsbyImageSharpFixed
			}
		}
	}
`;

export const projectPic = graphql`
	fragment projectPic on File {
		childImageSharp {
			fixed(width: 380) {
				...GatsbyImageSharpFixed
			}
		}
	}
`;

export const swappuyoPicX = graphql`
	fragment swappuyoPicX on File {
		childImageSharp {
			fixed(width: 340) {
				...GatsbyImageSharpFixed
			}
		}
	}
`;

export const buviePicX = graphql`
	fragment buviePicX on File {
		childImageSharp {
			fixed(width: 340) {
				...GatsbyImageSharpFixed
			}
		}
	}
`;

export const pageQuery = graphql`
	query {
		hero: file(relativePath: { eq: "screenshots/autumn-cold-daylight.jpg" }) {
			...screenshot
		}
		mid: file(relativePath: { eq: "screenshots/hero.jpg" }) {
			...midPic
		}
		learneryPic: file(relativePath: { eq: "screenshots/learnery.png" }) {
			...projectPic
		}
		swappuyoPic: file(relativePath: { eq: "screenshots/swappuyo.png" }) {
			...swappuyoPicX
		}
		buviePic: file(relativePath: { eq: "screenshots/buvie-landing.png" }) {
			...buviePicX
		}
	}
`;

// queries the image
