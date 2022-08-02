import { All } from "@/router";
// import store from "@/store";
export default [
    {
        path: "appUsers",
        name: "admin appUsers",
        components: {
            default: () => import("@/views/admin/appUsers"),
        },
        meta: () => ({
            roles: [All],
            layout: "vertical",
            breadcrumb: [
                {
                    text: "مستخدمو التطبيق",
                    active: true
                }
            ]
        })
    },
    
]