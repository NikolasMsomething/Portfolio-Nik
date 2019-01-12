import React from 'react';
import styled from 'styled-components';

export default function() {
  return (
    <ToolBox>
      <div className="box">
        <h5>Toolbox</h5>
        <ul>
          <span className="box-titles">Langauges & Frameworks:</span>
          <li>
            Javascript, HTML5, CSS3, jQuery, React, NodeJS, ExpressJS, MongoDB,
            postgreSQL, Mocha, Chai, Jest
          </li>
          <span className="box-titles">IDE:</span>{' '}
          <li>Microsoft Visual Studios</li>
          <span className="box-titles">VCS:</span> Git/Github
          <span className="box-titles">PMS:</span> Trello
        </ul>
      </div>
      <div className="box-2">
        <h5>Learning</h5>
        <ul>
          <li>
            <span className="box-titles">Currently:</span> Vue.js, CSS Grid
          </li>
          <li>
            <span className="box-titles">Future:</span> PWA, AWS APIs, Python,
            Django, Ruby, Rails
          </li>

          <li>
            <span className="box-titles">Non-tech:</span> Cooking, Longboarding
          </li>
        </ul>
      </div>
      <div className="box">
        <h5>Building</h5>
        <ul>
          <li>
            <span className="box-titles">1 |</span> Focusing my attention on
            creating an app with a fellow engineer of mine that facilitates the
            needs of plant lovers alike.
          </li>
          <li>
            <span className="box-titles">2 |</span> Working on a small game that
            features socket.io and p2p connections.
          </li>
          <li>
            <span className="box-titles">3 |</span> Constantly updating and
            upgrading the apps I have worked on. Always on the quest to better
            them!
          </li>
        </ul>
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
    display: inline-block;
  }

  h5 {
    margin-bottom: 0.5rem;
    font-family: Lora;
    font-weight: 500;
    line-height: 1.2;
    border-bottom: 2px solid #0a0a0a;
    font-size: 1.5rem;
  }

  ul {
    font-family: Raleway;
    display: flex;
    flex-direction: column;
    text-align: left;
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
      width: 80%;
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
      width: 80%;
    }
  }

  @media (max-width: 1024px) {
    flex-direction: column;
    width: 100%;
    align-items: center;
    ul {
      font-family: Raleway;
      display: flex;
      flex-direction: column;
      text-align: center;
      width: 80%;
    }
  }
`;
