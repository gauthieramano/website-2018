<template>
  <div class="main">
    <template v-if="messages.length > 0">
      <h1>Message{{ avecS }}</h1>

      <button v-on:click="onDelete">Supprimer the{{ avecS }} message{{ avecS }}</button>
      <ul>
        <li v-for="message in messages" class="ligne">
          <div>
            <p class="light">{{ message.name }}</p>
            <p>{{ message.body }}</p>
          </div>
          <div class="se">
            <button v-on:click="(e) => { onDeleteId(e, message._id) }">X</button>
          </div>
        </li>
      </ul>
    </template>

    <template v-else>
      <h1 class="marge">Aucun message</h1>
    </template>

    <form @submit.prevent="onPost">
      <input type="text" placeholder="nom" v-model="myName">
      <textarea rows="5" placeholder="message..." v-model="myMessage"></textarea>
      <button type="submit">Envoyer</button>
    </form>
  </div>
</template>

<script>

import feathers from '@feathersjs/client'
import socketio from '@feathersjs/socketio-client'
import io from 'socket.io-client'

//const socket = io('http://127.0.0.1:3030');
const socket = io('app.proj6ct.com');
const app = feathers();
app.configure(feathers.socketio(socket));
const messageService = app.service('doubleendservicea');

export default {
  data() {
    return {
      messages: [],
      myName: '',
      myMessage: ''
    }
  },
  asyncData() {
    return messageService.find()
      .then((response) => {
        console.log('ASYNDDATA ', response.data);
        return { messages: response.data }
      })
  },
  methods: {
    onPost(e) {
      if (this.myName && this.myMessage) { 
        messageService.create({
          name: this.myName,
          body: this.myMessage
        }).then(() => {
          this.myMessage = '';
        })
      }
    },
    onDelete(e) {
      messageService.find()
        .then((response) => {
          response.data.forEach((element) => {
            console.log('EACH ', element._id);
            messageService.remove(element._id);
          })
        })
    },
    onDeleteId(e, arg) {
      console.log('onDeleteId ', arg);
      messageService.remove(arg);
    }
  },
  mounted() {
    messageService.on('created', (message) => {
      console.log('ADD ', message);
      this.messages.push(message);
    }),
    messageService.on('removed', (message) => {
      console.log('REMOVED ', message);
      this.messages = this.messages.filter((element) => {
        return (element._id !== message._id);
      })
    })
  },
  computed: {
    avecS() {
      return (this.messages.length === 1) ? '' : 's';
    }
  }
}

</script>

<style>
  body {
    margin: 0;
    padding: 0;
    font-family: sans-serif;
    font-size: 16px;
  }
  @media all and (max-width: 599px) {
    div.main {
      margin: 20px;
    }
  }
  @media all and (min-width: 600px) {
    div.main {
      margin: 40px;
    }
  }
  h1 {
    margin-bottom: 0px;
  }
  h1.marge {
    margin-bottom: 20px;
  }
  ul {
    margin: 0;
    padding: 0;
  }
  li {
    position: relative;
  }
  li div {
    display: inline-block;
  }
  li div:not(.se) {
    padding-right: 40px;
  }
  li div.se {
    position: absolute;
    right: 0px;
    bottom: 0px;
  }
  li div button {
    margin: 0 0 5px;
    padding: 5px 10px;
    border-radius: 7px;
    font-size: 1.2em;
  }
  p {
    margin: 6px 0;
    word-wrap: break-word;
    white-space: pre-wrap;
  }
  p.light {
    color: #F99;
  }
  form input {
    display: block;
    width: calc(100%-20px);
    padding: 10px;
    background-color: #EEE;
    border: 0px;
    border-bottom: 1px solid #009;
    margin-bottom: 20px;
    font-size: 1.2em;
  }
  form textarea {
    display: block;
    width: calc(100%-20px);
    padding: 10px;
    background-color: #EEE;
    border: 0px;
    border-bottom: 1px solid #009;
    font-size: 1.2em;
    resize: none;
  }
  form button {
    padding: 20px;
    background-color: #009;
    font-size: 1.2em;
  }
  form button:hover {
      background-color: #03F;
  }
  button {
    margin: 20px 0;
    padding: 10px 20px;
    color: #FFF;
    background-color: #900;
    border-radius: 10px;
    border-width: 0;
    font-size: 1em;
  }

  button:hover {
      background-color: #F30;
  }

  .ligne {
    list-style: none;
    margin-bottom: 20px;
    border-bottom: 1px solid #CCC;
  }
</style>
