import { ListNews } from '../ListNews';
import { Container } from './styles';

export const HomeNews = (): JSX.Element => {
    const list = [
        {
            "title": "Xbox estaria preparando um evento para junho nos moldes da E3, afirma Jeff Grubb",
            "description": "Com o cancelamento da E3 2022, Microsoft estaria preparando evento próprio.",
            "author": "Cristian19",
            "createdAt": "2022-04-03T19:22:54.794Z",
            "comments": 14,
            "tags": [

            ],
            "type": "Games",
            "image": "https://static.gamevicio.com/imagens_up/big/71/activision-blizzard-atualiza-numero-de-estudios-trabalhando-em-jogos-de-call-of-duty-070115.jpg",
            "id": "4"
        },
        {
            "title": "Xbox estaria preparando um evento para junho nos moldes da E3, afirma Jeff Grubb",
            "description": "Com o cancelamento da E3 2022, Microsoft estaria preparando evento próprio.",
            "author": "Dayna_Hessel",
            "createdAt": "2022-04-04T16:54:57.713Z",
            "comments": 88,
            "tags": [
                "Xbox Series",
                "Xbox One"
            ],
            "type": "Games",
            "image": "https://static.gamevicio.com/imagens_up/big/71/xbox-estaria-preparando-um-evento-para-junho-nos-moldes-da-e3-afirma-jeff-grubb-070112.jpg",
            "id": "5"
        },
        {
            "title": "Conheça todos detalhes da Placa de vídeo GTX 1650",
            "description": "Uma placa com excelente custo benefício.",
            "author": "Natalia7",
            "createdAt": "2022-04-04T14:52:25.242Z",
            "comments": 37,
            "tags": [
                "Games",
                "PC"
            ],
            "type": "Games",
            "image": "https://s2.glbimg.com/tg8Dimrd-vCvWvmz48f5EaOZMC0=/0x0:1199x800/984x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_08fbf48bc0524877943fe86e43087e7a/internal_photos/bs/2019/z/z/6sVseMQbmjuhy4ADPAgw/geforce-1650-evga-3qtr-front-left-100794190-large.jpg",
            "id": "6"
        },
        {
            "title": "Loja Hype Games fecha parceria com o Player’s Game, o banco gamer do Itaú",
            "description": "Clientes da conta digital terão descontos exclusivos em jogos para PC e assinaturas para Xbox e PlayStation.",
            "author": "Werner91",
            "createdAt": "2022-04-05T10:25:16.597Z",
            "comments": 64,
            "tags": [

            ],
            "type": "Games",
            "image": "https://static.gamevicio.com/imagens_up/big/71/loja-hype-games-fecha-parceria-com-o-player-s-game-o-banco-gamer-do-itau-070113.jpg",
            "id": "7"
        },
    ]
    return (
        <Container>
            {list.map((item) => (
                <ListNews
                    img={item.image}
                    title={item.title}
                    description={item.description}
                    author={item.author}
                    createdAt={item.createdAt}
                    comments={item.comments}
                />
            ))}
        </Container>
    )
}