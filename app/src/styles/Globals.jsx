import { createGlobalStyle } from "styled-components";

export const GlobalStyled = createGlobalStyle`


* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

body {
    font-family: 'Archivo';
    width: 100vw;
    height: 100vh;
    background: #000;
    overflow: hidden;


}

img {
    width: auto;
    height: auto;
    max-width: auto;
    min-height: auto;
}


button {
    cursor: pointer;
}

a {
 text-decoration: none;
}

ul,li {
    list-style: none;
}

`;

export const Theme = {
  colors: {
    blue: "#85c7f2",
    yellow: "#ffc400",
    black: "#000",
    white: "#dbdbdb",
    gray: "#636363",
    dark: "#4c4c4c",
    red: "#FF0000",
  },
};
