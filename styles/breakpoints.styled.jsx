import { css } from 'styled-components';

export const breakpoints = {
	tablet: '600px',
	tabletLandscape: '900px',
	desktop: '1200px',
};

export const respondTo = Object.keys(breakpoints).reduce((accumulator, label) => {
	accumulator[label] = (...args) => css`
		@media (min-width: ${breakpoints[label]}) {
			${css(...args)};
		}
	`;

	return accumulator;
}, {});
