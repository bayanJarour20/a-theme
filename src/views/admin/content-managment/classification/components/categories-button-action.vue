<template>
  <ValidationObserver ref="categoryForm">
    <a-dialog
      :title="title"
          ref="mainCategoryDialog"
          @ok="submit"
        :placeholder="!isEdit ? 'SSearch for a specific category' : ''"
        :btn_title="!isEdit ? 'new category' : ''"
        :isEdit="!!categoryDto.id"
        
     @delete="deleteCategory(categoryDto.id)"
    >
      <template slot="activator">
        <slot name="activator"></slot>
      </template>
      <template #body>
       <a-input-text label="category name" name="Quetionname" placeholder="enter category name" :rules="[
        {
          type: 'required',
          message: 'is reqired'
        }
        
      ]" v-model="categoryDto.name"></a-input-text>       
      </template>
    </a-dialog>
  </ValidationObserver>
</template>
<script>
import { ValidationObserver } from "vee-validate";


var colors = "#194d33";
 import { mapState, mapActions } from "vuex";

export default {
  components: {
    ValidationObserver,
    
  },
  data: () => ({
    colors,
  }),
  props: {
    title: {
      type: String,
      default: () => "add new cateqoty",
    },
        isEdit: Boolean,

  },
  computed: {
        ...mapState({
            categoryDto: state => state.category.categoryDto,
        })
    },
  methods: {
            ...mapActions([ "addCategory","updateCategory","deleteCategory"]),
    open() {
      this.$refs.mainCategoryDialog.open();
    },
     submit() {
            this.$refs.categoryForm.validate().then(success => {
                if (success ) {    
                  if (!this.categoryDto.id) {
                        this.addCategory({   
                             id: this.categoryDto.id,
                             name:this.categoryDto.name,
                             mainCategoryId: null
                        });  

                  }else{
                    this.updateCategory({
                         id: this.categoryDto.id,
                             name:this.categoryDto.name, 
                             mainCategoryId: null                 
                    });
                  }     
                  
                    this.$refs.mainCategoryDialog.close();
                     
                }
               
                
            });
        },
   
  },
  watch: {
    is(is) {
      if (!is) {
         this.$store.commit("Reset_Category_Dto");
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
