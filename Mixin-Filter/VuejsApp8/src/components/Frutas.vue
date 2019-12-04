<template>
    <div class="frutas">
        <ul>
            <li v-for="f in frutas" :key="f">{{f}}</li>
        </ul>
        <input type="text" v-model="fruta" @keydown.enter="add" />
    </div>
</template>

<script>
    import FrutasMixin from '../frutasMixin'
    export default {
        mixins: [FrutasMixin]
    }
</script>

<style scoped>
</style>