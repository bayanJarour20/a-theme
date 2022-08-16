<template>
  <a-dialog
    @ok="onSubmit()"
    :isEdit="!!universityDto.id"
    @delete="deleteUniversity(universityDto.id)"
    ref="dialog"
    :title="!isEdit ? 'add university name' : 'edit university name'"
  >
    <template slot="body">
      <ValidationObserver ref="observer">
        <a-input-text
          :rules="[
            { type: 'required', message: 'university name is required' },
          ]"
          label="university name"
          v-model="universityDto.name"
          placeholder="enter name university"
          name="university name setting"
        />
        <a-input-select
          label="collages name"
          placeholder="select collages name"
          :rules="[
            { type: 'required', message: 'collages field must be selected' },
          ]"
          :options="collages"
          name="collages"
          v-model="universityDto.collageDto"
        />
      </ValidationObserver>
    </template>
  </a-dialog>
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
      default: () => "add university",
    },
    isEdit: Boolean,
  },
  data: () => ({
    collages: [
      {
        id: 1,
        name: "dsds",
      },
      {
        id: 2,
        name: "dsds",
      },
      {
        id: 3,
        name: "dsds",
      },
      {
        id: 4,
        name: "dsds",
      },
    ],
  }),
  computed: {
    ...mapState({
      universityDto: (state) => state.settings.universityDto,
    }),
  },
  methods: {
    ...mapActions(["createUniversity", "deleteUniversity", "updateUniversity"]),
    open(p) {
      this.$store.commit("Set_University_Dto", p);
      this.$refs.dialog.open();
    },
    onSubmit() {
      this.$refs.observer.validate().then((success) => {
        if (success) {
          console.log(!this.universityDto.id);
          if (!this.universityDto.id) {
            this.createUniversity(this.universityDto);
          } else this.updateUniversity(this.universityDto);
        }
      });
    },
  },
};
</script>
