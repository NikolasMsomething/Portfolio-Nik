import React from 'react';
import { Link as ScrollLink, Element, Events } from 'react-scroll';
import styled from 'styled-components';

const ListLink = props => (
  <LcLi className={props.name}>
    <LcA
      className={props.cName}
      offset={props.offset}
      activeClass="active"
      to={props.to}
      spy={true}
      smooth={true}
      onClick={props.clicked}
    >
      {props.children}
    </LcA>
  </LcLi>
);

export const SideDrawer = props => {
  let drawerClasses = ['side-drawer'];

  if (props.sideDrawerOpen) {
    drawerClasses = ['side-drawer open'];
  }

  return (
    <Nav>
      <div className={drawerClasses.join('')}>
        <ul>
          <ListLink
            clicked={e => props.burgerClick()}
            offset={-102}
            name="About"
            to="about"
          >
            About
          </ListLink>
          <ListLink
            clicked={e => props.burgerClick()}
            offset={-102}
            name="Projects"
            to="projects"
          >
            Projects
          </ListLink>
          <ListLink
            clicked={e => props.burgerClick()}
            offset={-102}
            name="Contact"
            to="contact"
          >
            Contact
          </ListLink>
        </ul>
      </div>
    </Nav>
  );
};

const Header = styled.header`
  width: 100%;
  display: flex;
  justify-content: space-around;
  align-items: center;
  padding: 10px;
  position: fixed;
  top: 0;
  z-index: 100;
`;

const Ul = styled.ul`

	.active {
		border-bottom: 1px solid #513519;
	}
	display: flex;
	padding: 10px;
	height: auto;
  	align-items: center;
 	 & {LcLi}.Contact {
		text-align: right;
	};
	& {LcLi}.Projects {
		text-align: right;
	};
	& {LcLi}.About {
		text-align: right;
  	};
 	 & {LcLi}.Name {
		text-align: left;
  	};
	flex: 1;

	
`;

const LcLi = styled.li`
    display: flex;
    
	list-style: none;
	padding: 1rem;
	flex: 1;
  &{LcA}:visited {
    color: inherit;
  };
  &{LcA} a:hover {
		cursor: pointer;
		border-bottom: 1px solid white;
    
        
      }

      a:after {
	content: '';

  left: 0;
  display: inline-block;
  height: 1em;
  width: 100%;
  border-bottom: 1px solid;
  margin-top: 0px;
  opacity: 0;
	-webkit-transition: opacity 0.35s, -webkit-transform 0.35s;
	transition: opacity 0.35s, transform 0.35s;
	-webkit-transform: scale(0,1);
	transform: scale(0,1);
}

a:hover:after {
  opacity: 1;
	-webkit-transform: scale(1);
	transform: scale(1);
}


      
`;

const LcA = styled(ScrollLink)`
  text-decoration: none;
  text-transform: uppercase;
  font-family: Lora;
  font-size: 1.15rem;
  margin: auto;
  color: white;
  align-items: center;
`;

const Footer = styled.footer`
  width: 100%;
  background-color: #22211a;
  padding: 2%;
  font-family: Lora;
  text-align: center;
  h3 {
    color: white;
  }
  h4 {
    color: white;
  }

  .cloud {
    margin-right: -11px;
  }

  svg {
    margin-left: 5px;
  }
`;

const Nav = styled.nav`
  .side-drawer {
    height: 100%;
    background: white;
    box-shadow: 1px 0px 7px rgba(0, 0, 0, 0.5);
    position: fixed;
    top: 0;
    left: 0;
    width: 70%;
    max-width: 400px;
    z-index: 200;
    transform: translateX(-100%);
    transition: transform 0.38s ease-out;
    @media (min-width: 768px) {
      .toggle-button {
        display: none;
      }
    }
  }

  .side-drawer.open {
    transform: translateX(0);
  }

  .side-drawer ul {
    height: 100%;
    list-style: none;
    display: flex;
    flex-direction: column;
    justify-content: center;
  }

  .side-drawer li {
    margin: 0.5rem 0;
    display: flex;
    justify-content: center;
  }

  .side-drawer a {
    text-decoration: none;
    font-size: 1.2rem;
    font-family: 'Work Sans', sans-serif;
    text-transform: uppercase;
    color: black;
  }

  .contact-link {
    font-weight: 800;
    color: #dd4f6e;
  }

  .side-drawer a:hover,
  .side-drawer a:active {
    color: var(--thirdary);
  }
`;
