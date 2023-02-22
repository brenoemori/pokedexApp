import styled, { css } from "styled-components/native";


export const Container = styled.TouchableOpacity`
    ${({theme}) => css`
        width: 100%;
        height: 50px;
        background-color: ${theme.colors.types.water};
        border-radius: 20px;

        justify-content: center;
        align-items: center;
    `}
`;


export const Title = styled.Text`
    ${({theme}) => css`
        font-size: 16px;
        color: ${theme.colors.textWhite} ;
    
    `}
`;