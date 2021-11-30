import Modal from 'react-modal';
import fecha from '../../assets/close.svg';
import { Container } from './styles';

interface NewIngressoProps {
    isOpen: boolean;
    onRequestClose: () => void;
    
}

export function NewIngresso({ isOpen, onRequestClose}: NewIngressoProps){
    return(
        
        <Modal isOpen={isOpen} onRequestClose={onRequestClose} overlayClassName="react-modal-overlay" className="react-modal-content">
            
            <button type="button" onClick={onRequestClose} className="react-modal-close">
                <img src={fecha} alt="fechar" />
            
            </button>
        <Container>
            <h2>⛧ CADASTRAR INGRESSO ⛧</h2>
                <input type="text" placeholder="Local" />

                <input type="date" placeholder="Data" />
                
                <input type="time" placeholder="Horário" />
                
                <input type="text" placeholder="Modalidade" />
                
                <input type="number" placeholder="Valor" />
                
                <input type="text" placeholder="Lote" />

                <button type="submit"> C R I A R </button>
        </Container>
        </Modal>
        
    )
}