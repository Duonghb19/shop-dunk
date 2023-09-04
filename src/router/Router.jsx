import { Route } from "react-router-dom";
import HomeComponent from "../view/HomeComponent";
import NotFoundComponent from "../view/NotFoundComponent";
import IphoneComponent from "../view/IphoneComponent";
import "../view/scss/responsive.scss";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "../App";
import LoginComponent from "../view/LoginComponent";
import RegisterComponent from "../view/RegisterComponent";
import CartComponent from "../view/CartComponent";
import NewComponent from "../view/NewComponent";
import IpadComponent from "../view/IpadComponent";
import MacComponent from "../view/MacComponent";
import WatchComponent from "../view/WatchComponent";
import AccessoryComponent from "../view/AccessoryComponent";
import SoundComponent from "../view/SoundComponent";
import DetailProduct from "../view/DetailProduct";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomeComponent />,
  },
  {
    path: "/iphone",
    element: <IphoneComponent />,
  },
  {
    path: "/ipad",
    element: <IpadComponent />,
  },
  {
    path: "/Mac",
    element: <MacComponent />,
  },
  {
    path: "/Watch",
    element: <WatchComponent />,
  },
  {
    path: "/am-thanh",
    element: <SoundComponent />,
  },
  {
    path: "/phu-kien",
    element: <AccessoryComponent />,
  },
  {
    path: "/dang-nhap",
    element: <LoginComponent />,
  },
  {
    path: "/dang-ki",
    element: <RegisterComponent />,
  },
  {
    path: "/gio-hang",
    element: <CartComponent />,
  },
  {
    path: "/tin-tuc",
    element: <NewComponent />,
  },
  {
    path: "/:title",
    element: <DetailProduct />,
  },
  {
    path: "*",
    element: <NotFoundComponent />,
  },
]);
export default router;
