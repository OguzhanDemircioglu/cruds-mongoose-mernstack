<template>
  <PostForm :post="post" :submitForm="createPosts" class="my-4" />
</template>

<script>
import PostForm from "@/components/PostForm.vue";
import {reactive} from "vue";
import {useRouter} from "vue-router";

export default {
  components: {
    PostForm
  },
  setup() {
    const API_URL = 'http://localhost:3000/posts';
    const router = useRouter();
    const post = reactive({
      title: '',
      content: '',
      creator: ''
    });

    async function createPosts() {
      try {
        await fetch(API_URL, {
          method: 'POST',
          headers: {
            'content-type': 'application/json'
          },
          body: JSON.stringify(post)
        });

        await router.push({name: 'Home'});

      } catch (e) {
        alert(e.message)
      }
    }
    return{post,createPosts}
  }
}
</script>

<style Lang="scss"></style>