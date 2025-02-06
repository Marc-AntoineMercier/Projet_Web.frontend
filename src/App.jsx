import "./App.css"
import {createBrowserRouter, RouterProvider} from "react-router-dom"
import { ColorModeContext, useMode } from "./theme/theme";
import { CssBaseline, ThemeProvider } from "@mui/material";
import DashBoard from "./component/Dashboard";
import Home from "./page/Home"

const routes = [
  {
    path: "/",
    element: <Home />
  },
  {
    path: "/about",
    element: <DashBoard element={<p>About</p>}/>
  },
  {
    path: "/dashboard",
    element: <DashBoard element={<p>Article</p>}/>
  },
  {
    path: "*",
    element: <DashBoard element={<p>Not Found</p>}/>
  }

];

const router = createBrowserRouter(routes);

function App() {
  const [theme, colorMode] = useMode();
  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <RouterProvider  router={router}/>
      </ThemeProvider>
    </ColorModeContext.Provider>
  )
}

export default App
