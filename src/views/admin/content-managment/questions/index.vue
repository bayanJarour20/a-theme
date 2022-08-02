<template>
    <b-row>
      <b-col cols="12" md="12" lg="12">
        <b-button-group class="m-1 mb-2">
          <b-button variant="primary">الأسئلة الشائعة</b-button>
          <b-button variant="outline-primary">ضمان حقوقك</b-button>
          <b-button variant="outline-primary">شروط الإستخدام</b-button>
          <b-button variant="outline-primary">بيان الخصوصية</b-button>
        </b-button-group>
        <a-v-datatable
          :headers="headers"
          :items="users"
          classes="borderd cell-borderd striped"
          v-model="selected"
          ref="a-v-datatable"
          :selectOptions="selectOptions"
          :collapseOptoins="collapseOptoins"
          @details="getDetails"
          @add="log"
          @remove="log"
        >
          <template slot="collapse-icon">
            <i class="mdi mdi-arrow-down"></i>
          </template>
          <template slot="row-td.src" slot-scope="{ row, value }">
            <img
              :src="value"
              width="50"
              height="50"
              class="rounded-circle"
              :alt="row.formatedRow.name"
            />
          </template>
          <template slot="cars.row-td.model" slot-scope="{ value }">
            <b-badge variant="primary">{{ value }}</b-badge>
          </template>
          <template slot="details" slot-scope="{ details }">
            <b-button size="sm" class="ml-2" @click="details()" variant="info"
              ><i class="mdi mdi-pen"></i
            ></b-button>
          </template>
          <template slot="remove" slot-scope="{ remove }">
            <b-button size="sm" variant="danger" @click="remove()"
              ><i class="mdi mdi-delete"></i
            ></b-button>
          </template>
        </a-v-datatable>             
      </b-col>
      <createQuestions ref="createQuestions" isEdit />    
    </b-row>
</template>
<style scoped>
td button{
  display: inline;
}

</style>
<script>
import {mapState } from "vuex";
import createQuestions from "./components/create-questions.vue";

export default {
  computed: {
        ...mapState({
            QuestionsDto: state => state.questions.QuestionsDto
        }),
    },
    components:{
      createQuestions
    },
  methods: {
    getDetails(item) {
            this.row = item;

            // Object.assign(this.QuestionsDto, item);
            this.$refs.createQuestions.open();
        },
    addNew() {
      this.$refs["a-v-datatable"].add(this.newRow);
    },
    log(e) {
      console.log(e);
    },
  },
  data: () => ({
    dialogQue:false,
    selected: [],
    row: null,
    newRow: {
      id: 110,
      name: "Ervin Howell",
      username: "Antonette",
      phone: "010-692-6593 x09125",
      src: "https://randomuser.me/api/portraits/men/60.jpg",
      cars: [
        {
          id: 1,
          make: "GMC",
          model: "Yukon Denali",
          modelYear: 2016,
        },
        {
          id: 5,
          make: "Ford",
          model: "LTD Crown Victoria",
          modelYear: 1981,
        },
      ],
    },
    selectOptions: {
      enable: true,
    },
    collapseOptoins: {
      enable: true,
      label: "cars",
      headers: [
        {
          label: "جواب السؤال",
          value: "make",
        },
        
      ],
    },
    headers: [
       
      {
        label: "نص السؤال",
        value: "name",
      },
      {
        label:"Actions",
        value:"actions"
      },
    ],
    users: [
      {
        id: 1,
        name: "ما هي الرسوم التي يدفعها صاحب المشروع؟",
        cars: [
          {
            id: 1,
            make: "يدفع صاحب المشروع رسوم وسائل الدفع فقط وهي 2.75% وفي حال قرر العميل إعادة المبالغ التي تم شحنها في حسابه فإننا نقوم بإعادة الرسوم أيضا بشكل تلقائي.",
          },
          
        ],
      },
      {
        id: 2,
        name: "سجلت في مستقل وأضفت مشروعاً ولكنه لم يظهر بعد، لماذا؟",
        
        cars: [
           {
            id: 3,
            make: "يدفع صاحب المشروع رسوم وسائل الدفع فقط وهي 2.75% وفي حال قرر العميل إعادة المبالغ التي تم شحنها في حسابه فإننا نقوم بإعادة الرسوم أيضا بشكل تلقائي.",
          },
        ],
      },
      {
        id: 1,
        name: "ما هي الرسوم التي يدفعها صاحب المشروع؟",
        cars: [
          {
            id: 1,
            make: "يدفع صاحب المشروع رسوم وسائل الدفع فقط وهي 2.75% وفي حال قرر العميل إعادة المبالغ التي تم شحنها في حسابه فإننا نقوم بإعادة الرسوم أيضا بشكل تلقائي.",
          },
          
        ],
      },
      {
        id: 2,
        name: "سجلت في مستقل وأضفت مشروعاً ولكنه لم يظهر بعد، لماذا؟",
        
        cars: [
           {
            id: 3,
            make: "يدفع صاحب المشروع رسوم وسائل الدفع فقط وهي 2.75% وفي حال قرر العميل إعادة المبالغ التي تم شحنها في حسابه فإننا نقوم بإعادة الرسوم أيضا بشكل تلقائي.",
          },
        ],
      },
    ],
    isEdit:true
  }),
};
</script>
