import Vue from 'vue';
import App from './App.vue';

Vue.config.productionTip = true;

Vue.directive('focus', {
    // Quando o elemento vinculado é inserido no DOM...
    inserted: function (el) {
        // Coloque o foco no elemento
        el.focus()
    }
})
Vue.directive('quando', {
    bind(el, binding) {

        if (binding.arg === "click")
            el.addEventListener("click", binding.value);
    }
})
Vue.directive('destaque', {
    // Quando o elemento vinculado é inserido no DOM...
    bind: function (el, binding, vnode) {
        // Coloque o foco no elemento
        const cor = binding.value.cor;
        const cor1 = binding.value.cor1;
        var cor2 = cor;

        var atrazo = 0;
        if (binding.modifiers['atrazo']) {
            atrazo = 3000;
        }

        if (binding.modifiers['alternar']) {
            setInterval(function () {
                cor2 = cor2 == cor ? cor1 : cor

                el.style.color = cor2;
            }, 1000)
        }

        setTimeout(function () {
            if (binding.arg === 'fundo') {
                el.style.backgroundColor = binding.value.cor1;
            } else {
                el.style.color = binding.value.cor1;
            }
        }, atrazo)
    }
})
new Vue({
    render: h => h(App)
}).$mount('#app');
