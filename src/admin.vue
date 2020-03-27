<template>
    <div>
    <div id="loginForm" class="container" v-if="!loggedin">
        <h1>Administrator Login</h1>
        <form>
  <div class="form-group">
    <label for="exampleInputEmail1">User Name</label>
    <input type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="User Name" v-model="username">
    <small id="emailHelp" class="form-text text-muted"></small>
  </div>
  <div class="form-group">
    <label for="exampleInputPassword1">Password</label>
    <input type="password" class="form-control" id="exampleInputPassword1" placeholder="Password" v-model="password"> 
  </div>
  <button type="submit" id="adminLogin" @click="login" class="btn btn-danger">Log In</button>
  <button type="submit" id="adminLogin" class="btn btn-danger" onclick="window.location.href = '/'">Return To Home</button>
</form>
</div>
<div v-else class="container" >
    <div id="formContainer">
    <h1> {{username}} is now signed in </h1>
        <div id = "buttonBox">
      <button type="submit" id="viewMailList" @click="viewMailList" class="btn btn-danger">Write a Newsletter</button>
      <button type="submit" id="viewMailList" @click="viewMailList" class="btn btn-danger">View Mailing List</button>
      <button type="submit" id="adminLogin" class="btn btn-danger">View Admin Users</button>
      <button type="submit" id="adminLogin" class="btn btn-danger" onclick="window.location.href = '/'">Return To Home</button>
      <button type="submit" id="adminLogin" @click="logout" class="btn btn-danger" >Sign Out</button>
        </div>
    </div>
</div>
    </div>
</template>
<script>

import { loginMixin } from './userMixins';

export default {

    loginMixins: [loginMixin],

    data(){
        return {
            username: "",
            password: "",
            loggedin: loginMixin.loggedIn
        };
        },

    oncreate(){
        alert("go");
    },

  methods: {
    
    viewMailList(){
    },

    login(){

        

        //Sam makes end point here
        //user input: this.username, this.password
    
        this.loggedin = true;
        if(this.loggedIn){

            sessionStorage.setItem("occupation", "s2f2f444");

            loginMixin.loggedIn = true;
            loginMixin.username = this.username;
        }
    },
    logout(){
        loginMixin.loggedIn = false;
        loginMixin.username = "";
        this.username = "";
        this.loggedin = false;

        //find way to make log out global
    }
  },
    created(){
        
        //sessionStorage.setItem("occupation", "qqqqqsdasfasffomwet");
        console.log(sessionStorage.getItem("occupation"));
    }
  }

</script>

<style>

#formContainer{
    display: flex;
    flex-direction: column;
    justify-content: center;
    background-color: white;
    margin: 30px;
    padding: 20px;
    text-align: center;
}

#buttonBox{
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    flex-wrap: wrap;
    margin-top: 30px;
    border-radius: 5px;
    padding: 20px;
}

.btn {
    margin: 10px;
}

</style>