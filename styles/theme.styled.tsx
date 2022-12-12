import { createGlobalStyle } from 'styled-components';
import { BlogPostStyled } from '../components/blog/blog-post.styled';
import { LogoInitialsStyled, LogoStyled } from '../components/common/logo/logo.styled';

export const Theme = createGlobalStyle`
  body {
    background: ${({ theme }) => theme.body};
    color: ${({ theme }) => theme.text};
    transition: background 0.2s ease-in, color 0.2s ease-in;
  }

  h1, h2, h3, h4, h5, h6, a, p {
    color: ${({ theme }) => theme.text};
  }

  ${LogoStyled} {
    color: ${({ theme }) => theme.text};
  }

  ${LogoInitialsStyled} {
    color: ${({ theme }) => theme.logoInitials};
  }

  ${BlogPostStyled} {
    box-shadow: ${({ theme }) => theme.boxShadow};
  }

  body::-webkit-scrollbar-thumb {
    background: ${({ theme }) => theme.scrollbarColor};
	}
`;

export const lightTheme = {
	body: 'var(--white)',
	text: 'var(--gray)',
	logoInitials: 'var(--cyan)',
  boxShadow: '0 5px 5px 0 rgba(233, 240, 243, 0.5), 0 0 0 1px #e6ecf8',
  scrollbarColor: 'var(--gray-800)',
};

export const darkTheme = {
	body: 'var(--gray-900)',
	text: 'var(--white)',
	logoInitials: 'var(--cyan)',
  boxShadow: '0 5px 5px 0 rgb(3 2 2 / 50%), 0 0 0 1px #2b2b2b',
  scrollbarColor: 'var(--cyan-50)',
};
