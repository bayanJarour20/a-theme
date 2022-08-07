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
            DANIEL DEN
          </strong>
        </b-card-header>
        <div>
          <b-row>
            <b-col cols="12" md="6" style="margin: 20px auto">
              <div class="example">
                <div class="block">
                  <div class="side -main"></div>
                  <div class="side -left"></div>
                </div>
                <div class="block">
                  <div class="side -main"></div>
                  <div class="side -left"></div>
                </div>
                <div class="block">
                  <div class="side -main"></div>
                  <div class="side -left"></div>
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
                  Daniel Den
                </h2>
                <div
                  class="d-flex py-2"
                  style="justify-content: space-between; width: 50%"
                >
                  <div class="d-flex">
                    <i class="mdi mdi-map-marker mr-1 text-primary"></i>
                    <label>syria</label>
                  </div>
                  <div>
                    <i class="mdi mdi-card-account-mail mr-1 text-primary"></i>
                    <label>300</label>
                    <!-- <i class="mdi mdi-briefcase"></i> -->
                  </div>
                  <div class="d-flex">
                    <i class="mdi mdi-account mr-1 text-primary"></i>
                    <label>independent</label>
                  </div>
                </div>
                <div class="d-flex my-3 justify-center">
                  <span
                    class="border p-2 mx-2 border-primary"
                    style="border-radius: 50%"
                    >UI/UX</span
                  >
                  <span
                    class="border p-2 mx-2 border-primary"
                    style="border-radius: 50%"
                    >vue</span
                  >
                  <span
                    class="border p-2 mx-2 border-primary"
                    style="border-radius: 50%"
                    >React</span
                  >
                  <span
                    class="border p-2 mx-2 border-primary"
                    style="border-radius: 50%"
                    >GitHub</span
                  >
                </div>
                <div>
                  <i class="mdi mdi-star text-primary"></i>
                  <i class="mdi mdi-star text-primary"></i>
                  <i class="mdi mdi-star text-primary"></i>
                  <i class="mdi mdi-star text-primary"></i>
                  <i class="mdi mdi-star text-primary"></i>
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
            Front-end developers create the user interface (UI) that determines what each part of a site or application does and how it will look.If someone wanted to build a website, for example, they might hire a front-end developer to create the site's layout. The front-end developer determines where to place images, what the navigation should look like, and how to present the site. Much of their work involves ensuring the appearance and layout of the site or application is easy to navigate and intuitive for the user.
          </b-card-body>
          <b-card-header>
            <strong>
              <i
                class="mdi  mdi-sign-real-estate text-primary"
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
                    <div class="label-input">14</div>
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
                class="mdi mdi-briefcase text-primary "
                style="margin-left: 10px; margin-top: 4px"
              ></i>
              his Works
            </strong>
          </b-card-header>
          <b-card-body>
            <b-col>
              <a-table
                :items="projectList"
                :columns="projectColumn"
                @details="openEditprojectFreeDialog"
              >
                <template slot="headers" slot-scope="{ props }">
                  {{ $t(props.column.label) }}
                </template>
              </a-table>
            </b-col>
          </b-card-body>
          <b-card-header>
            <strong>
              <i
                class="mdi mdi-text-box-multiple text-primary "
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
                    <div class="label-input">0967456900</div>
                  </label>
                  <label style="width: 100%; text-align: center">
                    passport photo
                  </label>
                  <div class="tb-affect">
                    <b-button
                      class="b-affect"
                      v-b-modal.modal-center
                      variant="primary"
                      ><i class="mdi mdi-magnify-plus "></i>
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
                  </b-modal>
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
                    <div class="label-input">Bayan.jarour20@gmail.com</div>
                  </label>
                  <label style="width: 100%; text-align: center">
                    ID photo
                  </label>
                  <div class="tb-affect tp-photo">
                    <b-button
                      class="b-affect"
                      v-b-modal.modal-center
                      variant="primary"
                      ><i class="mdi mdi-magnify-plus"></i>
                    </b-button>
                  </div>
                </b-col>
                <label style="width: 100%; padding-bottom: 20px"
                  >User Addres
                  <div class="label-input">syria Aleppo</div>
                </label>
                <div style="width:100%;">
                  <a-input-file
                      label="CV link..."
                      required
                      title="Download CV link pdf"
                    ></a-input-file>
                </div>
              </b-row>
            </b-col>
          </b-card-body>
        </div>
        <b-card-body style="display: flex; justify-content: space-between">
          <div class="d-flex">
            <b-button variant="primary"
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
.tp-photo{
    background-image: url("~@/assets/images/images (1).jpg")!important;

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
  background-image: url("https://i.pravatar.cc/150?img=58");
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

export default {
  components: {
  },
  data: () => ({
    dialog: true,
    // src: loadingTask,
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
        label: "details",
        field: "details",
        sortable: false,
      },
    ],
    projectList: [
      {
        id: 1,
        name: "taraphouq",
        nameOwnerProject: "karolin tooa",
        nameDepentent: "null",
        dateStartProject: "2022/4/12",
        dateEndProject: "2022/4/22",
        isActive: true,
      },
      {
        id: 2,
        name: "mostaquel",
        nameOwnerProject: "oliver kjlll",
        nameDepentent: "bayan jarour",
        dateStartProject: "2022/4/12",
        dateEndProject: "2022/4/22",
        isActive: true,
      },
      {
        id: 3,
        name: "Olivara",
        nameOwnerProject: "seleen ajaan",
        nameDepentent: "woroud alnaab",
        dateStartProject: "2022/4/12",
        dateEndProject: "2022/4/22",
        isActive: true,
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
  methods: {
    openEditprojectFreeDialog(props) {
      console.log(
        "/admin/user/details/" + this.id + "/WorksUser/" + props.row.id
      );
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
