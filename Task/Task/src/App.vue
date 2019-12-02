<template>
    <div id="app">
        <NewTask @addNewTask="addTask" @addClearTask="clearTask" />
        <GridTask :tasks="tasks" @tastDeleted="deleteTask" />
    </div>
</template>

<script>
    import GridTask from './components/GridTask.vue';
    import NewTask from './components/NewTask.vue';

    export default {
        name: 'app',
        components: { GridTask, NewTask },
        data() {
            return {
                tasks: []
            }
        },
        methods: {
            addTask(task) {
                var validar = t => task.name === t.name
                const naoExiste = this.tasks.filter(validar).length == 0

                if (naoExiste)
                    this.tasks.push(task)
            },
            clearTask() {
                this.tasks = []
            },
            deleteTask(i) {
                this.tasks.splice(i, 1)
            }
        }
    };
</script>

<style>


    button {
        background: #404490;
        color: #fff;
    }

    body {
        font-family: 'Lato', sans-serif;
        background: linear-gradient(to right, rgb(22, 34, 42), rgb(58, 96, 115));
        color: #FFF;
    }

    #app {
        display: flex;
        flex: 1;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        height: 100vh;
    }

        #app h1 {
            margin-bottom: 5px;
            font-weight: 300;
            font-size: 3rem;
        }
</style>

