import { Container, Text } from './styles';

type Text = {
    text: string;
}
const LabelType = ({ text }: Text): JSX.Element => {
    return (
        <Container>
            <Text>{text} </Text>
        </Container>
    );
}
export default LabelType;