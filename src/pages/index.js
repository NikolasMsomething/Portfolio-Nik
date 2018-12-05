import React from 'react';
import styled from 'styled-components';
import './index.css';
import Layout from '../layouts/layout';
import { graphql } from 'gatsby';
import Hero from '../components/Hero';
import AboutMe from '../components/AboutMe';

export default ({ data }) => (
	<>
		<Layout>
			<Hero data={data} />
			<AboutMe data={data} />
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
			fixed(width: 420) {
				...GatsbyImageSharpFixed_tracedSVG
			}
		}
	}
`;

export const pageQuery = graphql`
	query {
		hero: file(relativePath: { eq: "screenshots/herohouse.png" }) {
			...screenshot
		}
		mid: file(relativePath: { eq: "screenshots/hero.jpg" }) {
			...screenshot
		}
	}
`;

// queries the image
