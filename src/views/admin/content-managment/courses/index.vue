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
                label: "اسم المنصة",
                field: "name"
            },
            {
              label:"نوع المنصة",
              field:"type"
            },
            {
                label: "تفاصيل",
                field: "details",
                sortable: false
            }
        ],
        facultiesListList:[
            {
                name:"ss",
                type:"تعليمي",
            },
             {              
                name:"ss",
                type:"تعليمي",
            }
            ,
             {              
                name:"ss",
                type:"تعليمي",
            },
             {               
                name:"ss",
                type:"تعليمي",
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
