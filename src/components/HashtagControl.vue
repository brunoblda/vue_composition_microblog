<template>
<div 
class="hashtag"
@click="setHashtag"
>
    #{{hashtag}}
</div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import {store} from '@/composable/store'

export default defineComponent({
    name: 'HashtagControl',
    props: {
        hashtag: {
            type: String,
            required: true
        }
    },
    emits:['setHashtag'],
    setup(props, ctx){
        let setHashtag: any = () => {
            store.setHashtag(props.hashtag)
            //ctx.emit('setHashtag', props.hashtag)
        }

        return {
            setHashtag
        }
    }
})
</script>

<style scoped>
.hashtag {
    text-decoration: underline;
}
 .hashtag:hover {
    color: cornflowerblue;
}
</style>