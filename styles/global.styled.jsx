import { createGlobalStyle, css } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
	:root {
		--cyan-50: #e0f7fa;
		--cyan-100: #b2ebf2;
		--cyan-200: #80deea;
		--cyan-300: #4dd0e1;
		--cyan-400: #26c6da;
		--cyan-500: #00bcd4;
		--cyan-600: #00acc1;
		--cyan-700: #0097a7;
		--cyan-800: #00838f;
		--cyan-900: #006064;

		--cyan: var(--cyan-500);
		--gray: #444;
		--white: #fff;
		--black: #000;

		--gray-800: #141c3a;

		--primary-font: 'Open Sans', sans-serif;
		--primary-font-light: 'Open Sans Light', sans-serif;
		--primary-font-bold: 'Open Sans Bold', sans-serif;
		--secondary-font: 'Saira Extra Condensed', sans-serif;
	}

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
		width: 0.4em;
	}

	body::-webkit-scrollbar-track {
		box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
	}

	body::-webkit-scrollbar-thumb {
		background: var(--gray-800);
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

	// Typography
	@font-face {
		font-family: 'Saira Extra Condensed';
		src: url('../../assets/fonts/SairaExtraCondensed-Medium.ttf') format('truetype');
	}
	
	@font-face {
		font-family: 'Open Sans';
		src: url('../../assets/fonts/OpenSans-Regular.ttf') format('truetype');
	}
	
	@font-face {
		font-family: 'Open Sans Light';
		src: url('../../assets/fonts/OpenSans-Light.ttf') format('truetype');
	}
	
	@font-face {
		font-family: 'Open Sans Bold';
		src: url('../../assets/fonts/OpenSans-Bold.ttf') format('truetype');
	}
	
	*,
	*::before,
	*::after {
		font-family: var(--primary-font);
	}
	
	h1,
	h2,
	h3,
	h4,
	h5,
	h6 {
		font-family: var(--secondary-font);
	}
	
	h1 {
		font-size: 55px;
		font-weight: 800;
	}
	
	h2 {
		font-size: 36px;
		font-weight: 800;
	}
	
	h4 {
		font-size: 30px;
	}
	
	h5 {
		font-size: 24px;
	}
`;

export const wrapperStyles = css`
	max-width: 1360px;
	padding: 0 20px;
	margin: 0 auto;
`;
