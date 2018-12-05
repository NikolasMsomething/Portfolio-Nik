import React from 'react';
import styled from 'styled-components';
import Layout from '../layouts/layout';

export default () => {
	return (
		<>
			<Layout>
				<Main />
			</Layout>
		</>
	);
};

const Main = styled.div`
	width: 100%;
	height: 100px;
`;
