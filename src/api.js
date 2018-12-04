import Vue from 'vue'
import axios from 'axios'

const client = axios.create({
  baseURL: 'http://localhost:8082/',
  json: true
})

export default {
  async execute(method, resource, data) {
    return client({
      method,
      url: resource,
      data,
      headers: {
      }
    }).then(req => {
      return req.data
    })
  },
  getPosts() {
    return this.execute('get', '/api/cameras')
  },
  getPost(id) {
      return this.execute('get', `/api/cameras/${id}`)
  },
  createPost(data) {
      return this.execute('post', '/api/cameras', data)
  },
  updatePost(id, data) {
      return this.execute('put', `/api/cameras/${id}`, data)
  },
  deletePost(id) {
      return this.execute('delete', `/api/cameras/${id}`)
  }
}