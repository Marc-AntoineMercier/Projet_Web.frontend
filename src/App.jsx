import "./App.css"
import {createBrowserRouter, RouterProvider} from "react-router-dom"
import { ColorModeContext, useMode } from "./theme/theme";
import { CssBaseline, ThemeProvider } from "@mui/material";
import DashBoard from "./component/Dashboard";
import Home from "./page/home/Home"
import About from "./page/home/About"
import NotFound from "./page/error/NotFound"
import Login from "./page/home/Login"
import Register from "./page/home/Register"
import QuickPage from "./page/dashboard/QuickPage";
import Expence from "./page/dashboard/Expense";
import Calendar from "./page/dashboard/Calendar";
import Budget from "./page/dashboard/Budget";
import Download from "./page/home/Download";
import UserSetting from "./page/dashboard/UserSetting"
import Forgot from "./page/home/Forgot";


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
    path: "/download",
    element: <Download />
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
    path:"/forgot",
    element: <Forgot />
  },
  {
    path: "/dashboard",
    element: <DashBoard element={<QuickPage />}/>
  },
  {
    path: "/dashboard/expense",
    element: <DashBoard element={<Expence />}/>
  },
  {
    path: "/dashboard/calendar",
    element: <DashBoard element={<Calendar />}/>
  },
  {
    path: "/dashboard/budget",
    element: <DashBoard element={<Budget />}/>
  },
  {
    path:"/user-setting",
    element: <UserSetting />
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
