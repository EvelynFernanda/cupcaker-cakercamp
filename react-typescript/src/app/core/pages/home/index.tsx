import { Main, Container, ContainerStories } from './styles';
import { Header } from 'components/atoms/Header';
import { CarouselC } from 'components/molecules/CarouselC'
import { Stories } from 'components/molecules/Stories ';
import { HomeNews } from 'components/molecules/HomeNews';

const Home = (): JSX.Element => {
  
  return (
    <Container>
      <Header />
      <Main>
        <CarouselC />
        <ContainerStories>
          <Stories />
        </ContainerStories>
        <HomeNews />
      </Main >
    </Container>

  )
}

export default Home;
