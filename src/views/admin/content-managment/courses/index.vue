<template>
    <div>       <!-- // selectedLabel --- opthinal props - default value: id -->
        <a-table
            :items="courcesList"
            :columns="columns"
            selectedLabel="id"
            @details="openCourseDialog"
            @delete-selected="fireDeleteEventCourse"
        >
        </a-table>
        <createCourse ref="courseDialog" title="edit course" isEdit />
    </div>
</template>
<script>
import createCourse from "./components/create-course.vue";
 import { mapState ,mapActions } from 'vuex';
export default {
    components: {
        createCourse
    },
    computed: {
         ...mapState({             
            courcesList: state => state.courses.courcesList,
            courcesDto: state => state.courses.courcesDto,
        })
    },
    data: () => ({
        columns: [
            {
                label: "courseName",
                field: "name"
            },
            {
              label:"courseType",
              field:"platformType"
            },
            {
                label: "details",
                field: "details",
                sortable: false
            }
        ],
 
    }),
    created() {
        this.getCourcesList()
    },
    methods: {
         ...mapActions(["getCourcesList","deleteAllCourse"]),
        openCourseDialog(p) {
            this.$refs.courseDialog.openDialog(p.row);
        },
        
        fireDeleteEventCourse(list) {
            this.deleteAllCourse(list)
        }
    },
    beforeDestroy() {
        this.$store.commit('Reset_Search_Dto')
    }
};
</script>
