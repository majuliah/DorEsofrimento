import styled from 'styled-components';

export const Container = styled.div`
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 2rem;
    margin: -2.5rem;

    div{
        background: var(--card);
        border-radius: 0.80rem;
        padding: 1.5rem 2rem;
        color: var(--white);
        box-shadow: 0px 5px 5px 0px black;

        &:hover{
            filter: brightness(0.8);
        }

        header{
            display: flex;
            align-items: center;
            justify-content: space-between;
    }
    strong{
        margin-top: 2rem;
        font-size: 2rem;
        font-weight: 500;
        line-height: 3rem;
        color: var(--yellow);
    }

    &.highlight-background{
        background: #151515;
        color: var(--white);
    }

    }
`;