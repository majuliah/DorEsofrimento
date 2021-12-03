import styled from "styled-components";

export const Container = styled.div`
    margin-top: 6rem;
    font-weight: 500;

    table{
        width: 100%;
        border-spacing: 0 0.5rem;
        

        th{
            color: var(--red);
            font-weight: 800;
            font-size: 1.5rem;
            padding: 1rem 2rem 2rem;
            text-align: left;
            line-height: 2rem;
        }

        td{
            padding: 1rem 2rem;
            border: 0;
            background: #121013;
            color: var(--white);
            border-radius: 0.25rem;
            text-align: justify;

        &:first-child{
            color: var(--red);
        }

        &.inteira{
            color: var(--yellow);
        }

        &.meiaentrada{
            color: var(--yellow)
        }
        }

        button{
        width: 100%;
        padding: 0 1rem;
        height: 2rem;
        margin-top: 0.3rem;
        background: var(--black);
        color: var(--white);
        border: 2;
        font-size: 1rem;
        border-radius: 0.50rem;
        font-weight: 400;

        &:hover{
            filter: brightness(0.6);
        }
        }
    }

`;