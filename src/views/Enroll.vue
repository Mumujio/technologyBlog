<template>
  <div class="Enroll">
    <el-container>
      <!-- <el-header>Header</el-header> -->
      <el-main>
        <div
          style="
            width: 30%;
            margin-bottom: 20vh;
            padding: 10px;
            border-radius: 1px;
            border: 1px solid rosybrown;
            background-color: aliceblue;
          "
        >
          <div
            style="padding-bottom: 10px; text-align: center; font-size: 20px"
          >
            注册
          </div>
          <el-form :model="form_data" label-width="100px">
            <el-form-item label="账号">
              <el-input v-model="account"></el-input>
            </el-form-item>
            <el-form-item label="密码">
              <el-input v-model="password"></el-input>
            </el-form-item>
            <el-form-item label="确认密码">
              <el-input v-model="Confirm_password"></el-input>
            </el-form-item>
          </el-form>
          <div>
            <el-button @click="login">登录</el-button
            ><el-button type="primary" @click="enroll">注册</el-button>
          </div>
        </div>
      </el-main>
    </el-container>
  </div>
</template>

<script setup lang="ts">
import { reactive, ref } from "vue";
import { useRouter } from "vue-router";

let form_data = reactive<object>({});
let account = ref<string>("");
let password = ref<string>("");
let Confirm_password = ref<string>("");

const router = useRouter();
function login() {}
function enroll() {
  router.push("/enroll");
}
</script>

<style lang="less" scoped>
.Enroll {
  height: 100%;
  background-color: rgb(255, 251, 232);
}
.el-container {
  height: 100%;
}
.el-main {
  justify-content: center;
  align-items: center;
  display: flex;
  flex-direction: column;
}
</style>
