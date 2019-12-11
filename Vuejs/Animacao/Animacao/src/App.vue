<template>
    <div id="app" class="container-fluid">
        <h1>Animações</h1>
        <b-button variant="primary" v-on:click="show = !show">
            Alternar
        </b-button>
        <b-select v-model="tipoAnimacao">
            <option value="fade">Fade</option>
            <option value="slide">Slide</option>
        </b-select>
        <transition :name="tipoAnimacao" mode="out-in">
            <b-alert variant="info" show v-if="show" key="info">{{mensagem}}</b-alert>
            <b-alert variant="success" show v-else key="success">{{mensagem}}</b-alert>
        </transition>

        <transition :name="tipoAnimacao">
            <b-alert variant="info" show v-show="show">{{mensagem}}</b-alert>
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
                show: true,
                mensagem: 'Mensagem de usuário',
                tipoAnimacao: 'fade'
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
            transform: translateY(80px);
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
            transform: translateY(80px);
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
