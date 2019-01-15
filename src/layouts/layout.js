import React, { Component } from 'react';
import styled from 'styled-components';
import Link from 'gatsby-link';
import { debounce } from 'lodash';
import './layout.scss';
import { FaGithub, FaLinkedinIn, FaCloudMoon } from 'react-icons/fa';
import { IoIosMail } from 'react-icons/io';
import * as Scroll from 'react-scroll';
import { Link as ScrollLink, Element, Events } from 'react-scroll';
import { Helmet } from 'react-helmet';
import favicon from '../favicon.png';
import HamburgerMenu from 'react-hamburger-menu';
import { SideDrawer } from '../components/SideDrawer';
const Primary = 'rgb(27, 102, 47)';

const ListLink = props => (
  <LcLi className={props.name}>
    <LcA
      offset={props.offset}
      activeClass="active"
      to={props.to}
      spy={true}
      smooth={true}
    >
      {props.children}
    </LcA>
  </LcLi>
);

const scroll = Scroll.animateScroll;
//Make functions to return nested JSX, can use props effectively to pass options :D
//Layout in which we pass props children after our layout... call this layout component in app.js and put  children inside!
export default class extends Component {
  constructor() {
    super();
    this.state = {
      navbar: '',
      hamburgerOpen: false
    };
    this.listenScrollEvent = debounce(this.scrollEvent, 10);
  }

  componentDidMount() {
    if (window.pageYOffset < 100) {
      this.setState({ navbar: 'navbar-top' });
    }

    window.addEventListener('scroll', this.listenScrollEvent);
  }

  componentDidUpdate() {
    if (window.pageYOffset > 100) {
    }
  }

  componentWillUnmount() {
    this.listenScrollEvent.cancel();
  }

  //HAVE TO CANCEL DEBOUNCE BECAUSE OF ASYNCHRONISITY... FUNCTION TRIES TO RESOLVE ON UNMOUNTED COMPONENT

  scrollEvent = () => {
    if (window.pageYOffset > 50 && window.pageXOffset < 100) {
      this.setState({ navbar: 'navbar-top-off' });
    } else if (window.pageYOffset === 0) {
      this.setState({ navbar: 'navbar-top' });
    }
  };

  scrollTo = () => {
    scroll.scrollTo(100);
  };

  scrollToTop = () => {
    scroll.scrollToTop();
  };

  handleSetActive = to => {};

  handleBurgerClick = () => {
    this.setState({ hamburgerOpen: !this.state.hamburgerOpen });
  };

  render() {
    return (
      <>
        <Helmet
          title="nikmelgarejo.me"
          meta={[
            { name: 'description', content: 'Nikolas Melgarejos Portfolio' },
            { name: 'keywords', content: 'blah' }
          ]}
          link={[
            { rel: 'shortcut icon', type: 'image/png', href: `${favicon}` }
          ]}
        />
        <Header className={this.state.navbar}>
          <H1 onClick={this.scrollToTop}>Nikolas Melgarejo</H1>
          <Ul>
            <ListLink offset={-110} name="About" to="about">
              About
            </ListLink>
            <ListLink offset={-110} name="Projects" to="projects">
              Projects
            </ListLink>
            <ListLink offset={-200} name="Contact" to="contact">
              Contact
            </ListLink>
            <button onClick={this.handleBurgerClick} class="toggle-button">
              <div class="toggle-button__line" />
              <div class="toggle-button__line" />
              <div class="toggle-button__line" />
            </button>
          </Ul>
        </Header>
        <SideDrawer
          burgerClick={this.handleBurgerClick}
          sideDrawerOpen={this.state.hamburgerOpen}
        />
        {this.state.hamburgerOpen && (
          <BackDropContainer>
            <div
              onClick={e => {
                e.preventDefault();
                this.handleBurgerClick();
              }}
              className="backdrop"
            />
          </BackDropContainer>
        )}

        {this.props.children}
        <Footer>
          <h3>
            Make your dreams reality
            <span className="cloud">
              <FaCloudMoon />
            </span>
          </h3>
          <h4>Nikolas Melgarejo</h4>
          <h4>201-381-7943</h4>
        </Footer>
      </>
    );
  }
}

//targeting classes in styled Components
//border-bottom: 2px solid #ccc !important;

const Header = styled.header`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px;
  position: fixed;
  top: 0;
  z-index: 100;

  .hamburger-menu {
    width: 18px;
    height: 15px;
    position: relative;
    transform: rotate(0deg);
  }

  .hamburger-menu-span-1 {
    height: 1px;
    width: 100%;
    background: black;
    position: absolute;
    margin-top: -1px;
  }
  .toggle-button {
    height: 30px;
    width: 36px;
    background: transparent;
    border: none;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    padding: 0;
    box-sizing: border-box;
    &:focus {
      outline: none;
    }
    justify-self: flex-end;
  }
  .toggle-button__line {
    width: 30px;
    height: 1px;
    background: white;
  }

  @media (max-width: 450px) {
    font-size: 1.3rem;
    flex: 2;
    .toggle-button {
      height: 30px;
      width: 36px;
      background: transparent;
      border: none;
      display: flex;
      flex-direction: column;
      justify-content: space-around;
      padding: 0;
      box-sizing: border-box;
      &:focus {
        outline: none;
      }
    }
  }
`;

const BackDropContainer = styled.section`
  .backdrop {
    position: fixed;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.3);
    z-index: 110;
    top: 0;
    left: 0;
  }
`;

const Ul = styled.ul`
  .active {
    border-bottom: 1px solid #513519;
  }
  display: flex;
  justify-content: flex-end;
  padding: 10px;
  height: auto;
  align-items: center;

  flex: 1;
  .toggle-button {
    display: none;
  }

  @media (max-width: 768px) {
    font-size: 1.3rem;
    flex: 0.3;

    justify-content: flex-end;
    .toggle-button {
      height: 30px;
      width: 36px;
      background: transparent;
      border: none;
      display: flex;
      flex-direction: column;
      visibility: visible;
      padding: 0;
      box-sizing: border-box;
      &:focus {
        outline: none;
      }
    }
  }
`;

const H1 = styled.h1`
  color: white;
  font-family: Lora;
  font-size: 2rem;
  padding: 10px;
  text-transform: uppercase;
  flex: 1;
  text-align: left
  cursor: pointer;
  @media (max-width: 768px) {
    font-size: 1.8rem;
    flex: 10;
   
    text-align: left;
  }

  @media (max-width: 450px) {
    font-size: 1.5rem;
    flex: 2;
  }
`;

const LcLi = styled.li`
	display: block;
	list-style: none;
	padding: 1rem;
  flex: 1;
  text-align: right;
  &{LcA}:visited {
    color: inherit;
  };
  &{LcA} a:hover {
		cursor: pointer;
		border-bottom: 1px solid white; 
  }
  @media (max-width: 768px) {
    display: none;
  }
`;

const LcA = styled(ScrollLink)`
  text-decoration: none;
  text-transform: uppercase;
  font-family: Lora;
  font-size: 1.15rem;
  margin: auto;
  color: white;
  @media (max-width: 768px) {
    display: none;
  }
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
