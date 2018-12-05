import React, { Component } from 'react';
import styled from 'styled-components';
import Link from 'gatsby-link';
import { debounce } from 'lodash';
import './layout.scss';

const Primary = 'rgb(27, 102, 47)';

const ListLink = props => (
	<LcLi className={props.name}>
		<LcA to={props.to}>{props.children}</LcA>
	</LcLi>
);

//Make functions to return nested JSX, can use props effectively to pass options :D
//Layout in which we pass props children after our layout... call this layout component in app.js and put  children inside!
export default class extends Component {
	constructor() {
		super();
		this.state = {
			navbar: ''
		};
		this.listenScrollEvent = debounce(this.scrollEvent);
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
		if (window.pageYOffset > 50) {
			this.setState({ navbar: 'navbar-top-off' }, () =>
				console.log(this.state)
			);
		} else {
			this.setState({ navbar: 'navbar-top' }, () => console.log(this.state));
		}
	};

	render() {
		return (
			<>
				<Header className={this.state.navbar}>
					<H1>Nikolas Melgarejo</H1>
					<Ul>
						<ListLink name="About" to="/About">
							About Me
						</ListLink>
						<ListLink name="Projects" to="/Projects">
							Projects
						</ListLink>
						<ListLink name="Contact" to="/Contact">
							Contact
						</ListLink>
					</Ul>
				</Header>
				{this.props.children}
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
	z-index: 99;
`;

const Ul = styled.ul`
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
	
		border-bottom: 1px solid white;
	
  }
`;

const LcA = styled(Link)`
	text-decoration: none;
	text-transform: uppercase;
	font-family: Lora;
	font-size: 1.15rem;
	margin: auto;
	color: white;
`;
