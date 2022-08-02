<template>
  <ValidationObserver ref="categoryForm">
    <a-dialog
      :title="!isEdit ? 'إضافة التصنيف الفرعي' : 'تعديل التصنيف الفرعي'"
      placeholder="ابحث عن تصنيف محددة"
      btnText="تصنيف جديد"
      ref="subCategoryDialog"
      @ok="addCategory"
    >
      <template slot="activator">
        <slot name="activator"></slot>
      </template>
      <template #body>
       <a-input-text label="اسم التصنيف الفرعي" name="Quetionname" placeholder="اسم التصنيف الفرعي" :rules="[
        {
          type: 'required',
          message: 'is reqired'
        }
      ]"></a-input-text>     
        <a-input-select
          label="تابع للتصنيف الرئيسي"
          placeholder="اختر تابع للتصنيف الرئيسي"
          :rules="[
            {
              type: 'required',
              message: 'اختر تابع للتصنيف الرئيسي',
            },
          ]"
          :options="categoriesList"
          name="categoriesList"
          multiple
          :clearable="true"
        />
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
  computed: {
    // ...mapState({
    //   categoriesList: (state) => state.categories.categoriesList,
    //   categoriesDto: (state) => state.categories.categoriesDto,
    // }),
  },
  methods: {
    // ...mapActions(["setNewCategories", "getCategories", "getSubCategories"]),
    open() {
      this.$refs.subCategoryDialog.open();
    },
    addCategory() {
      // this.$refs.categoryForm.validate().then(async (success) => {
        // if (success) {
          // await this.setNewCategories(this.categoriesDto);
          this.$refs.categoryForm.reset();
          // this.$store.commit("Reset_Sub_Category_Dto");
        // }
      // });
    },
  },
  data: () => ({
    categoriesList:[
      {
        id:2,
        name:"fullStack"
      },{
        id:4,
        name:"fullStack"
      }
    ]
  }),
  watch: {
    is(is) {
      if (!is) {
        this.$store.commit("Reset_Category_Dto");
      }
    },
  },
};
</script>
