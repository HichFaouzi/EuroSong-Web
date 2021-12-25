<template>
    <div id="container">
        <h1>
            Ranking
        </h1>           
        
            <table>
            <tr>
                    <th>ID</th>
                    <th>Artist Name</th>
                    <th>Title</th>
                    <th>Points</th>
                    <th>Spotify URL</th>
            </tr>
              <!--  <tr>
                    <th>{{song.id}} - <a :href="'https://nl.wikipedia.org/wiki/'+song.artist.name">{{ song.artist.name}}</a> - {{ song.title }} -  {{song.points}} points</th>
                </tr>-->
                
                
            <tr v-for="(song) in songs" :key="song.id">
                <td>{{song.id}}</td>
                <td><a :href="'https://nl.wikipedia.org/wiki/'+song.artist.name">{{ song.artist.name}}</a></td>
                <td>{{ song.title }}</td>
                <td>{{song.points}}</td>
                <td><a :href="song.spotify" target="_blank"><button>Listen to song</button></a></td>
            </tr>
            </table> 
         
           
        <br>
        <button @click="goToPage('home')">
            Go to home
        </button>

    </div>
</template>

<script>
export default({
    name: "Rankingpage",
    mounted(){
        console.log("mounted");
        this.fetchSongs();
    },
    data(){
        return{
            activeSong: 0,
            songs: [],
        }
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
                        song.points = 0;

                        return song;
                    });

                    this.fetchVotes(songs);
                });

        },
        fetchVotes(songs){
            let counter = 0;
                songs.forEach((e, index) => {
                    let url = "http://webservies.be/eurosong/Songs/"+e.id+"/points";
                    fetch(url)
                    .then((response) => {
                        return response.json();
                    }).then((points) => {
                        songs[index].points = points;
                        counter++;
                        if(counter == songs.length){
                            songs.sort(function (a, b) {
                                return b.points - a.points;
                            });
                            
                        this.songs = songs;
                        }
                    });
                });
        }
    }
})
</script>