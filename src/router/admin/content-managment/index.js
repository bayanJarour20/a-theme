import { All } from "@/router";
// import store from "@/store";
export default [
  {
    path: "user",
    name: "admin user",
    components: {
      default: () => import("@/views/admin/content-managment/user"),
      action: () =>
        import("@/views/admin/content-managment/user/components/actions"),
    },
    meta: () => ({
      layout: "vertical",
      roles: [All],
      breadcrumb: [
        {
          text: "user",
          active: true,
        },
      ],
    }),
  },
  {
    path: "user/details/:id",
    name: "admin userDetails",
    components: {
      default: () => import("@/views/admin/content-managment/user/details.vue"),
    },
    props: {
      default: true,
    },
    meta: () => ({
      layout: "vertical",
      roles: [All],
      breadcrumb: [
        {
          text: "user",
          active: false,
          to: "/admin/user",
        },
      ],
    }),
  },
  {
    path: "user/details/:id/ProjectDetails",
    name: "admin projectDetails",
    components: {
      default: () =>
        import("@/views/admin/content-managment/user/pages/projectUser.vue"),
    },
    props: {
      default: true,
    },
    meta: () => ({
      layout: "vertical",
      roles: [All],
      breadcrumb: [
        {
          text: "projectDetails",
          active: false,
          to: "/admin/user/details/:id",
        },
      ],
    }),
  },
  {
    path: "user/details/:id/WorksUser/:id",
    name: "admin WorksUser",
    components: {
      default: () =>
        import("@/views/admin/content-managment/user/pages/WorksUser.vue"),
    },
    props: {
      default: true,
    },
    meta: () => ({
      layout: "vertical",
      roles: [All],
      breadcrumb: [
        {
          text: "WorksUser",
          active: false,
          to: "/admin/user/details/:id",
        },
      ],
    }),
  },
  {
    path: "projects",
    name: "admin projects",
    components: {
      default: () => import("@/views/admin/content-managment/projects"),
      action: () =>
        import(
          "@/views/admin/content-managment/projects/components/actions.vue"
        ),
    },
    meta: () => ({
      layout: "vertical",
      roles: [All],
      breadcrumb: [
        {
          text: "projects",
          active: true,
        },
      ],
    }),
  },
  {
    path: "projects/details/:id",
    name: "projects details",
    components: {
      default: () =>
        import("@/views/admin/content-managment/projects/details.vue"),
    },
    props: {
      default: true,
    },
    meta: () => ({
      layout: "vertical",
      roles: [All],
      breadcrumb: [
        {
          text: "projects",
          active: false,
          to: "/admin/projects",
        },
      ],
    }),
  },
  {
    path: "projects/details/:id/offers",
    name: "projects details offers",
    components: {
      default: () =>
        import("@/views/admin/content-managment/projects/offers.vue"),
    },
    props: {
      default: true,
    },
    meta: () => ({
      layout: "vertical",
      roles: [All],
      breadcrumb: [
        {
          text: "projects",
          active: false,
          to: "/admin/projects/:id",
        },
      ],
    }),
  },
  {
    path: "/admin/commonQuestions",
    name: "admin commonQuestions",
    components: {
      default: () => import("@/views/admin/content-managment/questions"),
      action: () =>
        import(
          "@/views/admin/content-managment/questions/components/create-questions.vue"
        ),
    },
    meta: () => ({
      layout: "vertical",
      roles: [All],
      breadcrumb: [
        {
          text: "commonQuestions",
          active: true,
        },
      ],
    }),
  },
  {
    path: "category/:id?",
    name: "category",
    components: {
      default: () => import("@/views/admin/content-managment/classification"),
      action: () =>
        import(
          "@/views/admin/content-managment/classification/components/categories-button-action.vue"
        ),
    },
    props: {
      default: true,
    },
    meta: () => ({
      layout: "vertical",
      roles: [All],
      breadcrumb: [
        {
          text: "category",
          active: true,
        },
      ],
    }),
  },
  {
    path: "notifications",
    name: "admin notifications",
    components: {
      default: () => import("@/views/admin/content-managment/notifications"),
      action: () =>
        import(
          "@/views/admin/content-managment/notifications/components/actions.vue"
        ),
    },
    meta: () => ({
      layout: "vertical",
      roles: [All],
      breadcrumb: [
        {
          text: "notifications",
          active: true,
        },
      ],
    }),
  },
  {
    path: "contactUs",
    name: "admin contactUs",
    components: {
      default: () => import("@/views/admin/content-managment/contactUs"),
      action: () =>
        import(
          "@/views/admin/content-managment/contactUs/components/create-contact.vue"
        ),
    },
    meta: () => ({
      layout: "vertical",
      roles: [All],
      breadcrumb: [
        {
          text: "contactUs",
          active: true,
        },
      ],
    }),
  },
  {
    path: "contactUs/details/:id",
    name: "contactUs details",
    components: {
      default: () =>
        import("@/views/admin/content-managment/contactUs/details.vue"),
    },
    props: {
      default: true,
    },
    meta: () => ({
      layout: "vertical",
      roles: [All],
      breadcrumb: [
        {
          text: "contactUs",
          active: false,
          to: "/admin/contactUs",
        },
      ],
    }),
  },
  {
    path: "faculties",
    name: "admin faculties",
    components: {
      default: () => import("@/views/admin/content-managment/faculties"),
      action: () =>
        import(
          "@/views/admin/content-managment/faculties/components/create-facultie.vue"
        ),
        
    },
    meta: () => ({
      layout: "vertical",
      roles: [All],
      breadcrumb: [
        {
          text: "faculties",
          active: true,
        },
      ],
    }),
  },
  {
    path: "advertising",
    name: "admin advertising",
    components: {
      default: () => import("@/views/admin/content-managment/advertising"),
      action: () =>
      import(
        "@/views/admin/content-managment/advertising/components/create-advertising.vue"
      ),  
    },
    meta: () => ({
      layout: "vertical",
      roles: [All],
      breadcrumb: [
        {
          text: "advertising",
          active: true,
        },
      ],
    }),
  },
  {
    path: "career",
    name: "admin career",
    components: {
      default: () => import("@/views/admin/content-managment/career"),
      action: () =>
        import(
          "@/views/admin/content-managment/career/components/create-career.vue"
        ),
    },
    meta: () => ({
      layout: "vertical",
      roles: [All],
      breadcrumb: [
        {
          text: "career",
          active: true,
        },
      ],
    }),
  },
  {
    path: "courses",
    name: "admin courses",
    components: {
      default: () => import("@/views/admin/content-managment/courses"),
      action: () =>
        import(
          "@/views/admin/content-managment/courses/components/create-course.vue"
        ),
        
    },
    meta: () => ({
      layout: "vertical",
      roles: [All],
      breadcrumb: [
        {
          text: "courses",
          active: true,
        },
      ],
    }),
  },
  
 
];
