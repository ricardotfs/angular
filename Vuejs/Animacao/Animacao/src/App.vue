<template>
    <div id="app" class="container-fluid">
        <h1>Animações</h1>
        <form>
            <input value="TESTE" required />
        </form>
        
        <!--<b-button variant="primary" v-on:click="show = !show">
        Alternar
    </b-button>-->
        <!--<b-select v-model="tipoAnimacao">
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
    <transition>
        <p v-show="show">olá</p>
    </transition>-->
        <!--enter-class=""
    leave-class=""-->
        <!--<transition enter-active-class="animated bounceInRight"
                leave-active-class="animated bounceOutRight">
        <p v-show="show">olá</p>
    </transition>-->
        <!--<transition :css="false"
                @before-enter="beforeEnter"
                @enter="enter"
                @after-enter=""
                @enter-cancelled=""
                @before-leave="beforeLeave"
                @leave="leave"
                @after-leave="afterLeave"
                @leave-cancelled="">
        <div v-if="show" class="quadrado" >
            Olá
        </div>
    </transition>-->
        <!--<div class="mb-4">
        <b-button variant="primary" class="mr-4" @click="componenteSelecionado = 'AlertaInfo'">Info</b-button>
        <b-button variant="primary" @click="componenteSelecionado = 'AlertaSuccess'">Success</b-button>
    </div>
    <transition name="fade"
                mode="out-in">
        <component :is="componenteSelecionado"></component>
    </transition>-->
        <hr />
        <b-button @click="adicinarAluno" class="mr-4">Adicionar Aluno</b-button>
        <!--<b-button @click="removerAluno">Remover Aluno</b-button>-->
        <b-list-group>
            <b-list-group-item @click="removerAluno(i)" v-for="(aluno, i) in alunos" :key="aluno">
                {{aluno}}
            </b-list-group-item>
        </b-list-group>
    </div>
</template>

<script>
    import AlertaInfo from './components/AlertaInfo'
    import AlertaSuccess from './components/AlertaSuccess'

    export default {
        components: { AlertaInfo, AlertaSuccess },
        data() {
            return {
                alunos:['Ricado','Simone','Mariana','Larissa'],
                show: true,
                mensagem: 'Mensagem de usuário',
                tipoAnimacao: 'fade',
                larguraBase: 0,
                componenteSelecionado: 'AlertaInfo'
            }
        },
        methods: {
            adicinarAluno() {
                const s = Math.random().toString(36).substring(2)
                this.alunos.push(s)
            },
            removerAluno(index) {
                this.alunos.splice(index,1)
            },
            beforeEnter(el, done) {
                this.larguraBase = 0
                el.style.width = `${this.larguraBase}px`
            },
            enter(el, done) {
                let rodada = 1
                const temporizador = setInterval(() => {
                    const novaLargura = this.larguraBase + rodada * 10
                    el.style.width = `${novaLargura}px`
                    if (rodada > 30) {
                        clearInterval(temporizador)
                        done()
                    }
                    rodada++
                }, 20)
            },
            leave(el, done) {
                let rodada = 0
                const temporizador = setInterval(() => {
                    const novaLargura = parseInt(el.style.width.replace('px', '')) - rodada * 1
                    el.style.width = `${(novaLargura < 0 ? 0 : novaLargura)}px`
                    if (rodada > 30) {
                        clearInterval(temporizador)
                        done()
                    }
                    rodada++
                }, 20)
            },
            beforeLeave(el, done) {
                this.larguraBase = 300
                el.style.width = `${this.larguraBase}px`
            },
            afterLeave(el, done) {
                console.log("after")
            }
        }
    }
</script>

<style>

    .quadrado {
        background: green;
        width: 300px;
    }

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
        transition: opacity 2s;
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
        animation: slide-in 2s ease;
        transition: opacity 2s;
    }

    .slide-leave-active {
        animation: slide-out 2s ease;
        transition: opacity 2s;
    }

    .slide-enter, .slide-leave-to {
        opacity: 0;
    }
</style>
