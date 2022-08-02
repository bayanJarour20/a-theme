<template>
  <validation-observer ref="observer">
    <b-form>
      <a-dialog
        @ok="submit()"
        ref="NotificationsDialog"
        :placeholder="!isEdit ? 'search for Notifications' : ''"
        :title="!isEdit ? 'إشعار جديد' : 'تعديل إشعار'"
        :btn_title="!isEdit ? 'إشعار جديد' : ''"
      >
        <template #body>
          <a-input-text
            label="عنوان الإشعار"
            name="Quetionname"
            placeholder="عنوان الإشعار"
            :rules="[
              {
                type: 'required',
                message: 'is reqired',
              },
            ]"
          ></a-input-text>
          <a-input-textarea
            label="نص الإشعار"
            name="Quetionname"
            placeholder="نص الإشعار"
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
    title: {
      type: String,
      default: () => "إضافة إشعار",
    },
    isEdit: Boolean,
    id: Number,
  },
  methods: {
    submit() {
      this.$refs.observer.validate().then((suc) => {
        if (suc) {
          console.log(suc);
        }
      });
    },
    openDialog() {
      if (this.isEdit) {
        // this.advertisingDtoDate =
        //     this.advertisingDto.startDate +
        //     " to " +
        //     this.advertisingDto.endDate;
      }
      this.$refs.NotificationsDialog.open();
    },
  },
  components: {
    ValidationObserver,
  },
};
</script>
