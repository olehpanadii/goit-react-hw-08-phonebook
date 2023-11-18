import { createGlobalStyle } from 'styled-components';
import 'modern-normalize';

export const GlobalStyle = createGlobalStyle`
body {
  margin: 0;
 font-family: arimo;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
    background: linear-gradient(135deg, #4f94cd, #ffd700);
  color: ${p => p.theme.colors.black};
background-attachment: fixed; 
}

code {
  font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New',
    monospace;
}
p{
padding: 0;
margin: 0;}

a{
text-decoration:none}


h1,h2,h3{margin:0}
ul{padding:0;
margin:0;}
`;
