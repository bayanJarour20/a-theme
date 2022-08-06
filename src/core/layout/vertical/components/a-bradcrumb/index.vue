<template>

  <div  class="py-3 p-1 border-bottom">
    
    <div class="navbar-container d-flex align-items-center p-1 ">
    <span class="mr-3 border border-primary px-2 rounded" style="cursor: pointer">
      <i
        class="mdi text-primary toggle-collased"
        @click="toggleCollapse()"
        :class="collapsed ? 'mdi-menu' : 'mdi-backburger'"
      ></i>
    </span>
    <!-- <language/> -->
    <a-drop-down right :items="['auth.log-out']" class="ml-auto" v-if="isAdmin()">
      <template slot="activaitor">
        <a-user-dropdown/>
      </template>
      <template slot="default" slot-scope="{ items }">
        <b-list-group>
          <b-list-group-item class="text-capitalize" style="cursor: pointer" @click="logout">
            {{ $t(items[0]) }}
          </b-list-group-item>
        </b-list-group>
      </template>
    </a-drop-down>
    
    <b-row >
      <b-col cols="12" lg="6" class="d-flex align-items-center">
        <b-breadcrumb class="px-0 py-0 m-0 rounded-0">
          <b-breadcrumb-item
            v-for="(item, index) in items"
            :key="index"
            :href="item.to"
            :active="item.active"
            >{{ $t("breadcrumb")[item.text] }}</b-breadcrumb-item
          >
        </b-breadcrumb>
      </b-col>
      <b-col cols="12" lg="6" class="d-flex">
        <span class="mr-3  border-primary px-2 rounded" style="cursor: pointer; position: relative;">
          <i
            class="mdi text-primary toggle-collased mdi-bell-ring"
            @click="toggleCollapse()"
          
          ></i>
          <!-- <span class="border border-primary rounded px-1 " >
            0
          </span> -->
        </span>
        <div style="width:100%;" >
        <slot ></slot>
        </div>
      </b-col>
    </b-row>
    
  </div>
  </div>
  
</template>

<script>
import navbar from "@/navigation/navbar/index.js";
import useJwt from "@core/util/auth/jwt/useJwt";
// import language from "@core/layout/components/language.vue";
import { isAdmin, currentUserId, getUserData } from "@core/util/auth";
import {
  userRoleAttrName,
  userNameAttrName,
} from "@core/auth/jwt/jwtDefaultConfig";

export default {
  // components: {
  //   language
  // },
  props: {
    collapsed: Boolean,
        items: Array,

  },
  data: () => ({
    userRoleAttrName,
    userNameAttrName,
  }),
  computed: {
    langs() {
      return navbar.langs;
    },
    currentUserId() {
      return currentUserId();
    },
    userData() {
      return getUserData();
    },
  },
  methods: {
    isAdmin,
    logout() {
      // Remove userData from localStorage
      // ? You just removed token from localStorage. If you like, you can also make API call to backend to blacklist used token
      localStorage.removeItem(useJwt.jwtConfig.storageTokenKeyName);
      localStorage.removeItem(useJwt.jwtConfig.storageRefreshTokenKeyName);

      // Remove userData from localStorage
      localStorage.removeItem("userData");

      // Redirect to login page
      this.$router.push("/login");
    },
    toggleCollapse() {
      this.$emit("toggleCollapse");
    },
  },
};
</script>
