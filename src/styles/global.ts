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

`;
