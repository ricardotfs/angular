<template>
    <div class="grid-taks">
        <Task v-for="(task,i) in tasks" :key="task.name" :task="task"
              @tastDeleted="$emit('tastDeleted',i)" />
    </div>
</template>

<script>
    import Task from './Task.vue'

    export default {
        components: { Task },
        props: {
            tasks: { type: Array }
        }
    }
</script>

<style scoped>
</style>