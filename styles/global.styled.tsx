import { createGlobalStyle, css } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
	html,
	body,
	* {
		padding: 0;
		margin: 0;
	}

	* {
		box-sizing: border-box;
	}

	body::-webkit-scrollbar {
		width: 0.2em;
	}

	body::-webkit-scrollbar-track {
		box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
	}

	a {
		text-decoration: none;
	}

	a:hover {
		text-decoration: underline;
	}

	img {
		max-width: 100%;
		display: block;
	}

	li {
		list-style: none;
	}
`;

export const wrapperStyles = css`
	max-width: 1360px;
	padding: 0 20px;
	margin: 0 auto;
`;
