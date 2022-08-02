<template>
  <ValidationObserver ref="categoryForm">
    <a-dialog
      :title="!isEdit ? 'إضافة اسم المدينة' : 'تعديل اسم المدينة'"
      :placeholder="!isEdit ? 'بحث اسم المدينة' :''"
      :btn_title="!isEdit ? 'إضافة اسم المدينة' : ''"
      ref="SettingsDialog"
    >
 
      <template #body>
       <a-input-text label=" اسم المدينة" name="Quetionname" placeholder=" اسم المدينة" :rules="[
        {
          type: 'required',
          message: 'is reqired'
        }
      ]"></a-input-text>     
       
      </template>
     
    </a-dialog>
  </ValidationObserver>
</template>
<script>
import { ValidationObserver } from "vee-validate";


export default {
  components: {
    ValidationObserver,

  },
  props: {
    isEdit: Boolean,
    id: Number,
  },

  methods: {
    open() {
      this.$refs.SettingsDialog.open();
    },
    
  },

};
</script>
