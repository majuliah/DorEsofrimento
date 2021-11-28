import Modal from 'react-modal';
import { Container } from './styles';

interface NewIngressoProps {
    isOpen: boolean;
    onRequestClose: () => void;
    
}

export function NewIngresso({ isOpen, onRequestClose}: NewIngressoProps){
    return(
        
        <Modal isOpen={isOpen} onRequestClose={onRequestClose}>
        <Container>
            <h2>⛧ CADASTRAR INGRESSO ⛧</h2>
                <input type="text" placeholder="Local" />

                <input type="date" placeholder="Data" />
                
                <input type="time" placeholder="Horário" />
                
                <input type="text" placeholder="Modalidade" />
                
                <input type="number" placeholder="Valor" />
                
                <input type="text" placeholder="Lote" />

                <button type="submit"> Criar </button>
        </Container>
        </Modal>
        
    )
}