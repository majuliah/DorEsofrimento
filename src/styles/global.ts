import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`

:root{
    --background: #191A19;
    --white: #FEF5ED;
    --purpledark: #1F1D36;
    --purplemedium: #3F3351;
    --brown: #3D0000;
    --wine: #950101;
    --black: #000000;
    --winedark: #630000;
    --red: #F90716;
    --yellow:  #FDFDC4;
    --card: #44000D;
    --dark: #151515;
}

*{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

html{
    @media (max-width: 1090px){
        font-size: 93.75%;
    }
    @media (max-width: 720px){
        font-size: 87.5%;
    }
}

body{
    background: var(--background);
    -webkit-font-smoothing: antialised;
}

body, input, textarea, button{
    font-family: 'Oswald';
    font-weight: 400;
}

h1, h2, h3, h4, h5, h6, strong {
    font-weight: 600;
}

button {
    cursor: pointer;
}

[disable]{
    opacity: 0.6;
    cursor: not-allowed;
}

.react-modal-overlay{
    background: rgba(0, 0, 0, 0.5);


    position: fixed;
    bottom: 0;
    right: 0;
    left: 0;

    display: flex;
    align-items: center;
    justify-content: center;

}

.react-modal-content{
    width: 100%;
    max-width: 576px;
    background: linear-gradient(90deg, rgba(102, 0, 0) 25%, rgba(77, 0, 0) 45%, rgba(51, 0, 0) 60%);
    padding: 3rem;
    position: relative;
    border-radius: 0.25rem;
}

.react-modal-close{
    position: absolute;
    right: 1.5rem;
    left: 1.5rem;
    border: 0;
    background: transparent;
}

`;
