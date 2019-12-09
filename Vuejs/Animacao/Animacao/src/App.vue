<template>
    <div id="app" class="container-fluid">
        <h1>Animações</h1>
        <b-button variant="primary" v-on:click="show = !show">
            Alternar
        </b-button>
        <transition name="fade">
            <p v-show="show">olá</p>
        </transition>
        <transition name="slide" appear>
            <p v-show="show">olá</p>
        </transition>
        <!--enter-class=""
        leave-class=""-->
        <transition enter-active-class="animated bounceInRight"
                    leave-active-class="animated bounceOutRight">
            <p v-show="show">olá</p>
        </transition>
    </div>
</template>

<script>

    export default {
        data() {
            return {
                show: true
            }
        }
    }
</script>

<style>

    #app {
        font-family: 'Avenir', Helvetica, Arial, sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        text-align: center;
        color: #2c3e50;
        margin-top: 60px;
        font-size: 1.5rem;
    }

    .fade-enter, .fade-leave-to {
        opacity: 0;
    }

    .fade-enter-to, .fade-leave {
        opacity: 1;
    }

    .fade-enter-active, .fade-leave-active {
        transition: opacity 3s;
    }

    @keyframes slide-in {
        from {
            transform: translateY(40px);
        }

        to {
            transform: translateY(0);
        }
    }

    @keyframes slide-out {
        from {
            transform: translateY(0);
        }

        to {
            transform: translateY(40px);
        }
    }
    
    .slide-enter-active {
        animation: slide-in 3s ease;
        transition: opacity 3s;
    }
    .slide-leave-active {
        animation: slide-out 3s ease;
        transition: opacity 3s;
    }

    .slide-enter, .slide-leave-to {
        opacity: 0;
    }
</style>
