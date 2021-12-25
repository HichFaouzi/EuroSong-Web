<template>
    <div>
        <h1>
        Game
      </h1>
      <button @click="goToPage('home')">
        Go to home
      </button>

      

      <carousel 
        :items="songs"
        :activeIndex="activeSongIndex"
        @change-index="changeActiveSongIndex"
      />
    
        <br>
      <div v-for="(vote, index) in votes" :key="index" >
          <br>
          <button @click="addVote(vote.points)" v-if="!vote.isVoted">
            add {{vote.points}} points
            {{vote.isVoted}}
          </button>
      </div>
    </div>
</template>

<script>
    import Carousel from "../components/Carousel.vue";
export default({
    name: "Gamepage",
    components:{
        Carousel
    },
    data(){
        return{
            songs: [],
            activeSongIndex: 0,
            votes: [
                {
                    points: 1,
                    isVoted: false
                },
                {
                    points: 2,
                    isVoted: false
                },
                {
                    points: 4,
                    isVoted: false
                },
                {
                    points: 8,
                    isVoted: false
                }
            ]
        }
    },
    mounted(){
        console.log("mounted");
        this.fetchSongs();
    },
    methods:{
        goToPage(page){
            this.$emit("change-page", page);
        },
        fetchSongs(){
            // Get all songs

            const url = "http://webservies.be/eurosong/Songs";

            fetch(url)
                .then((response) => {
                    return response.json();
                })
                .then((songs) => {
                    this.fetchArtists(songs)
                });
        },
        fetchArtists(songs){
            // Get all artists

            const url = "http://webservies.be/eurosong/Artists";

            fetch(url)
                .then((response) => {
                    return response.json();
                })
                .then((artists) => {
                    songs.map((song) => {
                        const artist = artists.find((artist) => artist.id == song.artist);
                        song.artist = artist;
                        return song;
                    });

                    this.songs = songs;
                });

        },

        changeActiveSongIndex(index){
            this.activeSongIndex = index;
        },

        addVote(points){
            let votes = this.votes;
            votes.map((vote) => {
                if(vote.points == points){
                    vote.isVoted = true;
                }
                return vote;
            })

            this.postVote(points);
            
            let activeVotes = votes.filter((vote) => vote.isVoted ==true);

            if(activeVotes.length == votes.length){
                //redirect to rankingpage
                this.goToPage("ranking");

            }
            console.log(activeVotes);
        },

        postVote(points){
            const songId = this.songs[this.activeSongIndex].id
            const url = "http://webservies.be/eurosong/Votes"

            fetch(url, {
                method: "POST",
                headers: {
                    'Accept': 'application/json, text/plain',
                    'Content-Type': 'application/json;charset=UTF-8'
                },
                body: JSON.stringify({
                    songID: songId,
                    points: points,
                })
            }).then((response) => {
                return response.json()
            }).then((result) => {
                console.log(result);
            })
        },
        
    }
})

</script>