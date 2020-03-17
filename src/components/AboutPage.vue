 <template>
    <div id="aboutPage">

    <h3 id="aboutBrad">ABOUT BRAD</h3>
    
    <div id="bioBox">
    
    <img id="profilePicture" src="../assets/profilePicture.jpg" align="left" />

    <p> {{bioText}} </p>

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
        this.bioText = `With the wind under my wings I soar
I see the west Canadian shore
The drum it echoes, echoes, echoes, the drum it echoes through my core
Whispering a haunting rhythm of time, change, and war
Nuu-chan-nulth – A caring and nurturing people are thee
Small families among the mountains, rivers, and sea
Vancouver Island’s west coast is where you reside
Awaiting your canoes on evenings incoming tide

Your men are fishing in the ocean’s secret places
Worry and hope etched in their weathered faces
Each man knowing the days hunting success must provide
For many wives, children, and elders the spoils they must divide

Your rhythm and harmony with the ocean is strong
Whale hunts and oceans spirits intertwined through your song
The drum it echoes, echoes, echoes, the drum it echoes through my core
Whispering a haunting rhythm of time, change, and war
I hear the east call, and open my wings to take flight
The distant drum’s heartbeat calls from the suns rising light
The drum it echoes, echoes, echoes, the drum it echoes through my core
Whispering a haunting rhythm of time, change, and war
Coast Salish – You know how the sea dances and quivers
As you watch the expanse from your inlets, and rivers
Vigilance is needed in case a Storm approaches
To mount a defence if an enemy encroaches.`;

//../assets/profilePicture.jpg
this.URLforImage = "../assets/profilePicture.jpg";

    }
}   

</script>

<style>

#bioBox{
    width: 100%;
    height: 400px;
}

#aboutBrad {
    margin-left: 50px;
    margin-top: 50px;
}


#profilePicture{
    padding: 13px;
    width: 38%;
    height: 68%;
}

</style>