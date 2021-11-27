import  logo from '../../assets/knot.svg';
import { Container, Content } from './styles';
export function Header(){
    return(
        <Container>
            <Content>
            <img src={logo} alt="logo" />
            <button >
                + *EVENTO* +
            </button>
            </Content>
        </Container>
    )
}