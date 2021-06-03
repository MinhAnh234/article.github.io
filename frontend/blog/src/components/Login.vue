<template>
    <div > 
      <button class="btn btn-primary login" v-show="this.loginBt" @click="loginBtt()">Login</button>
      <button class="btn btn-danger logout" v-show="this.loginBt==false">Logout</button>
      <div id="login-form">
        <div class="row">
            <div id="fm" class="col-4 mx-auto border mt-5">
                <span onclick="document.getElementById('login-form').style.display='none'" class="close" title="Close Modal">&times;</span>
                <h2>Login</h2>
                  <form @submit.prevent="login()">
  <div class="form-group">
    <label for="exampleInputEmail1">Email address</label>
    <input v-model="user.email" type="email" name="email" class="form-control"  :class="{'is-invalid': errors.email}" aria-describedby="emailHelp">
  </div>
  <div class="form-group">
    <label>Password</label>
    <input  v-model="user.password" type="password" name="password" class="form-control" :class="{'is-invalid': errors.email}">
      <div v-if="errors.email" class="text-danger">{{errors.email}}</div> 
   </div>
  <div class="form-group form-check">
  </div>
  <button type="submit" id="submit" class="btn btn-primary"> <span v-if="loading" class="spinner-border text-danger"></span>Submit</button>
   <div class="form-row">
   <div class="container" style="background-color:#f1f1f1">
      <a href="/register"><button type="button" class="btn btn-success mr-3 ">Register</button></a>
      <button type="button" onclick="document.getElementById('login-form').style.display='none'" class="cancelbtn">Cancel</button>
      <span class="psw">Forgot <a href="#">password?</a></span>
    </div>
  
   </div>
  
</form>
            </div>
                </div>
         </div>
           
    </div>
</template>
<script>

import BaseRequest from "../core/BaseRequest";
import 'jquery/dist/jquery.min.js';
import $ from 'jquery';
export default{
    data() {
        return {
            user:{
                email: '',
                password: ''
            },
            errors: {},
            loading: false,
            loginBt: true,
        }
    }, 
    mounted() {
     
    },
    methods: {

        login: function() {
            BaseRequest.post('login',this.user)
            .then(response=> {
                document.getElementById("success").style.display = "block";
                $("#success").slideDown(100);
                $("#success").slideUp(1000);
                this.loading = true;
                this.loginBt = false;
                window.localStorage.setItem('token', response.data.token);
                 this.$router.push({name:'HomePage'});
                  
            })
            .catch(error=> {
               this.loading = false;
               this.errors = error.response.data;       
            });

        },
        loginBtt() {
            document.getElementById('login-form').style.display='block';
        }
        
    }
}
</script>
<style>
#login-form {
    padding-top:250px;
    width:100%;
    background-color:rgba(0,0,0,0.8);
    height:3000px;
    position: fixed;
    top:0;
}
#fm {
    position: relative;
    background-color:white;
    border-radius:15px;
}
.close {
  position: absolute;
  right: 25px;
  padding-left:10px;
  top: 0;
  color: #000;
  font-size: 35px;
  font-weight: bold;
  width:40px;
}
.close:hover  {
  width:40px;
  background-color:gray;
  cursor: pointer;
}
.login, .logout  {
  position: fixed;
  top:15px;
  right:0;
  width: 100px;
}
#success {
  display:none;
  height: 60px;
  line-height: 60px;
  width: 500px;
  text-align: center;
  position:fixed;
  bottom:0;
  right:0;
}
#successPost {
  display:none;
  height: 60px;
  line-height: 60px;
  width: 500px;
  text-align: center;
  position:fixed;
  bottom:0;
  right:0;
}
#successLogout {
  display:none;
  height: 60px;
  line-height: 60px;
  width: 500px;
  text-align: center;
  position:fixed;
  bottom:0;
  right:0;
}
#successRegister {
  display:none;
  height: 60px;
  line-height: 60px;
  width: 500px;
  text-align: center;
  position:fixed;
  bottom:0;
  right:0;
}
span.psw {
  float: right;
  padding-top: 16px;
}

.cancelbtn {
  margin: 30px auto 30px -12px;
  width:100px;
  height: 50px;
  background-color: red;
  border-radius: 10px;
  color: white;
  border:none;
}
.cancelbtn:hover {
  background-color: green;
}
#submit {
  margin-bottom: 10px;
}
</style>