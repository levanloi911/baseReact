import Hearder from "~/layouts/header";
import Following from "~/pages/Following";
import Home from "~/pages/Home";

const publicRouter = [
  {
    path: "/",
    component: Home,
  },
  {
    path: "/following",
    component: Following,
    layout: Hearder,
  },
];
const privateRouter = [];
export { publicRouter, privateRouter };
