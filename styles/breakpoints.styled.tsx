import { css, CSSObject } from 'styled-components';

export const breakpoints = {
	tablet: '600px',
	tabletLandscape: '900px',
	desktop: '1200px',
};

export const respondTo = Object.keys(breakpoints).reduce(
	(cb: Record<string, (styles: TemplateStringsArray) => ReturnType<typeof css>>, breakpointName) => {
		cb[breakpointName] = (elementStyles: TemplateStringsArray) => css`
			@media (min-width: ${breakpoints[breakpointName]}) {
				${css(elementStyles)};
			}
		`;

		return cb;
	},
	{},
);
