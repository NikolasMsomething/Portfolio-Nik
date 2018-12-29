import React, { Component } from 'react';
import styled from 'styled-components';
import Link from 'gatsby-link';
import { debounce } from 'lodash';
import './layout.scss';
import { FaGithub, FaLinkedinIn, FaCloudMoon } from 'react-icons/fa';
import { IoIosMail } from 'react-icons/io';
import * as Scroll from 'react-scroll';
import { Link as ScrollLink, Element, Events } from 'react-scroll';

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
			navbar: ''
		};
		this.listenScrollEvent = debounce(this.scrollEvent, 10);
	}

	componentDidMount() {
		if (window.pageYOffset < 100) {
			this.setState({ navbar: 'navbar-top' }, () => console.log(this.state));
		}

		console.log(debounce);
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
			this.setState({ navbar: 'navbar-top-off' }, () =>
				console.log(this.state)
			);
		} else if (window.pageYOffset === 0) {
			this.setState({ navbar: 'navbar-top' }, () => console.log(this.state));
		}
	};

	scrollTo = () => {
		scroll.scrollTo(100);
	};

	scrollToTop = () => {
		scroll.scrollToTop();
	};

	handleSetActive = to => {
		console.log(to);
	};

	render() {
		return (
			<>
				<Header className={this.state.navbar}>
					<H1 onClick={this.scrollToTop}>Nikolas Melgarejo</H1>
					<Ul>
						<ListLink offset={-80} name="About" to="about">
							About Me
						</ListLink>
						<ListLink offset={-80} name="Projects" to="projects">
							Projects
						</ListLink>
						<ListLink offset={-20} name="Contact" to="contact">
							Contact
						</ListLink>
					</Ul>
				</Header>
				{this.props.children}
				<Footer>
					<h3>
						Make your dreams reality
						<span className="cloud">
							<FaCloudMoon />
						</span>
					</h3>
					<h4>Nikolas Melgarejo</h4>
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

const H1 = styled.h1`
	color: white;
	font-family: Lora;
	font-size: 2rem;
	padding: 10px;
	text-transform: uppercase;
	flex: 1;
	cursor: pointer;
`;

const LcLi = styled.li`
	display: block;
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
`;

const LcA = styled(ScrollLink)`
	text-decoration: none;
	text-transform: uppercase;
	font-family: Lora;
	font-size: 1.15rem;
	margin: auto;
	color: white;
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
