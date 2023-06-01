<template>
  <ion-page>
    <ion-header>
      <ion-toolbar>
        <ion-buttons slot="start">
          <ion-button href="/">Back</ion-button>
        </ion-buttons>
        <ion-title>Register</ion-title>
      </ion-toolbar>
    </ion-header>

    <ion-card class="Login_Page_Card">
      <img alt="logo" class="Login_Page_Card_Logo" src="../../assets/Login/bootup_logo.png"/>
      <ion-card-header>
        <ion-card-title class="Login_Page_Card_Title">Welcome to GatherGenius! Please Register</ion-card-title>
      </ion-card-header>
    </ion-card>

    <div class="container">
      <form class="login-form" @submit.prevent="submitForm">
        <div class="form-group">
          <label class="form-label" for="username">Username:<p></p></label>
          <input id="username" v-model="username" class="form-input" required type="text">
        </div>
        <div class="form-group">
          <label class="form-label" for="password">Password:<p></p></label>
          <input id="password" v-model="password" class="form-input" required type="password">
        </div>
        <div class="form-group">
          <button class="form-button" type="submit">Register</button>
        </div>
      </form>
    </div>
  </ion-page>
</template>


<script setup>
import {IonPage} from '@ionic/vue';
import {ref} from "vue";

const username = ref('');
const password = ref('');

const submitForm = () => {
  console.log('用户名:', username.value);
  console.log('密码:', password.value);

  // 发送请求到服务器进行注册
  fetch('http://localhost:3000/register', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${localStorage.getItem('token')}`
    },
    body: JSON.stringify({username: username.value, password: password.value})
  })
      .then(response => response.json())
      .then(data => {
        if (data.status === 200) {
          console.log('注册成功！', data);
        } else {
          console.log('注册失败：', data.msg);
        }
      })
      .catch(err => console.error('请求失败：', err));
}

</script>


<style scoped>
/* CSS样式与Login.vue的样式一致 */
.Login_Page_Card {
  width: 90%;
  height: 45%;
  margin-left: 5%;
  position: relative;
  top: 2%;
}

.Login_Page_Card_Title {
  font-size: 24px;
  font-weight: bold;
  margin-top: 10px;
  text-align: center;
}

.Login_Page_Card_Logo {
  width: 70%;
  height: 70%;
  margin-left: 15%;
}


.container {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 55%;
  margin: 0 auto;
  position: relative;
  bottom: 3%;
}

.login-form {
  width: 300px;
  padding: 20px;
  background-color: #ffffff;
  border-radius: 10px;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
}

.form-group {
  margin-bottom: 15px;
}

.form-input {
  width: 100%;
  padding: 10px;
  border: 1px solid #dddddd;
  border-radius: 5px;
}

.form-button {
  width: 100%;
  padding: 13px;
  background-color: #007bff;
  color: #ffffff;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-size: 16px;
  margin-top: 15px;
}

.form-button:hover {
  background-color: #0056b3;
}

.form-label {
  font-size: 16px;
  font-weight: 600;
  color: #333;
}
</style>
