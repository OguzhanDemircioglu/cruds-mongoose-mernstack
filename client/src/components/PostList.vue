<template>
  <div class="container">
    <div v-for="post in postes" :key="post.id" class="card my-5">
      <div class="card-content">
        <div class="media">
          <div class="media-content">
            <p class="title is-4">{{post.title}}</p>
          </div>
        </div>
        <div class="content">
          {{post.content}}
          <br/>
          <strong>Creator: {{post.creator}}</strong>
        </div>
      </div>
      <div class="card">
        <footer class="card-footer">
          <a @click="updatePosts(post.id)" class="card-footer-item button is-success">Edit</a>
          <a @click="deletePosts(post.id)" class="card-footer-item button is-danger">Delete</a>
        </footer>
      </div>
    </div>
    <router-link to="/Create" class="button is-primary">Add Post</router-link>
  </div>
</template>

<script>
import {onMounted, ref} from "vue";
import {useRouter} from "vue-router";

export default {
  setup() {
    const postes = ref([]);
    const API_URL = 'http://localhost:3000/posts';
    const router = useRouter();

    onMounted(() =>{
      getPosts();
    })

    async function getPosts() {
      try {
        let response = await fetch(API_URL+"/all");
        postes.value = await response.json();

      } catch (e) {
        alert(e.message)
      }
    }

    async function deletePosts(id) {
      try {
        let response = await fetch(API_URL+"/"+id, {method: 'DELETE'});
        location.reload();
      } catch (e) {
        console.log(e.message)
      }
    }

    async function updatePosts(id) {
      try {
        await fetch(API_URL+"/"+id, {method: 'PUT'});

        await router.push({name: 'Edit', params: {id: id}})

      } catch (e) {
        alert(e.message)
      }
    }

    return{postes,deletePosts,updatePosts}
  }
}
</script>

<style lang="scss" scoped>

</style>