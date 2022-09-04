import styled from 'styled-components';

export const FooterStyled = styled.footer`
    background: var(--cyan);
    padding: 140px 0 50px 0;
    text-align: center;
    margin: -180px auto auto auto;
`

export const FooterSloganStyled = styled.p`
    color: var(--cyan-900);
    font-family: var(--secondary-font);
    font-size: 25px;
`

export const FooterIconsListStyled = styled.ul`
    display: grid;
    grid-auto-flow: column;
    grid-gap: 20px;
    align-items: center;
    justify-content: center;
    margin-top: 40px;

    svg {
        max-width: 20px;
        max-height: 20px;

        path {
            transition: fill 0.5s ease-in-out;
            fill: var(--white);
        }
    }
`;

export const FooterIconsListItemStyled = styled.li`
    border: 1px solid var(--cyan-600);
    height: 40px;
    width: 40px;
    border-radius: 50%;
    display: grid;
    align-items: center;
    padding-top: 5px;

    &:hover {
        background: var(--white);
        cursor: pointer;

        svg {
            path {
                transition: fill 0.2s ease-in-out;
                fill: var(--cyan);
            }
        }
    }
`;

export const FooterIconsListItemLinkStyled = styled.a``;

export const FooterCopyrightStyled = styled.article`
    margin-top: 35px;
    font-size: 16px;
    color: var(--cyan-800);

    svg {
        max-width: 15px;
        margin: 5px 5px 0 5px;

        path {
            fill: var(--cyan-700);
        }
    }
`

export const FooterCopyrightTextStyled = styled.p``;

export const FooterCopyrightMadeWithStyled = styled.p`
    display: grid;
    grid-auto-flow: column;
    align-items: center;
    align-content: center;
    justify-content: center;
    grid-gap: 10px;
    margin-top: 20px;
    font-size: 14px;
`;

export const FooterCopyrightMadeWithLinkStyled = styled.a``;

export const FooterCopyrightMadeWithImgStyled = styled.img`
    filter: brightness(0.3) invert(1);
    max-width: 50px;
`;
