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
    offersList:[],
    commentList:[],
  },
  mutations: {
    Get_Project(state, payload) {
      state.projectList = payload;
    },
    Get_Project_Details(state,payload){
      Object.assign(state.projectDto, payload);
    },
    Get_Offer(state, payload){
      state.offersList = payload;
    },
    Get_Comment(state, payload){
      state.commentList = payload;
    }
  },
  actions: {
    getProjectDetails({ commit }) {
      api.get("Service/Dash/GetAll?type=1", ({ data }) => {
        console.log(data)
        commit("Get_Project", data);
      });
    },
    getOffer({ commit },id) {
      api.get("Offer/Dash/GetCommentsByServiceId?serviceId="+ id, ({ data }) => {
        commit("Get_Offer", data);
      });
    },
    getComment({ commit },id){
      api.get("Comment/App/GetCommentsByServiceId?serviceId="+ id, ({ data }) => {
        commit("Get_Comment", data);
      });
    },
    getProjectDetailsGetByID({commit},id){
      api.get("Service/App/GetById?id=" +id, ({ data }) => {
        commit("Get_Project_Details", data);
    });
  }
  },
};
