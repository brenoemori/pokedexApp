import React from "react";
import AnimatedLottieView from "lottie-react-native";
import squirtleAnimation from './squirtle.json'

import * as S from './styles'
import { Button } from "../../components/Button";

export function Welcome() {
    return <S.Container>
        <S.Content>
            <S.WrapperAnimation>
                <S.WrapperImage>
                    <AnimatedLottieView style={{width: 300}} autoPlay source={squirtleAnimation} loop />
                </S.WrapperImage>
            </S.WrapperAnimation>

            <S.Title>Bem Vindo</S.Title>
            <S.Subtitle>Encontre todos os pokemons em um só lugar</S.Subtitle>
        </S.Content>

        <S.Footer>
            <Button title={"Iniciar"} />
        </S.Footer>
    </S.Container>
}