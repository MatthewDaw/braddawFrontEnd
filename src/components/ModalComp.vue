
<template>
<div>
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

</div>
</template>

<script>

export default {

  data(){
    return {
      subscribersEmail: "",
      error: "",
      serverSuccess: false,
      serverError: false
    }
  },

  methods: {
       prepModal(){
       this.serverSuccess = false;
       this.serverError = false;
    },

    created(){
      alert("good to go");
    },

    subscribe(){
      //Sam builds endpoint here
      // user input: this.subscribersEmail
      
      if(false){
        this.serverError = false;
        this.serverSuccess = true;
      } else {
        this.error = "No!"
        this.serverSuccess = false;
        this.serverError = true;
      }
    }
  }
}

</script>