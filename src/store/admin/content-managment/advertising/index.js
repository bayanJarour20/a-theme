import api from "@api";
export default {
    state: {
        advertisingList: [],
        advertisingDto: {
            id: "",
            title: "",
            description: "",
            startDate: "2022/3/4",
            endDate: "2022/3/4",
            Files:"",
            documentDtos: []
          
        },
    },
    mutations: {
        Get_advertising_Details(state, payload) {
          state.advertisingList = payload;
          
        },
        Create_Advertising(state, data) {
            state.advertisingList.unshift(data);
        },
        Update_Advertising(state, data) {
            Object.assign(
                state.advertisingList.find(item => item.id == data.id),
                data
            );
        },
        Set_Advertising_Dto(state, payload) {
            console.log(payload);
            if (payload) {
                Object.assign(state.advertisingDto, payload);
            } else {
                Object.assign(state.advertisingDto, {
                  id: "",
                  title: "",
                  description: "",
                  startDate: "",
                  endDate: "",
                  Files:"",
                  documentDtos: []
                });
            }
        },
        Delete_Advertising(state, id) {
            state.advertisingList.splice(
                state.advertisingList.findIndex(item => item.id == id),
                1
            );
        }
    },
    actions: {
        getAdvertising({ commit }) {
            api.get("Advertisement/GetAll", ({ data }) => {
                commit("Get_advertising_Details", data);
            });
        },
        addAdvertising({ commit }, payload) {
          console.log(payload.formData)
            api.post("Advertisement/Dash/Create", payload.formData, ({ data }) => {
                    commit("Create_Advertising", data);
                  });
                },
                updateAdvertising({ commit }, payload) {
                  api.put("Advertisement/Dash/Update", payload.formData, ({ data }) => {
                    commit("Update_Advertising", data);
                });
              
        },
        deleteAllAdvertising({commit}, ids) {
          api.delete("Advertisement/Dash/DeleteRange" , ids, () => {
            commit("delete_Advertising_List", ids);

          });
        },
        deleteAdvertising({ commit }, id) {
            api.delete("Advertisement/Dash/Delete?id=" + id, ({ data }) => {
                if (data) {
                    commit("Delete_Advertising", id);
                }
            });
        }
    }
};
