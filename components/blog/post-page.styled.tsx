import styled from 'styled-components';
import { wrapperStyles } from '../../styles/global.styled.tsx';

export const PostPageStyled = styled.section`
	${wrapperStyles};
`;

export const PostPageTitleStyled = styled.h1`
	margin: 60px auto 30px auto;
	text-align: center;
`;

export const PostPageContentStyled = styled.article`
	margin-bottom: 270px;
	line-height: 35px;

	// Here we are actually styling the markdown. That's why
	// we are not using classes
	p {
		margin: 15px 0;
	}

	strong {
		display: inline-block;
		color: var(--cyan);
	}

	ul {
		padding-left: 30px;
	}

	li {
		list-style: disc;

		&::marker {
			color: var(--cyan);
		}
	}

	h1,
	h2,
	h3,
	h4,
	h5 {
		text-align: center;
	}

	h1 {
		margin: 70px auto 30px auto;
		line-height: 72px;
	}

	h2 {
		margin: 40px auto;
		line-height: 52px;
	}

	h4 {
		font-size: 15px;
		color: var(--cyan);
	}

	img {
		margin: 40px auto;
		width: 100%;
		max-width: 1000px;
	}

	iframe {
		width: 100%;
		height: 100%;
		min-height: 440px;
	}
`;
