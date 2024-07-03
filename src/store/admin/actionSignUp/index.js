import api from "@api";
import router from "@router";
export default {
  state: {
   
    AccountDto: {
      id:"",
      fullName: "",
      userName: "",
      password: "",
      userType: 1
    },
  },
  mutations: {

    Create_Account(state, payload) {
      if (payload) {
        Object.assign(state.AccountDto, payload);
      } else {
        Object.assign(state.AccountDto, {
          id:"",
          fullName: "",
          userName: "",
          email: "",
          phoneNumber: "",
          password: "",
          cityId: "",
          address: "",
          bDay: "",
          userType: 1
        });
      }
    },

  },
  actions: {

    sinUp({ commit }, payload) {
      console.log(payload);
      api.post("/Account/Create", payload, ({ data }) => {
        router.push("/admin/user");
        commit("Create_Account", data);
      });
    },
  },
};
