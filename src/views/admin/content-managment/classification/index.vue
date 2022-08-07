<template>
  <div>
    <a-table
      :items="categoriesList"
      :columns="columns"
      selectedLabel="name"
      @details="openCategoriesDetails"
      @delete-selected="fireDeleteEvent"
    >
      <template slot="items.dateCreated" slot-scope="{ value }">
        {{ new Date(value).toLocaleDateString("en-SY") }}
      </template>
    </a-table>
    <transition name="fade">
      <div v-if="show">
        <b-card no-body class="mt-3">
          <b-card-header class="p-1 d-flex" style="justify-content:space-between;">
            <categoriesButtonAction
              ref="editMainCategoryDialog"
              title="edit category"
            >
              <template slot="activator">
                <b-button variant="primary" @click="openEditMainCategoryDialog"
                  >edit main category</b-button
                >
              </template>
            </categoriesButtonAction>
            <subcategoriesButtonAction
              ref="subCategoryDialog"
              :isEdit="isEdit"
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
          :items="subcategoriesList"
          :columns="subColumns"
          selectedLabel="name"
          @details="openEditSubCategoryDialog"
          @delete-selected="fireDeleteEvent"
        > 
          <template slot="items.dateCreated" slot-scope="{ value }">
            {{ new Date(value).toLocaleDateString("en-SY") }}
          </template>
        </a-table>
      </div>
    </transition>
  </div>
</template>
<script>
// import { mapActions, mapState,mapGetters } from "vuex";
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
    // ...mapState({
    //   categoriesDto: (state) => state.categories.categoriesDto,
    // }),
    // ...mapGetters([
    //         "categoriesList",
    //         "subcategoriesList"
    //     ]),
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
        label: "Sub Categories",
        field: "subCategoriesCount",
        type:"number"
      },
      {
        label: "Added date",
        field: "dateCreated",
        sortable: false,
      },
      {
        label: "details",
        field: "details",

        sortable: false,
      },
    ],
    categoriesList:[
      {
        id:2,
       name:"fullStack",
       subCategoriesCount:"FrontEnd",
       dateCreated:"12/12/3"
      },
      {
        id:3,
       name:"fullStack",
       subCategoriesCount:"FrontEnd",
       dateCreated:"12/12/3"
      }
    ],
    subColumns: [
      {
        id:3,
        label: "Sub Categories",
        field: "name",
      },
      {
        id:4,
        label: "Added date",
        field: "dateCreated",
        sortable: false,
      },
      {
        label: "details",
        field: "details",

        sortable: false,
      },
    ],
    subcategoriesList:[
      {
        name:"frontEnd",
        dateCreated:"12/34/5"
      },
      {
        name:"backEnd",
        dateCreated:"12/34/5"
      }
    ]
  }),
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
    openCategoriesDetails(props) {
        if (props.row.id != this.id) {
        this.$router.push("/admin/category/" + props.row.id);
      }
      this.show = true;
    },
    openEditMainCategoryDialog() {
      // this.$store.commit(
      //   "Reset_Category_Dto",
      //   this.categoriesList.find((item) => item.id == this.id)
      // );
      this.$refs.editMainCategoryDialog.open();
    },
    openAddSubCategoryDialog() {
      // this.$store.commit("Reset_Sub_Category_Dto");
      this.$refs.subCategoryDialog.open();
    },
    openEditSubCategoryDialog(props) {
      // this.$store.commit("Reset_Sub_Category_Dto", props.row);
      console.log(props)
      this.isEdit = true;
      this.$refs.subCategoryDialog.open();
    },
    fireDeleteEvent(list) {
      console.log(list);
    },
  },
  // beforeDestroy() {
  //       this.$store.commit('Reset_Search_Dto')
  //   }
};
</script>
