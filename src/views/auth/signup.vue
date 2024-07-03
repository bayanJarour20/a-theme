<template>
  <div class="pb-5">
    <b-form @submit.prevent>
      <h3 class="title text-center py-5">
        {{$t('auth.signup.welcome')}} <span class="text-primary appName">{{appName}}</span> 👋
        <p class="title mb-0 mt-3 lead">{{$t('auth.signup.we-are-happy')}} 🎉</p>
      </h3>
      <a-input-text
        label="Full Name"
        name="fullname"
        placeholder="type here ..."
        v-model="AccountDto.fullName"
      ></a-input-text>
      <a-input-text
        label="User Name"
        name="username"
        placeholder="type here ..."
        v-model="AccountDto.userName"
      ></a-input-text>
      <a-input-text
        label="Password"
        name="password"
        type="password"
        placeholder="type here ..."
        v-model="AccountDto.Password"
      ></a-input-text>

      <a-input-text
        label="Confirm Password"
        name="confirm-password"
        type="password"
        placeholder="type here ..."
      ></a-input-text>
      <b-button type="submit" variant="primary" class="px-5" @click="signup(userDto)">
        {{ $t("auth.signup.title") }}
      </b-button>
    </b-form>
  </div>
</template>

<script>
  import {mapActions,mapState} from "vuex"
export default {
  props: {
    appName: String
  },
  data: () => ({
    userDto: {
    }
  }),
  computed: {
    ...mapState({
      AccountDto: (state) => state.actionSignUp.AccountDto,
    }),
  },
  methods: {
    ...mapActions(["sinUp"]),
    signup(userDto) {

      console.log(userDto)
      // Object.assign(this.AccountDto, userDto);
      this.sinUp(this.AccountDto)
    }
  }
}
</script>