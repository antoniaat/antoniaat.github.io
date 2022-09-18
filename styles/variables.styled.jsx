import { createGlobalStyle } from 'styled-components';

export const Variables = createGlobalStyle`
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
`;