import React from 'react';
import Img from 'gatsby-image';
import styled from 'styled-components';

export default function({ data }) {
	return (
		<>
			<AboutSection>
				<H2>ABOUT ME</H2>
				<AboutMidSection>
					<Img2
						fluid={data.mid.childImageSharp.fluid}
						style={{ display: 'flex', justifyContent: 'flex-end' }}
					/>
					<AboutMidText>
						<div>
							<AboutMidSectionH2>What I push myself to be.</AboutMidSectionH2>
							<AboutMidSectionP>
								Ever since I was young I always looked to become{' '}
							</AboutMidSectionP>
						</div>
						<div>
							<AboutMidSectionH2>What I am now</AboutMidSectionH2>
							<AboutMidSectionP>
								Lorem ipsum dolor sit amet consectetur adipisicing elit.
								Laudantium optio suscipit maiores. Provident nam molestias
								suscipit reiciendis eveniet laborum consequuntur est nesciunt
								perspiciatis iure explicabo, eius vitae ipsam, ut ex quia eos
								veniam accusantium! Iste odit, ut molestias magnam temporibus
								iusto harum laboriosam nihil modi, excepturi voluptates officiis
								veritatis dolor!
							</AboutMidSectionP>
						</div>
						<div>
							<AboutMidSectionH2>
								Life outside of Development?
							</AboutMidSectionH2>
							<AboutMidSectionP>
								Lorem ipsum dolor sit amet consectetur adipisicing elit.
								Laudantium optio suscipit maiores. Provident nam molestias
								suscipit reiciendis eveniet laborum consequuntur est nesciunt
								perspiciatis iure explicabo, eius vitae ipsam, ut ex quia eos
								veniam accusantium! Iste odit, ut molestias magnam temporibus
								iusto harum laboriosam nihil modi, excepturi voluptates officiis
								veritatis dolor!
							</AboutMidSectionP>
						</div>
					</AboutMidText>
				</AboutMidSection>
			</AboutSection>
		</>
	);
}

const AboutSection = styled.section`
	padding: 50px 0;
	width: 80%;
	margin: 0 auto;
`;

const H2 = styled.h2`
	font-size: 40px;
	font-family: Lora;
	text-align: center !important;
	margin-bottom: 5%;
`;

const AboutMidSection = styled.div`
	display: grid;
	margin: 0 auto;
	width: 80%;
	grid-template-columns: 1fr 0.8fr;
	grid-template-rows: 1fr 1fr 1fr 1fr;
	justify-content: space-between;
	align-items: center;
	grid-column-gap: 1em;
`;

const Img2 = styled(Img)`
	flex: 1;
	display: block;
	justify-content: center;
	grid-column: 1/1;
	& img {
		position: none;
		align-self: center;
		padding: 1rem;
		width: 500px;
	}
`;

const AboutMidText = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: space-around;
	height: 100%;
	grid-row: 1/2;
	grid-column: 2/3;
`;

const AboutMidSectionH2 = styled.h2`
	font-family: Lora;
	font-size: 1.6rem;
`;

const AboutMidSectionP = styled.p`
	font-family: Raleway;
`;
