<template>
<a-dialog @ok="onSubmit()" :isEdit="!!universityDto.id" @delete="deleteUniversity(universityDto.id)" ref="dialog" title="إضافة جامعة">
    <template slot="body">
        <ValidationObserver ref="observer">
            <a-input-text
                :rules="[{ type: 'required', message: 'اسم الجامعة مطلوب' }]"
                label="اسم الجامعة"
                v-model="universityDto.name"
                placeholder="ادخل اسم الجامعة"
                name="university name"
            />
            <a-input-select
                label="المدينة"
                placeholder="اختر المدينة"
                :rules="[{type: 'required', message: 'يجب تحديد حقل المدينة'}]"
                :options="citiesList"
                name="cityid"
                v-model="universityDto.cityId"
            />
        </ValidationObserver>
    </template>
</a-dialog>
</template>
<script>
import { ValidationObserver } from "vee-validate";

// import { mapState, mapActions } from 'vuex';
export default {
    components: {
        ValidationObserver,
        
    },
    data:()=>({
        universityDto:[
         { id:1,
          name:"qwqw",
          cityId:2,},
          { id:1,
          name:"qwqw",
          cityId:2,},
          { id:1,
          name:"qwqw",
          cityId:2,},
          { id:1,
          name:"qwqw",
          cityId:2,},
          { id:1,
          name:"qwqw",
          cityId:2,}
        ],
        citiesList:[
          {
            id:2,
            name:"dsds",

          },{
            id:2,
            name:"dsds",
          },
          {
            id:2,
            name:"dsds",

          },{
            id:2,
            name:"dsds",
          },
        ]
    }),
    computed: {
        // ...mapState({
        //     citiesList: state => state.globalStore.citiesList,
        //     universityDto: state => state.globalStore.universityDto
        // })
    },
    methods: {
        // ...mapActions(["createUniversity", "deleteUniversity"]),
        open() {
            this.$refs.dialog.open()
        },
        onSubmit() {
            this.$refs.observer.validate().then((success) => {
                if(success) {
                    this.createUniversity(this.universityDto)
                }
            })
        }
    }
}
</script>