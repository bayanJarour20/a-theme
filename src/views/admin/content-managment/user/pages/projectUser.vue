<template>
  <b-card-body class="d-flex" style="flex-direction: column">
          <b-button-group class="m-1 mb-2">
            <b-button variant="primary">المشاريع التي عمل عليها</b-button>
            <b-button variant="outline-primary"
              >المشاريع التي يعمل عليها</b-button
            >
            <b-button variant="outline-primary">المشاريع تاتي عمل عليها ولم تتم</b-button>
          </b-button-group>
          <a-table
            :items="projectList"
            :columns="projectColumn"
            @details="openEditprojectFreeDialog"
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
        label: "اسم المشروع",
        field: "name",
      },
      {
        label: "اسم صاحب المشروع",
        field: "nameOwnerProject",
      },
      {
        label: "اسم المستخدم",
        field: "nameDepentent",
      },
      {
        label: "تاريخ بداية المشروع",
        field: "dateStartProject",
      },
      {
        label: "تاريخ نهاية المشروع",
        field: "dateEndProject",
      },
      {
        label: "تفاصيل",
        field: "details",
        sortable: false,
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