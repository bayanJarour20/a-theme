<template>
  <ValidationObserver ref="observer">
    <b-form>
      <a-dialog
        ref="advertisingDialog"
        @ok="submit()"
        :title="title"
        :placeholder="!isEdit ? 'ابحث عن إعلان محدد' : ''"
        :btn_title="!isEdit ? 'إعلان جديد' : ''"
        @delete="deleteadvertising(advertisingDto.id)"
        @search="search"
      >
        <template #body>
          <a-input-text
            :rules="[
              {
                type: 'required',
                message: 'العنوان الرئيسي إجباري',
              },
            ]"
            label="العنوان الرئيسي"
            placeholder="ادخل العنوان الرئيسي"
            name="name"
          />
          <a-input-datepicker
            required
            label="مدة الإعلان"
            name="مدة الإعلان"
            placeholder="Choose a date"
          >
          </a-input-datepicker>
          <!-- :label="advertisingDto.type ? 'غلاف الفيديو' : 'صورة الإعلان'" -->
          <!-- @input="advertisingDto.imageFile = $event" -->

          <a-input-file
            label="صورة الإعلان"
            required
            title="تحميل صورة"
            :value="advertisingDto.imagePath"
          ></a-input-file>
        </template>
      </a-dialog>
    </b-form>
  </ValidationObserver>
</template>
<script>
import { ValidationObserver } from "vee-validate";

// import { mapState, mapActions } from "vuex";
export default {
  components: {
    ValidationObserver,
  },
  props: {
    title: {
      type: String,
      default: () => "إضافة إعلان",
    },
    isEdit: Boolean,
  },
  data: () => ({
    advertisingDto: {
      id: 1,
      name: "sdsd",
      universityId: 3,
      numberOfYear: 12,
      imagePath: [],
    },
    university: [
      {
        id: 1,
        name: "xzxz",
      },
      {
        id: 1,
        name: "xzxz",
      },
    ],
  }),
  computed: {
    // ...mapState({
    //     advertisingDto: state => state.advertisings.advertisingDto,
    //     university: state => state.university.universities
    // })
  },
  created() {
    // this.fetchUniversity();
  },
  methods: {
    // ...mapActions(["fetchUniversity", "actionadvertising", "deleteadvertising"]),
    submit() {
      this.$refs.observer.validate().then((success) => {
        if (success && (this.facultyDto.file || this.facultyDto.imagePath)) {
          var facultyFormData = new FormData();
          if (!this.facultyDto.id) {
            facultyFormData.append(
              "numberOfYear",
              this.facultyDto.numberOfYear
            );
            facultyFormData.append("name", this.facultyDto.name);
            facultyFormData.append("file", this.facultyDto.file);
            facultyFormData.append(
              "universityId",
              this.facultyDto.universityId
            );
          } else {
            Object.keys(this.facultyDto).forEach((key) => {
              facultyFormData.append(key, this.facultyDto[key]);
            });
          }

          this.actionFaculty({
            id: this.facultyDto.id,
            formData: facultyFormData,
          });
        }
      });
    },
    openDialog() {
      this.$refs.advertisingDialog.open();
    },
    search(query) {
      this.$store.commit("Set_Search_Dto", {
        keys: ["name"],
        query,
      });
    },
  },
};
</script>
