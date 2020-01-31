import Dashboard from "views/Dashboard.jsx";
import Notifications from "views/Notifications.jsx";
import Icons from "views/Icons.jsx";
import Typography from "views/Typography.jsx";
import TableList from "views/Tables.jsx";
import Productos from "views/Productos.jsx";
import Categorias from "views/Categorias.jsx";
import UserPage from "views/User.jsx";
import Inicio from "views/Inicio.jsx";

var routes = [
  {
    path: "/dashboard",
    name: "Inicio",
    icon: "nc-icon nc-bank",
    component: Inicio,
    layout: "/admin"
  },
  {
    path: "/Productos",
    name: "Productos",
    icon: "nc-icon nc-app",
    component: Productos,
    layout: "/admin"
  },
  {
    path: "/Categorias",
    name: "Categorias",
    icon: "nc-icon nc-tile-56",
    component: Categorias,
    layout: "/admin"
  },
  // {
  //   path: "/icon",
  //   name: "Icons",
  //   icon: "nc-icon nc-diamond",
  //   component: Icons,
  //   layout: "/admin"
  // },
  // {
  //   path: "/maps",
  //   name: "Maps",
  //   icon: "nc-icon nc-pin-3",
  //   component: Maps,
  //   layout: "/admin"
  // },
  // {
  //   path: "/notifications",
  //   name: "Notifications",
  //   icon: "nc-icon nc-bell-55",
  //   component: Notifications,
  //   layout: "/admin"
  // },
  // {
  //   path: "/user-page",
  //   name: "User Profile",
  //   icon: "nc-icon nc-single-02",
  //   component: UserPage,
  //   layout: "/admin"
  // },
  // {
  //   path: "/tables",
  //   name: "Table List",
  //   icon: "nc-icon nc-tile-56",
  //   component: TableList,
  //   layout: "/admin"
  // },
  // {
  //   path: "/Typography",
  //   name: "Table List",
  //   icon: "nc-icon nc-tile-56",
  //   component: Typography,
  //   layout: "/admin"
  // },
];
export default routes;
