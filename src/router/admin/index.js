import { All } from "..";
// import { nullGuid } from "@core/util/global/index.js";
import contentManagement from "./content-managment";
import settingsRout from "./settingsRout"; 
import appUser from "./appUser";
export default [
  {
    path: "",
    redirect: "/admin/home",
  },
  {
    path: "home",
    name: "admin home",
    components: {
      default: () => import("@/views/admin/home"),
      action: () => import("@/views/admin/home/actions/nav-action"),
    },
    meta: () => ({
      roles: [All],
      layout: "vertical",
      breadcrumb: [
        {
          text: "home",
          active: true,
        },
      ],
    }),
  },
  ...contentManagement,
  ...settingsRout,
  ...appUser,
];
