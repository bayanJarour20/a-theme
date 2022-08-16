<template>
  <ValidationObserver ref="observer">
    <b-form>
      <a-dialog
        ref="facultieDialog"
        @ok="submit()"
        :title="title"
        :placeholder="!isEdit ? 'Search for a specific faculity' : ''"
        :btn_title="!isEdit ? 'new faculity' : ''"
        :isEdit="!!facultyDto.id"
        @delete="deleteFaculty(facultyDto.id)"
        @search="search"
      >
        <template #body>
          <a-input-text
            :rules="[{ type: 'required', message: 'faculty name is reqired' }]"
            label="faculty name"
            v-model="facultyDto.name"
            placeholder="enter faculty name"
            name="namefaculty"
          />

          <a-input-select
            label="university name"
            placeholder="select university"
            :rules="[
              {
                type: 'required',
                message: 'University field must be selected',
              },
            ]"
            :options="universityList"
            name="university"
            v-model="facultyDto.universityId"
            :clearable="true"
          />
        </template>
      </a-dialog>
    </b-form>
  </ValidationObserver>
</template>
<script>
import { ValidationObserver } from "vee-validate";

import { mapState, mapActions } from "vuex";
export default {
  components: {
    ValidationObserver,
  },
  props: {
    title: {
      type: String,
      default: () => "add faculty",
    },
    isEdit: Boolean,
  },
  data: () => ({
  }),
  computed: {
    ...mapState({
      facultyDto: (state) => state.faculties.facultyDto,
       universityList: state => state.settings.universityList
    }),
  },
  created() {
     this.getUniveristyDetails();
  },
  methods: {
    ...mapActions(["actionFaculty", "deleteFaculty","getUniveristyDetails"]),
    submit() {
      this.$refs.observer.validate().then((success) => {
        if (success) {
          this.actionFaculty({
            name: this.facultyDto.name,
            universityId: this.facultyDto.universityId,
          });
        }
      });
    },
    openDialog(p) {
      this.$store.commit('Set_Facultie_Dto', p) 
      this.$refs.facultieDialog.open();
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
