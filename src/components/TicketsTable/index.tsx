import { useState, useEffect } from 'react';
import  api  from '../../services/api';
import { Container } from "./styles"

interface IIngressos {
    id: string;
    local: string;
    dataEvento: string;
    hora: string;
    tipo: string;
    valor: number;
    lote: string;
    likes: string;
    dislikes: string;
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
                        <td className='meiaentrada'>{events.tipo}</td>
                        <td>{events.valor}</td>
                        <td>{events.lote}</td>
                        <td>
                        <li>
                            <button onClick={(async () => {
                            await api.post(`/events/like/${events.id}`)
                            api.get('/events').then(likes => {setEvents(likes.data)})
                        })}>
                            Uau ☬
                            </button>

                            <span>{events.likes}</span>

                            <button onClick={(async () => {
                            await api.post(`/events/dislike/${events.id}`)
                            api.get('/events').then( dislikes => {setEvents(dislikes.data)})
                        })}>
                            Bléh ☢
                            </button>
                            <span>{events.dislikes}</span>
                            </li>
                        </td>
                    </tr>
                    ))}
                </tbody>
            </table>
        </Container>
    )
}

