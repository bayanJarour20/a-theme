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
          Some quick example text to build on the card title and make up the
          bulk of the card's content. Some quick example text to build on the
          card title and make up the bulk of the card's content. Some quick
          example text to build on the card title and make up the bulk of the
          card's content. Some quick example text to build on the card title and
          make up the bulk of the card's content.
        </b-card-body>
        <b-card-header>
          <strong>
            <i
              class="mdi mdi-menu"
              style="margin-left: 10px; margin-top: 4px"
            ></i>
            details project Rivira  
          </strong>
        </b-card-header>
        <b-card-body>
          <b-col>
            <b-row>
              <b-col cols="12" md="6">
                <label style="width: 100%"
                  >the Range
                  <div class="label-input">100$</div>
                </label>
                <label style="width: 100%">
                  execution time
                  <div class="label-input">8 days</div>
                </label>
                <label style="width: 100%"
                  >projectOwner
                  <div class="label-input">seleen ajaan</div>
                </label>
                <label style="width: 100%">
                  projectUser
                  <div class="label-input">bayan jarour</div>
                </label>
              </b-col>
              <b-col cols="12" md="6">
                <label style="width: 100%"
                  >Number of offers
                  <div class="label-input">14</div>
                </label>
                <label style="width: 100%">
                  project start date
                  <div class="label-input">2022/4/12</div>
                </label>
                <label style="width: 100%">
                   delivery date
                  <div class="label-input">2022/4/12</div>
                </label>
                <label style="width: 100%">
                  maximum project end date
                  <div class="label-input">2022/4/12</div>
                </label>
              </b-col>
            </b-row>
          </b-col>
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
            <b-row>
              <b-col cols="12" md="6">
                <label style="width: 100%">
                  <div class="label-input">vue</div>
                </label>
                <label style="width: 100%">
                  <div class="label-input">angular</div>
                </label>
                <label style="width: 100%">
                  <div class="label-input">Bootstrap</div>
                </label>
              </b-col>
              <b-col cols="12" md="6">
                <label style="width: 100%">
                  <div class="label-input">vue</div>
                </label>
                <label style="width: 100%">
                  <div class="label-input">js</div>
                </label>
                <label style="width: 100%">
                  <div class="label-input">html</div>
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
          <carousel :perPage="3">
            <slide class="p-2" style="display: flex; justify-content: center;flex-direction: column;    align-items: center;">
              <label style="width: 100%; text-align: center">
                image dashboard 
              </label>
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
              <label style="width: 100%; text-align: center">
                image dashboard 
              </label>
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
              <label style="width: 100%; text-align: center">
                image dashboard 
              </label>
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
              <label style="width: 100%; text-align: center">
                image dashboard 
              </label>
              <div class="tb-affect">
                <b-button
                  class="b-affect"
                  v-b-modal.modal-center
                  variant="primary"
                  ><i class="mdi mdi-plus"></i>
                </b-button>
              </div>
             
            </slide>
          </carousel>
        </b-card-body>
        <!-- <b-card-header>
          <strong>
            <i
              class="mdi mdi-delete-empty"
              style="margin-left: 10px; margin-top: 4px"
            ></i>
            مرحلة العقد للمشروع
          </strong>
        </b-card-header>
        <section class="section">
          <div class="container">
            <div class="columns">
              <div class="d-flex" style="padding: 30px">
                <div>
                  <div class="hex">1</div>
                  <h5 style="padding-top: 20px">مرحلة العقد</h5>
                </div>
                <hr style="width: 100%" />
                <div>
                  <div class="hex">2</div>
                  <h5 style="padding-top: 20px">مرحلة العمل</h5>
                </div>
                <hr style="width: 100%" />
                <div>
                  <div class="hex">3</div>
                  <h5 style="padding-top: 20px">مرحلة التسليم</h5>
                </div>
              </div>
            </div>
          </div>
        </section> -->
        <b-card-body style="display: flex; justify-content: space-between">
          <div style="display: flex">
            <b-button variant="primary" @click="offerProject()"
              >  Project offers and comments<i
                class="mdi mdi-comment-processing-outline "
                style="margin-left: 10px; margin-top: 4px"
              ></i
            ></b-button>
          </div>
          <b-button variant="primary"
          to="admin/projects"
            >back<i
              class="mdi mdi-arrow-right"
              style="margin-left: 10px; margin-top: 4px"
            ></i
          ></b-button>
        </b-card-body>
      </b-card>
      <!-- <carousel :perPage="1">
      <slide class="p-2" style="display: flex; justify-content: center">
      </slide>
      <slide class="p-2" style="display: flex; justify-content: center">
        
      </slide>
      >
    </carousel> -->
    </b-col>
  </b-row>
</template>
<style>
.tb-affect {
  position: relative;
  width: 100%;
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
hr {
  margin-top: 3%;
}
.hex {
  background: linear-gradient(to left, #9c9f8c, #42b983);
  width: 100px;
  display: flex;
  justify-content: center;
  padding: 20px;
  -webkit-clip-path: polygon(
    0% 50%,
    25% 0%,
    75% 0%,
    100% 50%,
    75% 100%,
    25% 100%
  );
}
</style>
<script>
import { Carousel, Slide } from "vue-carousel";
import {mapState} from "vuex"
export default {
  components: {
    Carousel,
    Slide,
  },

  data: () => ({
    slide: 0,
    sliding: null,
  }),
  props: {
    id: String,
  },
  methods: {
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
  computed:{
     ...mapState({
             projectDto: state => state.projects.projectDto,
        }), 
  }
};
</script>
