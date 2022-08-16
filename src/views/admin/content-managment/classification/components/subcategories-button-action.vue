<template>
  <ValidationObserver ref="categoryForm">
    <a-dialog
      @ok="submit"
      :title="title"
      :placeholder="!isEdit ? 'Search for a specific category' : ''"
      :btn_title="!isEdit ? 'sub new category' : ''"
      :isEdit="!!subCategoryDto.id"
      @delete="deleteCategory(subCategoryDto.id)"
      ref="subCategoryDialog"
    >
      <template slot="activator">
        <slot name="activator"></slot>
      </template>
      <template #body>
        <a-input-text
          label="sub category name"
          name="Quetionname"
          placeholder="sub category name"
          :rules="[
            {
              type: 'required',
              message: 'is reqired',
            },
          ]"
          v-model="subCategoryDto.name"
        ></a-input-text>
        <a-input-select
          label="select main category"
          placeholder="select main category"
          :rules="[
            {
              type: 'required',
              message: 'select main category',
            },
          ]"
          :options="categoryList"
          name="categoriesList"
          v-model="subCategoryDto.mainCategoryId"
          :clearable="true"
        />
      </template>
    </a-dialog>
  </ValidationObserver>
</template>
<script>
import { ValidationObserver } from "vee-validate";
import {mapState ,mapActions}from "vuex"
export default {
  components: {
    ValidationObserver,
  },
  props: {
    isEdit: Boolean,
    id: Number,
    title: {
      type: String,
      default: () => "add new sub cateqoty",
    },
  },
  computed: {
    ...mapState({
      categoryList: (state) => state.category.categoryList,
      subCategoryDto: (state) => state.category.subCategoryDto,
    }),
  },
  methods: {
            ...mapActions([ "addCategory","updateCategory","deleteCategory"]),
    openDialog() {
      this.$refs.subCategoryDialog.open();
    },
      submit() {
            this.$refs.categoryForm.validate().then(success => {
                if (success ) {    
                  if (!this.subCategoryDto.id) {
                        this.addCategory({   
                             id: this.subCategoryDto.id,
                             name:this.subCategoryDto.name,
                             mainCategoryId: this.subCategoryDto.mainCategoryId,
                        });  

                  }else{
                    this.updateCategory({
                         id: this.subCategoryDto.id,
                             name:this.subCategoryDto.name,
                             mainCategoryId: this.subCategoryDto.mainCategoryId,
                                              
                    });
                  }     
                  
                    this.$refs.subCategoryDialog.close();
                     
                }
               
                
            });
        },
  },
  data: () => ({
    categoriesList: [
      {
        id: 2,
        name: "fullStack",
      },
      {
        id: 4,
        name: "fullStack",
      },
    ],
  }),
  watch: {
    is(is) {
      if (!is) {
        this.$store.commit("-");
      }
    },
  },
};
</script>
