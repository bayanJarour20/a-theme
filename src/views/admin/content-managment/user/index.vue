<template>
  <b-container>
    <b-row>
      <b-col cols="12" md="12" lg="12">
        <b-button-group class="m-1 mb-2">
          <b-button
            to="/admin/dashUser"
            v-on:click=" typeColor = !typeColor"
             @click="getAllUsers(2)"
            :variant="typeColor ? 'outline-primary' : 'primary'"
            >Dash user</b-button
          >
          <b-button
            to="/admin/user"
            v-on:click=" typeColor = !typeColor"
            @click="getAllUsers(3)"
            :variant="typeColor ? 'primary' : 'outline-primary'"
            >user</b-button
          >
        </b-button-group>
        <a-table
          :items="userList"
          :columns="personColumn"
          @details="openEditPersonFreeDialog"
        >
          <template slot="headers" slot-scope="{ props }">
            {{ $t(props.column.label) }}
          </template>
          <template slot="items.dateCreated" slot-scope="{ value }">
            {{ new Date(value).toLocaleDateString("en-GB") }}
          </template>
          <template slot="items.imagePath" slot-scope="{ value }">
            <img
                src="https://randomuser.me/api/portraits/men/6.jpg"
              width="50"
              height="50"
              class="rounded-circle"
              alt=""
            />
          </template>
        </a-table>
      </b-col>
    </b-row>
  </b-container>
</template>
<script>
import { mapActions, mapState } from "vuex";

export default {
  data: () => ({
    personColumn: [
      {
        label: "imagePath",
        field: "imagePath",
        sortable: false,
      },
      {
        label: "fullName",
        field: "fullName",
      },
      {
        label: "UserCity",
        field: "cityName",
      },
      {
        label: "dateCreated",
        field: "dateCreated",
      },
      {
        label: "details",
        field: "details",
        sortable: false,
      },
    ],

    type: Number,
    typeColor: Boolean,
  }),
  methods: {
    ...mapActions(["getAllUsers"]),
    openEditPersonFreeDialog(props) {
      this.$router.push("/admin/user/details/" + props.row.id);
    },
    getDashUser() {
      this.type = 2;
    },
    getUser() {
      this.type = 3;
    },
  },

  computed: {
    ...mapState({
      userList: (state) => state.user.userList,
    }),
  },
  created() {
    this.getAllUsers(3);
  },
};
</script>
