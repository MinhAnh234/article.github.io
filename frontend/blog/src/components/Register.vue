<template>
    <div id="register-form">
        <form id="registerForm" class="container" @submit.prevent="register()">
  <div class="form-group">
    <label for="Email1">Email address</label>
    <input v-model="user.email" type="email" name="email" class="form-control" :class="{'is-invalid': errors.email}" id="Email1" aria-describedby="emailHelp" placeholder="Enter email">
    <small class="text-danger" v-if="errors.email">{{errors.email[0]}}<br></small>
    <label for="Name">Name</label>
    <input v-model="user.name" type="text" name="name" class="form-control" id="Name" :class="{'is-invalid': errors.name}" placeholder="Enter name">
    <small class="text-danger" v-if="errors.password">{{errors.name[0]}}<br></small>
  </div>
  <div class="form-group">
    <label for="Password">Password</label>
    <input v-model="user.password" type="password" name="password" class="form-control" id="Password" :class="{'is-invalid': errors.password}" placeholder="Password">
    <small class="text-danger" v-if="errors.password">{{errors.password[0]}}<br></small>
    <label for="password_confirmation">Confirm Password</label>
    <input v-model="user.password_confirmation" type="password" name="password_confirmation" class="form-control" id="password_confirmation" placeholder="Password">
  </div>
  <div class="form-check">
    <input type="checkbox" class="form-check-input" id="exampleCheck1">
    <label class="form-check-label" for="exampleCheck1">Check me out</label>
  </div>
  <button type="submit" class="btn btn-primary">Submit</button>
  
</form>
    </div>
</template>
<script>
import BaseRequest from "../core/BaseRequest";
import 'jquery/dist/jquery.min.js';
import $ from 'jquery';
export default {
    data() {
        return {
            user: {
                email: '',
                name: '',
                password: '',
                password_confirmation:''
                
            },
             errors:{},
        }
    },
    mounted: function(){
         
        },
    
    methods: {
        register: function() {
            BaseRequest.post('register',this.user)
            .then(response =>{
                document.getElementById("successRegister").style.display = "block";
                $("#successRegister").slideDown(100);
                $("#successRegister").slideUp(1000);
                console.log(response);
               BaseRequest.post('login',this.user)
                    .then(response=> {
                            window.localStorage.setItem('token', response.data.token);
                            this.$router.push({name:'HomePage'});
                  
            })
            })
            .catch(error => {
                this.errors = error.response.data.errors;
                console.log(this.errors);
            })
        },
        
    }
}
</script>
<style>
#registerForm {
    width: 500px;
}
#registerForm{
    position: fixed;
    top:30%;
    left: 30%;
    background-color:rgba(24,283,24,0.9);
}
</style>