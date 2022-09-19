import { createGlobalStyle } from 'styled-components';
import { CollaborationDescriptionStyled, CollaborationTitleStyled, CollaborationWrapperStyled } from '../components/collaboration/collaboration.styled';
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

  ${CollaborationWrapperStyled} {
    background: ${({ theme }) => theme.collaborationWrapper};
    color: ${({ theme }) => theme.collaborationText};

    ${CollaborationTitleStyled}, ${CollaborationDescriptionStyled} {
      color: ${({ theme }) => theme.collaborationText};
    }
  }
`;

export const lightTheme = {
	body: 'var(--white)',
	text: 'var(--gray)',
	logoInitials: 'var(--cyan)',
	collaborationWrapper: 'var(--gray-800)',
  collaborationText: 'var(--white)',
};

export const darkTheme = {
	body: 'var(--gray-900)',
	text: 'var(--white)',
	logoInitials: 'var(--cyan)',
	collaborationWrapper: 'var(--white)',
  collaborationText: 'var(--gray-900)',
};
