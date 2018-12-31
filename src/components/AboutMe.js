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
import { Link as ScrollLink, Element, Events } from 'react-scroll';

export default function({ data }) {
  return (
    <>
      <Element name="about" className="about-scroll-to">
        <AboutSection>
          <H2>ABOUT ME</H2>
          <AboutMidSection>
            <Img2 fixed={data.mid.childImageSharp.fixed} />

            <AboutMidText>
              <div className="about-mid-section-div">
                <AboutMidSectionH2>What I push myself to be.</AboutMidSectionH2>
                <AboutMidSectionP>
                  Ever since I was young I always looked to become a top
                  contender in whatever I loved doing. I wanted to become a
                  strong fighting game player, an excellent tinkerer, and the
                  funniest guy around. As I got older I found a new passion that
                  brings challenge and critical thinking. I believe programming
                  brings the best out of me and I'm ever grateful for that.
                </AboutMidSectionP>
              </div>
              <div className="about-mid-section-div">
                <AboutMidSectionH2>What I am now</AboutMidSectionH2>
                <AboutMidSectionP>
                  I am currently a Full-Stack Web Developer available to the
                  NYC/Philadelphia area. Nowadays you'll see me studying hard
                  and practicing to keep myself sharp. Find me in a coffee shop
                  near you!
                </AboutMidSectionP>
              </div>
              <div>
                <AboutMidSectionH2>
                  <span className="for-fun-title">
                    Life outside of Development?
                  </span>
                </AboutMidSectionH2>
                <AboutMidSectionP>
                  <div className="for-fun-box">
                    <div>
                      <FaLaptopCode /> Studying |
                    </div>
                    <div>
                      <FaKeyboard /> Building Keyboards |
                    </div>

                    <div>
                      <FaGamepad /> Competing in Video Games |
                    </div>
                    <div>
                      <FaRunning /> Running |
                    </div>
                    <div>
                      <FaPlaneDeparture /> Travelling |
                    </div>
                    <div>
                      <FaLaughBeam /> Laughing |
                    </div>
                  </div>
                </AboutMidSectionP>
              </div>
            </AboutMidText>
          </AboutMidSection>
        </AboutSection>
      </Element>
    </>
  );
} //hello

const AboutSection = styled.section`
  padding: 3% 0;
  margin: 0 auto;
`;

const H2 = styled.h2`
  font-size: 40px;
  font-family: Lora;
  text-align: center !important;
  margin-bottom: 5%;

  @media (max-width: 450px) {
    font-size: 30px;
  }
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
  @media (max-width: 1024px) {
    width: 500px !important;
    height: 500px !important;
  }

  @media (max-width: 650px) {
    display: none !important;
  }

  img {
    padding: 1rem;
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

  flex: 1;
  letter-spacing: 0.6px;
  .about-mid-section-div {
    padding: 1%;
  }
`;

const AboutMidSectionH2 = styled.h2`
  font-family: Lora;
  font-size: 1.5rem;

  @media (max-width: 1024px) {
    font-size: 1rem;
  }
`;

const AboutMidSectionP = styled.div`
  font-family: Raleway;

  @media (max-width: 1024px) {
    font-size: 0.9rem;
  }

  @media (max-width: 450px) {
  }

  .for-fun-title {
    font-size: 1.4rem;
  }

  .for-fun-box {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    font-size: 1.2rem;
    svg {
      margin-right: 2px;
      margin-left: 2px;
    }
    @media (max-width: 450px) {
      font-size: 0.8rem;
    }
  }
`;
