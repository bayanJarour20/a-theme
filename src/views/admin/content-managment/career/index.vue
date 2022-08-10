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
        <createcareer ref="editFacultieDialog" title="تعديل اسم المهنة" isEdit />
    </div>
</template>
<script>
import createcareer from "./components/create-career.vue";

// import { mapActions } from 'vuex';
export default {
    components: {
        createcareer
    },
    computed: {
        // ...mapGetters(['facultiesList'])
    },
    data: () => ({
        columns: [
            {
                label: "careerName",
                field: "name"
            },
            {
                label: "details",
                field: "details",
                sortable: false
            }
        ],
        facultiesListList:[
            {
                name:"frontEnd",
            },
             {              
                name:"backEnd",
            }
            ,
             {              
                name:"deiner",
            },
             {               
                name:"photoGraph",
            }
        ]
    }),
    created() {
        //this.getFacultiesDetails()
        console.log("Sss")
    },
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
