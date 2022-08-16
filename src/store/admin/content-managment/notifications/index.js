import api from "@api";
export default {
  state: {
    notificationList: [],
    notificationDto: {
      id: "",
      title: "",
      body:"",
    },
  },
  mutations: {
    Get_Notification_Details(state, payload) {
      state.notificationList = payload;
    },
    Create_Notification(state, data) {
      state.notificationList.unshift(data);
    },
    Set_Notification_Dto(state, payload) {
      if (payload) {
        Object.assign(state.notificationDto, payload);
      } else {
        Object.assign(state.notificationDto, {
          id: "",
          title: "",
          body:""
        });
      }
    },
    Delete_Notification(state, id) {
      state.notificationList.splice(
        state.notificationList.findIndex((item) => item.id == id),
        1
      );
    },
  },
  actions: {
    getNotificationDetails({ commit }) {
      api.get("Notification/Dash/GetNotifications", ({ data }) => {
        commit("Get_Notification_Details", data);
      });
    },
    addNotification({ commit }, payload) {
      console.log(payload);
      api.post("Notification/Dash/Create", payload, ({ data }) => {
        commit("Create_Notification", data);
      });
    },
    deleteAllNotification({ commit }, ids) {
      console.log(ids)
      api.delete("Notification/Dash/DeleteRange", ids, () => {
        commit("delete_Notification_List", ids);
      });
    },
    deleteNotification({ commit }, id) {
      api.delete("Notification/Dash/Delete?id=" + id, ({ data }) => {
        if (data) {
          commit("Delete_Notification", id);
        }
      });
    },
  },
};
