<template>
  <div class="container-fluid mt-4">
    <h1 class="h1">Collective Api / Cameras</h1>
    <p>Content from the API call will go here</p>
     <b-alert :show="loading" variant="info">Loading...</b-alert>
    <b-row>
      <b-col>
        <table class="table table-striped">
          <thead>
            <tr>
              <th>ID</th>
              <th>Title</th>
              <th>Price</th>
              <th>&nbsp;</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="post in posts" :key="post.id">
              <td>{{ post.id }}</td>
              <td>{{ post.name }}</td>
              <td>${{ post.price }}</td>
              <td class="text-right">
                <a href="#" @click.prevent="populatePostToEdit(post)">Edit</a> -
                <a href="#" @click.prevent="deletePost(post.id)">Delete</a>
              </td>
            </tr>
          </tbody>
        </table>
         <span class="container img img_wrap" v-for="post in posts" :key="post.id">
          <img :src=post.picture :alt=post.name :title=post.name>
         
        </span>
      </b-col>
      
      <br />
          <b-col lg="3" class="form-title">Add/Edit Camera Form
        <b-card :title="(model.id ? 'Edit Post ID#' + model.id : 'New Post')">
          <form @submit.prevent="savePost">
            <b-form-group label="Camera Name">
              <b-form-input type="text" v-model="model.name"></b-form-input>
            </b-form-group>
            <b-form-group label="Price">
              <b-form-textarea rows="1" v-model="model.price"></b-form-textarea>
            </b-form-group>
             <b-form-group label="Image Url">
              <b-form-textarea rows="1" v-model="model.picture"></b-form-textarea>
            </b-form-group>
            <div>
              <b-btn type="submit" variant="success">Submit Camera</b-btn>
            </div>
          </form>
        </b-card>
      </b-col>
    </b-row>
  </div>
  </div>
</template>


<script>
import api from '@/api'
export default {
  data () {
    return {
      loading: false,
      posts: [],
      model: {}
    }
  },
  async created () {
    this.refreshPosts()
  },
  methods: {
    async refreshPosts () {
      this.loading = true
      this.posts = await api.getPosts()
      this.loading = false
    },
    async populatePostToEdit (post) {
      this.model = Object.assign({}, post)
    },
    async savePost () {
      if (this.model.id) {
        await api.updatePost(this.model.id, this.model)
      } else {
        await api.createPost(this.model)
      }
      this.model = {} // reset form
      await this.refreshPosts()
    },
    async deletePost (id) {
      if (confirm('Are you sure you want to delete this post?')) {
        // if we are editing a post we deleted, remove it from the form
        if (this.model.id === id) {
          this.model = {}
        }
        await api.deletePost(id)
        await this.refreshPosts()
      }
    }
  }
}
</script>

<style>
.img {
  align-items: flex-start;

}

img {
  height: 15%;
  width: 20%;
  border: 1px solid black;
  background-color: white;
  margin: 1%;
  padding: 2%;
}

form {
  font-size: 22px;
  text-align: left;
  color: #121c2e;
  font-weight: bold;
}

.form-title {
  font-size: 30px;
  font-weight: bold;
}

</style>

