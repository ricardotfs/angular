<template>
    <div id="app">
        <Home msg="Hello world!" />
        <p>{{cpf | inverter}}</p>
        <p>{{cpf | formatCpf}}</p>
        <input type="text" :value="cpf | inverter" />
        <input type="text" :value="espaco | removerEspaco" />
        <p>{{nome | contarTexto}}</p>

        <Frutas />
        <div class="frutas">
            <ul>
                <li v-for="f in frutas" :key="f">{{f}}</li>
            </ul>
            <input type="text" v-model="fruta" @keydown.enter="add" />
        </div>

        <input type="text" :value="removerEspaco" />
        <p>{{contarPalavra}}</p>


    </div>
</template>

<script>
    import Home from './components/Home.vue';
    import Frutas from './components/Frutas.vue';
    import FrutasMixin from './frutasMixin'
    import AlterarStringMixin from './alterarStringMixin'
    export default {
        name: 'app',
        mixins: [FrutasMixin,AlterarStringMixin],
        components: { Home, Frutas },
        filters: {
            removerEspaco(valor) {
                return valor.replace(/\s/g, ',')
            },
            formatCpf(valor) {
                var arry = valor.split('')
                arry.splice(3, 0, '.')
                arry.splice(7, 0, '.')
                arry.splice(11, 0, '-')
                return arry.join('')
            }
        },
        data() {
            return {
                cpf: '29796655894',
                nome: 'teste teste1 teste2 teste3',
                espaco: 'teste teste1 teste2 teste3'
            }
        },
    };
</script>

<style>
</style>

