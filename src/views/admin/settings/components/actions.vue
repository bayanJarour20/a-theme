<template>
  <ValidationObserver ref="settingForm">
    <a-dialog
      :title="!isEdit ? 'add city name' : 'edit city name'"
      :placeholder="!isEdit ? '' :''"
      :btn_title="!isEdit ? '' : ''"
      ref="SettingsDialog"
      @ok="onSubmit()"
      :isEdit="!!cityDto.id"
       @delete="deleteCity(cityDto.id)" 
    >
 
      <template #body>
       <a-input-text v-model="cityDto.name" label=" city name" name="city anme" placeholder=" city name" :rules="[
        {
          type: 'required',
          message: 'city name is reqired'
        }
      ]"></a-input-text>
      <a-input-select
                label="country name"
                placeholder="select country name"
                :rules="[{type: 'required', message: 'country field must be selected'}]"
                :options="countryList"
                name="country"
                v-model="cityDto.countryId"
            />     
       
      </template>
     
    </a-dialog>
  </ValidationObserver>
</template>
<script>
import { ValidationObserver } from "vee-validate";

import { mapState, mapActions } from 'vuex';
export default {
  components: {
    ValidationObserver,

  },
  props: {
    isEdit: Boolean,
    id: Number,
  },
  computed: {
        ...mapState({
            cityDto: state => state.settings.cityDto,
            countryList: state => state.settings.countryList,
        })
    },
    created(){
      this.getCountryDetails()
    },
    methods: {
        ...mapActions(["createCity", "deleteCity","updateCity","getCountryDetails"]),
        open(p) {
            this.$store.commit('Set_City_Dto', p);
            this.$refs.SettingsDialog.open();
        },
        onSubmit() {
            this.$refs.settingForm.validate().then((success) => {
                if(success) {
                  console.log(!this.cityDto.id)
                  if(!this.cityDto.id){
                    this.createCity(this.cityDto)
                  }else
                     this.updateCity(this.cityDto)
                }
            })
        }
    }
};
</script>
