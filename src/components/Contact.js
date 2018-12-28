import React from 'react';
import styled from 'styled-components';
import { FaGithub, FaLinkedinIn } from 'react-icons/fa';
import { IoIosMail } from 'react-icons/io';

export default function() {
	return (
		<ContactContainer>
			<h2>CONTACT</h2>
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
					<a target="_blank" href="https://github.com/NikolasMsomething">
						<IoIosMail />
					</a>
				</span>
			</div>
		</ContactContainer>
	);
}

let ContactContainer = styled.section`
	padding-bottom: 40px;
	padding-top: 1%;
	svg {
		width: 4em;
		height: 4em;
		color: #513519;
		&:hover {
			color: #337ab7;
		}
	}

	h2 {
		font-size: 40px;
		font-family: Lora;
		text-align: center !important;
		margin-bottom: 5%;
	}

	.contact-icons {
		display: flex;
		justify-content: space-around;
		padding: 1%;
	}
`;
