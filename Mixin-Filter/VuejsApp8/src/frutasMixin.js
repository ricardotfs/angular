export default {
    data() {
        return {
            fruta: '',
            frutas: ['banana', 'abacate']
        }
    },
    methods: {
        add() {
            this.frutas.push(this.fruta)
            this.fruta = ''
        }
    }
}