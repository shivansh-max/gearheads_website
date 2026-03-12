import { createGlobalStyle, keyframes } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Bebas+Neue&family=Space+Mono:ital,wght@0,400;0,700;1,400&display=swap');
  *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }
  :root {
    --bg:        #000000;
    --accent:    #2650f5;
    --accent-2:  #00e5a0;
    --text:      #e8eaf0;
    --muted:     #7a8090;
    --font-display: 'Bebas Neue', sans-serif;
    --font-body:    'Space Mono', monospace;
  }
`;

export const fadeUp = keyframes`
  from { opacity: 0; transform: translateY(28px); }
  to   { opacity: 1; transform: translateY(0); }
`;
