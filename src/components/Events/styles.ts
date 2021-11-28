import styled from 'styled-components';
import adm from '../../assets/cards/adm.svg';

export const Container = styled.div`

display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 4rem;
    margin: -2.5rem;

    div{
        background: url(${adm});
        border-radius: 0.80rem;
        padding: 1.5rem 2rem;
        box-shadow: 0px 5px 5px 0px black;

        &:hover{
            filter: brightness(0.8);
        }
    }

`;