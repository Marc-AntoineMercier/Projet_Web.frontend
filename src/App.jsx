import "./App.css"
import {createBrowserRouter, RouterProvider} from "react-router-dom"
import { ColorModeContext, useMode } from "./theme/theme";
import { CssBaseline, ThemeProvider } from "@mui/material";
import DashBoard from "./component/Dashboard";
import Home from "./page/Home"
import About from "./page/About"
import NotFound from "./page/NotFound"
import Login from "./page/Login"
import Register from "./page/Register"

const routes = [
  {
    path: "/",
    element: <Home />
  },
  {
    path: "/about",
    element: <About />
  },
  {
    path:"/login",
    element: <Login />
  },
  {
    path:"/register",
    element: <Register />
  },
  {
    path: "/dashboard",
    element: <DashBoard element={<p>Base</p>}/>
  },
  {
    path: "*",
    element: <NotFound />
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
