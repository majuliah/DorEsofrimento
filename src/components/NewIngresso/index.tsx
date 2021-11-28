import Modal from 'react-modal';

interface NewIngressoProps {
    isOpen: boolean;
    onRequestClose: () => void;
    
}

export function NewIngresso({ isOpen, onRequestClose}: NewIngressoProps){
    return(
        <Modal isOpen={isOpen} onRequestClose={onRequestClose}>
            <h2>CADASTRAR INGRESSO</h2>
        </Modal>
    )
}