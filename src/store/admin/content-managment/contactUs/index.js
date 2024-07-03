import api from "@api";
import router from "@/router";
export default {
    state: {
        feedbacks: [],
        feedbackDto: {
          id: "",
          title: "",
          description: "",
          dateCreated: "",
          isResponsed: true,
          senderId: "",
          senderName: "",
          reply: "",
          replyDate: "",
          documentDtos: [
            {
              id: "",
              name: "",
              path: "",
              type: 1
            }
          ]
        
        },
    },
    mutations: {
        Get_Feedbacks_Details(state, payload) {
            state.feedbacks = payload;
        },
        Feedbacks_Details(state, payload) {
            Object.assign(state.feedbackDto, payload)
        },
        Create_Faculty(state, data) {
            state.feedbacks.unshift(data)
        },
        Update_Feedback(state, data) {
            Object.assign(state.feedbacks.find(item => item.id == data.id), data)
        },
        Set_Feedback_Dto(state, payload) {
            Object.assign(
                state.facultyDto,
                payload
            )
        },
        delete_Contact_List(state, payload) {
          let MapOfIds = new Map();
          var idx;
          var tempList = [];
          for (idx = 0; idx < payload.length; idx++) {
              MapOfIds.set(payload[idx], 1);
          }
          for (idx = 0; idx < state.feedbacks.length; idx++) {
            if (MapOfIds.has(state.feedbacks[idx].id) === false) {
              tempList.push(state.feedbacks[idx]);
            }
          }
          state.feedbacks = tempList;
      }
    },
    actions: {
        getAllFeedback({ commit }) {
            api.get("ContactUs/Dash/GetAll", ({ data }) => {
              console.log(data);
                commit("Get_Feedbacks_Details", data);
            });
        },
        getFeedbackDetail({commit}, id) {
            api.get('ContactUs/Dash/GetById?id=' + id, ({data}) => {
                commit('Feedbacks_Details', data)
            })
        },
        actionFeedback({commit}, payload) {
            api.post('ContactUs/Dash/Response', payload, ({data}) => {
                if(!payload.id) {
                    commit('Set_Feedback_Dto', data)
                }
            })
        },
        deleteFeedback(ctx, id) {
             api.delete("ContactUs/Dash/Delete?id=" + id, ({ data }) => {
                if (data.isSuccess) {
                  router.push('/contact')
                }
            });
        },
        deleteAllContact({commit}, ids) {
          api.delete("ContactUs/Dash/DeleteRange" , (data) => {
            if (data)
            commit("delete_Contact_List", ids);

          },{},ids);
        },
    }
};
