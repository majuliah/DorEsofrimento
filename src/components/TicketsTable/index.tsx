import { Container } from "./styles"

export function TicketsTable(){
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
                    <tr>
                        <td>RIO DE JANEIRO</td>
                        <td>22/12</td>
                        <td>20:00 Brasilia</td>
                        <td className='meiaentrada'>Meia-Entrada</td>
                        <td>R$ 120,00</td>
                        <td>Primeiro Lote</td>
                    </tr>

                    <tr>
                        <td>SÃO PAULO</td>
                        <td>23/12</td>
                        <td>22:00 Brasilia</td>
                        <td className='inteira'>Inteira</td>
                        <td>R$ 520,00</td>
                        <td>Segundo Lote</td>
                    </tr>

                    <tr>
                        <td>MINAS GERAIS</td>
                        <td>24/12</td>
                        <td>19:00 Brasilia</td>
                        <td>Meia-Entrada</td>
                        <td>R$ 320,00</td>
                        <td>Segundo Lote</td>
                    </tr>
                </tbody>
            </table>
        </Container>
    )
}