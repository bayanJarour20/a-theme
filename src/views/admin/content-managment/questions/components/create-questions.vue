<template>
  <validation-observer ref="observer">
    <b-form>
      <a-dialog
        @ok="submit()"
        ref="QuestionsDialog"
        :title="!isEdit ? 'سؤال جديد' : 'تعديل سؤال'"
        :isEdit="isEdit"
        :placeholder="!isEdit ? 'search for Qetions' : ''"
        :btn_title="!isEdit ? 'Add New Quetions' : ''"
      >
        <template #body>
          <a-input-text
            label="نص السؤال"
            name="Quetionname"
            placeholder="نص السؤال"
            :rules="[
              {
                type: 'required',
                message: 'is reqired',
              },
            ]"
          ></a-input-text>
          <a-input-textarea
            label="جواب السؤال"
            name="Quetionname"
            placeholder="جواب السؤال"
            :rules="[
              {
                type: 'required',
                message: 'is reqired',
              },
            ]"
          ></a-input-textarea>
        </template>
      </a-dialog> 
    </b-form>
  </validation-observer>
</template>

<script>
import { ValidationObserver } from "vee-validate";

export default {
  props: {
    isEdit: Boolean,
  },
  methods: {
    submit() {
      this.$refs.observer.validate().then((suc) => {
        if (suc) {
          console.log(suc);
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
  components: {
    ValidationObserver,
  },
};
</script>
