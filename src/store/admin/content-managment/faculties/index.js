import api from "@api";
export default {
    state: {
        facultiesList: [],
        facultyDto: {
            id: "",
            name: "",
            universityId: ""
        },
        ids:[]
    },
    mutations: {
        Get_Faculties_Details(state, payload) {
          state.facultiesList = payload;
          
        },
        Create_Faculty(state, data) {
            state.facultiesList.unshift(data);
        },
        Update_Faculty(state, data) {
            Object.assign(
                state.facultiesList.find(item => item.id == data.id),
                data
            );
        },
        Set_Facultie_Dto(state, payload) {
            console.log(payload);
            if (payload) {
                Object.assign(state.facultyDto, payload);
            } else {
                Object.assign(state.facultyDto, {
                    id: "",
                    name: "",
                    universityId: 0
                });
            }
        },
        Delete_Faculty(state, id) {
            state.facultiesList.splice(
                state.facultiesList.findIndex(item => item.id == id),
                1
            );
        },
        delete_Faculty_List(state, payload) {
          let MapOfIds = new Map();
          var idx;
          var tempList = [];
          for (idx = 0; idx < payload.length; idx++) {
              MapOfIds.set(payload[idx], 1);
          }
          for (idx = 0; idx < state.facultiesList.length; idx++) {
            if (MapOfIds.has(state.facultiesList[idx].id) === false) {
              tempList.push(state.facultiesList[idx]);
            }
          }
          state.facultiesList = tempList;
      }
    },
    actions: {
        getFacultiesDetails({ commit }) {
            api.get("Faculty/GetAll", ({ data }) => {
                commit("Get_Faculties_Details", data);
            });
        },
        actionFaculty({ commit }, payload) {
          console.log(payload.id)
          if (!payload.id) {
            api.post("Faculty/Dash/Create", payload, ({ data }) => {
                    commit("Create_Faculty", data);
                  });
                } else {
                  api.put("Faculty/Dash/Update", payload, ({ data }) => {
                    commit("Update_Faculty", data);
                });
              }
        },
        deleteAllFaculty({commit}, ids) {
          api.delete("Faculty/Dash/DeleteRange" , (data) => {
            if (data)
            commit("delete_Faculty_List", ids);

          },{},ids);
        },
        deleteFaculty({ commit }, id) {
            api.delete("Faculty/Dash/Delete?id=" + id, ({ data }) => {
                if (data) {
                    commit("Delete_Faculty", id);
                }
            });
        }
    }
};
