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
      state.categoryList.unshift(data);
    },
    Update_Category(state, data) {
      Object.assign(
        state.categoryList.find((item) => item.id == data.id),
        data
      );
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
    },
    Get_Sub_Category_Details(state,payload){
      state.subCategoryList = payload;
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
      api.delete("Category/Dash/DeleteRange", ids, () => {
        commit("delete_Category_List", ids);
      });
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
