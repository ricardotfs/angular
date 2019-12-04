export default {
    computed: {
        removerEspaco() {
            return this.espaco.replace(/\s/g, ',')
        },
        contarPalavra() {
            var array = this.nome.split(' ');
            var otherArray = array.map(p => `${p} - ${p.length}`)
            
            return otherArray.join('')
        }
    },
}