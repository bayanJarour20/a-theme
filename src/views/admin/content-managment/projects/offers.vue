<template>
  <b-container>
    <b-row>
      <b-col cols="12" md="12" lg="12">
        <b-button-group class="m-1 mb-2">
          <b-button @click="getAllOffer()" v-on:click=" type = !type" :variant="type ? 'outline-primary' : 'primary'">Project offers</b-button>
          <b-button @click="getAllComment()" v-on:click=" type = !type" :variant="type ? 'primary' : 'outline-primary'">project comments</b-button>
        </b-button-group>
        <a-table
          no_delete
          no_select
          :columns="type ?  headersComment:headers"
          :items="type ?  offersList:commentList"
                 
        >
        </a-table>             
      </b-col>
      <!-- <createQuestions ref="createQuestions" isEdit />     -->
    </b-row>
  </b-container>
</template>
<style scoped>
td button{
  display: inline;
}

</style>
<script>
import {mapState ,mapActions} from "vuex";

export default {
  computed: {
        ...mapState({
            offersList: state => state.projects.offersList,
            commentList: state => state.projects.commentList,
        }),
    },
    created(){
      this.getComment(this.id)
    },
  methods: {
    ...mapActions(["getOffer","getComment"]),
        getAllOffer(){
          this.getOffer(this.id)
        },
        getAllComment(){
        this.getComment(this.id)
        }

  },
  props:{
    id:String
  },
  data: () => ({
    type:false,
    headersComment: [    
      {
        label: "comment project",
        field: "text",
      },
    ],
    headers: [    
      {
        label: "offers project",
        field: "text",
      },
    ],
    offerListList: [
      {
        id: 2,
        text: "سجلت في مستقل وأضفت مشروعاً ولكنه لم يظهر بعد، لماذا؟",
      }
    ],
    commentListList: [
      {
        id: 1,
        text: "ما هي الرسوم التي يدفعها صاحب المشروع؟",
      },
    ],
  }),
};
</script>
