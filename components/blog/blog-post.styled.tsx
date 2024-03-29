import styled from 'styled-components';

export const BlogPostStyled = styled.section`
	margin: 0 0 20px 0;
	break-inside: avoid-column;
	border-radius: 12px;

	img {
		border-top-left-radius: 12px;
		border-top-right-radius: 12px;
		transition: filter 1s ease;
		filter: grayscale(0.8);
	}

	&:hover {
		cursor: pointer;

		img {
			filter: grayscale(0);
		}
	}
`;

export const BlogPostContentWrapperStyled = styled.section``;
export const BlogPostContentImgWrapperStyled = styled.article``;
export const BlogPostContentImgStyled = styled.img``;

export const BlogPostContentStyled = styled.article`
	padding: 20px;
`;

export const BlogPostContentTitleStyled = styled.h5``;
export const BlogPostContentTextStyled = styled.p``;
