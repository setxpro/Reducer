import { createGlobalStyle } from "styled-components";


export default createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }
    *,body {
       font-size: calc(60% + 0.8vmin);
       font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
    }

`;