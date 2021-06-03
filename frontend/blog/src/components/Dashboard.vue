<template>
    <div class="container">
        <button @click="logout()" class="btn btn-danger logout">Logout</button>
          <form @submit.prevent="createPost()">
       <div class=" mx-auto  mt-5"  style="width:600px;">
            <div class="form-group">
                <label for="title">Title:</label>
                <input v-model="post.title" type="text" name="title" class="form-control"  :class="{'is-invalid': errors.title}" >
                 <div v-if="errors.title" class="invalid-feedback">{{errors.title[0]}}</div> 
             <div class="form-group">
                    <label for="content">Content</label>
                    <textarea  rows="10" v-model="post.content" type="text" name="content" class="form-control" :class="{'is-invalid': errors.content}"></textarea>
                    <div v-if="errors.content" class="invalid-feedback">{{errors.content[0]}}</div> 
            <button type="submit" class="btn btn-primary mt-4"> <span v-if="loading" class="spinner-border text-danger"></span>Submit</button>
   </div>
  </div>
        </div>
          </form>
          <router-link class="btn btn-warning" :to="'/'">Back</router-link>
    </div>
</template>
<script>
import BaseRequest from "../core/BaseRequest";
import 'jquery/dist/jquery.min.js';
import $ from 'jquery';
export default {
    
    data() {
    return {
        post: {
            title:'',
            content:''
        },
        errors: {},
        loading: false,
    }
}, 
mounted() {
    this.checkLogin();
},
methods : {
    checkLogin: function (){
       BaseRequest.get('userInfo')
            .then(function (response) {
                console.log(response);
            })
            .catch(() => {
                this.$router.push({name: "login"})
            });
            
    },
    createPost: function() {
        this.loading = true;
        
            BaseRequest.post('post',this.post)
            .then(()=>{
               document.getElementById("successPost").style.display = "block";
                $("#successPost").slideDown(100);
                $("#successPost").slideUp(1000);
                this.post = {title: "", content:""};
                this.loading = false;
                this.$router.push({name: "HomePage"})
            })
            .catch(error=> {
                this.loading = false;
                this.errors = error.response.data.errors;
                
            });
    },
     logout: function() {
                document.getElementById("successLogout").style.display = "block";
                $("#successLogout").slideDown(100);
                $("#successLogout").slideUp(1000);
                window.localStorage.removeItem('token');
                this.$router.push({name: "login"});
               
                  
        }
    
}
}
</script>
