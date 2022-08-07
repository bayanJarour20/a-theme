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
                </a-table>
            </b-col>
        </b-row>
    </b-container>
</template>
<script>
export default {
    data: () => ({
        projectColumn:[
            {
                label: "projectName",
                field: "name",
            },
            {
                label: "projectOwner",
                field: "nameOwnerProject",
            },
            {
              label:"userName",
              field:"nameDepentent"
            },
            {
              label:"ProjectStartDate",
              field:"dateStartProject"
            },
            {
              label:"deliveryDate",
              field:"dateEndProject"
            },
            {
              label:"maximumProjectEndDate",
              field:"dateEndProject"
            },
            {
                    label: "details",
                    field: "details",
                    sortable: false
            }
        ],
        projectList:[
            {
                id:1,
                name: "taraphouq",
                nameOwnerProject: "karolin tooa",
                nameDepentent:"null",
                dateStartProject:"2022/4/12",
                dateEndProject:"2022/4/22",
                isActive: true, 
            },
            {
                id:2,
                name: "mostaquel",
                nameOwnerProject: "oliver kjlll",
                nameDepentent:"bayan jarour",
                dateStartProject:"2022/4/12",
                dateEndProject:"2022/4/22",
                isActive: true, 
            },
            {
                id:3,
                name: "Olivara",
                nameOwnerProject: "seleen ajaan",
                nameDepentent:"woroud alnaab",
                dateStartProject:"2022/4/12",
                dateEndProject:"2022/4/22",
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
    methods: {

        openEditprojectFreeDialog(props) {
            console.log("/admin/projects/details/" + props.row.id)
            this.$router.push(
                "/admin/projects/details/" + props.row.id
            );
        },
    }
}
</script>