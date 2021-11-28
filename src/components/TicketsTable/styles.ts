import styled from "styled-components";

export const Container = styled.div`
    margin-top: 6rem;
    font-weight: 500;

    table{
        width: 100%;
        border-spacing: 0 0.5rem;
        

        th{
            color: var(--wine);
            font-weight: 800;
            font-size: 1.5rem;
            padding: 1rem 2rem 2rem;
            text-align: left;
            line-height: 2rem;
        }

        td{
            padding: 1rem 2rem;
            border: 0;
            background: var(--black);
            color: var(--yellow);
            border-radius: 0.25rem;
            text-align: justify;

            &:hover{
            filter: brightness(0.9);
        }

        &:first-child{
            color: var(--purpledark)
        }

        &.inteira{
            color: var(--green);
        }

        &.meiaentrada{
            color: var(--salmon)
        }


        }
    }




`;