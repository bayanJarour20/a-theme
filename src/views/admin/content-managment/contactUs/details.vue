<template>
    <ValidationObserver ref="observer">
        <b-form @submit.prevent="onSubmit">
            <b-card no-body class="mb-2">
                <b-card-body>
                    <b-card-text>
                        <b-row>
                            <b-col cols="12" md="4">
                                <a-input-text
                                    v-model="feedbackDto.senderName"
                                    label="user name"
                                    readonly
                                    name="appUserName"
                                />
                            </b-col>
                            <b-col cols="12" md="4">
                                <a-input-text
                                    :value="
                                        moment(feedbackDto.dateCreated).format(
                                            'MMMM Do YYYY, h:mm:ss a'
                                        )
                                    "
                                    label="send date"
                                    readonly
                                    name="sendDate"
                                />
                            </b-col>
                            <b-col cols="12" md="4">
                                <a-input-text
                                    :value="
                                            !feedbackDto.replyDate
                                            ? ''
                                            : moment(
                                                  feedbackDto.replyDate
                                              ).format(
                                                  'MMMM Do YYYY, h:mm:ss a'
                                              )
                                    "
                                    label="Reply date"
                                    placeholder="No response yet"
                                    readonly
                                    name="replyDate"
                                />
                            </b-col>
                            <b-col cols="12" class="my-1">
                                <a-input-text
                                v-model="feedbackDto.title"
                                    label="message title"
                                    readonly
                                    name="title"
                                />
                            </b-col>
                            <b-col cols="12" class="my-1">
                                <a-input-textarea
                                    label="message"
                                    readonly
                                    name="body"
                                    v-model="feedbackDto.description"
                                />
                            </b-col>
                            <b-col cols="12" class="my-1">
                                <a-input-textarea
                                v-model="feedbackDto.reply"
                                    label="reply to meeasage"
                                    :rules="[
                                        {
                                            type: 'required',
                                            message: 'Reply text is required'
                                        }
                                    ]"
                                    placeholder="You can write a reply here ..."
                                    name="reply"
                                />
                            </b-col>
                        </b-row>
                    </b-card-text>
                </b-card-body>
                <b-card-footer>
                    <b-row>
                        <b-col>
                            <div class="d-flex">
                                <b-button

                                    class="mr-1"
                                    type="submit"
                                    variant="primary"

                                    >send reply</b-button
                                >
                                <b-button
                                    variant="outline-primary"
                                    style="max-width:100px"
                                    to="/admin/contactUs"
                                    >back</b-button
                                >
                            </div>
                        </b-col>
                        <b-col
                            style="
                                display: flex;
                                justify-content: flex-end;"
                        >
                            <b-button
                                @click="onDelete"
                                type="button"
                                style="max-width:100px"
                                variant="outline-danger"
                                >delete</b-button
                            >
                        </b-col>
                    </b-row>
                </b-card-footer>
            </b-card>
        </b-form>
    </ValidationObserver>
</template>
<script>
import moment from "moment";
import { ValidationObserver } from "vee-validate";

import { mapActions,mapState } from 'vuex';
export default {
    props: {
        id: String
    },
    created() {
        this.getFeedbackDetail(this.id);
    },
    data: () => ({
        // feedbackDto:{
        //   senderName:"Bayn Jarour",
        //   dateCreated:"12/12/2",
        //   replyDate:"",
        //   title:"jjjjj",
        //   description:"ghayr maelum (fi alwaedi) NavigationDuplicated: tajanub altanaqul alzaayid 'iilaa almawqie alhalii: ",
        //   reply:"",
        // }
    }),
     components: {
       ValidationObserver
    },
    computed: {
      
      ...mapState({
      feedbackDto: (state) => state.contactUs.feedbackDto
    })
    },

    methods: {
      ...mapActions(["getFeedbackDetail","actionFeedback","deleteFeedback"]),
        onSubmit() {
            this.$refs.observer.validate().then(success => {
                if (success) {
                    this.feedbackDto.id = this.id;
                    this.feedbackDto.replyDate = new Date();
                    this.actionFeedback(this.feedbackDto);
                }
            });
        },
        moment,
        onDelete() {
            this.deleteFeedback(this.feedbackDto.id);
        }
    }
};
</script>
