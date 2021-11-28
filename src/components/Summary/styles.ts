import styled from 'styled-components';

export const Container = styled.div`
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 2rem;
    margin: -2.5rem;

    div{
        background: #44000D;
        border-radius: 0.80rem;
        padding: 1.5rem 2rem;
        color: #ffff;
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
        color: #FDFDC4;
    }

    &.highlight-background{
        background: #151515;
        color: #ffff;
    }

    }
`;