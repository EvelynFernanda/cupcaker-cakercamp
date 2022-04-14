/* eslint-disable @typescript-eslint/no-unused-vars */
import LabelType from 'components/atoms/LabelType';
import Tag from 'components/atoms/Tag';
import { Main, Container, ContainerImg, Title, Description, ContainerTags, Footer, ContainerDetails, Comments, ContainerComments, ContainerImgs, ContainerText } from './styles';
import moment from 'moment';
import ChatBubbleIcon from '@mui/icons-material/ChatBubble';

type News = {
    title: string;
    description: string;
    author: string;
    createdAt: string;
    comments: number;
    tags: string[];
    type: string;
    image: string;

}

export const ListNews = ({ title, image, description, author, createdAt, comments, tags, type }: News): JSX.Element => {
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
            <ContainerImgs>
                <ContainerImg>
                    <img src={image} alt="Logo" />
                </ContainerImg>

                <LabelType text={type} />
            </ContainerImgs>

            <Main>
                <ContainerText>
                    <Title>{title}</Title>
                    <Description>{description}</Description>
                </ContainerText>

                <ContainerDetails>
                    <ContainerTags>
                        {tags.map((item) => (
                            <Tag text={item} />
                        ))}
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
