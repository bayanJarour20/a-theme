import { All } from "@/router";
export default [
  {
    header: "menu",
  },
  {
    title: "home",
    to: "/admin/home",
    icon: "home",
    roles: [All],
  },
  {
    header: "content-mangment",
  },
  {
    to: '/admin/user',
    title: 'user',
    roles:[All],
    icon: "account-tie",
  },
  {
    to: '/admin/projects',
    title: 'projects',
    roles:[All],
    icon: "subtitles-outline ",
  },
  {
    to: '/admin/commonQuestions',
    title: 'commonQuestions',
    roles:[All],
    icon: "chat-question ",
  },
  {
    to: '/admin/notifications',
    title: 'notifications',
    roles:[All],
    icon: "bell-ring ",
  },
  {
    to: '/admin/category',
    title: 'category',
    roles:[All],
    icon: "format-indent-increase",
  },
  {
    to: '/admin/contactUs',
    title: 'contactUs',
    roles:[All],
    icon: "card-account-mail",
  },
  {
    to: '/admin/advertising',
    title: 'advertising',
    roles:[All],
    icon: "card-account-mail",
  },
  {
    to: '/admin/faculties',
    title: 'faculties',
    roles:[All],
    icon: "building",
  },
  {
    header: "global-settings",
  },
  {
    title: "settings",
    to: "/admin/settings",
    icon: "cogs",
    roles: [All],
  },
  

];
