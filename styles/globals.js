import { css, Global } from '@emotion/react';

export const globalStyles = (
  <Global
    styles={css`
      @font-face {
        font-family: 'Be Vietnam';
        font-style: normal;
        font-weight: 300;
        font-display: swap;
        src: local(''), url('/fonts/Be_Vietnam/BeVietnam-Light.ttf') format('truetype');
      }

      @font-face {
        font-family: 'Be Vietnam';
        font-style: normal;
        font-weight: 400;
        font-display: swap;
        src: local(''), url('/fonts/Be_Vietnam/BeVietnam-Regular.ttf') format('truetype');
      }

      @font-face {
        font-family: 'Be Vietnam';
        font-style: normal;
        font-weight: 700;
        font-display: swap;
        src: local(''), url('/fonts/Be_Vietnam/BeVietnam-Bold.ttf') format('truetype');
      }

      * {
        box-sizing: border-box;
      }

      body {
        margin: 0;
        background-color: #fff;
        font-family: 'Be Vietnam', sans-serif;
      }
    `}
  />
);
