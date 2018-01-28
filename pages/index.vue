<template>
  <div>
    <h1>Messages</h1>
    <ul>
      <li v-for="message in messages" class="ligne">
        <p>{{ message.name }}</p>
        <p>{{ message.body }}</p>
      </li>
    </ul>
    <form @submit.prevent="onPost">
      <input type="text" placeholder="name" v-model="myName">
      <textarea rows="5" placeholder="message..." v-model="myMessage"></textarea>
      <button type="submit">POST</button>
    </form>
  </div>
</template>

<script>

import feathers from '@feathersjs/client'
import socketio from '@feathersjs/socketio-client'
import io from 'socket.io-client'

const socket = io('http://localhost:3030');
const app = feathers();
app.configure(feathers.socketio(socket));
const messageService = app.service('doubleendservicea');

export default {
  data() {
    return {
      myName: '',
      myMessage: ''
    }
  },
  asyncData() {
    return messageService.find()
      .then((response) => {
        return { messages: response.data }
      })
  },
  methods: {
    onPost(e) {
      messageService.create({
        name: this.myName,
        body: this.myMessage
      }).then(() => {
        this.myMessage = ''
      })
    }
  },
  mounted() {
    messageService.on('created', (message) => {
      this.messages.push(message);
    })
  }
}

</script>

<style>
  body {
    margin: 50px;
    font-family: sans-serif;
  }

  h1 {
    margin-bottom: 20px;
  }

  ul {
    margin: 0;
    padding: 0;
  }

  form input {
    display: block;
    width: 100%;
    padding: 10px 0px;
    border: 0px;
    border-bottom: 1px solid #090;
    margin-bottom: 20px;
  }
  form textarea {
    display: block;
    width: 100%;
    padding: 10px 0px;
    border: 0px;
    border-bottom: 1px solid #090;
  }

  .ligne {
    list-style: none;
    margin-bottom: 20px;
    border-bottom: 1px solid #900;
  }
</style>
