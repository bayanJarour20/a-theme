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
    delete_Career_List(state, payload) {
      let MapOfIds = new Map();
      var idx;
      var tempList = [];
      for (idx = 0; idx < payload.length; idx++) {
          MapOfIds.set(payload[idx], 1);
      }
      for (idx = 0; idx < state.careerList.length; idx++) {
        if (MapOfIds.has(state.careerList[idx].id) === false) {
          tempList.push(state.careerList[idx]);
        }
      }
      state.careerList = tempList;
  }
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
      api.delete("Career/Dash/DeleteRange", (data) => {
        if(data)
        commit("delete_Career_List", ids);
      },{},ids);
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
