<template>
    <b-row>
      <b-col cols="12" md="12" lg="12">
        <!-- <b-button-group class="m-1 mb-2">
          <b-button variant="primary">common questions</b-button>
          <b-button variant="outline-primary">rights guarantee</b-button>
          <b-button variant="outline-primary">Terms of use</b-button>
          <b-button variant="outline-primary">privacy statement</b-button>
        </b-button-group> -->
        <a-v-datatable
          :headers="headers"
          :items="questionListMain"
          classes="borderd cell-borderd striped"
          @details="getDetails"
          ref="commonQuetion"
          @add="log"
          @remove="log"
        >
          <template slot="collapse-icon">
            <i class="mdi mdi-arrow-down"></i>
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
import { mapActions } from 'vuex';
import {mapState } from "vuex";
import createQuestions from "./components/create-questions.vue";

export default {
  computed: {
        ...mapState({
            questionListMain: state => state.question.questionListMain,
       commonQuestionDto: (state) => state.question.commonQuestionDto,
        }),
    },
    components:{
      createQuestions
    },
    created(){
      this.getQuestionDetails(),
      console.log(this.questionListMain)
    },

  methods: {
    ...mapActions(["getQuestionDetails","deleteQuestion"]),
    getDetails(item) {
            console.log(item.row,"kkj")
            Object.assign(this.commonQuestionDto, item.row);
            this.$refs.createQuestions.open();
        },
    addNew() {

      this.$refs["commonQuetion"].add(this.newRow);
    },
    log(e) {
      this.deleteQuestion(e.row.id)
    },
  },
  data: () => ({
    headers: [
       
      {
        label: "Question text",
        value: "question",
      },
      {
        label:"Actions",
        value:"actions"
      },
    ],
  
    isEdit:true
  }),
};
</script>
