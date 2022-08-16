<template>
  <div>
    <a-table
      :items="categoryList"
      :columns="columns"
      selectedLabel="name"
      @details="openCategoriesDetails"
      @delete-selected="fireDeleteEvent"
    >
    </a-table>
    <transition name="fade">
      <div v-if="show">
        <b-card no-body class="mt-3">
          <b-card-header class="p-1 d-flex" style="justify-content:space-between;">
            <categoriesButtonAction
              ref="editMainCategoryDialog"
              title="edit category"
              isEdit
            >
              <template slot="activator">
                <b-button variant="primary" @click="openEditMainCategoryDialog"
                  >edit main category</b-button
                >
              </template>
            </categoriesButtonAction>
            <subcategoriesButtonAction
              ref="subCategoryDialog"
              isEdit
              :id="+id"
            >
              <template slot="activator">
                <b-button
                  class="ml-2"
                  variant="primary"
                  @click="
                    isEdit = false;
                    openAddSubCategoryDialog();
                  "
                  > Add a sub category</b-button
                >
              </template>
            </subcategoriesButtonAction>
          </b-card-header>
        </b-card>
        <a-table
          class="mb-3"
          :items="subCategoryList"
          :columns="subColumns"
          selectedLabel="name"
          @details="openEditSubCategoryDialog"
          @delete-selected="fireDeleteEvent"
        > 
        </a-table>
      </div>
    </transition>
  </div>
</template>
<script>
import { mapActions, mapState,mapGetters } from "vuex";
import categoriesButtonAction from "./components/categories-button-action";
import subcategoriesButtonAction from "./components/subcategories-button-action";
// import { handleDashLangChange } from "@/libs/event-bus";
export default {
  components: {
    categoriesButtonAction,
    subcategoriesButtonAction,
  },
  props: {
    id: String,
  },
  computed: {
    ...mapState({
      categoryDto: (state) => state.category.categoryDto,
      subCategoryList:(state) => state.category.subCategoryList,
      categoryList:(state) => state.category.categoryList,
      subCategoryDto:(state) => state.category.subCategoryDto,
    }),
    ...mapGetters([
            "categoriesList",
            "subcategoriesList"
        ]),
  },
  data: () => ({
    show: false,
    isEdit: false,
    columns: [
      {
        label: "Main Categories",
        field: "name",
      },
      {
        label: "details",
        field: "details",

        sortable: false,
      },
    ],
    // categoriesList:[
    //   {
    //     id:2,
    //    name:"fullStack",
    //    subCategoriesCount:"FrontEnd",
    //    dateCreated:"12/12/3"
    //   },
    //   {
    //     id:3,
    //    name:"fullStack",
    //    subCategoriesCount:"FrontEnd",
    //    dateCreated:"12/12/3"
    //   }
    // ],
    subColumns: [
      {
        label: "Sub Categories",
        field: "name",
      },
      {
        label: "details",
        field: "details",

        sortable: false,
      },
    ],
    // subcategoriesList:[
    //   {
    //     name:"frontEnd",
    //     dateCreated:"12/34/5"
    //   },
    //   {
    //     name:"backEnd",
    //     dateCreated:"12/34/5"
    //   }
    // ]
  }),
  created(){
    this.getCategoryDetails()
  },
  mounted() {
    // this.getCategories();
    if (+this.id) {
      this.show = true;
      // this.getSubCategories(+this.id);
    }
    // handleDashLangChange(() => {
    //   this.getCategories();
    //   if (+this.id) {
    //     this.show = true;
    //     this.getSubCategories(+this.id);
    //   }
    // });
  },

  methods: {
    ...mapActions(["getCategoryDetails","getSubCategory"]),
    openCategoriesDetails(props) {
        if (props.row.id != this.id) {
          Object.assign(this.categoryDto, props.row);
        this.$router.push("/admin/category/" + props.row.id);
        this.getSubCategory(props.row.id)

      }
      this.show = true;
    },
    openEditMainCategoryDialog(p) {
      // this.$store.commit(
      //   "Reset_Category_Dto",
      //   this.categoriesList.find((item) => item.id == this.id)
      // );
      this.$refs.editMainCategoryDialog.open(p.row);
    },
    openAddSubCategoryDialog() {
      // this.$store.commit("Reset_Sub_Category_Dto");
      this.isEdit = false;
      this.subCategoryDto.id=""
      console.log(!!this.subCategoryDto.id)
      this.$refs.subCategoryDialog.openDialog();
    },
    openEditSubCategoryDialog(props) {
      // this.$store.commit("Reset_Sub_Category_Dto", props.row);
      console.log(props.row)
      Object.assign(this.subCategoryDto, props.row);
      this.isEdit = true;
      this.$refs.subCategoryDialog.openDialog();
    },
    fireDeleteEvent(list) {
      console.log(list);
    },
  },
  beforeDestroy() {
        this.$store.commit('Reset_Search_Dto')
    }
};
</script>
