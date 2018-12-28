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
						fixed={data.mid.childImageSharp.fixed}
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
	padding: 3% 0;
	margin: 0 auto;
`;

const H2 = styled.h2`
	font-size: 40px;
	font-family: Lora;
	text-align: center !important;
	margin-bottom: 5%;
`;

const AboutMidSection = styled.div`
	display: flex;
	width: 75%;
	margin: 0 auto;
	justify-content: space-between;
	align-items: center;
	@media (max-width: 1023px) {
		flex-direction: column;
	}
`;

const Img2 = styled(Img)`
	flex: 1;
	display: block;
	justify-content: center;
	grid-column: 1/1;
	& img {
		padding: 1rem;
		height: 100%;
	}
`;

const AboutMidText = styled.div`
	flex-direction: column;
	justify-content: space-around;
	font-family: Open Sans, sans-serif;
	font-size: 15px;
	margin-top: 10px;
	margin-bottom: 20px;
	margin-left: 20px;
	line-height: 2.4rem;
	max-height: 800px;
	flex: 1;
	@media (max-width: 900px) {
	}
`;

const AboutMidSectionH2 = styled.h2`
	font-family: Lora;
	font-size: 1.5rem;

	@media (max-width: 1023px) {
		font-size: 1rem;
	}
`;

const AboutMidSectionP = styled.p`
	font-family: Raleway;

	@media (max-width: 1024px) {
		font-size: 0.9rem;
	}
`;
