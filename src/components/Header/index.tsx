import  logo from '../../assets/logobig.svg';
import { Container, Content } from './styles';

interface HeaderProps{
    onOpenNewEvento: () => void;
}


export function Header({ onOpenNewEvento }: HeaderProps){

    return(
        <Container>
            <Content>
            <img src={logo} alt="logo" />
            <button type="button" onClick={onOpenNewEvento}>
            ⸸ ⋆ EVENTO ⋆ ⸸
            </button>
            </Content>
        </Container>
    )
}