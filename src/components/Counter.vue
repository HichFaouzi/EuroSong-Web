<template>
    <div v-if="isVisible">
        Buttoncounter: {{count}}
        <button @click="addOne">
            Add 1
        </button>

        <button @click="minOne">
            Min 1
        </button>

        <button @click="hide">
            Hide
        </button>
    </div>
</template>

<script>
export default{
    name: "Counter",
    data(){
        return{
            count: 0,
            isVisible: true
            }
        },
    methods: {
        addOne(){
            this.count++;
            },
        minOne(){
            this.count--;

        },
        hide(){
            this.isVisible = false
            }
        }
    }
    
</script>
