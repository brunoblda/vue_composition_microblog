<template>
    <button @click="click"> Likes </button>
    {{post.likes}}
    <hashtag-control
        v-for="hashtag in post.hashtags"
        :key="hashtag" 
        :hashtag="hashtag"
    >
        <!-- 
            @setHashtag="setHashtag" 
        -->
    </hashtag-control>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import HashtagControl from './HashtagControl.vue'
import { store } from '@/composable/store'

export default defineComponent({
  components: { HashtagControl },
    name: 'ControlsModel',
    props: {
        post:{
            type: Object,
            required: true
        }
    },
    /*emits:['setHashtag'],
    setup(props, ctx){
        console.log(props)
        let setHashtag: any = (hashtag: any) => {
            ctx.emit('setHashtag', hashtag)
        }

        return {
            setHashtag
        }

    }*/

    setup(props){
        let click = () => {
            store.incrementLike(props.post)

        }
        return {
            click
        }
    }
        
})
</script>

<style scoped>

</style>
