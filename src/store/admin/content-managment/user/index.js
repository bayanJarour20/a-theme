//  import api from "@api";
// import store from "@/store";
export default {
  state: {
      independentDto: {
          id: 0,
          name: "",
          PersonId: "",
          WorkName:"",
          AboutHim:"",
          hisSkills:"",
          statistics:"",
          documentation:"",
          decorations:""
      },
  },
  mutations: {
      Set_independent_Dto(state, payload) {
          if (payload) {
              Object.assign(state.independentDto, payload);
          } else {
              Object.assign(state.independentDto, {
                  id: 0,
                  name: "",
                  PersonId: "",
                  WorkName:"",
                  AboutHim:"",
                  hisSkills:"",
                  statistics:"",
                  documentation:"",
                  decorations:""
              });
          }
      },
      POS_Details(state, payload) {
          Object.assign(state.independentDto, payload);
      },
  },
  actions:{
      posDetails({ commit }, id) {
          // api.get("PointOfSale/Details/" + id, ({ data }) => {
          //     commit("POS_Details", data);
          // });
          console.log(id)
          const data={};
          Object.assign(data,{
              id: 0,
              name: "أحمد تحسين الحسين",
              PersonId: "",
              WorkName:"frontEnd",
              AboutHim:"Material Design Icons' growing icon collection allows designers and developers targeting various platforms to download icons in the format, color and size they need for any project.",
              hisSkills:"englich,swimming,chesses,ckooking,vue js , ",
              statistics:[
                {
                  Feedback:"التقيمات",
                  ProjectCompletionRate:"معدل اكمال المشاريع	",
                  onTimeDeliveryRate:"معدل التسليم بالموعد",
                  averageResponseSpeed:"متوسط سرعة الرد	",
                  CompletedProjects:"المشاريع المكتملة	",
                  ProjectsHeWorksOn:"مشاريع يعمل عليها"
                }
              ],
              documentation:[
                {
                  text:"البريد الإلكتروني"
                },
                {
                  text:"الهوية الشخصية"
                },
                {
                  text:"رقم الجوال"
                },
              ],
              decorations:"decoration times,decoratio skilles"
          })
          commit("POS_Details", data);

      },
  }
}