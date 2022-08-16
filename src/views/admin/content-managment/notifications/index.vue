<template>
<div>
  
  <b-form-checkbox-group >
    <b-card no-body class="mb-1">
      <b-card-header
      
        class="p-0 px-1 justify-content-space-between d-flex"
        style="justify-content: space-between"
      >
        <div class="d-flex">
          <div style="display: flex; padding-top: 8px">
            <b-form-checkbox v-model="allSelected"
          @change="toggleAll"></b-form-checkbox>
            <small style="padding-top: 5px">select all</small>
          </div>
        </div>
        <b-button
          size="sm"
          variant="flat-secondary"
          class="btn-icon rounded-circle"
          style="padding: 0.5rem 10px !important"
          @click="deleteAllNotification(selected)"
        >
          <i class="mdi mdi-delete text-danger"></i>
        </b-button>
      </b-card-header>
    </b-card>
    <div v-for="(notifiactions, index) in notificationListLIst"
                :key="index">
      <b-card no-body class="mb-1 my-3">
        <b-card-header
          class=" d-flex"
          style="justify-content: space-between"
        >
          <div>
          <i class="mdi  mdi-bell-ring  text-primary mr-2"></i>
          <span>{{notifiactions.title}}</span>
          </div>
          <!-- <b-button type="button"  variant="flat-secondary" class="ml-2 rounded-circle btn-icon">
                        </b-button> -->
        </b-card-header>
        <b-card-body class="p-1 d-flex align-items-center">
          <b-form-checkbox :option="notificationListLIst" :value="notifiactions.id"  v-model="selected"></b-form-checkbox>
          <p class="m-0">
            {{notifiactions.body}}
          </p>
        </b-card-body>
      </b-card>
    </div>
  </b-form-checkbox-group>
  </div>
</template>
<script>
// import actionNotifications from "./components/actions.vue";
import { mapState ,mapActions } from 'vuex';
export default {
  components:{
    // actionNotifications
  },
  data() {
    return {
       isEdit:true,
       notificationListLIst:[
        {
          id:"1",
          title:"xzxzx",
          body:"sdsd"
        },
        {
          id:"2",
          title:"dsds",
          body:'sasa'
        }
       ],
       allSelected:false,
       selected:[]
    }
  },
  computed:{
        ...mapState({
            notificationList: state => state.notifications.notificationList,
        }),
  },
  created(){
    this.getNotificationDetails()
  },
  methods:{
     toggleAll(checked) {
        this.selected = checked ? this.notificationListLIst.map(n => n.id).slice() : []      },
     ...mapActions(["getNotificationDetails","deleteAllNotification"]),
    getDetails(item) {
            console.log(item)

            // Object.assign(this.NotificationsDto, item);
            console.log(this.$refs.editNotificationsDialog)
            this.$refs.editNotificationsDialog.openDialog();
        },
  }
}
</script>
