import React from 'react';
import Img from 'gatsby-image';
import styled from 'styled-components';
import {
	FaGamepad,
	FaKeyboard,
	FaLaughBeam,
	FaLaptopCode,
	FaRunning,
	FaPlaneDeparture
} from 'react-icons/fa';

export default function({ data }) {
	return (
		<>
			<AboutSection>
				<H2>ABOUT ME</H2>
				<AboutMidSection>
					<Img2 fluid={data.mid.childImageSharp.fluid} />

					<AboutMidText>
						<div>
							<AboutMidSectionH2>What I push myself to be.</AboutMidSectionH2>
							<AboutMidSectionP>
								Ever since I was young I always looked to become a top contender
								in whatever I loved to do. I wanted to become a strong fighting
								game player, an excellent builder, and the funniest guy around.
								As I got older a new passion struck a chord and that passion is
								development. Now my sights are clearly set on becoming a top
								tier programmer.
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
								<span className="for-fun-title">
									Life outside of Development?
								</span>
							</AboutMidSectionH2>
							<AboutMidSectionP>
								<span className="for-fun-box">
									<FaKeyboard />
									Building Keyboards | <FaLaptopCode /> Learning Tech |{' '}
									<FaGamepad />
									Competing in Video Games |
									<FaRunning /> Running |
									<FaPlaneDeparture /> Travelling |
									<FaLaughBeam />
									Laughing
								</span>
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
	@media (max-width: 1024px) {
		flex-direction: column;
	}
`;

const Img2 = styled(Img)`
	flex: 1;
	justify-content: center;
	grid-column: 1/1;

	img {
		padding: 1rem;
		@media (max-width: 1024px) {
			display: none;
		}
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
	@media (max-width: 650px) {
	}
`;

const AboutMidSectionH2 = styled.h2`
	font-family: Lora;
	font-size: 1.5rem;

	@media (max-width: 1024px) {
		font-size: 1rem;
	}
`;

const AboutMidSectionP = styled.p`
	font-family: Raleway;

	@media (max-width: 1024px) {
		font-size: 0.9rem;
	}

	.for-fun-title {
		font-size: 1.4rem;
	}

	.for-fun-box {
		font-size: 1.2rem;
		svg {
			margin-right: 2px;
		}
	}
`;
