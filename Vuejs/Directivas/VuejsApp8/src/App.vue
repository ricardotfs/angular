<template>
    <div id="app">
        <h1>Diretivas</h1>
        <hr />
        <p v-text="'Teste'"></p>
        <p v-html="'Teste<br/>teste'"></p>
        <input type="text" v-focus />
        <p v-destaque.atrazo="'red'">Destaque</p>
        <p v-destaque:fundo.atrazo.alternar="{cor:'red',cor1:'#CCCCCC'}">Destaque</p>
        <button v-quando:click="acao">Mudar</button>
        <button v-quando="acao">Mudar</button>
        <p v-on:click="acao">Destaque 111</p>
    </div>
</template>

<script>
export default {
        methods: {
        acao() {
            alert('Teste')
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
	font-size: 2.5rem;
}
</style>
