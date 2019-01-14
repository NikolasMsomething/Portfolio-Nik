import React from 'react';
import styled from 'styled-components';
import Img from 'gatsby-image';
import { Link as ScrollLink, Element, Events } from 'react-scroll';

let imgToDisplay;

export default function({ data }) {
  return (
    <Element name="projects" className="projects-scroll-to">
      <ProjectsContainer>
        <h2>PROJECTS</h2>

        <div className="project-box">
          {/*  */}
          <ImgX fixed={data.learneryPic.childImageSharp.fixed} /> {/* </a> */}
          <div className="project-box-text-1">
            <div>
              <h3>Learnery</h3>
              <p>
                Learnery is an app that a fellow engineer and I designed to help
                students pass software engineering interviews. Students are
                guided on their quest to succeed through a carefully planned
                space repetition algorithm. <br />
                <span className="demo">
                  <a
                    className="project-link-target-1"
                    target="_blank"
                    href="https://github.com/NikolasMsomething/learnery-frontend"
                  >
                    | CLICK FOR DEMO/REPOSITORY |
                  </a>
                </span>
              </p>
            </div>
            <div className="project-box-learnery-tech">
              <div className="tech-stack-box">
                <img src="https://icongr.am/devicon/react-original-wordmark.svg?size=60" />
                <img src="https://icongr.am/devicon/nodejs-original.svg?size=60" />
                <img src="https://icongr.am/devicon/express-original-wordmark.svg?size=60" />
                <img src="https://icongr.am/devicon/postgresql-original-wordmark.svg?size=60" />
                <img src="https://icongr.am/devicon/mocha-plain.svg?size=60" />
                <img src="https://icongr.am/devicon/git-plain-wordmark.svg?size=60" />
              </div>
            </div>
          </div>
        </div>

        <div className="project-box">
          <ImgY fixed={data.swappuyoPic.childImageSharp.fixed} />
          <div className="project-box-text-2">
            <div>
              <h3>Swappuyo</h3>
              <p>
                Swappuyo is an app that I personally built to scratch an itch I
                have had for a while. My app lets me efficiently trade on
                reddit.com. without all of reddit's extra features I wouldn't be
                needing. <br />
                <a
                  className="project-link-target-2"
                  target="_blank"
                  href="https://github.com/NikolasMsomething/Swappuyo-Client"
                >
                  | CLICK FOR DEMO/REPOSITORY |
                </a>
              </p>
            </div>

            <div>
              <div className="tech-stack-box">
                <img src="https://icongr.am/devicon/react-original-wordmark.svg?size=60" />
                <img src="https://icongr.am/devicon/nodejs-original.svg?size=60" />
                <img src="https://icongr.am/devicon/express-original-wordmark.svg?size=60" />
                <img src="https://icongr.am/devicon/mongodb-original-wordmark.svg?size=60" />
                <img src="https://icongr.am/devicon/mocha-plain.svg?size=60" />
                <img src="https://icongr.am/devicon/git-plain-wordmark.svg?size=60" />
              </div>
            </div>
          </div>
        </div>
        <div className="project-box">
          <ImgW fluid={data.buviePic.childImageSharp.fluid} />

          <div className="project-box-text-3">
            <div>
              <h3>Buvie</h3>
              <div className="project-box-text-box">
                <p>
                  Buvie is an app created on the basis of finding people who
                  love the same movies as you. Our app allows users to connect
                  with people all over the world who love the same movies as
                  them and set appropriate times (through conversation) to
                  either watch a movie locally or through the net. <br />
                  <a
                    className="project-link-target-3"
                    target="_blank"
                    href="https://buvie.netlify.com/#demo"
                  >
                    | CLICK FOR DEMO/REPOSITORY |
                  </a>
                </p>
              </div>
            </div>
            <div>
              <div className="tech-stack-box">
                <img src="https://icongr.am/devicon/react-original-wordmark.svg?size=60" />
                <img src="https://icongr.am/devicon/nodejs-original.svg?size=60" />
                <img src="https://icongr.am/devicon/express-original-wordmark.svg?size=60" />
                <img src="https://icongr.am/devicon/mongodb-original-wordmark.svg?size=60" />
                <img src="https://icongr.am/devicon/mocha-plain.svg?size=60" />
                <img src="https://icongr.am/devicon/git-plain-wordmark.svg?size=60" />
              </div>
            </div>
          </div>
        </div>
      </ProjectsContainer>
    </Element>
  );
}

const ProjectsContainer = styled.section`
  background-color: #f6f6f6;
  padding-bottom: 3%;
  padding-top: 3%;
  letter-spacing: 0.6px;

  h2 {
    font-size: 40px;
    font-family: Lora;
    text-align: center !important;
    margin-bottom: 5%;
  }

  .demo {
    text-align: right;
  }

  .tech-stack-box {
    padding-left: 1%;
    padding-right: 1%;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
  }

  .project-link-target-1 {
    text-decoration: none;
    color: #fcc72f;
    font-weight: bold;
    text-align: right;
  }

  .project-link-target-2 {
    text-decoration: none;
    color: #4b5a68;
    font-weight: bold;
  }

  .project-link-target-3 {
    text-decoration: none;
    color: #fbb8c5;
    font-weight: bold;
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
    line-height: 2rem;

    margin: 2% auto;

    .project-box-text-1 {
      flex: 4;
      display: flex;
      flex-direction: column;
      justify-content: space-around;
      p {
        font-family: Raleway;
        padding-left: 2%;
      }

      border-left: 2px solid #ffca32;
    }
    .project-box-text-2 {
      flex: 4;
      display: flex;
      flex-direction: column;
      justify-content: space-around;
      p {
        font-family: Raleway;
        padding-left: 2%;
      }

      border-left: 2px solid #4b5a68;
    }
    .project-box-text-3 {
      flex: 4;
      display: flex;
      flex-direction: column;
      justify-content: space-evenly;
      p {
        font-family: Raleway;
        padding-left: 2%;
      }

      border-left: 2px solid #fbb8c5;
    }

    @media (max-width: 1024px) {
      flex-direction: column;

      align-items: center;
      width: 80%;
    }

    h3 {
      margin-bottom: 0.5rem;
      font-family: Lora;
      font-weight: 500;
      line-height: 1.2;
      padding-left: 2%;
      font-size: 2rem;
    }

    h4 {
      margin-bottom: 0.5rem;
      font-family: Lora;
      font-weight: 500;
      line-height: 1.2;
      padding-left: 2%;
      font-size: 1.5rem;
    }
  }
  @media (max-width: 1024px) {
    .project-box {
      margin: 5% auto;
    }

    .project-box-text-1 {
      flex: 4;
      display: flex;
      flex-direction: column;
      justify-content: space-around;
      p {
        font-family: Raleway;
        padding-left: 2%;
      }
      padding: 2% 0;
      border-top: 2px solid #ffca32;
      border-left: medium none white !important;
    }

    .project-box-text-2 {
      flex: 4;
      display: flex;
      flex-direction: column;
      justify-content: space-around;
      p {
        font-family: Raleway;
        padding-left: 2%;
      }
      padding: 2% 0;
      margin-top: 1.8%;
      border-top: 2px solid #4b5a68;
      border-left: medium none white !important;
    }

    .project-box-text-3 {
      flex: 4;
      display: flex;
      flex-direction: column;
      justify-content: space-evenly;
      p {
        font-family: Raleway;
        padding-left: 2%;
      }
      padding: 2% 0;
      margin-top: 1.8%;
      border-top: 2px solid #fbb8c5;
      border-left: medium none white !important;
    }

    @media (max-width: 500px) {
      .tech-stack-box img {
        display: block;
        flex: 33%;
      }
    }
  }
`;

const ImgX = styled(Img)`
  margin-left: 2%;
  max-height: 381px;
  margin-right: 2px;
  min-width: 320px;
  max-width: 348px;
  box-shadow: 0px 2px 22px 4px rgba(0, 0, 0, 0);
  overflow: hidden !important;

  @media (max-width: 480px) {
    .tech-stack-box img {
      display: block;
      flex: 1;
    }
    justify-content: center;
    max-width: 320px;
    picture img {
      object-fit: contain !important;
      width: 270px !important;
      height: 300px !important;
      margin-left: 25px !important;
      margin-top: -25px !important;
    }

    img:nth-child(1) {
      max-width: 300px !important;
      height: 300px !important;
      position: absolute !important;
    }
  }

  @media (max-width: 450px) {
    justify-content: center;
    .tech-stack-box img {
      flex: 33%;
    }
    picture img {
      object-fit: contain !important;
      width: 220px !important;
      height: 320px !important;
      margin-left: 53px !important;
      margin-top: -25px !important;
    }

    img:nth-child(1) {
      max-width: 300px !important;
      height: 300px !important;
      position: absolute !important;
    }
  }
`;

const ImgY = styled(Img)`
  flex: 1;
  min-width: 320px;
  max-height: 381px;
  margin-left: 2%;
  margin-right: 30px;
  overflow: hidden !important;

  img {
    object-fit: contain !important;
  }

  @media (max-width: 1024px) {
    margin-left: 0px;
    margin-right: 0px;
  }

  @media (max-width: 480px) {
    img:nth-child(1) {
      max-width: 300px !important;
      height: 300px !important;
      position: absolute !important;
    }

    picture img {
      object-fit: contain !important;

      height: 300px !important;

      margin-top: -25px !important;
    }

    /* picture {
      height: 200px !important;
    } */
  }

  @media (max-width: 450px) {
    justify-content: center;
    .tech-stack-box img {
      flex: 33%;
    }
    picture img {
      object-fit: contain !important;
      width: 220px !important;
      height: 360px !important;
      margin-left: 60px !important;
      margin-top: -65px !important;
    }

    img:nth-child(1) {
      max-width: 300px !important;
      height: 300px !important;
      position: absolute !important;
    }
  }
`;

const ImgW = styled(Img)`
  flex: 1;
  min-width: 320px;
  max-height: 381px;
  margin-left: 2%;
  margin-right: 30px;
  overflow: hidden !important;

  img {
    object-fit: contain !important;
  }

  @media (max-width: 1024px) {
    margin-left: 0px;
    margin-right: 0px;
  }

  @media (max-width: 480px) {
    .tech-stack-box img {
      flex: 33%;
    }

    img:nth-child(1) {
      max-width: 300px !important;
      height: 300px !important;
      position: absolute !important;
    }

    picture img {
      object-fit: contain !important;

      height: 300px !important;

      margin-top: -25px !important;
    }

    /* picture {
      height: 200px !important;
    } */
  }

  @media (max-width: 450px) {
    justify-content: center;
    .tech-stack-box img {
      flex: 33%;
    }

    picture img {
      object-fit: contain !important;
      width: 220px !important;
      height: 360px !important;
      margin-left: 50px !important;
      margin-top: -65px !important;
    }

    img:nth-child(1) {
      max-width: 300px !important;
      height: 300px !important;
      position: absolute !important;
    }
  }
`;
