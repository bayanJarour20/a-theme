<template>
  <validation-observer ref="observer">
    <b-form>
      <a-dialog
        @ok="submit()"
        ref="NotificationsDialog"
        :placeholder="!isEdit ? 'search for Notifications' : ''"
        :title="!isEdit ? ' new notification ' : 'edit notification'"
        :btn_title="!isEdit ? ' new notification ' : ''"
      >
        <template #body>
          <a-input-text
            label="notification addres"
            name="Quetionname"
            placeholder="notification addres"
            :rules="[
              {
                type: 'required',
                message: 'is reqired',
              },
            ]"
          ></a-input-text>
          <a-input-textarea
            label="text notification"
            name="Quetionname"
            placeholder=" text notification"
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
      default: () => "add notification",
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
