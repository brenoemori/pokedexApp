import styled, { css } from "styled-components/native";


export const Container = styled.View`
    ${({theme}) => css`
        flex: 1;
        background-color: ${theme.colors.backgroundWater}
    `}
`;
export const Content = styled.View`
    ${({theme}) => css`
    justify-content: center;
    align-items: center;
    height: 70%;
    `}
`;

export const WrapperAnimation = styled.View`
    ${({theme}) => css`
    justify-content: center;
    align-items: center;
    width: 200px;
    height: 300px;
    background-color: ${theme.colors.types.water};

    border-radius: 120px;
    transform: rotate(30deg);
    `}
`;

export const WrapperImage = styled.View`
    transform: rotate(-30deg);
`;

export const Footer = styled.View`
    ${({theme}) => css`
        border-top-right-radius: 20px;
        border-top-left-radius: 20px;
        height: 30%;
        background-color: ${theme.colors.background};
        justify-content: center;
        padding: 20px;
    `}
`;

export const Title = styled.Text`
    ${({theme}) => css `
        font-size: 40px;
        font-weight: 3rem;
        color: ${theme.colors.textWhite};
        margin-top: 20px;
    `}
`;

export const Subtitle = styled.Text`
    ${({theme}) => css `
        font-size: 16px;
        margin-top: 20px;
        color: ${theme.colors.textWhite};
    `}
`;

