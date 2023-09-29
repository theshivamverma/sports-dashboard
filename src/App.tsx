import { ThemeProvider } from "styled-components"
import { Route, Routes } from "react-router";
import { GlobalStyle, theme } from "./styles"
import { Details, Home } from "./pages"

function App() {

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/details" element={<Details />} />
      </Routes>
    </ThemeProvider>
  );
}

export default App
