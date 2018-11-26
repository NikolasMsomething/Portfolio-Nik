import React from 'react';
import styled from 'styled-components';

export default () => {
	return (
		<HeaderContainer>
			<LinksContainer>
				<LcLi className="Name">
					<LcA href="Nick">Nikolas Melgarejo</LcA>
				</LcLi>
				<Spacer />
				<LcLi className="Projects">
					<LcA href="Home">About Me</LcA>
				</LcLi>
				<LcLi className="Contact">
					<LcA href="About">Projects</LcA>
				</LcLi>
				<LcLi className="Contact">
					<LcA href="About">Contacts</LcA>
				</LcLi>
			</LinksContainer>
		</HeaderContainer>
	);
};

const HeaderContainer = styled.div`
  width: 100%;
  & {LinksContainer} {LcLi}.Name {
    text-align: left;
  };
  & {LinksContainer} {LcLi}.Projects {
    text-align: center;
  };
  & {LinksContainer} {LcLi}.Contact {
     text-align: center;
  };
`;

//targeting classes in styled Components

const LinksContainer = styled.ul`
	display: flex;
	flex-wrap: wrap;
	width: 100%;
	padding: 20px;
	height: 3rem;
  align-items: center;
  }
`;

const LcLi = styled.li`
	list-style: none;
	padding: 1rem;
	flex: 1;
`;

const LcA = styled.a`
	text-decoration: none;
	text-transform: uppercase;
	font-family: Lora;
	font-size: 1.5rem;
	margin: auto;
`;

const Spacer = styled.div`
	flex: 2;
`;
