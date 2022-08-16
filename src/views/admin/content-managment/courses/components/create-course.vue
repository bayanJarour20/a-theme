<template>
  <ValidationObserver ref="observer">
    <b-form>
      <a-dialog
        ref="courseDialog"
        @ok="submit()"
        :title="title"
        :placeholder="!isEdit ? 'Search for a specific course' : ''"
        :btn_title="!isEdit ? 'new course' : ''"
        :isEdit="!!courcesDto.id"
        @delete="deleteCourse(courcesDto.id)"
        @search="search"
      >
        <!-- @open=" this.$store.commit('Reset_Course_Dto', courcesDto.id);" -->
        <template #body>
          <a-input-text
            :rules="[{ type: 'required', message: 'course name is required' }]"
            label="course name"
            v-model="courcesDto.name"
            placeholder="enter course name"
            name="courseName"
          />
          <a-input-select
            label="course platformType"
            placeholder="enter course platformType"
            :rules="[
              {
                type: 'required',
                message: 'course platformType is required',
              },
            ]"
            :options="university"
            name="platformTypeCourse"
            v-model="courcesDto.platformType"
            :clearable="true"
          />
        </template>
      </a-dialog>
    </b-form>
  </ValidationObserver>
</template>
<script>
import { ValidationObserver } from "vee-validate";

 import { mapState, mapActions } from "vuex";
export default {
    components: {
       ValidationObserver
    },
    props: {
        title: {
            type: String,
            default: () => "add course"
        },
        isEdit: Boolean
    },
     data: () => ({
      returnedY:{},
            university:[
              {
                id:1,
                name :"xzxz",

              },{
                id:2,
                name:"dsdkjnskj",
              }
            ]
    }),
    computed: {
        ...mapState({
            courcesDto: state => state.courses.courcesDto,
            // university: state => state.university.universities
        })
    },
    created() {
        // this.fetchUniversity();
    },
    methods: {
      // fetchUniversity
         ...mapActions([ "addCourse","updateCourse","deleteCourse"]),
        submit() {
            this.$refs.observer.validate().then(success => {
                if (success ) {          
                  if (!this.courcesDto.id) {
                        this.addCourse({
                            name: this.courcesDto.name,
                            platformType: this.courcesDto.platformType,
                            
                        });  
                  }else{
                    this.updateCourse({
                        id: this.courcesDto.id,
                        name: this.courcesDto.name,
                            platformType: this.courcesDto.platformType,
                        
                    });
                  }     
                  
                    this.$refs.courseDialog.close();
                     
                }
                
            });
        },
        openDialog(p) {
           this.$store.commit('Reset_Course_Dto', p);
            this.$refs.courseDialog.open();
            
        },
        search(query) {
            this.$store.commit('Set_Search_Dto', {
                keys: ['name','platformType'],
                query
            })
        }
    }
};
</script>
