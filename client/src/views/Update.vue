<template>
  <post-form :post="post" :submit-form="updatePosts"></post-form>
</template>

<style Lang="scss"></style>

<script>
import PostForm from "@/components/PostForm.vue";
import {useRoute, useRouter} from "vue-router";
import {onMounted, ref} from "vue";

export default {
  components: {
    PostForm
  },
  setup() {
    const API_URL = 'http://localhost:3000/posts';

    const router = useRouter();
    const route = useRoute();

    const post = ref({
      title: '',
      content: '',
      creator: ''
    });

    onMounted(()=>{
      getPosts();
    })

    async function getPosts() {
      const id = route.params.id;
      try {
        let response = await fetch(API_URL+`/${id}`);
        post.value = await response.json();
      } catch (e) {
        alert(e.message)
      }
    }

    async function updatePosts() {

      const id = route.params.id;

      try {
        await fetch(`${API_URL}/${id}`, {
          method: 'PUT',
          headers
            : {
              'Content-Type': 'application/json'
            },
          body: JSON.stringify(post.value)
        });

        await router.push({name: 'Home'})

      } catch (e) {
        alert(e.message)
      }
    }

    return {post, updatePosts}
  }
}
</script>