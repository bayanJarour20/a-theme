<template>
    <b-container>
        <b-row>
            <b-col cols="12" md="12" lg="12">
                <a-table   
                    :items="projectList"
                    :columns="projectColumn"
                     @details="openEditprojectFreeDialog"
                     
                >
                <template slot="headers" slot-scope="{props}">
                {{$t(props.column.label)}}
              </template>
               <template slot="items.deadLine" slot-scope="{ value }">
                    {{ new Date(value).toLocaleDateString("en-GB") }}
                  </template>
                  <template v-if="!items.nameFreeLancer" slot="items.nameFreeLancer" >
                    no name freeLancer 
                  </template>
                </a-table>
            </b-col>
        </b-row>
    </b-container>
</template>
<script>
import { mapActions, mapState  } from 'vuex';
export default {
    data: () => ({
        projectColumn:[
            {
                label: "projectName",
                field: "name",
            },
            {
                label: "nameOwner",
                field: "nameOwner",
            },
            {
              label:"nameFreeLancer",
              field:"nameFreeLancer"
            },
            {
              label:"maximumProjectEndDate",
              field:"deadLine"
            },
            {
                    label: "details",
                    field: "details",
                    sortable: false
            }
        ],
        projectListList:[
            {
                id:1,
                name: "taraphouq",
                nameOwner: "karolin tooa",
                nameFreeLancer:"null",
                dateStartProject:"2022/4/12",
                deadLine:"2022/4/22",
                isActive: true, 
            },
            {
                id:2,
                name: "mostaquel",
                nameOwner: "oliver kjlll",
                nameFreeLancer:"bayan jarour",
                dateStartProject:"2022/4/12",
                deadLine:"2022/4/22",
                isActive: true, 
            },
            {
                id:3,
                name: "Olivara",
                nameOwner: "seleen ajaan",
                nameFreeLancer:"woroud alnaab",
                dateStartProject:"2022/4/12",
                deadLine:"2022/4/22",
                isActive: true, 
            },
        ],
         
         fields: [
          {
            field: 'last_name',
            sortable: true
          },
          {
            field: 'first_name',
            sortable: false
          },
          {
            field: 'age',
            label: 'project age',
            sortable: true,
            // Variant applies to the whole column, including the header and footer
            variant: 'danger'
          }
        ],
        items: [
          { isActive: true, age: 40, first_name: 'Dickerson', last_name: 'Macdonald' },
          { isActive: false, age: 21, first_name: 'Larsen', last_name: 'Shaw' },
          { isActive: false, age: 89, first_name: 'Geneva', last_name: 'Wilson' },
          { isActive: true, age: 38, first_name: 'Jami', last_name: 'Carney' }
        ]
    }),
    computed:{
      ...mapState({
            projectList: state => state.projects.projectList,
        }),    },
        created(){
          this.getProjectDetails()
        },
    methods: {
      ...mapActions(["getProjectDetails"]),
        openEditprojectFreeDialog(props) {
            this.$router.push(
                "/admin/projects/details/" + props.row.id
            );
        },
    }
}
</script>