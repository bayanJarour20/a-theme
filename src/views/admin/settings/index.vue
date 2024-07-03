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
      <b-card-body>
        <b-col>
          <b-row>
            <b-col cols="12" md="6">
              <a-input-text
                label="Web site name "
                placeholder="enter  Web site name"
                name="nameWeb"
                :rules="[
                  { type: 'required', message: ' Web site name is required' },
                ]"
                v-model="settingList.name"
              />
            </b-col>
            <b-col cols="12" md="6">
              <a-input-text
                label="earn money website"
                type="number"
                :rules="[
                  {
                    type: 'required',
                    message: ' earn money website is reqired',
                  },
                ]"
                placeholder="enter  earn money website"
                name="nameEaern"
                v-model="settingList.profit"
              />
            </b-col>
          </b-row>
        </b-col>
      </b-card-body>
      <b-card-footer style="display: flex; justify-content: space-between">
        <div class="d-flex">
          <b-button
            variant="primary"
            style="margin-left: 10px"
            @click="updateIndexSetting()"
          >
            send
          </b-button>
        </div>
      </b-card-footer>
    </b-card>
    <b-row>
      <b-col cols="12" md="4">
        <a-table
          isPlus
          title="city"
          :columns="columns"
          :items="cityList"
          @details="openEditCityDialog"
          @plus="setCityDialogForm"
          selectedLabel="id"
          @delete-selected="delteAllIndexCity"
          
        >
          <template slot="headers" slot-scope="{ props }">
            {{ $t(props.column.label) }}
          </template>
        </a-table>
      </b-col>
      <b-col cols="12" md="4">
        <a-table
        title="university"
          :items="universityList"
          :columns="universitiesColumn"
          isPlus
          @plus="setUniversityDialogFormPlus()"
          @details="setUniversityDialogForm"
          selectedLabel="id"
          @delete-selected="delteAllIndexUni"
        >
        </a-table>
      </b-col>
      <b-col cols="12" md="4">
        <a-table
          :items="countryList"
          title="country"
          :columns="countryColumn"
          isPlus
          @plus="setCountryDialogFormPlus()"
          @details="setCountryDialogForm"
          selectedLabel="id"
          @delete-selected="delteAllIndexCountry"
        >
        </a-table>
      </b-col>
    </b-row>
    <action ref="SettingsDialog" :isEdit="isEdit"> </action>
    <university ref="universityDialog" :isEdit="isEdit"  />
    <country ref="countryDialog" :isEdit="isEdit"/>
  </div>
</template>

<script>
import action from "./components/actions.vue";
import university from "@/views/admin/settings/components/university/index.vue";
import country from "@/views/admin/settings/components/country/index.vue";
import { mapState, mapActions } from "vuex";
export default {
  data: () => ({

    columns: [
      {
        label: "cityName",
        field: "name",
      },
      {
        label: "details",
        field: "details",
      },
    ],

    isEdit: true,
    universitiesColumn: [
      {
        label: "univirisityName",
        field: "name",
      },
      {
        label: "details",
        field: "details",
        sortable: false,
      },
    ],
    countryColumn: [
      {
        label: "countryName",
        field: "name",
      },
      {
        label: "details",
        field: "details",
        sortable: false,
      },
    ],

 
  }),
  components: {
    action,
    university,
    country
  },
  computed: {
    //  ...mapGetters(['faculties']),
    ...mapState({
      settingList: (state) => state.settings.settingList,
      cityList: (state) => state.settings.cityList,
      universityList: (state) => state.settings.universityList,
      countryList: state => state.settings.countryList,
    
    }),
  },
  created(){
      this.getSettingDetails();
       this.getCityDetails();
      this.getUniveristyDetails();
  },
  methods: {
    ...mapActions(["updateSetting","getCityDetails","getSettingDetails","deleteAllCountry","getUniveristyDetails","deleteAllUniversity","deleteAllCity"]),
    setUniversityDialogForm(props) {
      this.isEdit = true;
      this.$refs.universityDialog.open(props.row);
    },
    setUniversityDialogFormPlus(){
      this.isEdit = false;
            this.$refs.universityDialog.open();

    },
    setCityDialogForm() {
      this.isEdit = false;
      this.$refs.SettingsDialog.open();
    },
    setCountryDialogForm(props) {
      this.isEdit = true;
      this.$refs.countryDialog.openDialog(props.row);
    },
    setCountryDialogFormPlus(){
      this.isEdit = false;
            this.$refs.countryDialog.openDialog();

    },
    openEditCityDialog(p) {
      // this.$store.commit("Reset_Sub_Category_Dto", props.row);
      this.isEdit = true;
      this.$refs.SettingsDialog.open(p.row);
    },
    updateIndexSetting(){
      this.updateSetting(this.settingList)
    },
    delteAllIndexUni(ids){
      this.deleteAllUniversity(ids)
    },
    delteAllIndexCountry(ids){
      this.deleteAllCountry(ids)
    },
    delteAllIndexCity(ids){
      this.deleteAllCity(ids)

    }
  },
};
</script>
// https://stackabuse.com/drag-and-drop-in-vanilla-javascript/
