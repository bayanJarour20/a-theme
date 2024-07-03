import api from "@api";
export default {
  state: {
    categoryList: [],
    subCategoryDto:{
      id: "0",
      name: "",
      mainCategoryId: null,
      
    },
    subCategoryList:[
    ],
    categoryDto: {
      id: "",
      name: "",
      mainCategoryId: null
    },
  },
  mutations: {
    Get_Category_Details(state, payload) {
      state.categoryList = payload;
    },
    Create_Category(state, data) {
      if(!data.mainCategoryId){
        state.categoryList.unshift(data);
      }else{
        state.subCategoryList.unshift(data);
      }
    },
    Update_Category(state, data) {
      if(!data.mainCategoryId){
      Object.assign(
        state.categoryList.find((item) => item.id == data.id),
        data
      );}else{
        Object.assign(
          state.subCategoryList.find((item) => item.id == data.id),
          data
        );
      }
    },
    Set_Category_Dto(state, payload) {
      if (payload) {
        Object.assign(state.categoryDto, payload);
      } else {
        Object.assign(state.categoryDto, {
          id: "",
          name: "",
          mainCategoryId: null

        });
      }
    },
    Delete_Category(state, id) {
      state.categoryList.splice(
        state.categoryList.findIndex((item) => item.id == id),
        1
      );
      state.subCategoryList.splice(
        state.subCategoryList.findIndex((item) => item.id == id),
        1
      );
    },
    Get_Sub_Category_Details(state,payload){
      state.subCategoryList = payload;
    },
    delete_Category_List(state,payload){
      let MapOfIds = new Map();
      var idx;
      var tempList = [];
      for (idx = 0; idx < payload.length; idx++) {
          MapOfIds.set(payload[idx], 1);
          console.log(payload[idx])
      }
      for (idx = 0; idx < state.categoryList.length; idx++) {
        if (MapOfIds.has(state.categoryList[idx].id) === false) {
          tempList.push(state.categoryList[idx]);
        }
      }
      state.categoryList = tempList;
    }
  },
  actions: {
    getCategoryDetails({ commit }) {
      api.get("Category/Dash/GetMainCategories", ({ data }) => {
        commit("Get_Category_Details", data);
      });
    },
    getSubCategory({ commit },id) {
      console.log(id)
      api.get("Category/Dash/GetByCategoryId?id=" + id, ({ data }) => {
        commit("Get_Sub_Category_Details", data);
      });
    },
    addCategory({ commit }, payload) {
      api.post("Category/Dash/Create", payload, ({ data }) => {
        commit("Create_Category", data);
      });
    },
    updateCategory({ commit }, payload) {

      api.put("Category/Dash/Update", payload, ({ data }) => {
        commit("Update_Category", data);
      });
    },
    deleteAllCategory({ commit }, ids) {
      api.delete("Category/Dash/DeleteRange" , (data) => {
        if (data)
        commit("delete_Category_List", ids);

      },{},ids);
    },
    deleteCategory({ commit }, id) {
      api.delete("Category/Dash/Delete?id=" + id, ({ data }) => {
        if (data) {
          commit("Delete_Category", id);
        }
      });
    },
  },
};
