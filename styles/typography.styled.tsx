import { createGlobalStyle } from 'styled-components';


export const Typography = createGlobalStyle`
	@font-face {
		font-family: 'Saira Extra Condensed';
		src: url('fonts/SairaExtraCondensed-Medium.ttf') format('truetype');
	}

	@font-face {
		font-family: 'Open Sans';
		src: url('fonts/OpenSans-Regular.ttf') format('truetype');
	}

	@font-face {
		font-family: 'Open Sans Light';
		src: url('fonts/OpenSans-Light.ttf') format('truetype');
	}

	@font-face {
		font-family: 'Open Sans Bold';
		src: url('fonts/OpenSans-Bold.ttf') format('truetype');
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

	a {
		text-decoration: none;
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

	p {
		font-size: 17px;
	}
`;