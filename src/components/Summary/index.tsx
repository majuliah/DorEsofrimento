import { Container } from './styles';
import loguinha from '../../assets/logoum.svg';
import circus from '../../assets/circus.svg';
import clown from '../../assets/clown.svg';
// import russa from '../../assets/russa.svg';

export function Summary(){
    return(
        <Container>
            <div className="highlight-background">
                <header>
                    <p>INGRESSOS 22/12</p>
                    <img src={ loguinha } alt="Entrada" />
                </header>
                <strong>E.S.G.O.T.A.D.O</strong>
            </div>

            <div>
                <header>
                    <p>INGRESSOS 23/12</p>
                    <img src={ circus } alt="Entrada" />
                </header>
                <strong>PRIMEIRO LOTE</strong>
            </div>

            <div>
                <header>
                    <p>INGRESSOS 24/12</p>
                    <img src={clown} alt="Entrada" />
                </header>
                <strong>PRIMEIRO LOTE</strong>
            </div>
        </Container>
    )
}