<template>
    <b-row>
      <b-col cols="12" md="12" lg="12">
        <b-button-group class="m-1 mb-2">
          <b-button variant="primary">common questions</b-button>
          <b-button variant="outline-primary">rights guarantee</b-button>
          <b-button variant="outline-primary">Terms of use</b-button>
          <b-button variant="outline-primary">privacy statement</b-button>
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
          label: "question answer",
          value: "make",
        },
        
      ],
    },
    headers: [
       
      {
        label: "Question text",
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
        name: "What are the fees paid by the owner of the project?",
        cars: [
          {
            id: 1,
            make: "The project owner pays the fees for the payment methods only, which is 2.75%. If the customer decides to return the amounts shipped in his account, we also return the fees automatically.",
          },
          
        ],
      },
      {
        id: 2,
        name: "I registered in Freelance and added a project, but it hasn't appeared yet, why?",
        
        cars: [
           {
            id: 3,
            make: "The project owner pays the fees for the payment methods only, which is 2.75%. If the customer decides to return the amounts shipped in his account, we also return the fees automatically.",
          },
        ],
      },
      {
        id: 1,
        name: "What are the fees paid by the owner of the project?",
        cars: [
           {
            id: 3,
            make: "The project owner pays the fees for the payment methods only, which is 2.75%. If the customer decides to return the amounts shipped in his account, we also return the fees automatically.",
          },
        ],
      },
      {
        id: 2,
        name: "I registered in Freelance and added a project, but it hasn't appeared yet, why?",
        
        cars: [
           {
            id: 3,
            make: "The project owner pays the fees for the payment methods only, which is 2.75%. If the customer decides to return the amounts shipped in his account, we also return the fees automatically.",
          },
        ],
      },
    ],
    isEdit:true
  }),
};
</script>
