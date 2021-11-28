import { Summary } from '../Summary';
import { TicketsTable } from '../TicketsTable';
// import { Events } from '../Events';
import { Container } from './styles';

export function Dashboard() {
    return(
        <Container>
            <Summary />
            <TicketsTable />
            {/* <Events /> */}
        </Container>
    )
}