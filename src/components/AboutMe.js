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
						<p>
							Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea nam
							dicta quidem est dolore labore sed nemo neque explicabo a autem
							repudiandae laboriosam laudantium optio alias quas dignissimos
							iure, unde quos eum odio non, libero tempore? Nam praesentium
							ipsum unde blanditiis ipsa, laborum placeat beatae sunt magnam
							cupiditate omnis aperiam.
						</p>
						<p>
							Lorem ipsum dolor sit amet consectetur adipisicing elit.
							Laudantium optio suscipit maiores. Provident nam molestias
							suscipit reiciendis eveniet laborum consequuntur est nesciunt
							perspiciatis iure explicabo, eius vitae ipsam, ut ex quia eos
							veniam accusantium! Iste odit, ut molestias magnam temporibus
							iusto harum laboriosam nihil modi, excepturi voluptates officiis
							veritatis dolor!
						</p>
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
	grid-template-columns: 1fr .2fr 1fr;
	grid-template-rows: 1fr
	justify-content: space-between;
	align-items: center;
`;

const Img2 = styled(Img)`
	flex: 1;
	display: block;
	justify-content: center;
	grid-column: 1/2;
	& img {
		position: none;
		align-self: center;
	}
`;

const AboutMidText = styled.div`
	grid-column-start: 3;
`;
