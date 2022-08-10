import api from "@api";
import router from "@/router";
export default {
    state: {
        feedbacks: [],
        feedbackDto: {
            id: "",
            title: "",
            body: "",
            appUserId: "",
            appUserName: "",
            reply: "",
            replyDate: null,
            sendDate: null
        },
        feedbackFilterDto: {
            body: "",

        }
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
        }
    },
    actions: {
        getFeedbackDetails({ commit }) {
            api.get("ContactUs/Dash/GetAll", ({ data }) => {
              console.log(data);
                commit("Get_Feedbacks_Details", data);
            });
        },
        getFeedbackDetail({commit}, id) {
            api.get('Feedback/Details?id=' + id, ({data}) => {
                commit('Feedbacks_Details', data)
            })
        },
        actionFeedback({commit}, payload) {
            api.put('Feedback/Modify', payload, ({data}) => {
                if(!payload.id) {
                    commit('Set_Feedback_Dto', data)
                }
            })
        },
        deleteFeedback(ctx, id) {
            api.delete("Feedback/Delete?id=" + id, ({ data }) => {
                if(data) {
                    router.push('/contact')
                }
            }, {success: "تم حذف الرسالة بنجاح", error: "فشل حذف الرسالة"});
        },
    }
};
