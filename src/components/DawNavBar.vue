<template>

<div>
      <div >
    <a href="./"><img src="../assets/bradLogo.png" /></a>
      </div>
  <div>
    <nav class="navbar navbar-expand-lg navbar-light " style="background-color: #E7E7E7;">
     <span class="navbar-brand" id="homeLink" href="./" @click="goToHome" >Home</span>
      <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav mr-auto">
          <li class="nav-item active" @click="goToAboutBrad" >
            <span class="nav-link webssd" id="bradLink">About Brad Daw <span class="sr-only">(current)</span></span>
          </li>
          <li class="nav-item active"  @click="goToIssues">
            <span class="nav-link" id="issueLink">Issues <span class="sr-only">(current)</span></span>
          </li>
          <li class="nav-item active" @click="goToContactBrad">
            <span class="nav-link" href="#" id="contactLink">Contact Brad Daw <span class="sr-only">(current)</span></span>
          </li>
        </ul>
        
        <!-- Button trigger modal -->
      <button @click="prepModal" type="button" class="btn btn-danger" data-toggle="modal" id="subscribeButton" data-target="#exampleModal">
        Subscribe to Mailing List
      </button>
      <form action="https://www.paypal.com/cgi-bin/webscr" method="post">
        <input type="hidden" name="cmd" value="_s-xclick">
        <input type="hidden" name="hosted_button_id" value="6ZKZTJ7JR3P22">
        <input type="image" src="https://www.paypalobjects.com/en_US/i/btn/btn_donateCC_LG.gif" border="0" name="submit" alt="PayPal - The safer, easier way to pay online!">
        <img alt="" border="0" src="https://www.paypalobjects.com/en_US/i/scr/pixel.gif" width="1" height="1">
      </form>
      </div>
    </nav>
    </div>    
    


<!-- Modal -->
<div class="modal fade" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog" role="document">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="exampleModalLabel">Subscribe to Brad's Mailing List</h5>
        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div id="alertBox">
      <div class="alert alert-success alert-dismissible fade show" role="alert" v-show="serverSuccess">
        <strong>Success:</strong> you are now added to the list!
        <button type="button" class="close" data-dismiss="alert" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div class="alert alert-danger alert-dismissible fade show" role="alert" v-if="serverError">
        <strong>Error:</strong> {{error}}
        <button type="button" class="close" data-dismiss="alert" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      </div>
      <div class="modal-body">
         <input type="email" class="form-control" v-model="subscribersEmail" aria-describedby="emailHelp" placeholder="Enter email">
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-dismiss="modal">Cancel</button>
        <button type="button" class="btn btn-danger" @click="subscribe" >Subscribe</button>
      </div>
    </div>
  </div>
</div>

<!-- slot for main page -->
  <slot></slot>

<!-- foot -->
<hr>
<div id ="foot">
<span class="smallText"> &#169; Copyright Elect Brad Daw   </span> <span class="largeText" >BRAD DAW</span> <span class="smallText">   Utah State Representative </span>
</div>

  </div>
</template>

<style scoped>
.navbar{
  border-style: solid;
  border-width: 1px;
  border-color: whitesmoke;
}

#subscribeButton{
  margin-right: 15px;
}

</style>
<script>

export default {
  props: {
    activePage: {
      type: String
    }
  },
  data(){
    return {
      subscribersEmail: "",
      error: "",
      serverSuccess: false,
      serverError: false
    }
  },
  methods: {
    goToHome() {
      this.$emit('pageChanged', "home");
    },
    goToIssues(){
      this.$emit('pageChanged', "issues");
        },
    goToAboutBrad(){
      this.$emit('pageChanged', "about");
    },
    goToContactBrad(){
      this.$emit('pageChanged', "contact");
    },

    prepModal(){
       this.serverSuccess = false;
       this.serverError = false;
    },

    subscribe(){
      
      //Sam builds endpoint here
      // user input is the variable: this.subscribersEmail
      
      if(false){
        this.serverError = false;
        this.serverSuccess = true;
      } else {
        this.error = "you suck, bring on the clown"
        this.serverSuccess = false;
        this.serverError = true;
      }
    }
  }
}
$('#code').on('shown.bs.modal', function (e) {
  alert("modal opening");
})
 </script>

