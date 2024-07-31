import { createGlobalStyle } from 'styled-components';

const Global = createGlobalStyle`
/*  8559fb 573d71 faec57 */
:root {
/* Colors */
--white: #fff;
--light-gray: #f9f9f9;
--delicate-lilac: #f9f7fe;
--light-azure: #f8f9ff;
--light-smoke: #f5f5f5;
--light-silver: #f1f1f1;
--light-platinum: #ebebeb;
--soft-lilac: #f0eef6;
--soft-lavender: #e9ebf1;
--gray-lilac: #ece9f6;
--light-ash: #e0e0e0;
--black: #000;
--black-primary: rgba(0, 0, 0, 0.80);
--pink: #9c27b0;
--royal-indigo: #8559fb;
--dusky-purple: #573d71;
--purple: #52379d;
--deep-lavender-purple: #8354be;
--midnight-purple: #332264;
--dark-sapphire: #181e4b;
--blue-gray: #232F3E;
--grayish-charcoal: #606060;
--neutral-charcoal: #7d7d7d;
--slate-blue: #5e6282;
--dusky-indigo: #39425D;
--dark-charcoal: #262626;
--intense-red: #c31212;
--intense-yellow: #faec57;

/* BORDER RADIUS */
--radius-midle: 20px;
--radius-circle: 50%;

/* TRANSITION */
--transition-1: 250ms ease;
--transition-2: 500ms ease;
--transition-3: 1000ms ease;
}

/* #RESET */
*,
*::before,
*::after {
margin: 0;
padding: 0;
box-sizing: border-box;
font-synthesis: none;
text-rendering:optimizeLegibility;
-webkit-text-size-adjust: 100%;
}

li { list-style: none; }

img::selection{
background: none;
}

label::selection{
background: none;
}

a,
img,
data,
span,
input,
button,
select,
textarea { display: block; }

a {
color: inherit;
}

img { height: auto; }

input,
button,
select,
textarea {
background: none;
border: none;
font: inherit;
}

button {
cursor: pointer;
}

html {
scroll-behavior: smooth;
scroll-snap-type: y mandatory;
}

body,
h1,
h2,
h3,
p,
a {
text-decoration: none;
}

body {
font-family: 'Quicksand', sans-serif;
line-height: normal;
font-style: normal;
}

@media screen and (min-device-pixel-ratio: 1.5), screen and (min-resolution: 1.5dppx) {
  body {
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
}

::-webkit-scrollbar {
width: 8px !important;
background: transparent;
}

::-webkit-scrollbar-thumb {
border-radius: 3px;
background: rgba(63, 67, 80, 0.24);
}

::-webkit-scrollbar-thumb:hover {
background: rgba(63, 67, 80, 0.32);
}
`;

export default Global;
