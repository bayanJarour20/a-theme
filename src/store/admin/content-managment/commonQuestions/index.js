import api from "@api";
export default {
    state: {
        questionListMain: [],
        commonQuestionDto: {
            id: "",
             question: "",
            answer: ""
        },
    },
    mutations: {
        Get_Question_Details(state, payload) {
          state.questionListMain = payload;
          console.log(state.questionListMain)
        },
        Create_Question(state, data) {
            state.questionList.unshift(data);
            this.$refs["commonQuetion"].add(data);

        },
        Update_Question(state, data) {
            Object.assign(
                state.questionList.find(item => item.id == data.id),
                data
            );
        },
        Set_Question_Dto(state, payload) {
            console.log(payload);
            if (payload) {
                Object.assign(state.questionDto, payload);
            } else {
                Object.assign(state.questionDto, {
                  id: "",
                  question: "",
                  answer: ""
                });
            }
        },
        Delete_Question(state, id) {
            state.questionList.splice(
                state.questionList.findIndex(item => item.id == id),
                1
            );
        }
    },
    actions: {
        getQuestionDetails({ commit }) {
            api.get("CommonQuestion/GetAll", ({ data }) => {
                commit("Get_Question_Details", data);
            });
        },
        actionQuestion({ commit }, payload) {
          console.log(payload)
          if (!payload.id) {
            api.post("CommonQuestion/Dash/Create", payload, ({ data }) => {
                    commit("Create_Question", data);
                  });
                  
                } else {
                  api.put("CommonQuestion/Dash/Update", payload, ({ data }) => {
                    commit("Update_Question", data);
                });
              }
        },
        deleteAllQuestion({commit}, ids) {
          api.delete("CommonQuestion/Dash/DeleteRange" , ids, () => {
            commit("delete_Question_List", ids);

          });
        },
        deleteQuestion({ commit }, id) {
            api.delete("CommonQuestion/Dash/Delete?id=" + id, ({ data }) => {
                if (data) {
                    commit("Delete_Question", id);
                }
            });
        }
    }
};
