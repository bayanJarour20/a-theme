<template>
    <div>      
        <a-table
            :items="feedbacks"
            :columns="columns"
            selectedLabel="id"
            @details="openContactDetails"
            @delete-selected="fireDeleteEvent"
        >
            <template slot="items.description" slot-scope="{value}">            
                {{value.slice(0, 20)}}....
            </template>
            <template slot="items.dateCreated" slot-scope="{value}">            
              {{ new Date(value).toLocaleDateString("en-GB") }}
            </template>
        </a-table>
    </div>
</template>
<script>
 import { mapActions,mapState} from 'vuex';
export default {
    data: () => ({
        columns: [
            {
                label: "title",
                field: "title"
            },
            {
                label: "text",
                field: "description",
                sortable: false
            },
            // {
            //     label: "userName",
            //     field: "appUserName"
            // },
            {
                label: "sendDate",
                field: "dateCreated"
            },
            {
                label: "details",
                field: "details",
                sortable: false
            }
        ],
        
        
    }),
    computed:{
    ...mapState({
      feedbacks: (state) => state.contactUs.feedbacks
    })
    },
    created() {
      this.getAllFeedback(),
      console.log(this.feedbacks)
    },
    methods: {
              ...mapActions(["getAllFeedback","deleteAllContact"]),

        openContactDetails(props) {
            this.$router.push("contactUs/details/" + props.row.id);
        },
       
        fireDeleteEvent(list) {
            console.log(list);
            this.deleteAllContact(list)
        }
    }
};
</script>