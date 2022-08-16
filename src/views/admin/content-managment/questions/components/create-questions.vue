<template>
  <validation-observer ref="observer">
    <b-form>
      <a-dialog
        @ok="submit()"
        @delete="deleteQuestion(commonQuestionDto.id)"
        ref="QuestionsDialog"
        :title="!isEdit ? 'add commonQuestion' : 'edit commonQuestion'"
        :isEdit="isEdit"
        :placeholder="!isEdit ? 'search for Qetions' : ''"
        :btn_title="!isEdit ? 'Add New Quetions' : ''"
      >
        <template #body>
          <a-input-text
            label="question text"
            name="Quetionname"
            placeholder="question text"
            :rules="[
              {
                type: 'required',
                message: 'is reqired',
              },
            ]"
            v-model="commonQuestionDto.question"
          ></a-input-text>
          <a-input-textarea
            label="answer text"
            name="answer name"
            placeholder="answer text"
            :rules="[
              {
                type: 'required',
                message: 'answer text is reqired',
              },
            ]"
            v-model="commonQuestionDto.answer"
          ></a-input-textarea>
        </template>
      </a-dialog> 
    </b-form>
  </validation-observer>
</template>

<script>
import { ValidationObserver } from "vee-validate";
import { mapState ,mapActions } from 'vuex';
export default {
  props: {
    isEdit: Boolean,
  },
  methods: {
      ...mapActions(["actionQuestion", "deleteQuestion"]),
    submit() {
      this.$refs.observer.validate().then((suc) => {
        if (suc) {
          this.actionQuestion({
            id:this.commonQuestionDto.id,
            question: this.commonQuestionDto.question,
            answer: this.commonQuestionDto.answer,
          });
        }
      });
    },
    open() {
      if (this.isEdit) {
        // this.advertisingDtoDate =
        //     this.advertisingDto.startDate +
        //     " to " +
        //     this.advertisingDto.endDate;
      }
      this.$refs.QuestionsDialog.open();
    },
  },
  data: () => ({
      //  questionDto: {
      //       id: "",
      //       question: "",
      //       answer: ""
      //   },
    
  }),
  computed:{
    ...mapState({
       commonQuestionDto: (state) => state.question.commonQuestionDto,
    })
  },
  components: {
    ValidationObserver,
  },
};
</script>
