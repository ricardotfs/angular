import Vue from 'vue';
import App from './App.vue';

Vue.config.productionTip = true;

Vue.filter('inverter', function(valor) {
        var arry = valor.split('').reverse()
        arry.splice(3, 0, '.')
        arry.splice(7, 0, '.')
        arry.splice(11, 0, '-')
        return arry.join('')
    }
)
Vue.filter('contarTexto', function (valor) {
    var array = valor.split(' ');
    var t = ''
    var  c = 0
    var texto = ''
    for (var i = 0; i < array.length; i++) {
        t = array[i]
        c = array[i].length

        texto = `${texto} ${t} - ${c}` 
    }
    return texto 
})
new Vue({
    render: h => h(App)
}).$mount('#app');
