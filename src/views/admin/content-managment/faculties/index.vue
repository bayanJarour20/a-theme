<template>
    <div>       <!-- // selectedLabel --- opthinal props - default value: id -->
        <a-table
            :items="facultiesList"
            :columns="columns"
            selectedLabel="name"
            @details="openEditFaculityDialog"
            @delete-selected="fireDeleteEventFaculity"
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
            facultiesList: state => state.faculties.facultiesList,
        }),
    },
    data: () => ({
        columns: [
            {
                label: "faculitiesName",
                field: "name"
            },
            {
                label: "details",
                field: "details",
                sortable: false
            }
        ],
    }),
    created() {
      this.getFacultiesDetails()
    },
    methods: {
        ...mapActions(["getFacultiesDetails","deleteAllFaculty"]),
        openEditFaculityDialog(p) {
             this.$store.commit('Set_Facultie_Dto', p.row)
            this.$refs.editFacultieDialog.openDialog(p);
        },
        fireDeleteEventFaculity(list) {
            this.deleteAllFaculty(list)
        }
    },
    beforeDestroy() {
        this.$store.commit('Reset_Search_Dto')
    }
};
</script>
