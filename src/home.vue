<template>
  <div>
  <div class="redLine"></div>
  <div id="app" class="container">
    <DawNavBar :activePage="activePage" @pageChanged="activePage = $event" >
    <HomePage v-if="activePage=='home' || activePage=='' "></HomePage>
    <AboutPage v-if="activePage=='about'"></AboutPage>
    <IssuePage v-if="activePage=='issues'"></IssuePage>
    <ContactPage v-if="activePage=='contact'"></ContactPage>

    </DawNavBar>
    </div>
    <div class="redLine"></div>
</div>
</template>
<script>

import DawNavBar from './components/DawNavBar.vue';
import HomePage from './components/HomePage.vue';
import AboutPage from './components/AboutPage.vue';
import IssuePage from './components/IssuesPage.vue';
import ContactPage from './components/ContactPage.vue';

import { loginMixin } from './userMixins';

export default {

    loginMixins: [loginMixin],

    components: {
      'DawNavBar': DawNavBar,
      'HomePage': HomePage,
      'AboutPage': AboutPage,
      'IssuePage': IssuePage,
      'ContactPage': ContactPage
    },

  data(){
    return {
              data: [
          '<div class="example-slide">Slide 1</div>',
          '<div class="example-slide">Slide 2</div>',
          '<div class="example-slide">Slide 3</div>',
        ],
        activePage: "home"
      };
    },
  methods: {
    pageChange(){
      alert("changed");
    },
    
  }
  }

</script>

<style>
  .example-slide {
    align-items: center;
    background-color: #666;
    color: #999;
    display: flex;
    font-size: 1.5rem;
    justify-content: center;
    min-height: 10rem;
  }
</style>