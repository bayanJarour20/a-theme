import api from "@api";
export default {
    state: {
        facultiesList: [],
        facultyDto: {
            id: "",
            name: "",
            universityId: ""
        },
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
          api.delete("Faculty/Dash/DeleteRange" , ids, () => {
            commit("delete_Faculty_List", ids);

          });
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
