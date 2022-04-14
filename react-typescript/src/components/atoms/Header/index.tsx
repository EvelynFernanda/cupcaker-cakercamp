import { Container, CenterDiv, ContainerBlack, ContainerSvg } from './styles';
import ModeNightIcon from '@mui/icons-material/ModeNight';

export const Header = (): JSX.Element => {

    return (
        <Container>
            <CenterDiv>
                <img src={"https://www.gamevicio.com/misc/images/logo-black.webp"} alt="Logo" />
            </CenterDiv>
            <ContainerBlack>
                <ContainerSvg>
                    <ModeNightIcon style={{ color: '#ddd', fontSize: 28 }} />
                </ContainerSvg>
            </ContainerBlack>
        </Container>
    );
}
