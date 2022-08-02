import { All } from "@/router";
// import store from "@/store";
export default [
   
    {
      path: "settings",
      name: "admin settings",
      components: {
        default: () => import("@/views/admin/settings"),
      },
      meta: () => ({
        roles: [All],
        layout: "vertical",
        breadcrumb: [
          {
            text: "settings",
            active: true,
          },
        ],
      }),
    },
]