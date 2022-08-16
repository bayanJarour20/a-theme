import api from "@api";
export default {
  state: {
    projectList: [],
    projectDto: {
      id: "",
      name: "",
      ownerId: "",
      nameOwner: "",
      description: "",
      evalution: 0,
      serviceType: 1,
      minPrice: 0,
      maxPrice: 0
    },
  },
  mutations: {
    Get_Project(state, payload) {
      state.projectList = payload;
    },
    Get_Project_Details(state,payload){
      state.projectDto = payload;
    }
  },
  actions: {
    getProjectDetails({ commit },id) {
      api.get("GetServices?categoryId="+id, ({ data }) => {
        commit("Get_Project", data);
      });
    },
    getProjectDetailsGetByID({commit},id){
      api.get("Service/App/GetById?id=" +id, ({ data }) => {
        commit("Get_Project_Details", data);
    });
  }
  },
};
