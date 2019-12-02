<template>
    <div class="task">
        <span @click="$emit('tastDeleted')" :class="alterarCor(task)"> x</span>
        {{task.name}}
    </div>
</template>

<script>
    export default {
        props: {
            task: { type: Object }
        },
        methods: {
            alterarCor(task) {
                return task.pedding? 'close close-red':'close close-green'
            }
        }
    }
</script>

<style scoped>
    .task {
        position: relative;
        display: inline-block;
        margin: 10px;
        width: 200px;
        height: 100px;
        background: #3d5e30;
        text-align: center;
        top: 15px;
    }

    .close {
        position: absolute;
        right: 5px;
        top: 3px;
        height: 20px;
        width: 20px;
        border-radius: 10px;
        justify-content: center;
    }

        .close-red {
            background: red;
        }

        .close-green {
            background: green;
        }
</style>