import { ThemeProvider } from "styled-components"
import { GlobalStyle, theme } from "./styles"

function App() {

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
    </ThemeProvider>
  )
}

export default App
