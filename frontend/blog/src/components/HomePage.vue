
<template>

<div class="container" >
    <button @click="logout()" class="btn btn-danger logout">Logout</button>
    <a style="position:fixed; top:15px; right:200px" href="#container"><button style="font-size:24px">Bot <i class="fa fa-arrow-circle-down"></i></button></a>
    
    <div>
    <table class="table">
  <thead class="thead-dark">
    <tr>
      <th scope="col" id="container" >NO</th>
      <th scope="col">Title</th>
      <th scope="col">Content</th>
      <th scope="col">Detele</th>
  
    </tr>
  </thead>
  
   
    <tbody v-for="post in posts" :key="post.id">
    <tr>
      <th  scope="row">{{post.id}}</th>
      <td>{{post.title}}</td>
      <td>{{post.content}}</td>
      <td><button @click="Delete(post.id),getPosts()" class="btn btn-danger">Delete</button></td>
    </tr>
     </tbody>
</table>
  <nav aria-label="...">
  <ul class="pagination">
    <li class="page-item ">
      <a class="page-link"  @click="currentPage--">Previous</a>
    </li>
<div v-for="total in totalPage" :key="total.id" >
    <li class="page-item"><a @click="currentPage=total" class="page-link" >{{total}}</a></li>
    </div>
    <li class="page-item">
      <div class="page-link" @click="currentPage++" >Next</div>
    </li>
  </ul>
</nav>
    </div>
    <router-link class="btn btn-success mt-5 mb-5" :to="'dashboard'">Write your comment>>>
    </router-link>
</div>

</template>
<script>
const axios = require('axios');
import BaseRequest from "../core/BaseRequest";
import 'jquery/dist/jquery.min.js';
import $ from 'jquery';
export default {
  
    data() {
        return{
        posts: [],
        loading: false,
        currentPage:1,
        totalPage:0,
        checkedNames:null,
        
        }
        
    },
    mounted() {
        this.getPosts(); this.checkLogin();
    },
    watch: {
      logined: function() {
          this.checkUser();
      },
      currentPage: function(){
        if(this.currentPage<1) {
          return this.currentPage=1;
        }
         if(this.currentPage>this.totalPage) {
         return this.currentPage=this.totalPage;
        }
        
        this.getPosts();
      },
     
     
    },
    methods: {
       
         checkLogin: function (){
       BaseRequest.get('userInfo')
            .then( response => {
                console.log(response);
                this.logined=true;
              
            })
            .catch(() => {
                this.$router.push({name: "login"})
            });
            
    },
        
        getPosts: function() {
            BaseRequest.get('post?page='+ this.currentPage)
            .then(response => {
               this.posts = response.data.data;
               this.totalPage = response.data.last_page;
              
            })
        },
        logout: function() {
                document.getElementById("successLogout").style.display = "block";
                $("#successLogout").slideDown(100);
                $("#successLogout").slideUp(1000);
                window.localStorage.removeItem('token');
                this.$router.push({name: "login"});
      
        },
        Delete: function(id) {
          axios.delete('http://localhost/api/post/'+id,{_method: 'delete'})
       
        }
    }
}
</script>
<style >
.pagination:hover {
  cursor: pointer;
}
</style>