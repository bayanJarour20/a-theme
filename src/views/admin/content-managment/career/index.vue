<template>
    <div>       <!-- // selectedLabel --- opthinal props - default value: id -->
        <a-table
            :items="careerList"
            :columns="columns"
            selectedLabel="id"
            @details="openEditCareerDialog"
            @delete-selected=" fireDeleteEventCareer"
        >
        </a-table>
        <createcareer ref="careerDialog" title="edit name career" isEdit />
    </div>
</template>
<script>
import createcareer from "./components/create-career.vue";

import { mapActions ,mapState } from 'vuex';
export default {
    components: {
        createcareer
    },
    computed: { 
        ...mapState({
            careerList: state => state.career.careerList,
        })
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
        this.getCareerDetails()
    },
    methods: {
         ...mapActions(["getCareerDetails","deleteAllCareer"]),
        openEditCareerDialog(p) {
            // this.$store.commit('Set_Facultie_Dto', p.row)
            this.$refs.careerDialog.openDialog(p.row);
        },
        fireDeleteEventCareer(list) {
            this.deleteAllCareer(list)
        }
    },
    beforeDestroy() {
        this.$store.commit('Reset_Search_Dto')
    }
};
</script>
