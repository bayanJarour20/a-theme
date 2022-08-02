<template>
  <ValidationObserver ref="categoryForm">
    <a-dialog
      :title="title"
      placeholder="ابحث عن تصنيف محدد"
      btn_title="تصنيف جديد"
      ref="mainCategoryDialog"
      @ok="addCategory"
    >
      <template slot="activator">
        <slot name="activator"></slot>
      </template>
      <template #body>
       <a-input-text label="اسم التصنيف الرئيسي" name="Quetionname" placeholder="اسم التصنيف الرئيسي" :rules="[
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


var colors = "#194d33";
export default {
  components: {
    ValidationObserver,
    
  },
  data: () => ({
    colors,
  }),
  computed: {
    
  },
  props: {
    title: {
      type: String,
      default: () => "إضافة تصنيف جديد",
    },
  },
  methods: {
   
    //  search(query) {
    //         this.$store.commit('Set_Search_Dto', {
    //             keys: ['name','subCategoriesCount','dateCreated'],
    //             query
    //         })
    //     },
    open() {
      this.$refs.mainCategoryDialog.open();
    },
    addCategory() {
        console.log(this.categoriesDto);
      // this.$refs.categoryForm.validate().then((success) => {
        // if (success && (!!this.categoriesDto.imageDto && (this.categoriesDto.imageDto.base64 || this.categoriesDto.imageDto.path))) {
          // this.setNewCategories(this.categoriesDto);
          this.$refs.categoryForm.reset();
          // this.$store.commit("Reset_Category_Dto");
        // }
      // });
    },
  },
  watch: {
    is(is) {
      if (!is) {
        // this.$store.commit("Reset_Category_Dto");
      }
    },
  },
};
</script>
<style lang="scss">
.vc-chrome {
  width: 100% !important;
}
</style>
