<template>
    <div>       <!-- // selectedLabel --- opthinal props - default value: id -->
        <a-table
            :items="facultiesListList"
            :columns="columns"
            selectedLabel="name"
            @details="openEditFaculityDialog"
            @delete-selected="fireDeleteEvent"
        >
        </a-table>
        <createCourse ref="editFacultieDialog" title="تعديل اسم المنصة" isEdit />
    </div>
</template>
<script>
import createCourse from "./components/create-course.vue";

// import { mapActions } from 'vuex';
export default {
    components: {
        createCourse
    },
    computed: {
        // ...mapGetters(['facultiesList'])
    },
    data: () => ({
        columns: [
            {
                label: "courseName",
                field: "name"
            },
            {
              label:"courseType",
              field:"type"
            },
            {
                label: "details",
                field: "details",
                sortable: false
            }
        ],
        facultiesListList:[
            {
                name:"english",
                type:"education",
            },
             {              
                name:"ui/ux",
                type:"education",
            }
            ,
             {              
                name:"js",
                type:"education",
            },
             {               
                name:"flatter",
                type:"education",
            }
        ]
    }),
    // created() {
    //     this.getFacultiesDetails()
    // },
    methods: {
        // ...mapActions(["getFacultiesDetails"]),
        openEditFaculityDialog() {
            // this.$store.commit('Set_Facultie_Dto', p.row)
            this.$refs.editFacultieDialog.openDialog();
        },
        fireDeleteEvent(list) {
            console.log(list)
        }
    },
    beforeDestroy() {
        this.$store.commit('Reset_Search_Dto')
    }
};
</script>
