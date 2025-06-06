import { createGlobalStyle } from "styled-components";
import Screen from "./Screen";
import "@fontsource/poppins";

const GlobalStyle = createGlobalStyle`

:root {
  /* Couleurs principales */
  --brown-dark: #5b3a29;
  --brown-light: #a98260;
  --beige-bg: #f8f1e9;
  --yellow-strong: #facc15;
  --yellow-soft: #fde68a;
  --green-accent: #3f6212;
  --red-accent: #b91c1c;
  --gray-text: #4b5563;
  --white: #ffffff;

  /* Layout */
  --max-width: 1300px;
  --header-height: 6rem;
  --footer-height: 5rem;
  --transition: 0.3s ease;
  --radius: 0.4rem;

  /* Font sizes */
  --fs-900: 5rem;
  --fs-800: 3rem;
  --fs-700: 2.5rem;
  --fs-600: 2rem;
  --fs-500: 1.5rem;
  --fs-400: 1.25rem;
  --fs-300: 1rem;
  --fs-200: 0.875rem;
}

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  border: none;
  background: none;
  outline: none;
}

html {
  scroll-behavior: smooth;
}

body {
  font-family: "Poppins", sans-serif;
  background: var(--beige-bg);
  color: var(--gray-text);
  overflow-x: hidden;
  font-size: 0.625rem;

  ${Screen.sm` font-size: 0.675rem; `}
  ${Screen.md` font-size: 0.75rem; `}
  ${Screen.lg` font-size: 0.875rem; `}
}

img {
  max-width: 100%;
  display: block;
  object-fit: cover;
}

ul {
  list-style: none;
}

a {
  text-decoration: none;
  color: var(--brown-dark);
  transition: var(--transition);
}
a:hover {
  color: var(--green-accent);
}

button {
  cursor: pointer;
  font-family: inherit;
}

main {
  margin-top: var(--header-height);
}

section {
  width: min(100%, var(--max-width));
  margin-inline: auto;
  padding: 2rem 1rem;
}

/* Classes globales */

.page {
  min-height: calc(100vh - (var(--header-height) + var(--footer-height)));
}

.title-xl {
  font-size: var(--fs-700);
  font-weight: bold;
  color: var(--brown-dark);
}

.bg-card {
  background: var(--white);
  border-radius: var(--radius);
  padding: 1.5rem;
  box-shadow: 0 1px 4px rgba(0,0,0,0.05);
}
`;

export default GlobalStyle;
