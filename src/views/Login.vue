<template>
  <div class="Login">
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
            管理员登录
          </div>
          <el-form :model="form_data" label-width="50px">
            <el-form-item label="账号">
              <el-input v-model="form_data.account"></el-input>
            </el-form-item>
            <el-form-item label="密码">
              <el-input v-model="form_data.password"></el-input>
            </el-form-item>
          </el-form>
          <div style="display: flex; justify-content: flex-end">
            <el-button type="primary" @click="login" placeholder="请输入账号"
              >登录</el-button
            >
            <el-button @click="enroll" placeholder="请输入密码" show-password
              >注册</el-button
            >
          </div>
        </div>
      </el-main>
    </el-container>
  </div>
</template>

<script setup lang="ts">
import { reactive, ref, inject, getCurrentInstance } from "vue";
import { useRouter } from "vue-router";
import { manager_login } from "@/network/manager/manager";
let form_data = reactive({
  account: "",
  password: "",
});

// let account = ref<string>("");
// let password = ref<string>("");
const router = useRouter();

const { proxy } = getCurrentInstance();
function enroll() {
  router.push("/enroll");
}

function login() {
  manager_login(form_data).then(
    (res) => {
      console.log(res);
      proxy.$message({
        type: "success",
        message: `${res.data.message}`,
      });
      // (inject("$message") as any).success(`${res}`);
    },
    (error) => {
      (inject("$message") as any).error(`${error}`);
    }
  );
}
</script>

<style lang="less" scoped>
.Login {
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
