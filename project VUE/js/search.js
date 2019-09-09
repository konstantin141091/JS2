Vue.component('search', {
    data() {
        return {
            userSearch: '',
            productsAPI: this.$root.$refs.error//вот здесь почему то undefined не знаю почему
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