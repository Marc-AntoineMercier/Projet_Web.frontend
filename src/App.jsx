import "./App.css"
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ColorModeContext, useMode } from "./theme/theme";
import { CssBaseline, ThemeProvider } from "@mui/material";
import TopBar from "./navbar/TopBar";
import SideBar from "./navbar/SideBar"

export default function App() {
  const [theme, colorMode] = useMode();
  return (
    <BrowserRouter>
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <div className="app">
          <SideBar />
          <div className="content">
            <TopBar/>
            <Routes>
              
            </Routes>
          </div>
        </div>
      </ThemeProvider>
    </ColorModeContext.Provider>
    </BrowserRouter>
  )
}
