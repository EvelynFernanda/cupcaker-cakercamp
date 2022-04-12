/* eslint-disable @typescript-eslint/no-unused-vars */
import LabelType from 'components/atoms/LabelType';
import Tag from 'components/atoms/Tag';
import { Main, Container, ContainerLabel, ContainerImg, Title, Description, ContainerTags, Footer, ContainerDetails, Comments, ContainerComments } from './styles';
import moment from 'moment';
import ChatBubbleIcon from '@mui/icons-material/ChatBubble';

type News = {
    img: string;
    title?: string;
    description?: string;
    author: string;
    createdAt: string;
    comments: number;
}

export const ListNews = ({ title, img, description, author, createdAt, comments }: News): JSX.Element => {
    const momentDate = moment(createdAt).fromNow()
    let newMomentDate = ""
    if (momentDate == "há um dia") {
        newMomentDate = "Ontem"
    } else if (momentDate == "há 2 dias") {
        newMomentDate = "Anteontem"
    } else {
        newMomentDate = momentDate
    }
    return (
        <Container>
            <ContainerImg>
                <img src={img} alt="Logo" />
                <ContainerLabel>
                    <LabelType text='#Games' />
                </ContainerLabel>
            </ContainerImg>
            <Main>
                <Title>{title}</Title>
                <Description>{description}</Description>
                <ContainerDetails>
                    <ContainerTags>
                        <Tag text='Xbox Series' />
                        <Tag text='lalal' />
                        <Footer>
                            Por <strong>{author}</strong>,
                        </Footer>
                        <Footer>
                            {newMomentDate}
                        </Footer>
                    </ContainerTags>
                    <ContainerComments>
                        <Comments>{comments}</Comments>
                        <ChatBubbleIcon style={{ color: '#666', fontSize: 18 }} />
                    </ContainerComments>
                </ContainerDetails>

            </Main>
        </Container>
    );
};
