import React from 'react';
import { Container, ContainerImg, Text } from './styles';

type Stories= {
  img: string;
  title: string;
}

export const ListStories = ({title, img}: Stories): JSX.Element => {
    return (
        <Container>
            <ContainerImg>
                <img src={img} alt="Logo" width={90} height={90} />

            </ContainerImg>
            <Text>{title}</Text>
        </Container>
    );
};
