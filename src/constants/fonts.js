import { Global } from '@emotion/react'

const Fonts = () => (
  <Global
    styles={`
    @font-face {
        font-family: 'IranYekan';
        src: url('./assets/fonts/IranYekanWebRegular.ttf');
        font-weight: 400;
        font-style: normal;
      }

      @font-face {
        font-family: 'IranYekanBold';
        src: url('./assets/fonts/IranYekanWebBold.ttf');
        font-weight: 700;
        font-style: normal;
      }
    `}
  />
)

export default Fonts
