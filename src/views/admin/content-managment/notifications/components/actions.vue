<template>
  <validation-observer ref="observer">
    <b-form>
      <a-dialog
        @ok="submit()"
        ref="NotificationsDialog"
        placeholder=" search for Notifications"
        title=" new notification "
        btn_title=" new notification"
        @search="search"
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
            v-model="notificationDto.title"
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
            v-model="notificationDto.body"
          ></a-input-textarea>
          <a-input-select
            label="user name"
            placeholder="select user name"
            :rules="[
              {
                type: 'required',
                message: 'user name is required',
              },
            ]"
            textLabel="fullName"
            :options="users"
            multiple
            name="notificationUserId"
            v-model="notificationDto.userIds"
            :clearable="true"
          />
        </template>
      </a-dialog>
    </b-form>
  </validation-observer>
</template>

<script>
import { ValidationObserver } from "vee-validate";
import { mapState, mapActions } from "vuex";

export default {
  props: {
    title: {
      type: String,
      default: () => "add notification",
    },
    isEdit: Boolean,
    id: Number,
  },
  computed:{
    ...mapState({
      notificationDto: (state) => state.notifications.notificationDto,
      users: (state) => state.notifications.users,
    }),
  },
  created(){
    this.getUserNotification()
  },
  methods: {
        ...mapActions(["addNotification", "deleteNotification","getUserNotification"]),

    submit() {
      this.$refs.observer.validate().then((suc) => {
        if (suc) {
          this.addNotification({
            title: this.notificationDto.title,
            body: this.notificationDto.body,
            userIds: this.notificationDto.userIds,
          });
        }
      });
    },
    search(query) {
      this.$store.commit("Set_Search_Dto", {
        keys: ["name"],
        query,
      });
    },
    openDialog() {
      this.$refs.NotificationsDialog.open();
    },
  },
  components: {
    ValidationObserver,
  },
};
</script>
