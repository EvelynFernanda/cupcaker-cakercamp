import { Container, ContainerImg, Text } from './styles';

type Stories= {
  img: string;
  title: string;
}

export const ListStories = ({title, img}: Stories): JSX.Element => {
    return (
        <Container>
            <ContainerImg>
                <img src={img} alt="Logo" width={100} height={100} />

            </ContainerImg>
            <Text>{title}</Text>
        </Container>
    );
};
