import { ThemeProvider } from '@mui/material';
import logo from "./logo.svg";
import "./App.css";
import BusFind from "./component/Landing";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import BusShow from "./component/DisplayConent";
import theme from './theme'

function App() {
  return (
    <BrowserRouter>
      <ThemeProvider theme={theme}>
        <Routes>
          <Route path="/" element={<BusFind />}></Route>
        </Routes>
      </ThemeProvider>
    </BrowserRouter>
  );
}

export default App;
