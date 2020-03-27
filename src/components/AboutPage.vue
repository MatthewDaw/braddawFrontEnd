 <template>
    <div id="aboutPage">

    <h3 id="aboutBrad">ABOUT BRAD</h3>
    
    <div id="bioBox">
    
    <img id="profilePicture" src="../assets/bradAndLaura.jpg" align="left" />

    <p> <p style="margin: 15px 0px; color: rgb(68, 68, 68); font-family: Georgia, &quot;Times New Roman&quot;, Times, serif; font-size: 14px; font-style: normal; font-variant-ligatures: normal; font-variant-caps: normal; font-weight: 400; letter-spacing: normal; orphans: 2; text-align: start; text-indent: 0px; text-transform: none; white-space: normal; widows: 2; word-spacing: 0px; -webkit-text-stroke-width: 0px; text-decoration-style: initial; text-decoration-color: initial;">I’m a husband, father, engineer, resident of Utah County and state legislator.</p>
<p style="margin: 15px 0px; color: rgb(68, 68, 68); font-family: Georgia, &quot;Times New Roman&quot;, Times, serif; font-size: 14px; font-style: normal; font-variant-ligatures: normal; font-variant-caps: normal; font-weight: 400; letter-spacing: normal; orphans: 2; text-align: start; text-indent: 0px; text-transform: none; white-space: normal; widows: 2; word-spacing: 0px; -webkit-text-stroke-width: 0px; text-decoration-style: initial; text-decoration-color: initial;">I’m proud of my roots. I grew up on a farm, and as a farmer’s son - experienced planting something, nurturing it, watching it grow and reaping the harvest. As a legislator, I’m dedicated to those same concepts as I serve the people of Utah.</p>
<p style="margin: 15px 0px; color: rgb(68, 68, 68); font-family: Georgia, &quot;Times New Roman&quot;, Times, serif; font-size: 14px; font-style: normal; font-variant-ligatures: normal; font-variant-caps: normal; font-weight: 400; letter-spacing: normal; orphans: 2; text-align: start; text-indent: 0px; text-transform: none; white-space: normal; widows: 2; word-spacing: 0px; -webkit-text-stroke-width: 0px; text-decoration-style: initial; text-decoration-color: initial;">Every idea should be heard and given the chance to blossom to fruition, that’s why I’m committed to helping others make their voices known. I run a lot of bills, even those that are controversial, and I work hard to get them passed. If I’m not the right voice for a cause, I put its proponents in touch with the right person who is because everyone CAN make a difference.</p>
<p style="margin: 15px 0px; color: rgb(68, 68, 68); font-family: Georgia, &quot;Times New Roman&quot;, Times, serif; font-size: 14px; font-style: normal; font-variant-ligatures: normal; font-variant-caps: normal; font-weight: 400; letter-spacing: normal; orphans: 2; text-align: start; text-indent: 0px; text-transform: none; white-space: normal; widows: 2; word-spacing: 0px; -webkit-text-stroke-width: 0px; text-decoration-style: initial; text-decoration-color: initial;">I’ve been heavily involved in The Boy Scouts of America. In fact, the values of scouting are at the foundation of all I do. I believe in honesty, love of God and country and I rely on these tried and true principles as I seek new ways to solve challenges in the service of my constituents.</p>
<p style="margin: 15px 0px 0px; color: rgb(68, 68, 68); font-family: Georgia, &quot;Times New Roman&quot;, Times, serif; font-size: 14px; font-style: normal; font-variant-ligatures: normal; font-variant-caps: normal; font-weight: 400; letter-spacing: normal; orphans: 2; text-align: start; text-indent: 0px; text-transform: none; white-space: normal; widows: 2; word-spacing: 0px; -webkit-text-stroke-width: 0px; text-decoration-style: initial; text-decoration-color: initial;">I’m proud to represent the people of Utah County in the State Legislature. And I’m proud to work on your behalf to preserve all THAT makes America great in the state of Utah.</p> </p>

    </div>

</div>

</template>

<script>

export default {
    data(){
        bioText= "sdf";
        URLforImage= "";
    },
    created: function() {
        //Sam makes API call here
        this.bioText = "";

//../assets/profilePicture.jpg
this.URLforImage = "../assets/profilePicture.jpg";

    }
}   

</script>

<style>

#bioBox{
    width: 100%;
}

#aboutBrad {
    margin-left: 50px;
    margin-top: 50px;
    
}


#profilePicture{
    padding: 13px;
    width: 395px;
    height: 248px;
}

</style>