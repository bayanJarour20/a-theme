<template>
  <div>
    <b-row>
      <b-col
        cols="12"
        md="6"
        lg="3"
        v-for="(item, i) in advertisingList"
        :key="i"
      >
        <component
          @details="deailsAds"
          :is="advertisingCard + 'Card'"
          :item="item"
        ></component>
      </b-col>
      <createAdvertising
        ref="editAdvertisingeDialog"
        title="edi advertising"
        isEdit
      />
      <!-- <b-col cols="12" class="d-flex justify-content-center mb-3">
        <a-pagination :items="advertising" v-model="advertisingList" />
      </b-col> -->
    </b-row>
  </div>
</template>
<script>
const AdvertisingCard = () => import("./components/card-advertising.vue");
 import { mapActions, mapState } from "vuex";
import createAdvertising from "./components/create-advertising.vue";

export default {
  components: {
    AdvertisingCard,
    createAdvertising,
  },
  data: () => ({
 
    advertisingCard: "Advertising",
  }),
  computed: {
    ...mapState({
        advertisingDto: state => state.advertising.advertisingDto,
        advertisingList:state => state.advertising.advertisingList
    }),
    // ...mapGetters(['advertising'])
  },
  created() {
      this.getAdvertising();
  },
  methods: {
     ...mapActions(["getAdvertising"]),
    deailsAds(item) {
       Object.assign(this.advertisingDto, item);
      this.$refs.editAdvertisingeDialog.openDialog(item);
    },
  },
  beforeDestroy() {
    this.$store.commit("Reset_Search_Dto");
  },
};
</script>
