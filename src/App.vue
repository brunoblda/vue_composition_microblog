<template>
  <input 
    :value="currentTag" 
    @input="setHashtag2"
  />
  <CardModel 
  v-for="post in filteredPosts"
  :key="post.id"
  >
  {{post.title}}

  <template v-slot:title>
        {{post.title }}
      </template>

      <template v-slot:content>
        {{post.content}}
      </template>

      <template v-slot:description>
      <ControlsModel 
        :post="post"  
      />
        <!-- @setHashtag="setHashtag" -->
      </template>


  </CardModel>

</template>

<script lang="ts">
import { computed } from 'vue'
import { defineComponent } from 'vue';
import {store} from './composable/store'
import CardModel from './components/CardModel.vue'
import ControlsModel from './components/ControlsModel.vue'

export default defineComponent({
  name: 'App',
  components:{
    CardModel,
    ControlsModel
  },
  setup(){
    let setHashtag2 = ($evt: any) => {
      store.setHashtag($evt.target.value)
    }
    //let currentTag: any = ref()
    /*let setHashtag: any = (hashtag: any) => {
      currentTag.value = hashtag
    }*/
    /*let filteredPosts = computed(()=> {
      if (!store.state.currentTag){
        return store.state.posts
      }
      return store.state.posts.filter(post => 
        post.hashtags.includes(store.state.currentTag)
        
      )
    })*/
    return {
      setHashtag2,
      filteredPosts: computed (() => store.filteredPosts),
      currentTag: computed(() => store.state.currentTag)
      //setHashtag
    }
  }
});
</script>

<style>
</style>
