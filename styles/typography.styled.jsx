import { createGlobalStyle } from 'styled-components';
import SairaExtraCondensedMedium from "../public/fonts/SairaExtraCondensed-Medium.ttf";
import OpenSansRegular from "../public/fonts/OpenSans-Regular.ttf";
import OpenSansLight from "../public/fonts/OpenSans-Light.ttf";
import OpenSansBold from "../public/fonts/OpenSans-Bold.ttf";

export const Typography = createGlobalStyle`
	@font-face {
		font-family: 'Saira Extra Condensed';
		src: url(${SairaExtraCondensedMedium}) format('truetype');
	}

	@font-face {
		font-family: 'Open Sans';
		src: url(${OpenSansRegular}) format('truetype');
	}

	@font-face {
		font-family: 'Open Sans Light';
		src: url(${OpenSansLight}) format('truetype');
	}

	@font-face {
		font-family: 'Open Sans Bold';
		src: url(${OpenSansBold}) format('truetype');
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
		color: var(--gray);
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
		color: var(--grey);
	}
`;