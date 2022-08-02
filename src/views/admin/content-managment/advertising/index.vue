<template>
  <div>
    <b-row>
      <b-col
        cols="12"
        md="6"
        lg="3"
        
      >
        <component
          @details="deailsAds"
          :is="advertisingCard + 'Card'"
          :item="item"
        ></component>
      </b-col>
      <b-col
        cols="12"
        md="6"
        lg="3"
        
      >
        <component
          @details="deailsAds"
          :is="advertisingCard + 'Card'"
          :item="item"
        ></component>
      </b-col>
      <b-col
        cols="12"
        md="6"
        lg="3"
        
      >
        <component
          @details="deailsAds"
          :is="advertisingCard + 'Card'"
          :item="item"
        ></component>
      </b-col>
      <b-col
        cols="12"
        md="6"
        lg="3"
        
      >
        <component
          @details="deailsAds"
          :is="advertisingCard + 'Card'"
          :item="item"
        ></component>
      </b-col><b-col
        cols="12"
        md="6"
        lg="3"
        
      >
        <component
          @details="deailsAds"
          :is="advertisingCard + 'Card'"
          :item="item"
        ></component>
      </b-col>
      <b-col
        cols="12"
        md="6"
        lg="3"
        
      >
        <component
          @details="deailsAds"
          :is="advertisingCard + 'Card'"
          :item="item"
        ></component>
      </b-col>

      <createAdvertising
        ref="editAdvertisingeDialog"
        title="تعديل الإعلان"
        isEdit
      />
      <b-col cols="12" class="d-flex justify-content-center mb-3">
        <a-pagination :items="advertising" v-model="activeAdvertising" />
      </b-col>
    </b-row>
  </div>
</template>
<script>
const AdvertisingCard = () => import("./components/card-advertising.vue");
// import { mapActions, mapState, mapGetters } from "vuex";
import createAdvertising from "./components/create-facultie.vue";

export default {
  components: {
    AdvertisingCard,
    createAdvertising,
  },
  data: () => ({
    activeAdvertising: [
      {
        id: 1,
        name: "sdsd",
        universityId: 3,
        numberOfYear: 12,
        imagePath: [],
      },
      {
        id: 1,
        name: "sdsd",
        universityId: 3,
        numberOfYear: 12,
        imagePath: [],
      },
      {
        id: 1,
        name: "sdsd",
        universityId: 3,
        numberOfYear: 12,
        imagePath: [],
      },
    ],
    advertising: [],
    advertisingCard: "Advertising",
    item:{}
  }),
  computed: {
    // ...mapState({
    //     advertisingDto: state => state.advertising.advertisingDto
    // }),
    // ...mapGetters(['advertising'])
  },
  // created() {
  //     this.getAdvertising();
  // },
  methods: {
    // ...mapActions(["getAdvertising"]),
    deailsAds(item) {
      console.log(item);
      // Object.assign(this.advertisingDto, item);
      this.$refs.editAdvertisingeDialog.openDialog();
    },
  },
  beforeDestroy() {
    this.$store.commit("Reset_Search_Dto");
  },
};
</script>
