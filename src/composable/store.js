import { reactive } from 'vue';
class Store {
    state;
    constructor() {
        this.state = reactive({
            posts: [
                {
                    id: 1,
                    title: 'Title',
                    content: 'Learning Vue.js',
                    likes: 10,
                    hashtags: [
                        'vue',
                        'javascriopt',
                        'composition api'
                    ]
                }
            ]
        });
    }
}
export const store = new Store();
//# sourceMappingURL=store.js.map