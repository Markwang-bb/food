import { createBrowserRouter } from "react-router-dom";
import FoodLottery from './components/FoodLottery';
import Home from './components/Home';
import ErrorPage from "./components/ErrorPage";


const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />,
  },
  {
    path: '/foodlottery',
    element: <FoodLottery />,
  },
  {
    path: "*",
    element: <ErrorPage />,
  },
]);

export default router;
