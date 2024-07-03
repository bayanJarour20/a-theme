<template>
  <ValidationObserver ref="observer">
    <b-form>
      <a-dialog
        ref="advertisingDialog"
        @ok="submit()"
        :title="title"
        :placeholder="!isEdit ? 'Search for a specific advertising' : ''"
        :btn_title="!isEdit ? 'new advertising' : ''"
        @delete="deleteAdvertising(advertisingDto.id)"
        @search="search"
        :isEdit="!!advertisingDto.id"
      >
        <template #body>
          <a-input-text
            :rules="[
              {
                type: 'required',
                message: 'advertising title is required',
              },
            ]"
            label="advertising title"
            placeholder="enter advertising title"
            name="advertising title"
            v-model="advertisingDto.title"
          />
          <a-input-textarea
            :rules="[
              {
                type: 'required',
                message: 'advertising description is required',
              },
            ]"
            label="advertising description"
            placeholder="enter advertising description"
            name="advertising description"
            v-model="advertisingDto.description"
          />
          <a-input-datepicker
            required
            :rules="[
              {
                type: 'required',
                message: 'advertising start date is required',
              },
            ]"
            label="advertising start date"
            name="advertising start date"
            placeholder="Choose a date"
            v-model="advertisingDto.startDate"
          >
          </a-input-datepicker>
          <a-input-datepicker
            required
            :rules="[
              {
                type: 'required',
                message: 'advertising end date is required',
              },
            ]"
            label="advertising end date"
            name="advertising end date"
            placeholder="Choose a date"
            v-model="advertisingDto.endDate"
          >
          </a-input-datepicker>

          <a-input-file
          multiple
            label="advertising image"
            required
            title="advertising image"
            @input="advertisingDto.Files = $event"
          ></a-input-file>
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
      default: () => "add advertising",
    },
    isEdit: Boolean,
  },
  data: () => ({
   faildRules:true
  }),
  computed: {
    ...mapState({
        advertisingDto: state => state.advertising.advertisingDto,
    })
  },
  created() {
  },
  methods: {
    ...mapActions(["addAdvertising","updateAdvertising","deleteAdvertising"]),
    submit() {
             this.$refs.observer.validate().then(success => {
              console.log(this.advertisingDto.Files)
                if (
                    success &&
                    (this.advertisingDto.Files)
                ) {
                    var AdsFormData = new FormData();
                    if (this.advertisingDto.id == "") {
                        AdsFormData.append(
                            "Files",
                            this.advertisingDto.Files
                        );
                        AdsFormData.append("title", this.advertisingDto.title);
                         AdsFormData.append("description", this.advertisingDto.description);                        
                        AdsFormData.append(
                            "startDate",
                            new Date(
                                this.advertisingDto.startDate
                            ).toLocaleDateString()
                        );
                        AdsFormData.append(
                            "endDate",
                            new Date(
                                this.advertisingDto.endDate
                            ).toLocaleDateString()
                        );
                        this.addAdvertising({
                        id: this.advertisingDto.id,
                        formData: AdsFormData
                    });
                    } else {
                        AdsFormData.append("id", this.advertisingDto.id);
                        AdsFormData.append(
                            "Files",
                            this.advertisingDto.Files
                        );
                        AdsFormData.append("title", this.advertisingDto.title);
                        AdsFormData.append(
                            "startDate",
                            new Date(
                                this.advertisingDto.startDate
                            ).toLocaleDateString()
                        );
                        AdsFormData.append(
                            "endDate",
                            new Date(
                                this.advertisingDto.endDate
                            ).toLocaleDateString()
                        );
                        AdsFormData.append("description", this.advertisingDto.description);   
                        this.updateAdvertising({
                        id: this.advertisingDto.id,
                        formData: AdsFormData
                    });
                    }

                    this.$refs.advertisingDialog.close();
                    this.closeDialog();
                }
            });
        
    },
    openDialog(p) {
            this.$store.commit('Set_Advertising_Dto', p) 
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
