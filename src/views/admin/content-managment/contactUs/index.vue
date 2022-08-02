<template>
    <div>      
        <a-table
            :items="feedbacks"
            :columns="columns"
            selectedLabel="name"
            @details="openContactDetails"
            @delete-selected="fireDeleteEvent"
        >
            <template slot="items.body" slot-scope="{value}">
              
                {{value.slice(0, 20)}}....
            </template>
        </a-table>
    </div>
</template>
<script>
export default {
    data: () => ({
        columns: [
            {
                label: "العنوان",
                field: "title"
            },
            {
                label: "النص",
                field: "body",
                sortable: false
            },
            {
                label: "اسم المستخدم ",
                field: "appUserName"
            },
            {
                label: "تاريخ الإرسال",
                field: "sendDate"
            },
            {
                label: "تفاصيل",
                field: "details",
                sortable: false
            }
        ],
        feedbacks:[
          {
            id:3,
           title:"jjjjj",
           body:"'iilaa almawqie alhalii: ",
           appUserName:"Bayan jarour",
           sendDate:"2022/4/15"
          },
          {
            id:2,
           title:"kkkk",
           body:"'iilaa almawqie alhalii: ",
           appUserName:"Bayan jarour",
           sendDate:"2022/4/15"
          },
          {
            id:2,
           title:"kkkk",
           body:"'iilaa almawqie alhalii: ",
           appUserName:"Bayan jarour",
           sendDate:"2022/4/15"
          }
        ]
        
    }),
    methods: {
        openContactDetails(props) {
            this.$router.push("contactUs/details/" + props.row.id);
        },
       
        fireDeleteEvent(list) {
            console.log(list);
        }
    }
};
</script>