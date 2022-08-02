<template>
    <!-- <ValidationObserver ref="observer"> -->
        <b-form @submit.prevent="onSubmit">
            <b-card no-body class="mb-2">
                <b-card-body>
                    <b-card-text>
                        <b-row>
                            <b-col cols="12" md="4">
                                <a-input-text
                                    v-model="feedbackDto.appUserName"
                                    label="اسم المستخدم "
                                    readonly
                                    name="appUserName"
                                />
                            </b-col>
                            <b-col cols="12" md="4">
                                <a-input-text
                                    :value="
                                        moment(feedbackDto.sendDate).format(
                                            'MMMM Do YYYY, h:mm:ss a'
                                        )
                                    "
                                    label="تاريخ الإرسال"
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
                                    label="تاريخ الرد"
                                    placeholder="لم يتم الرد بعد"
                                    readonly
                                    name="replyDate"
                                />
                            </b-col>
                            <b-col cols="12" class="my-1">
                                <a-input-text
                                v-model="feedbackDto.title"
                                    label="عنوان الرسالة"
                                    readonly
                                    name="title"
                                />
                            </b-col>
                            <b-col cols="12" class="my-1">
                                <a-input-textarea
                                    label="الرسالة"
                                    readonly
                                    name="body"
                                    v-model="feedbackDto.body"
                                />
                            </b-col>
                            <b-col cols="12" class="my-1">
                                <a-input-textarea
                                v-model="feedbackDto.reply"
                                    label="الرد على الرسالة"
                                    :rules="[
                                        {
                                            type: 'required',
                                            message: 'نص الرد مطلوب'
                                        }
                                    ]"
                                    placeholder="يمكنك كتابة رد هنا ..."
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
                                    style="max-width:100px"
                                    >إرسال رد</b-button
                                >
                                <b-button
                                    variant="outline-primary"
                                    style="max-width:100px"
                                    to="/contact"
                                    >تراجع</b-button
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
                                >حذف</b-button
                            >
                        </b-col>
                    </b-row>
                </b-card-footer>
            </b-card>
        </b-form>
</template>
<script>
import moment from "moment";
export default {
    props: {
        id: String
    },
    // created() {
    //     this.getFeedbackDetail(this.id);
    // },
    data: () => ({
        feedbackDto:{
          appUserName:"Bayn Jarour",
          sendDate:"12/12/2",
          replyDate:"",
          title:"jjjjj",
          body:"ghayr maelum (fi alwaedi) NavigationDuplicated: tajanub altanaqul alzaayid 'iilaa almawqie alhalii: ",
          reply:"",
        }
    }),
    computed: {

    },

    methods: {

        onSubmit() {
            this.$refs.observer.validate().then(success => {
                if (success) {
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
