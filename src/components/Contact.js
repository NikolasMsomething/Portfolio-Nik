import React from 'react';
import styled from 'styled-components';
import { FaGithub, FaLinkedinIn } from 'react-icons/fa';
import { IoIosMail } from 'react-icons/io';
import { Link as ScrollLink, Element, Events } from 'react-scroll';

export default function() {
  return (
    <Element name="contact" className="contact-scroll-to">
      <ContactContainer>
        <h2>Let's Talk!</h2>
        <h3>Find me by clicking an icon below!</h3>
        <div className="contact-icons">
          <span>
            <a target="_blank" href="https://github.com/NikolasMsomething">
              <FaGithub />
            </a>
          </span>
          <span>
            <a
              target="_blank"
              href="https://www.linkedin.com/in/nikolas-melgarejo/"
            >
              <FaLinkedinIn />
            </a>
          </span>
          <span>
            <a target="_blank" href="mailto:https://nikolasmlgrj@gmail.com">
              <IoIosMail />
            </a>
          </span>
        </div>
      </ContactContainer>
    </Element>
  );
}

let ContactContainer = styled.section`
  padding-top: 16%;
  padding-bottom: 20%;

  svg {
    width: 4em;
    height: 4em;
    color: #513519;
    &:hover {
      color: #337ab7;
    }
  }

  @media (max-width: 450px) {
    svg {
      width: 2.8rem;
      height: 2.8rem;
      color: #513519;
      &:hover {
        color: #337ab7;
      }
    }
  }

  h2 {
    font-size: 40px;
    font-family: Lora;
    text-align: center !important;
    margin-bottom: 5%;
  }

  h3 {
    font-size: 20px;
    font-family: Lora;
    text-align: center !important;
    margin-bottom: 5%;
  }

  .contact-icons {
    display: flex;
    justify-content: space-around;
    padding: 1%;
    width: 75%;
    margin: auto;
  }
`;
