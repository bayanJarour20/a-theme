import api from "@api";
export default {
  state: {
    settingList: [],
    universityList:[],
    cityList:[],
    settingDto: {     
        name: "",
        url: "",
        profit: 0
      
    },
    universityDto:{
      id: "",
    name: "",
    collageDtos: []
    },
    countryList:[],
    cityDto:{
      id: "",
      name: "",
      countryId: "",
    },
    countryDto:{
      id: "",
      name: "",
    }
  },
  mutations: {
    Get_Setting_Details(state, payload) {
      state.settingList = payload;
    },
    Get_University_Details(state, payload) {
      state.universityList = payload;
    },
    Get_Country_Details(state, payload) {
      state.countryList = payload;
    },  
    Get_City_Details(state, payload) {
      state.cityList = payload;

    },
    Update_Setting(state, data) {
      Object.assign(
        state.settingList.find((item) => item.id == data.id),
        data
      );
    },
    University_Create(state, data) {
      state.universityList.unshift(data);
    },
    Country_Create(state, data) {
      state.countryList.unshift(data);
    },
    University_Update(state, data) {
        Object.assign(
            state.universityList.find(item => item.id == data.id),
            data
        );
    },
    Country_Update(state, data) {
      Object.assign(
          state.countryList.find(item => item.id == data.id),
          data
      );
  },
    Set_University_Dto(state, payload) {
        if (payload) {
            Object.assign(state.universityDto, payload);
        } else {
            Object.assign(state.universityDto, {
                id: "",
                name: "",
                collageDtos: []
            });
        }
    },  
    Set_Country_Dto(state, payload) {
      if (payload) {
          Object.assign(state.countryDto, payload);
      } else {
          Object.assign(state.countryDto, {
              id: "",
              name: "",
          });
      }
  }, 
    University_Delete(state, id) {
        state.universityList.splice(
            state.universityList.findIndex(item => item.id == id),
            1
        );
    },
    Country_Delete(state, id) {
      state.countryList.splice(
          state.countryList.findIndex(item => item.id == id),
          1
      );
  },
    delete_University_List(state, payload) {
    let MapOfIds = new Map();
    var idx;
    var tempList = [];
    for (idx = 0; idx < payload.length; idx++) {
        MapOfIds.set(payload[idx], 1);
    }
    for (idx = 0; idx < state.universityList.length; idx++) {
        if (MapOfIds.has(state.universityList[idx].id) === false) {
            tempList.push(state.universityList[idx]);
        }
    }
    state.universityList = tempList;

    },
    delete_Country_List(state, payload) {
      let MapOfIds = new Map();
      var idx;
      var tempList = [];
      for (idx = 0; idx < payload.length; idx++) {
          MapOfIds.set(payload[idx], 1);
      }
      for (idx = 0; idx < state.countryList.length; idx++) {
          if (MapOfIds.has(state.countryList[idx].id) === false) {
              tempList.push(state.countryList[idx]);
          }
      }
      state.countryList = tempList;
  
      },
    City_Create(state, data) {
      state.cityList.unshift(data);
    },
    City_Update(state, data) {
        Object.assign(
            state.cityList.find(item => item.id == data.id),
            data
        );
    },
    Set_City_Dto(state, payload) {
      console.log(payload)
        if (payload) {
            Object.assign(state.cityDto, payload);
        } else {
            Object.assign(state.cityDto, {
                id: "",
                name: "",
                countryId: "",
            });
        }
    },
    City_Delete(state, id) {
        state.cityList.splice(
            state.cityList.findIndex(item => item.id == id),
            1
        );
    },
    delete_City_List(state, payload) {
    let MapOfIds = new Map();
    var idx;
    var tempList = [];
    for (idx = 0; idx < payload.length; idx++) {
        MapOfIds.set(payload[idx], 1);
    }
    for (idx = 0; idx < state.cityList.length; idx++) {
        if (MapOfIds.has(state.cityList[idx].id) === false) {
            tempList.push(state.cityList[idx]);
        }
    }
    state.cityList = tempList;

    }
  },
  actions: {
    getSettingDetails({ commit }) {
      api.get("Setting/Dash/GetSettings", ({ data }) => {
        commit("Get_Setting_Details", data);
      });
    },
    getCityDetails({ commit }) {
      api.get("City/GetAll", ({ data }) => {
        commit("Get_City_Details", data);
      });
    },
    updateSetting({commit},payload) {
      console.log(payload)
      api.put("Setting/Dash/Update", payload, ({ data }) => {
        console.log(data)
      });
    },
    getCountryDetails({ commit }) {
      api.get("Country/GetAll", ({ data }) => {
        commit("Get_Country_Details", data);
      });
    },
    createCountry({ commit }, payload){
      api.post("Country/Dash/Create", payload, ({ data }) => {
        commit("Country_Create", data);
      });
    },
    deleteCountry({ commit }, id){
      api.delete("/Country/Dash/Delete?id="+ id, ({ data }) => {
        commit("Country_Delete", data);
      });
    },
    updateCountry({ commit }, payload){
      api.put("Country/Dash/Update", payload, ({ data }) => {
        commit("Country_Update", data);
      });
    },
    deleteAllUniversity({ commit }, ids) {
      console.log(ids)
      api.delete("University/Dash/DeleteRang", ids, () => {
        commit("delete_University_List", ids);
      });
    },
    getUniveristyDetails({ commit }) {
      api.get("University/GetAll", ({ data }) => {
        commit("Get_University_Details", data);
      });
    },
    createUniversity({ commit }, payload){
      api.post("University/Dash/Create", payload, ({ data }) => {
        commit("University_Create", data);
      });
    },
    deleteUniversity({ commit }, id){
      api.delete("/University/Dash/Delete?id="+ id, ({ data }) => {
        commit("University_Delete", data);
      });
    },
    updateUniversity({ commit }, payload){
      api.put("University/Dash/Update", payload, ({ data }) => {
        commit("University_Update", data);
      });
    },
    
    deleteAllCountry({ commit }, ids) {
      console.log(ids)
      api.delete("Country/Dash/DeleteRang", ids, () => {
        commit("delete_Country_List", ids);
      });
    },
    createCity({ commit }, payload){
      console.log(payload)
      api.post("City/Dash/Create", payload, ({ data }) => {
        commit("City_Create", data);
      });
    },
    deleteCity({ commit }, id){
      api.delete("/City/Dash/Delete?id="+ id, ({ data }) => {
        commit("City_Delete", data);
      });
    },
    updateCity({ commit }, payload){
      api.put("City/Dash/Update", payload, ({ data }) => {
        commit("City_Update", data);
      });
    },
    deleteAllCity({ commit }, ids) {
      console.log(ids)
      api.delete("City/Dash/DeleteRang", ids, () => {
        commit("delete_City_List", ids);
      });
    },
    
  },
};
