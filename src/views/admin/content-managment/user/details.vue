<template>
  <b-row>
    <b-col cols="12">
      <b-card no-body>
        <b-card-header>
          <strong>
            <i
              class="mdi mdi-account-tie text-primary"
              style="margin-left: 10px; margin-top: 4px"
            ></i>
            {{ userDto.fullName }}
          </strong>
        </b-card-header>
        <div>
          <b-row>
            <b-col cols="12" md="6" style="margin: 20px auto">
              <div class="example">
                <div class="block">
                  <div class="side -main"  :style="{ 'background-image': 'url(https://i.pravatar.cc/150?img=58)' }"></div>
                  <div class="side -left" :style="{ 'background-image': 'url(https://i.pravatar.cc/150?img=58)' }"></div>
                </div>
                <div class="block">
                  <div class="side -main" :style="{ 'background-image': 'url(https://i.pravatar.cc/150?img=58)' }"></div>
                  <div class="side -left" :style="{ 'background-image': 'url(https://i.pravatar.cc/150?img=58)' }"></div>
                </div>
                <div class="block">
                  <div class="side -main" :style="{ 'background-image': 'url(https://i.pravatar.cc/150?img=58)' }"></div>
                  <div class="side -left" :style="{ 'background-image': 'url(https://i.pravatar.cc/150?img=58)' }"></div>
                </div>
              </div>
              <b-card-text
                style="
                  display: flex;
                  align-items: center;
                  flex-direction: column;
                  padding-top: 20px;
                "
              >
                <h2
                  style="
                    font-size: 1.5rem;
                    text-align: center;
                    font-weight: 600;
                    letter-spacing: 0.05rem;
                    text-transform: uppercase;
                    margin-bottom: 5px;
                  "
                >
                  {{ userDto.fullName }}
                </h2>
                <div
                  class="d-flex py-2"
                  style="justify-content: space-around; width: 50%"
                >
                  <div class="d-flex">
                    <i class="mdi mdi-map-marker mr-1 text-primary"></i>
                    <label>syria</label>
                  </div>
                  <div>
                    <i class="mdi mdi-card-account-mail mr-1 text-primary"></i>
                    <label>{{ userDto.numOfConnections }}</label>
                    <!-- <i class="mdi mdi-briefcase"></i> -->
                  </div>
                </div>
                <div
                  class="d-flex my-3 justify-center"
                  
                >
                <div v-for="(value, i) in userDto.careerDtos"
                  :key="i">
                  <span
                    class="border p-2 mx-2 border-primary"
                    style="border-radius: 50%"
                    >{{ value.name }}</span
                  >
                  </div>
                </div>
                <div class="d-flex my-3 justify-center">
                  <div v-for="(value, i) in userDto.evalution"
                  :key="i">
                  <i class="mdi mdi-star text-primary"></i>
                  </div>
                </div>
              </b-card-text>
            </b-col>
          </b-row>
          <b-card-header>
            <strong>
              <i
                class="mdi mdi-information text-primary"
                style="margin-left: 10px; margin-top: 4px"
              ></i>
              About Him
            </strong>
          </b-card-header>
          <b-card-body>
            {{userDto.bio}}
          </b-card-body>
          <b-card-header>
            <strong>
              <i
                class="mdi mdi-sign-real-estate text-primary"
                style="margin-left: 10px; margin-top: 4px"
              ></i>
              statistics
            </strong>
          </b-card-header>
          <b-card-body>
            <b-col>
              <b-row>
                <b-col cols="12" md="6">
                  <label>
                    Completed Projects
                    <div class="label-input">{{userDto.numOfCompletedProjects}}</div>
                  </label>
                </b-col>
                <b-col cols="12" md="6">
                  <label style="width: 100%"
                    >Projects HeWorks On
                    <div class="label-input">1</div>
                  </label>
                </b-col>
              </b-row>
            </b-col>
          </b-card-body>
          <b-card-header>
            <strong>
              <i
                class="mdi mdi-briefcase text-primary"
                style="margin-left: 10px; margin-top: 4px"
              ></i>
              his Works
            </strong>
          </b-card-header>
          <b-card-body>
            <b-col>
              <!-- //userDto.workDtos -->
              <a-table
                :items="projectList"
                :columns="projectColumn"
                @details="openEditprojectFreeDialog"
              >
                <template slot="headers" slot-scope="{ props }">
                  {{ $t(props.column.label) }}
                </template>
                <template slot="items.dateCreated" slot-scope="{ value }">
                {{ new Date(value).toLocaleDateString("en-GB") }}
            </template>
              </a-table>
            </b-col>
          </b-card-body>
          <b-card-header>
            <strong>
              <i
                class="mdi mdi-text-box-multiple text-primary"
                style="margin-left: 10px; margin-top: 4px"
              ></i>
              documentation
            </strong>
          </b-card-header>
          <b-card-body>
            <b-col>
              <b-row>
                <b-col
                  cols="12"
                  md="6"
                  style="
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                  "
                >
                  <label style="width: 100%; padding-bottom: 20px"
                    >Mobile number
                    <div class="label-input">{{userDto.email}}</div>
                  </label>
                  <!-- <label style="width: 100%; text-align: center">
                    passport photo
                  </label>
                  <div class="tb-affect">
                    <b-button
                      class="b-affect"
                      v-b-modal.modal-center
                      variant="primary"
                      ><i class="mdi mdi-magnify-plus"></i>
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
                      src="~@/assets/images/images (1).jpg"
                    ></b-img>
                  </b-modal> -->
                </b-col>
                <b-col
                  cols="12"
                  md="6"
                  style="
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                  "
                >
                  <label style="width: 100%; padding-bottom: 20px"
                    >E-mail
                    <div class="label-input">{{userDto.email}}</div>
                  </label>
                  <!-- <label style="width: 100%; text-align: center">
                    ID photo
                  </label>
                  <div class="tb-affect tp-photo">
                    <b-button
                      class="b-affect"
                      v-b-modal.modal-center
                      variant="primary"
                      ><i class="mdi mdi-magnify-plus"></i>
                    </b-button>
                  </div> -->
                </b-col>
                <div v-if="!!userDto.cvUrl">
                <div style="width: 100%">
                 <div class="label-input">{{userDto.cvUrl}} </div>
                </div>
                </div>
              </b-row>
            </b-col>
          </b-card-body>
        </div>
        <b-card-body style="display: flex; justify-content: space-between">
          <div class="d-flex">
            <b-button variant="danger"
            @click="deleteUser(this.id)"
              >delete<i
                class="mdi mdi-delete-empty"
                style="margin-left: 10px; margin-top: 4px"
              ></i
            ></b-button>
            <b-button
              variant="primary"
              style="margin-left: 10px"
              @click="detailsProject"
              >User projects
            </b-button>
          </div>
          <b-button variant="primary"
          to="/admin/user"
            >back<i
              class="mdi mdi-arrow-right"
              style="margin-left: 10px; margin-top: 4px"
            ></i></b-button
        ></b-card-body>
      </b-card>
    </b-col>
  </b-row>
</template>
<style>
.tb-affect {
  position: relative;
  width: 50%;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  background-image: url("~@/assets/images/images.jpg");
  height: 300px;
  background-size: cover;
  border-radius: 20px;
  width: 100%;
}
.tp-photo {
  background-image: url("~@/assets/images/images (1).jpg") !important;
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
  font-size: 14px;
}
.example {
  position: relative;
  width: 80%;
  padding-top: 50%;
  margin: auto;
}
.example > .block {
  position: absolute;
  height: 100%;
  width: 30%;
  perspective: 1000px;
}
.example > .block:nth-of-type(1) {
  height: 80%;
  top: 10%;
  left: 17%;
  width: 15%;
}
.example > .block:nth-of-type(2) {
  top: 0;
  left: 35%;
}
.example > .block:nth-of-type(3) {
  height: 80%;
  top: 10%;
  left: 64%;
  width: 15%;
}
.example > .block > .side {
  position: absolute;
  top: 0;
  left: 0;
  /* background-image: url("https://i.pravatar.cc/150?img=58"); */
  background-size: auto 100%;
  box-shadow: -1vw 0.5vw 1vw rgba(0, 0, 0, 0.3);
}
.example > .block > .side.-main {
  height: 100%;
  width: 100%;
  transform: rotateY(30deg);
  transform-origin: 0 50%;
}
.example > .block > .side.-left {
  height: 100%;
  width: 20%;
  transform-origin: 0 50%;
  transform: rotateY(-60deg) translateX(-100%);
  filter: brightness(40%);
}
.example > .block:nth-of-type(1) > .side.-main {
  background-position: 4% 50%;
  background-size: auto 130%;
}
.example > .block:nth-of-type(1) > .side.-left {
  background-position: 0 50%;
  background-size: auto 130%;
}
.example > .block:nth-of-type(2) > .side.-main {
  background-position: 50% 0;
}
.example > .block:nth-of-type(2) > .side.-left {
  background-position: 28.5% 0;
}
.example > .block:nth-of-type(3) > .side.-main {
  background-position: 96% 50%;
  background-size: auto 130%;
}
.example > .block:nth-of-type(3) > .side.-left {
  background-position: 78% 50%;
  background-size: auto 130%;
}
</style>

<script>
// import VueCarousel from "vue-carousel"
// import pdf from "vue-pdf";
// var loadingTask = pdf.createLoadingTask(
//   "https://cdn.mozilla.net/pdfjs/tracemonkey.pdf"
// );
import { mapActions, mapState } from "vuex";
export default {
  components: {},
  computed: {
    ...mapState({
      userDto: (state) => state.user.userDto,
    }),
  },
  data: () => ({
    dialog: true,
    // src: loadingTask,
    evalution:5,
    imageValue:"https://i.pravatar.cc/150?img=58",
    numPages: undefined,
    currentPage: 0,
    pageCount: 0,
    previewImage: [],
   
    values: [
      {
        value: "https://randomuser.me/api/portraits/men/7.jpg",
      },
    ],
    slide: 0,
    sliding: null,
    projectColumn: [
      {
        label: "projectName",
        field: "name",
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
    projectList: [
      {
        id: 1,
        name: "taraphouq",

        dateCreated: "2022/4/22",
      },
      {
        id: 2,
        name: "mostaquel",
        dateCreated: "2022/4/22",
      },
      {
        id: 3,
        name: "Olivara",
        dateCreated: "2022/4/22",
      },
    ],
  }),
  mounted() {
    this.src.promise.then((pdf) => {
      this.numPages = pdf.numPages;
    });
  },
  props: {
    id: String,
  },
  created() {
    this.getUserDetails(this.id);
  },
  methods: {
    ...mapActions(["getUserDetails","deleteUser"]),
    openEditprojectFreeDialog(props) {
      this.$router.push(
        "/admin/user/details/" + this.id + "/WorksUser/" + props.row.id
      );
    },
    detailsProject() {
      this.$router.push("/admin/user/details/" + this.id + "/ProjectDetails");
    },
    removeFile(i) {
      this.previewImage.splice(i, 1);
      this.innerValue.splice(i, 1);
      this.$emit("input", this.innerValue);
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
