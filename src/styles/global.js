import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
  :root {
    --background: #E5E5E5;
    --green: #00796B;
    --grey-medium-light: #9E9E9E
  }

 * {
   margin: 0;
   padding: 0;
   box-sizing: border-box;
 }

 html { 
   @media(max-width: 1080px) {
     font-size: 93.75%;
   }

   @media(max-width: 720px) {
     font-size: 87.5%;
   }
 }

 body { 
   background: var(--background);
   -webkit-font-smoothing: antialiased;
 }

 body, input, textarea, button {
   font-family: 'Roboto', sans-serif;
   font-weight: 400;
 }

 h1, h2, h3, h4, h5, h6, strong {
   font-weight: 600;
 }

 button {
   cursor: pointer;
 }

 .select-option-container {
   display: flex;
   flex-direction: column;
   align-items: flex-start !important;
 }

 

`