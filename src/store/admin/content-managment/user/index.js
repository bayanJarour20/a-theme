import api from "@api";
import router from "@/router";

export default {
  state: {
    userList:[],
      userDto: {
        id: "",
        fullName: "",
        imagePath: "",
        bio: "",
        numOfCompletedProjects: 0,
        numOfConnections: 0,
        evalution: 0,
        cvUrl: "",
        careerDtos: [],
        educationDtos: [],
        serviceDtos: [],
        workDtos: []
      },
      worksDto:{
        id:"",
        name: "",
      description: "",
        link: "",
        createdDate: "",
        documentDtos: [],
        categoryDtos: [],
        personDtos: []

      }
  },
  mutations: {
      Set_user_Dto(state, payload) {
          if (payload) {
              Object.assign(state.userDto, payload);
          } else {
              Object.assign(state.userDto, {
                  id: 0,
                  name: "",
                  PersonId: "",
                  WorkName:"",
                  AboutHim:"",
                  hisSkills:"",
                  statistics:"",
                  documentation:"",
                  decorations:""
              });
          }
      },
      Get_User(state, payload) {
        state.userList = payload;
      },
      Get_User_Details(state,payload){
          Object.assign(state.userDto, payload);        
      },
      get_Works(state,payload){
        Object.assign(state.worksDto, payload);        

      }
  },
  actions:{
    getAllUsers({ commit },type) {
      api.get("Account/Dash/GetUsersByType?type="+type, ({ data }) => {
        commit("Get_User", data);
      });
    },
    deleteUser(ctx,id){
      api.delete("Notification/Dash/Delete?id=" + id, ({ data }) => {
        if (data) {
          router.push("/admin/user");        }
      });
    },
    getUserDetails({ commit },id) {
      api.get("Portfolio/App/GetPortfolioById?id="+id, ({ data }) => {
        commit("Get_User_Details", data);
      });
    },
    getWorks({commit},id){
      api.get("Work/GetById?id="+id, ({ data }) => {
        commit("get_Works", data);
      });
    }
  }
}