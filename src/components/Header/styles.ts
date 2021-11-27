import styled from "styled-components";

export const Container = styled.header`
    background: var(--winedark);

`;

export const Content = styled.div`
    max-width: 1120px;
    margin: 0 auto;
    padding: -1rem 0rem 10rem;
    display: flex;
    align-items: center;
    justify-content: space-between;

    button{
        font-size: 1rem;
        color: #FFF;
        background: var(--black);
        border: 0;
        padding: 1rem 2rem;
        border-radius: 0.25rem;
        height: 3rem;

        transition: filter 0.2s;

        &:hover{
            filter: brightness(0.3);

        }
    }

`;