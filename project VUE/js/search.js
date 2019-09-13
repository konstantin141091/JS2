Vue.component('search', {
    data() {
        return {
            userSearch: '',
            productsAPI: this.$root.$refs.error,//вот здесь почему то undefined не знаю почему
            /**
             * Создали ссылку на API нашей корзины. Т.к. все компоненты у нас регистрируются в корневом экземпляре Vue,
             * то мы легко можем получить доступ к ним используя свойство $root.
             * $parent можно использовать для доступа к родительскому экземпляру из дочернего.
             */
            cartAPI: this.$root.$refs.cart,
        };
    },
    template: `
                <form action="#" class="search-form" @submit.prevent="$root.$refs.products.filter(userSearch)">
                    <input type="text" class="search-field" v-model="userSearch">
                    <button class="btn-search" type="submit">
                        <i class="fas fa-search"></i>
                    </button>
                </form>
    `
});