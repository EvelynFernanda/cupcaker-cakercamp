import { News } from 'app/core/services/news';
import {useState, useCallback, useEffect} from 'react';
import { Container, Image, TextContainer, Carousel, ContainerImg, ContainerLabel } from './styles';
import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/splide/dist/css/themes/splide-default.min.css';
import LabelType from 'components/atoms/LabelType';

interface INews {
  title: string;
  description: string;
  author: string;
  createdAt: string;
  comments: number;
  tags: string[];
  type: string;
  image: string;
  id: string;
}
export const CarouselC = (): JSX.Element => {
const [news, setNews] = useState<INews[]>([]);
    
    const getNews = useCallback(async () => {

        await News.getNews()
            .then(response => {
                setNews(response.data)
            }
            )
    }, [])
    useEffect(() => {
        getNews()
     }, [])


  return (
    <Container>
      <Splide options={{ rewind: true, autoplay: true, interval: 5000 }} >
        {news.slice(0,5).map((item, index) =>
          <SplideSlide
          key={index}
           >
            <Carousel>
              <ContainerImg>
                <Image src={item.image} />
              </ContainerImg>
              <ContainerLabel>
                <LabelType text={item.type} />
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

