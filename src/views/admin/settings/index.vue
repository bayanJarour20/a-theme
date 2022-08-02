<template>
  <!-- @details="" -->
  <!-- @plus  -->
  <div>
    <b-card no-body class="mb-4">
      <b-card-header>
        <strong>
          <i
            class="mdi mdi-cogs"
            style="margin-left: 10px; margin-top: 4px"
          ></i>
          Setting Website
        </strong>
      </b-card-header>
      <div>
        <b-col>
          <b-row>
            <b-col cols="12" md="6">
              <a-input-text
                label="اسم الموقع "
                placeholder="ادخل  اسم الموقع"
                name="appUserName"
                :rules="[
                            { type: 'required', message: ' اسم الموقع إجباري' }
                        ]"
              />
            </b-col>
            <b-col cols="12" md="6">
              <a-input-text
                label="ربح الموقع"                
                :rules="[
                            { type: 'required', message: ' ربح الموقع إجباري' }
                        ]"
                        placeholder="ادخل  ربح الموقع"
                        name="name"
              />
            </b-col>
          </b-row>
        </b-col>
      </div>
    </b-card>
    <b-row>
      <b-col cols="12" md="6">
        <a-table
          isPlus
          :columns="columns"
          :items="items"
          @details="openEditSettingDialog"
          @plus="setCityDialogForm"
        >
          <template slot="headers" slot-scope="{ props }">
            {{ $t(props.column.label) }}
          </template>
          <!-- <template slot="items.src" slot-scope="{value}">
    <img :src="value" width="50" height="50" alt="">
  </template> -->
        </a-table>
      </b-col>
      <b-col cols="12" md="6">
        <a-table
          :items="universitiesList"
          :columns="universitiesColumn"
          isPlus
          @plus="setUniversityDialogForm()"
          @details="setUniversityDialogForm($event)"
        >
        </a-table>
      </b-col>
    </b-row>
    <action ref="SettingsDialog" :isEdit="isEdit"> </action>
    <university ref="universityDialog" />
  </div>
</template>

<script>
import action from "./components/actions.vue";
import university from "@/views/admin/settings/components/university/index.vue";

export default {
  data: () => ({
    items: [
      // {name: "ahmed", src: "https://via.placeholder.com/300/09f/fff.png"}
      { name: "Aleppo" },
      { name: "london" },
      { name: "Bondoqua" },
      { name: "Dobai" },
    ],
    columns: [
      {
        label: "name",
        field: "name",
      },
      // {
      //   label: "src",
      //   field: "src",
      //   sortable: false
      // },
      {
        label: "details",
        field: "details",
      },
    ],
    isEdit: true,
    universitiesColumn: [
      {
        label: "اسم الجامعة",
        field: "name",
      },
      {
        label: "تفاصيل",
        field: "details",
        sortable: false,
      },
    ],
    universitiesList: [
      {
        id: 1,
        name: "جامعة حلب",
      },
      {
        id: 1,
        name: "جامعة حلب",
      },
      {
        id: 1,
        name: "جامعة حلب",
      },
    ],
  }),
  components: {
    action,
    university,
  },
  methods: {
    setUniversityDialogForm() {
      this.$refs.universityDialog.open();
    },
    setCityDialogForm() {
      this.isEdit = false;
      this.$refs.SettingsDialog.open();
    },
    openEditSettingDialog(props) {
      // this.$store.commit("Reset_Sub_Category_Dto", props.row);
      console.log(props);
      this.isEdit = true;
      this.$refs.SettingsDialog.open();
    },
    openAddSettingsDialog() {
      // this.$store.commit("Reset_Sub_Category_Dto");
      this.isEdit = true;
      console.log(this.$refs.SettingsDialog.open);
      this.$refs.SettingsDialog.open();
    },
  },
};
</script>
// https://stackabuse.com/drag-and-drop-in-vanilla-javascript/
