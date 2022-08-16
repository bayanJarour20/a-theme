import api from "@api";
export default {
  state: {
   
    AccountDto: {
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
        commit("Create_Account", data);
      });
    },
  },
};
