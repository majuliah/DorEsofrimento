import styled from 'styled-components';

export const Container = styled.form`
    h2{
        color: var(--yellow);
        font-size: 1.5rem;
        margin-bottom: 2rem;   
        display: flex;
        align-items: center;
        justify-content: center;
    }

    input{
        width: 100%;
        padding: 0 1.5rem;
        height: 4rem;
        border-radius: 0.5rem;
        color: var(--white);

        border: 1px solid var(--brown);
        background: var(--dark);

        font-weight: 400;
        font-size: 1rem;

        & + input{
            margin-top: 0.01rem;
        }
        

    }

    button[type="submit"]{
        width: 100%;
        padding: 0 1.5rem;
        height: 3.5rem;
        margin-top: 0.8rem;
        background: var(--black);
        color: var(--white);
        border: 0;
        font-size: 1rem;
        border-radius: 0.50rem;
        font-weight: 500;

        &:hover{
            filter: brightness(0.3);
        }
    }




`;