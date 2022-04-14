import { useCallback, useState, useEffect } from 'react';
import { ListStories } from 'components/atoms/ListStories';
import { Container } from './styles';
import { StoriesA } from 'app/core/services/stories';
interface IStories {
    createdAt: string;
    id: string;
    title: string;
    image: string;
}
export const Stories = (): JSX.Element => {
    const [stories, setStories] = useState<IStories[]>([]);

    const getStories = useCallback(async () => {

        await StoriesA.getStories()
            .then(response => {
                setStories(response.data)
            }
            )
    }, [])
    useEffect(() => {
        getStories()
     }, [])

    return (
        <Container>
            {stories.slice(0,8).map((item) => (
                <ListStories
                    key={item.id}
                    title={item.title}
                    img={item.image}
                />
            ))}
        </Container>
    );
};





