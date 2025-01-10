import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
  :root {
    --primary: #2563eb;
    --secondary: #1e40af;
    --accent: #60a5fa;
    --dark: #0f172a;
    --light: #f8fafc;
    --white: #ffffff;
    --text: #334155;
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html {
    scroll-behavior: smooth; // 부드러운 스크롤 추가
    scroll-padding-top: 80px; // 네비게이션 바 높이만큼 패딩 추가
  }

  body {
    font-family: 'Inter', sans-serif;
    line-height: 1.6;
    color: var(--text);
  }

  button {
    font-family: 'Inter', sans-serif;
  }
`;

export default GlobalStyles;