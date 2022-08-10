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
        <createFacultie ref="editFacultieDialog" title="edit faculties" isEdit />
    </div>
</template>
<script>
import createFacultie from "./components/create-facultie";

import { mapState ,mapActions } from 'vuex';
export default {
    components: {
        createFacultie
    },
    computed: {
      //  ...mapGetters(['faculties']),
       ...mapState({
            faculties: state => state.faculties.faculties,
        }),
    },
    data: () => ({
        columns: [
            {
                label: "faculitiesName",
                field: "name"
            },
            {
                label: "faultiesAddres",
                field: "numberOfYear",
               
            },
            {
                label: "details",
                field: "details",
                sortable: false
            }
        ],
        facultiesListList:[
            {
               
                name:"xford",
                numberOfYear:"london"

            },
             {
               
                name:"salalh",
                numberOfYear:"albahren"

            }
            ,
             {
               
                name:"newyork",
                numberOfYear:"washonton"

            },

        ]
    }),
    created() {
      this.getFacultiesDetails()
    },
    methods: {
        ...mapActions(["getFacultiesDetails"]),
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
