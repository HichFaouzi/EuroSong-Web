<template>
    <div>
        <h1>
        EuroSong Festival voting app
        </h1>

        <button @click="goToPage('game')">
            Show Game
        </button>

        <button @click="goToPage('ranking')">
            Show Ranking
        </button>
    </div>

</template>

<script>

export default({
    name:"Homepage",
    methods: {
        goToPage(page){
            this.$emit("change-page", page);
        }
    }
})
</script>
