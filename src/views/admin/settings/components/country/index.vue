<template>
  <a-dialog
    @ok="onSubmit()"
    :isEdit="!!countryDto.id"
    @delete="deleteCountry(countryDto.id)"
    ref="dialog"
    :title="!isEdit ? 'add country name' : 'edit country name'"
  >
    <template slot="body">
      <ValidationObserver ref="observer">
        <a-input-text
          :rules="[{ type: 'required', message: 'country name is required' }]"
          label="country name"
          v-model="countryDto.name"
          placeholder="enter name country"
          name="country name setting"
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
    isEdit: Boolean,
  },
  computed: {
    ...mapState({
      countryDto: (state) => state.settings.countryDto,
    }),
  },
  methods: {
    ...mapActions(["createCountry", "deleteCountry", "updateCountry"]),
    openDialog(p) {
      this.$store.commit("Set_Country_Dto", p);

      this.$refs.dialog.open();
    },
    onSubmit() {
      this.$refs.observer.validate().then((success) => {
        if (success) {
          console.log(!this.countryDto.id);
          if (!this.countryDto.id) {
            this.createCountry(this.countryDto);
          } else this.updateCountry(this.countryDto);
        }
      });
    },
  },
};
</script>
