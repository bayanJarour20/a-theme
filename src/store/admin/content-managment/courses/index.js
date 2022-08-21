import api from "@api";
import router from "@/router";

export default {
    state: {
        courcesList: [],
        courcesDto: {
          id: "",
          name: "",
          platformType: 0
        },
        searchDto: {
          keys: [],
          query: '' },
          ids:[],
    },
    mutations: {
        Cources_List(state, payload) {
            state.courcesList = payload;
        },
        Reset_Course_Dto(state, payload) {
          if (payload) {
              Object.assign(state.courcesDto, {
                id: payload.id,
                name: payload.name,
                platformType: payload.platformType,

            });
          } else {
              Object.assign(state.courcesDto, {
                  id: "00000000-0000-0000-0000-000000000000",
                  name: "",
                  platformType: 0,

              });
          }
        },
        Add_Course(state, payload) {
            state.courcesList.unshift(payload);
            
        },
        Update_Course(state, payload) {
            state.courcesDto.name = payload.name;
            state.courcesDto.id = payload.id;
            state.courcesDto.platformType = payload.platformType;
        },
        Set_Search_Dto(state, payload) {
          Object.assign(state.searchDto, payload)
      },
        delete_Course_List(state, payload) {
          let MapOfIds = new Map();
          var idx;
          var tempList = [];
          for (idx = 0; idx < payload.length; idx++) {
              MapOfIds.set(payload[idx], 1);
          }
          for (idx = 0; idx < state.courcesList.length; idx++) {
            if (MapOfIds.has(state.courcesList[idx].id) === false) {
              tempList.push(state.courcesList[idx]);
            }
          }
          state.courcesList = tempList;
      }
    },
    actions: {
        getCourcesList({ commit }) {
            api.get("Course/Dash/GetAll", ({ data }) => {
              
                commit("Cources_List", data);
            });
        },
        addCourse({ commit }, payload) {
           
            api.post("Course/Dash/Create", payload, ({ data }) => {
                commit("Add_Course", data);
            });
          },
            
          
          updateCourse({ commit }, payload) {
            api.put("Course/Dash/Update", payload, ({ data }) => {
                commit("Update_Course", data);
            });
        },
        deleteCourse(ctx, id) {
            api.delete("Course/Dash/Delete?id=" + id, ({ data }) => {
                if (data.isSuccess) {
                    router.push("/courses");
                }
            });
        },
        deleteAllCourse({commit}, ids) {
          api.delete("Course/Dash/DeleteRange" , ({data})=>{
            if(data){
              commit("delete_Course_List", ids);
            }
          },{}, ids);
      },
       
    }
};
