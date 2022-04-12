import {Container} from './styles';

type Text = {
    text: string;
}

const Tag = ({ text }: Text): JSX.Element => {
    let cor = '';

    switch (text) {
        case 'PS4':
            cor = '#1565c0';
            break;
        case 'PS5':
            cor = '#1565c0';
            break;
        case 'Xbox Series':
            cor = '#529836';
            break;
        case 'Xbox One':
            cor = '#529836';
            break;
        case 'PC':
            cor = '#BDBBBB';
            break;
        case 'Switch':
            cor = '#c62828';
            break;
        default:
            cor = '#ef6c00';
            break;
    }
    return (
        <Container color={cor}>{text}</Container>
    );
}
export default Tag;
