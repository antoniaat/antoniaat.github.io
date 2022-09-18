import styled from 'styled-components';
import { respondTo } from '../../styles/breakpoints.styled';
import { OutlineButtonStyled } from '../common/button/button.styled';
import { wrapperStyles } from '../../styles/global.styled';

export const CollaborationWrapperStyled = styled.div`
	${wrapperStyles};
	display: grid;
	grid-column-gap: 100px;
	padding: 40px;
	margin-top: 30px;
	position: relative;
	bottom: 110px;
	background: var(--gray-800);
	color: var(--white);
	border-radius: 12px;
	box-shadow: 0 5px 5px 0 rgba(0, 0, 0, 0.2), 0 0 0 1px #141c3a;

	${respondTo.tabletLandscape`
        align-items: center;
        grid-template-columns: repeat(3, 1fr);
        margin-top: 220px;
	`}
`;

export const CollaborationTitleStyled = styled.p`
	font-size: 36px;
	font-family: var(--secondary-font);
	text-align: center;
	margin-bottom: 12px;

	@include for-tablet-landscape-up {
		text-align: left;
		margin-bottom: 0;
	}
`;

export const CollaborationDescriptionStyled = styled.p`
	line-height: 26px;
	text-align: center;
`;

export const CollaborationCtaStyled = styled(OutlineButtonStyled)`
	background: transparent;
	width: fit-content;
	margin: 20px auto;

	${respondTo.tabletLandscape`
        justify-self: end;
        margin: 0;
    `}

	a {
		color: var(--white);
	}
`;

export const CollaborationCtaLinkStyled = styled.a``;