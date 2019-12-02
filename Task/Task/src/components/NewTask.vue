<template>
    <div class="new-task">
        <input type="text" width="100" v-model="name" @keydown.enter="add" placeholder="Entere com uma Task" />
        <button @click="add">+</button>
        <button @click="clear">clear</button>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                name: ''
            }
        },
        methods: {
            add() {

                this.$emit('addNewTask', { name: this.name, pedding: false })
                this.name = ''
            },
            clear() {
                this.$emit('addClearTask')
            }
        }
    }
</script>

<style scoped>
</style>