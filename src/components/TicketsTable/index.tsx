import { useState, useEffect } from 'react';
import  api  from '../../services/api';
import { Container } from "./styles"

interface IIngressos {
    id: string;
    local: string;
    dataEvento: string;
    hora: string;
    modalidade: string;
    valor: number;
    lote: string;
}

export function TicketsTable(){

        //cadastrar
        const[events, setEvents] = useState<IIngressos[]>([]);

        useEffect(() => {
            api.get('events').then(response => setEvents(response.data))
        }, [])

    return(
        <Container>
            <table>
                <thead>
                    <tr>
                        <th>☣ LOCAL</th>
                        <th>☣ DATA</th>
                        <th>☣ HORÁRIO</th>
                        <th>☣ MODALIDADE</th>
                        <th>☣ VALOR</th>
                        <th>☣ LOTE</th>
                    </tr>
                </thead>
                <tbody>
                    {events.map(events => (
                        <tr>
                        <td>{events.local}</td>
                        <td>{events.dataEvento}</td>
                        <td>{events.hora}</td>
                        <td className='meiaentrada'>{events.modalidade}</td>
                        <td>{events.valor}</td>
                        <td>{events.lote}</td>
                    </tr>
                    ))}
                </tbody>
            </table>
        </Container>
    )
}

