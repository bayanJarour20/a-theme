<template>
<div>
  <actionNotifications
          ref="editNotificationsDialog"
          isEdit
        />
  <b-form-checkbox-group>
    <b-card no-body class="mb-1">
      <b-card-header
      
        class="p-0 px-1 justify-content-space-between d-flex"
        style="justify-content: space-between"
      >
        <div class="d-flex">
          <div style="display: flex; padding-top: 8px">
            <b-form-checkbox></b-form-checkbox>
            <small style="padding-top: 5px">select all</small>
          </div>
        </div>
        <b-button
          size="sm"
          variant="flat-secondary"
          class="btn-icon rounded-circle"
          style="padding: 0.5rem 10px !important"
        >
          <i class="mdi mdi-delete text-danger"></i>
        </b-button>
      </b-card-header>
    </b-card>
    <div>
      <b-card no-body class="mb-1 my-3">
        <b-card-header
          class=" d-flex"
          style="justify-content: space-between"
        >
        <div>
          <i class="mdi  mdi-bell-ring  text-primary mr-2"></i>
          <span>Material Design Icons</span>
          </div>
          <span class="ml-auto">2/2/2022</span>
          <!-- <b-button type="button"  variant="flat-secondary" class="ml-2 rounded-circle btn-icon">
                        </b-button> -->
        </b-card-header>
        <b-card-body class="p-1 d-flex align-items-center">
          <b-form-checkbox></b-form-checkbox>
          <p class="m-0">
            Material Design Icons' growing icon collection allows designers and
            developers 
          </p>
        </b-card-body>
      </b-card>
      <b-card no-body class="mb-1 my-3">
        <b-card-header
          class=" d-flex"
          style="justify-content: space-between"
        >
          <div>
          <i class="mdi  mdi-bell-ring  text-primary mr-2"></i>
          <span>Material Design Icons</span>
          </div>
          <span class="ml-auto">2/2/2022</span>
          <!-- <b-button type="button"  variant="flat-secondary" class="ml-2 rounded-circle btn-icon">
                        </b-button> -->
        </b-card-header>
        <b-card-body class="p-1 d-flex align-items-center">
          <b-form-checkbox></b-form-checkbox>
          <p class="m-0">
            Material Design Icons' growing icon collection allows designers and
            developers 
          </p>
        </b-card-body>
      </b-card>
      <b-card no-body class="mb-1 my-3">
        <b-card-header
          class=" d-flex"
          style="justify-content: space-between"
        >
          <div>
          <i class="mdi  mdi-bell-ring  text-primary mr-2"></i>
          <span>Material Design Icons</span>
          </div>
          <span class="ml-auto">2/2/2022</span>
          <!-- <b-button type="button"  variant="flat-secondary" class="ml-2 rounded-circle btn-icon">
                        </b-button> -->
        </b-card-header>
        <b-card-body class="p-1 d-flex align-items-center">
          <b-form-checkbox></b-form-checkbox>
          <p class="m-0">
            Material Design Icons' growing icon collection allows designers and
            developers 
          </p>
        </b-card-body>
      </b-card>
    </div>
  </b-form-checkbox-group>
  </div>
</template>
<script>
import actionNotifications from "./components/actions.vue";

export default {
  components:{
    actionNotifications
  },
  data() {
    return {
       isEdit:true,
    }
  },
  methods:{
    
    getDetails(item) {
            console.log(item)

            // Object.assign(this.NotificationsDto, item);
            console.log(this.$refs.editNotificationsDialog)
            this.$refs.editNotificationsDialog.openDialog();
        },
  }
}
</script>
