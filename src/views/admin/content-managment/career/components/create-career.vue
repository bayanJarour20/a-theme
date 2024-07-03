<template>
    <ValidationObserver ref="observer">
        <b-form>
            <a-dialog
                ref="careerDialog"
                @ok="submit()"
                :title="title"
                :placeholder="!isEdit ? 'Search for a specific career' : ''"
                :btn_title="!isEdit ? 'new career' : ''"
                :isEdit="!!careerDto.id"
                @delete="deleteCareer(careerDto.id)"
                @search="search"
            > 
                <template #body>
                    <a-input-text
                        :rules="[
                            { type: 'required', message: 'career name is reqired' }
                        ]"
                        label="career name"
                        v-model="careerDto.name"
                        placeholder="enter career name"
                        name="careerName"
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
            default: () => "add career"
        },
        isEdit: Boolean
    },
     data: () => ({

    }),  
    computed: {
        ...mapState({
            careerDto: state => state.career.careerDto,
        })
    },
    created() {
    },
    methods: {
         ...mapActions([ "addCareer","updateCareer", "deleteCareer"]),
        submit() {
            console.log(this.careerDto.id)
            this.$refs.observer.validate().then(success => {
                if (success ) {          
                  if (!this.careerDto.id) {
                        this.addCareer({
                            name: this.careerDto.name,
                            
                        });  
                  }else{
                    this.updateCareer({
                        id: this.careerDto.id,
                        name: this.careerDto.name,
                        
                    });
                  } 
                }  
                 this.$refs.careerDialog.close();
            });
        },
        openDialog(p) {
          this.$store.commit('Set_Career_Dto', p);
            this.$refs.careerDialog.open();
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
