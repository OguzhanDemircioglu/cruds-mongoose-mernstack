<template>
  <div class="container my-4">
    <form @submit.prevent="submitForm">
      <div class="field">
        <label class="label">Title</label>
        <div class="control">
          <input v-model="post.title" class="input" type="text" placeholder="Text input">
        </div>
      </div>

      <div class="field">
        <label class="label">Content</label>
        <div class="control">
          <input v-model="post.content" class="input" type="text" placeholder="Text input">
        </div>
      </div>

      <div class="field">
        <label class="label">Creator</label>
        <div class="control">
          <input v-model="post.creator" class="input" type="text" placeholder="Text input">
        </div>
      </div>

      <div class="field is-grouped">
        <div class="control">
          <button class="button is-link">Submit</button>
        </div>
        <div class="control">
          <button @click="cancel" class="button is-link is-light">Cancel</button>
        </div>
      </div>
    </form>
  </div>
</template>

<script>
export default {
  props: ['post', 'submitForm'],
  methods: {
    cancel() {
      this.$router.push({ name: 'Home' });
    }
  }
}
</script>

<style lang="scss" scoped>

</style>