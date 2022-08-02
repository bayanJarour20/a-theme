<template>
    <b-container>
        <b-row>
            <b-col cols="12" md="12" lg="12">
                <a-table   
                    :items="personList"
                    :columns="personColumn"
                     @details="openEditPersonFreeDialog"
                >
                <template slot="headers" slot-scope="{props}">
                {{$t(props.column.label)}}
              </template>
              <template slot="items.src" slot-scope="{value}">
                <img :src="value" width="50" height="50" class="rounded-circle" alt="">
              </template>
                </a-table>
            </b-col>
        </b-row>
    </b-container>
</template>
<script>
export default {
    data: () => ({
        personColumn:[
            {
              label: "صورة المستخدم",
              field: "src",
              sortable: false
            },
            {
                label: "اسم المستخدم",
                field: "name",
            },
            {
              label:"تصنيف المستخدم",
              field:"categoryName"
            },
            {
                label: "عمله",
                field: "work",
            },
            {
              label:"مدينته",
              field:"Hiscity"
            },
            {
                    label: "تفاصيل",
                    field: "details",
                    sortable: false
            }
        ],
        personList:[
            {
                id:1,
                 src: "https://randomuser.me/api/portraits/men/6.jpg",
                name: "Elina joee",
                categoryName:"مستقل",
                work: "frontEnd",
                Hiscity:"londn",
                isActive: true, 
            },
            {
                id:2,
                src: "https://randomuser.me/api/portraits/men/7.jpg",
                name: "karolin joee",
                categoryName:"صاحب مشروع",
                work: "رئيس شركة دواجن",
                Hiscity:"londn",
                isActive: true, 
            },
            {
                id:3,
                src: "https://randomuser.me/api/portraits/men/7.jpg",
                name: "Olivar joee",
                categoryName:"صاحب مشروع ومستقل",
                work: "Flatter",
                Hiscity:"londn",
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
            label: 'Person age',
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

        openEditPersonFreeDialog(props) {
            console.log("/admin/user/details/" + props.row.id)
            this.$router.push(
                "/admin/user/details/" + props.row.id
            );
        },
    }
}
</script>