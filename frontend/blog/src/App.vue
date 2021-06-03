<template>

<div id="app">
  <div id="warrap">
    <div id="auth">
    </div>
	<div id="header">
			<img src="images/logo.jpg" alt="">
		<ul>
			<li id="home" @click="showBody()" class="action">
				<router-link @click="showBody()" to="/HomePage">Home</router-link>
			</li>
			<li  @click="hideBody()">
				<router-link id="comment" :to="'Dashboard'">Comment</router-link>
			</li>
			<li @click="hideBody()" id="all-list" >
				<router-link :to="'HomePage'">All comments</router-link>
			</li>
			<li>
				<a href="#">blog</a>
			</li>
			<li>
				<a href="#">contact</a>
			</li>
		</ul>
	</div>
	<div id="body">
		<div id="betw">
			<img src="images/the-beacon.jpg" alt="">
			<div>
				<h2>the beacon to all mankind</h2>
				<span>Our website templates are created with</span>
				<span>inspiration, checked for quality and originality</span>
				<span>and meticulously sliced and coded.</span>
				<a href="#">read more</a>
			</div>
		</div>
		<ul>
			<li>
				<img src="images/the-father.jpg" alt="">
				<span>the father</span>
      
			</li>
			<li>
				<img src="images/the-nerd.jpg" alt="">
				<span>the nerd</span>
			</li>
			<li>
				<img src="images/the-actor.jpg" alt="">
				<span>the actor</span>
			</li>
		</ul>
			
	</div>
	<div><router-view></router-view></div>
	
	<div id="footer">
		<div>
			<p>&copy; 2023 by Mustacchio. All rights reserved.</p>
			<ul>
				<li><a href="#"><i class="fab fa-facebook-square"></i></a></li>
				<li><a href="#"><i class="fab fa-instagram-square"></i></a></li>
				<li><a href="#"><i class="fab fa-twitter-square"></i></a></li>
				<li><a href="#"><i class="fab fa-line"></i></a></li>
			</ul>
					</div></div></div><span id="success" class="bg-success">Login sucessfully</span>
							<span id="successPost" class="bg-info">Sucessfully</span>
							<span id="successLogout" class="bg-info">Logout Successfully</span>
							<span id="successRegister" class="bg-info">Register Successfully</span>
					</div>
  
</template>

<script>



export default {
  name: 'App',
  components: {
   
  },
  data(){
    return {
      logined:false,
    }
  }, 
  watch: {},
  mounted() {},
  methods: {hideBody: function() 
  {document.getElementById('body').style.display = "none";
   document.getElementById('comment').style.color = "#0ba39c";
  }, showBody: function() {document.getElementById('body').style.display = "block";}},
}
</script>

<style>
@import'~bootstrap/dist/css/bootstrap.css';
</style>
