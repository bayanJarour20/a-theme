<template>
    <ValidationObserver ref="observer">
        <b-form>
            <a-dialog
                ref="facultieDialog"
                @ok="submit()"
                :title="title"
                :placeholder="!isEdit ? 'Search for a specific course' : ''"
                :btn_title="!isEdit ? 'new course' : ''"
                :isEdit="!!facultyDto.id"
                @delete="deleteFaculty(facultyDto.id)"
                @search="search"
            > 
                <template #body>
                    <a-input-text
                        :rules="[
                            { type: 'required', message: 'اسم المنصة إجباري' }
                        ]"
                        label="اسم المنصة"
                        v-model="facultyDto.name"
                        placeholder="ادخل اسم المنصة"
                        name="name"
                    />
                    <a-input-select
                        label="نوع المنصة"
                        placeholder="اختر نوع لمنصة"
                        :rules="[
                            {
                                type: 'required',
                                message: 'يجب تحديد حقل نوع المنصة'
                            }
                        ]"
                        :options="university"
                        name="university"
                        v-model="facultyDto.universityId"
                        :clearable="true"
                    />
                 
                  
                </template>
            </a-dialog>
        </b-form>
    </ValidationObserver>
</template>
<script>

// import { mapState, mapActions } from "vuex";
export default {
    components: {
       
    },
    props: {
        title: {
            type: String,
            default: () => "إضافة منصة"
        },
        isEdit: Boolean
    },
     data: () => ({
        facultyDto:{
          id:1,
          name:"sdsd",
          universityId:3,
          numberOfYear:12,
          imagePath:[]
            },
            university:[
              {
                id:1,
                name :"xzxz",

              },{
                id:1,
                name:"xzxz",
              }
            ]
    }),  
    computed: {
        // ...mapState({
        //     facultyDto: state => state.faculties.facultyDto,
        //     university: state => state.university.universities
        // })
    },
    created() {
        // this.fetchUniversity();
    },
    methods: {
        // ...mapActions(["fetchUniversity", "actionFaculty", "deleteFaculty"]),
        submit() {
            this.$refs.observer.validate().then(success => {
                if (
                    success &&
                    (this.facultyDto.file || this.facultyDto.imagePath)
                ) {
                    var facultyFormData = new FormData();
                    if (!this.facultyDto.id) {
                        facultyFormData.append(
                            "numberOfYear",
                            this.facultyDto.numberOfYear
                        );
                        facultyFormData.append("name", this.facultyDto.name);
                        facultyFormData.append("file", this.facultyDto.file);
                        facultyFormData.append(
                            "universityId",
                            this.facultyDto.universityId
                        );
                    } else {
                        Object.keys(this.facultyDto).forEach(key => {
                            facultyFormData.append(key, this.facultyDto[key]);
                        });
                    }

                    this.actionFaculty({
                        id: this.facultyDto.id,
                        formData: facultyFormData
                    });
                }
            });
        },
        openDialog() {
            this.$refs.facultieDialog.open();
        },
        search(query) {
            this.$store.commit('Set_Search_Dto', {
                keys: ['name'],
                query
            })
        }
    }
};
</script>
