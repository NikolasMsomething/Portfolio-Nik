import React from 'react';
import styled from 'styled-components';

export default function() {
  return (
    <ToolBox>
      <div className="box">
        <h5>Toolbox</h5>
        <p>
          <span className="box-titles">Langauges and Frameworks</span>:
          Javascript, HTML5, CSS3, jQuery, React, NodeJS, ExpressJS, MongoDB,
          postgreSQL, Mocha, Chai, Jest
          <span className="box-titles">
            <br />
            IDE:
          </span>{' '}
          Microsoft Visual Studios
          <span className="box-titles">
            <br />
            VCS:
          </span>{' '}
          Git/Github
          <span className="box-titles">
            <br />
            PMS:
          </span>{' '}
          Trello
        </p>
      </div>
      <div className="box-2">
        <h5>Learning</h5>
        <p>
          <span className="box-titles">Currently:</span> Vue.js, CSS Grid,{' '}
          <br />
          <span className="box-titles">Future:</span> PWA, AWS APIs, Python,
          Django, Ruby, Rails
          <br />
          <span className="box-titles">Non-tech:</span> Cooking, Longboarding
        </p>
      </div>
      <div className="box">
        <h5>Building</h5>
        <p>
          <span className="box-titles">1 |</span> Focusing my attention on
          creating an app with a fellow engineer of mine that facilitates the
          needs of plant lovers alike.
        </p>
        <p>
          <span className="box-titles">2 |</span> Working on a small game that
          features socket.io and p2p connections.
        </p>
        <p>
          <span className="box-titles">3 |</span> Constantly updating and
          upgrading the apps I have worked on. Always on the quest to better
          them!
        </p>
      </div>
    </ToolBox>
  );
}

const ToolBox = styled.div`
  display: flex;
  justify-content: space-around;
  width: 75%;
  margin: 0 auto;
  letter-spacing: 0.6px;

  .box-titles {
    font-weight: bold;
  }

  @media (max-width: 1024px) {
    flex-direction: column;
    width: 100%;
    align-items: center;
  }

  h5 {
    margin-bottom: 0.5rem;
    font-family: Lora;
    font-weight: 500;
    line-height: 1.2;
    border-bottom: 2px solid #0a0a0a;
    font-size: 1.5rem;
  }

  p {
    font-family: Raleway;
  }

  .box {
    display: flex;
    flex-direction: column;
    padding: 15px;
    margin-bottom: 40px;
    border: thin solid rgba(51, 122, 183, 0.1);
    border-radius: 5px;
    box-shadow: 0 12px 12px 0 #d3d3d3;
    box-sizing: border-box;
    background-color: #fff;
    width: 30%;

    @media (max-width: 1024px) {
      flex-direction: column;
      text-align: left;
      align-items: center;
      width: 65%;
    }
  }
  .box-2 {
    display: flex;
    flex-direction: column;
    padding: 15px;
    margin-bottom: 40px;
    border: thin solid rgba(51, 122, 183, 0.1);
    border-radius: 5px;
    box-shadow: 0 12px 12px 0 #d3d3d3;
    box-sizing: border-box;
    background-color: #fff;
    width: 30%;
    height: 80%;
    min-height: 60%;
    @media (max-width: 1024px) {
      flex-direction: column;
      text-align: left;
      align-items: center;
      width: 65%;
    }
  }
`;
