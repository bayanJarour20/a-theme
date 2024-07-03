<template>
  <b-row>
    <b-col cols="12">
      <b-card no-body>
        <b-card-header>
          <strong>
            <i
              class="mdi mdi-subtitles-outline"
              style="margin-left: 10px; margin-top: 4px"
            ></i>
            Rivira
          </strong>
        </b-card-header>
        <b-card-body>
          {{worksDto.description}}
        </b-card-body>
        <b-card-header>
          <strong>
            <i
              class="mdi mdi-format-indent-increase"
              style="margin-left: 10px; margin-top: 4px"
            ></i>
            Category to Rivira
          </strong>
        </b-card-header>
        <b-card-body>
          <b-col>
            <b-row >
              <b-col cols="12" md="6" v-for="(value, i) in worksDto.categoryDtos"
                  :key="i">
                <label style="width: 100%">
                  <div class="label-input">{{value.name}}</div>
                </label>
              </b-col>
            </b-row>
          </b-col>
        </b-card-body>
        <b-card-header>
          <strong>
            <i
              class="mdi mdi-image-size-select-actual "
              style="margin-left: 10px; margin-top: 4px"
            ></i>
            image project
          </strong>
        </b-card-header>
        <b-card-body>
          <!-- <carousel :perPage="3">
            <slide class="p-2" style="display: flex; justify-content: center;flex-direction: column;    align-items: center;">
              <div class="tb-affect">
                <b-button
                  class="b-affect"
                  v-b-modal.modal-center
                  variant="primary"
                  ><i class="mdi mdi-plus"></i>
                </b-button>
              </div>
              <b-modal
                id="modal-center"
                centered
                :hide-footer="true"
                :hide-header="true"
                style="padding: 0px"
              >
                <b-img
                  style="width: 100%"
                  src="https://i.pravatar.cc/150?img=58"
                ></b-img>
              </b-modal>
            </slide>
            <slide class="p-2" style="display: flex; justify-content: center;flex-direction: column;    align-items: center;">
              <div class="tb-affect">
                <b-button
                  class="b-affect"
                  v-b-modal.modal-center
                  variant="primary"
                  ><i class="mdi mdi-plus"></i>
                </b-button>
              </div>
              
            </slide>
            <slide class="p-2" style="display: flex; justify-content: center;flex-direction: column;    align-items: center;">
              <div class="tb-affect">
                <b-button
                  class="b-affect"
                  v-b-modal.modal-center
                  variant="primary"
                  ><i class="mdi mdi-plus"></i>
                </b-button>
              </div>
             
            </slide>
            <slide class="p-2" style="display: flex; justify-content: center;flex-direction: column;    align-items: center;">
              <div class="tb-affect">
                <b-button
                  class="b-affect"
                  v-b-modal.modal-center
                  variant="primary"
                  ><i class="mdi mdi-plus"></i>
                </b-button>
              </div>
             
            </slide>
          </carousel> -->
          <label style="width: 100%"
                  >project cv
                  <div class="label-input">
                    <a
                    :href="worksDto.link"
                      >{{worksDto.link}}</a
                    >
                  </div>
          </label>
        </b-card-body>
        <b-card-body style="display: flex; justify-content: space-between">

          <b-button variant="primary"
          to="/admin/user"
            >back<i
              class="mdi mdi-arrow-right"
              style="margin-left: 10px; margin-top: 4px"
            ></i
          ></b-button>
        </b-card-body>
      </b-card>
     
    </b-col>
  </b-row>
</template>
<style>
.label-input {
  border-color: #ced4da60 !important;
  box-shadow: 0px 5px 10px rgb(62 68 90 / 10%) !important;
  border-radius: 6px;
  margin-top: 5px !important;
  padding: 0.375rem 0.75rem;
  background-color: #fff;
  background-clip: padding-box;
  border: 1px solid #ced4da;
}
.tb-affect {
  position: relative;
 
      display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    background-image: url("~@/assets/images/download (1).jpg");
    height: 300px;
        background-size: cover;
        border-radius: 20px;
}
.b-affect {
  opacity: 0;
  visibility: hidden;
      width: 50px;
    height: 50px;
    border-radius: 50%;
    z-index: 1;
    display: flex;
    justify-content: center;
}
.tb-affect:after {
  position: absolute;
  content: "";
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  width: 100%;
  border-radius: 20px;
  height: 0;
  background: #3333334f;
  transition: height 0.5s;
  z-index: 0;
}

.tb-affect:hover:after {
  height: 100%;
}
.tb-affect:hover .b-affect {
  opacity: 1;
  visibility: visible;
  z-index: 1;
}
</style>
<script>
// import { Carousel, Slide } from "vue-carousel";
import {mapActions,mapState} from "vuex"
export default {

  computed: {
    ...mapState({
      worksDto: (state) => state.user.worksDto,
    }),
  },
  created(){
    this.getWorks(this.id)
  },
  data: () => ({
    slide: 0,
    sliding: null,
    
  }),
  props: {
    id: String,
  },
  methods: {
    ...mapActions(["getWorks"]),
    completeStep(payload) {
      this.demoSteps.forEach((step) => {
        if (step.name === payload.name) {
          step.completed = true;
        }
      });
    },
    // Executed when @active-step event is triggered
    isStepActive(payload) {
      this.demoSteps.forEach((step) => {
        if (step.name === payload.name) {
          if (step.completed === true) {
            step.completed = false;
          }
        }
      });
    },
    // Executed when @stepper-finished event is triggered
    alert(payload) {
      console.log(payload);
      alert("end");
    },
    offerProject() {
      console.log("/admin/projects/details/" + this.id);
      this.$router.push("/admin/projects/details/" + this.id + "/offers");
    },
    onSlideStart(slide) {
      this.sliding = true;
      console.log(slide);
    },
    onSlideEnd(slide) {
      this.sliding = false;
      console.log(slide);
    },
  },
};
</script>
