import { createGlobalStyle } from 'styled-components' 

// VARIABLES

export const variables = {
  color: {
    controlBg: '#F4F6F8',
    directoryLine: '#F1F1F1',
    taskBg: '#ffffff',
  },
  
  size: {
    paddingTop: '55px 25px',
    paddingTask: '55px 55px'
  },

  SVGColor: {
    list: '#7C7C7C',
    close: '#E3E3E3',
    add: '#868686',
    addHover: '#383838'
    
  }
}

// GlobalStyle
export const GlobalStyle = createGlobalStyle`

body {
  height: 100vh;
  font-family: 'Roboto', -apple-system, system-ui, sans-serif;
  color: #000;
}

*, *::before, *::after {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}
ul, ol {
  list-style: none;
}

button {
  outline: none;
  font-family: 'Roboto', -apple-system, system-ui, sans-serif;
  font-size: 14px;
}

input {
  font-family: 'Roboto', -apple-system, system-ui, sans-serif;
  font-size: 14px;
}
`