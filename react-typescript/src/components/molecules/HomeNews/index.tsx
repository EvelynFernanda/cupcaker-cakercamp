import { News } from 'app/core/services/news';
import {useState, useCallback, useEffect} from 'react';
import { ListNews } from '../ListNews';
import { Container, ContainerNews } from './styles';

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
export const HomeNews = (): JSX.Element => {
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
            {news.map((item, index) => (
                <ContainerNews
                key={index}
                >
                      <ListNews
                        image={item.image}
                        title={item.title}
                        description={item.description}
                        author={item.author}
                        createdAt={item.createdAt}
                        comments={item.comments} tags={item.tags} type={item.type}      />
                </ContainerNews>
              
            ))}
        </Container>
    )
}