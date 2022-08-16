import api from "@api";
export default {
  state: {
    careerList: [],
    careerDto: {
      id: "",
      name: "",
    },
  },
  mutations: {
    Get_Career_Details(state, payload) {
      state.careerList = payload;
    },
    Create_Career(state, data) {
      state.careerList.unshift(data);
    },
    Update_Career(state, data) {
      Object.assign(
        state.careerList.find((item) => item.id == data.id),
        data
      );
    },
    Set_Career_Dto(state, payload) {
      if (payload) {
        Object.assign(state.careerDto, payload);
      } else {
        Object.assign(state.careerDto, {
          id: "",
          name: "",
        });
      }
    },
    Delete_Career(state, id) {
      state.careerList.splice(
        state.careerList.findIndex((item) => item.id == id),
        1
      );
    },
  },
  actions: {
    getCareerDetails({ commit }) {
      api.get("Career/GetAll", ({ data }) => {
        commit("Get_Career_Details", data);
      });
    },
    addCareer({ commit }, payload) {
      console.log(payload);
      api.post("Career/Dash/Create", payload, ({ data }) => {
        commit("Create_Career", data);
      });
    },
    updateCareer({ commit }, payload) {

      api.put("Career/Dash/Update", payload, ({ data }) => {
        commit("Update_Career", data);
      });
    },

    deleteAllCareer({ commit }, ids) {
      api.delete("Career/Dash/DeleteRange", ids, () => {
        commit("delete_Career_List", ids);
      });
    },
    deleteCareer({ commit }, id) {
      api.delete("Career/Dash/Delete?id=" + id, ({ data }) => {
        if (data) {
          commit("Delete_Career", id);
        }
      });
    },
  },
};
