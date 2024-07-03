<template>
  <b-card-body class="d-flex" style="flex-direction: column">
          <b-button-group class="m-1 mb-2">
            <b-button variant="primary">Projects he worked on</b-button>
            <b-button variant="outline-primary"
              >The projects he works on</b-button
            >
            <b-button variant="outline-primary">Projects he worked on and did not complete</b-button>
          </b-button-group>
          <a-table
            :items="projectList"
            :columns="projectColumn"
          >
            <template slot="headers" slot-scope="{ props }">
              {{ $t(props.column.label) }} 
            </template>
          </a-table>    
        </b-card-body>
</template>
<script>
export default {
  data:()=>({
    projectColumn: [
      {
        label: "projectName",
        field: "name",
      },
      {
        label: "Project owner name",
        field: "nameOwnerProject",
      },
      {
        label: "userName",
        field: "nameDepentent",
      },
      {
        label: "Project start date",
        field: "dateStartProject",
      },
      {
        label: "Project end date",
        field: "dateEndProject",
      },
    ],
    projectList: [
      {
        id: 1,
        name: "taraphouq",
        nameOwnerProject: "karolin tooa",
        nameDepentent: "null",
        dateStartProject: "2022/4/12",
        dateEndProject: "2022/4/22",
        isActive: true,
      },
      {
        id: 2,
        name: "mostaquel",
        nameOwnerProject: "oliver kjlll",
        nameDepentent: "bayan jarour",
        dateStartProject: "2022/4/12",
        dateEndProject: "2022/4/22",
        isActive: true,
      },
      {
        id: 3,
        name: "Olivara",
        nameOwnerProject: "seleen ajaan",
        nameDepentent: "woroud alnaab",
        dateStartProject: "2022/4/12",
        dateEndProject: "2022/4/22",
        isActive: true,
      },
    ],
  }),

}
</script>