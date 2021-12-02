import { useState, FormEvent } from 'react';
import Modal from 'react-modal';
import fecha from '../../assets/close.svg';

import api from '../../services/api';
import { Container, ModalidadeIngresso, RadioRed } from './styles';

interface NewIngressoProps {
    isOpen: boolean;
    onRequestClose: () => void;
    
}
export function NewIngresso({ isOpen, onRequestClose}: NewIngressoProps){
    
    const[local, setLocal] = useState('');
    const[dataEvento, setData] = useState('');
    const[hora, setHora] = useState('');
    const[valor, setValor] = useState(0);
    const[lote, setLote] = useState('');
    const[type, setType] = useState('inteira');
    
    async function handleCreateNewIngresso(event: FormEvent){
        event.preventDefault();

        const data = {local, dataEvento, hora, valor, lote, type};

        await api.post('/events', data)

        setLocal('')
        setData('')
        setHora('')
        setValor(0)
        setLote('')
        setType('inteira')

        alert('CADASTROU MANÉ, AGORA RESOLVE COM O BACK')
    }
    
    return(
        
        <Modal isOpen={isOpen} onRequestClose={onRequestClose} overlayClassName="react-modal-overlay" className="react-modal-content">
            
            <button type="button" onClick={onRequestClose} className="react-modal-close">
                <img src={fecha} alt="fechar" />
            
            </button>
        <Container onSubmit={handleCreateNewIngresso}>
            <h2>⛧ CADASTRAR INGRESSO ⛧</h2>
                <input type="text" placeholder="Local" value={local} onChange={event => setLocal(event.target.value)}/>

                <input type="text" placeholder="Data" value={dataEvento} onChange={event => setData(event.target.value)}/>
                
                <input type="text" placeholder="Horário" value={hora} onChange={event => setHora(event.target.value)}/>
                
                <ModalidadeIngresso>

                    <RadioRed type="button" onClick={() => setType('meia')} isActive={type === 'meia'}>
                        <span>MEIA-ENTRADA</span>
                    </RadioRed>

                    <RadioRed type="button" onClick={() => setType('inteira')} isActive={type === 'inteira'}>
                        <span>INTEIRA</span>
                    </RadioRed>
                    

                </ModalidadeIngresso>
                
                <input type="number" placeholder="Valor" value={valor} onChange={event => setValor(Number(event.target.value))}/>
                
                <input type="text" placeholder="Lote" value={lote} onChange={event => setLote(event.target.value)}/>

                <button type="submit"> C R I A R </button>
        </Container>
        </Modal>
        
    )
}