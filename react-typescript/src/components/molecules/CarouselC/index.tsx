import { Container, Image, TextContainer, Carousel, ContainerImg, ContainerLabel } from './styles';
import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/splide/dist/css/themes/splide-default.min.css';
import LabelType from 'components/atoms/LabelType';


export const CarouselC = (): JSX.Element => {

  const list = [{
    title: "Sonic the Hedgehog 2 gerou US$ 25,5 milhões em seu final de semana internacional",
    description: "Um aumento de 2% em comparação com a estreia do primeiro filme",
    imageURL: "https://static.gamevicio.com/imagens_up/big/71/sonic-the-hedgehog-2-gerou-us-25-5-milhoes-em-seu-final-de-semana-internacional-070121.jpg"
  },
  {
    title: "Vaza lista com próximos jogos chegando ao catálogo do Xbox Game Pass",
    description: "Vários jogos estão entrando nessa primeira quinzena de abril",
    imageURL: "https://static.gamevicio.com/imagens_up/big/71/vaza-lista-com-proximos-jogos-chegando-ao-catalogo-do-xbox-game-pass-070119.jpg"
  },
  {
    title: "Encare as profundezas amaldiçoadas de um pesadelo em Nightmare Reaper",
    description: "FPS de inspiração retrô que mistura loot-shooter com rogue-lite rompe a parede entre a jogabilidade clássica e moderna.",
    imageURL: "https://static.gamevicio.com/imagens_up/big/71/encare-as-profundezas-amaldicoadas-de-um-pesadelo-em-nightmare-reaper-070117.jpg"
  }
  ];


  return (
    <Container>
      <Splide options={{ rewind: true, autoplay: true, interval: 5000 }} >
        {list.map((item) =>
          <SplideSlide >
            <Carousel>
              <ContainerImg>
                <Image src={item.imageURL} />
              </ContainerImg>
              <ContainerLabel>
                <LabelType text={'Game'} />
              </ContainerLabel>
              <TextContainer>
                <h3>{item.title}</h3>
                <h4>{item.description}</h4>
              </TextContainer>
            </Carousel>
          </SplideSlide>)
        }

      </Splide>
    </Container>
  )
}

