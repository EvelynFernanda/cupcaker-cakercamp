import { ListStories } from 'components/atoms/ListStories';
import { Container} from './styles';


export const Stories = (): JSX.Element => {

    //LISTA APENAS PARA TESTE:

    const list =
        [
            {
                "createdAt": "2022-04-05T04:39:11.873Z",
                "title": "E3 2022 é oficialmente cancelada",
                "image": "https://static.gamevicio.com/imagens_up/big/70/e3-2022-e-oficialmente-cancelada-069989.jpg",
                "id": "5"
            },
            {
                "createdAt": "2022-04-05T05:45:21.397Z",
                "title": "O público gostou de Cavaleiro da Lua",
                "image": "https://static.gamevicio.com/imagens_up/big/70/o-publico-gostou-de-cavaleiro-da-lua-069987.jpg",
                "id": "6"
            },
            {
                "createdAt": "2022-04-04T15:56:00.932Z",
                "title": "House of the Dragon recebe data de estreia",
                "image": "https://static.gamevicio.com/imagens_up/big/70/https-www-gamevicio-com-midia-web-stories-house-of-the-dragon-recebe-data-de-estreia-069918.png",
                "id": "7"
            },
            {
                "createdAt": "2022-04-05T00:30:22.751Z",
                "title": "Conheça Project AK, um novo RPG Soulslike",
                "image": "https://static.gamevicio.com/imagens_up/big/70/conheca-project-ak-um-novo-rpg-soulslike-069917.jpg",
                "id": "8"
            },
            {
                "createdAt": "2022-04-04T16:21:23.941Z",
                "title": "Will Smith e Chris Rock se enfrentam em God of War",
                "image": "https://static.gamevicio.com/imagens_up/big/70/will-smith-e-chris-rock-se-enfrentam-em-god-of-war-069858.jpg",
                "id": "9"
            }
        ];
    return (
        <Container>
            {list.map((item) => (
                <ListStories
                    key={item.id}
                    title={item.title}
                    img={item.image}
                />
            ))}
        </Container>
    );
};





