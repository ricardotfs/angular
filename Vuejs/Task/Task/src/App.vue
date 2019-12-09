<template>
    <div id="app">
        <TaskProgress :progress="progress" />
        <NewTask @addNewTask="addTask" @addClearTask="clearTask" />
        <GridTask :tasks="tasks" @tastDeleted="deleteTask" @taskStateChanged="toggleStateChanged" />
    </div>
</template>

<script>
    import GridTask from './components/GridTask.vue';
    import NewTask from './components/NewTask.vue';
    import TaskProgress from './components/TaskProgress.vue';

    export default {
        name: 'app',
        components: { GridTask, NewTask, TaskProgress },
        data() {
            return {
                tasks: []
            }
        },
        watch: {
            tasks: {
                deep: true,
                handler(){
                    localStorage.setItem('tasks', JSON.stringify(this.tasks))
                }
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
            },
            toggleStateChanged(i) {
                this.tasks[i].pedding = !this.tasks[i].pedding
            }
        },
        computed: {
            progress() {
                const total = this.tasks.length
                const done = this.tasks.filter(t => !t.pedding).length
                return Math.round(done / total * 100) | 0
            }
        },
        created() {
            const json = localStorage.getItem('tasks')
            const array = JSON.parse(json)
            if (Array.isArray(array)) {
                this.tasks = JSON.parse(json)
            } else {
                this.tasks = []
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

