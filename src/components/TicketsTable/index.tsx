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
    likes: string;
    deslikes: string;
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
                        <td>
                        <li>
                            <h1>Curti</h1>
                            <button onClick={(async () => {
                            await api.post(`/events/like/${events.id}`)
                            api.get('/events').then(likes => {setEvents(likes.data)})
                        })}>
                            Uau
                            </button>
                            <span>{events.likes}</span>

                            <h2>Eca</h2>
                            <button onClick={(async () => {
                            await api.post(`/events/dislike/${events.id}`)
                            api.get('/events').then( deslikes => {setEvents(deslikes.data)})
                        })}>
                            Bléh
                            </button>
                            <span>{events.deslikes}</span>
                            </li>
                        </td>
                    </tr>
                    ))}
                </tbody>
            </table>
        </Container>
    )
}

