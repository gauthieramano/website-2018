<template>
  <div class="main">
    <div class="pointer flex-container" @click="navigationSwitch">
      <div class="icon-pointer">
        <v-icon v-if="navig" large>label</v-icon>
        <v-icon v-else large>label_outline</v-icon>
      </div>
      <div>Cette page est faite pour afficher et supprimer des messages. Vous êtes libres de faire ce que vous voulez.</div>
    </div>
    <template v-if="messages.length > 0">
      <h1>Message{{ avecS }}</h1>

      <button @click="onDelete">Supprimer le{{ avecS }} message{{ avecS }}</button>
      <ul>
        <li v-for="message in messages" class="ligne" :key="message.id">
          <div>
            <p class="light">{{ message.name }}</p>
            <p>{{ message.body }}</p>
          </div>
          <div class="se">
            <button @click="(e) => { onDeleteId(e, message.id) }">X</button>
          </div>
        </li>
      </ul>
    </template>

    <template v-else>
      <h1 class="marge">Aucun message</h1>
    </template>

    <form @submit.prevent="onPost">
      <input type="text" placeholder="nom" v-model="myName" />
      <textarea rows="5" placeholder="message..." v-model="myMessage"></textarea>
      <button type="submit">Envoyer</button>
    </form>
  </div>
</template>

<script>
import feathers from "@feathersjs/client";
import socketio from "@feathersjs/socketio-client";
import io from "socket.io-client";

// const socket = io("http://localhost:3030");
const socket = io('app.proj6ct.com');
const app = feathers();
app.configure(feathers.socketio(socket));
const messageService = app.service("inmemoryservice");

import { mapState } from "vuex";
import { mapMutations } from "vuex";

export default {
  data() {
    return {
      messages: [],
      myName: "",
      myMessage: ""
    };
  },
  asyncData() {
    return messageService.find().then(response => {
      return { messages: response.data };
    });
  },
  methods: {
    ...mapMutations(["navigationSwitch"]),
    onPost(e) {
      if (this.myName && this.myMessage) {
        messageService
          .create({
            name: this.myName,
            body: this.myMessage
          })
          .then((aaa) => {
            this.myMessage = "";
          });
      }
    },
    onDelete(e) {
      messageService.find().then(response => {
        response.data.forEach(element => {
          messageService.remove(element.id);
        });
      });
    },
    onDeleteId(e, arg) {
      console.log("onDeleteId ", arg);
      messageService.remove(arg);
    }
  },
  mounted() {
    messageService.on("created", message => {
      // console.log('ADD ', message);
      this.messages.push(message);
    }),
      messageService.on("removed", message => {
        // console.log('REMOVED ', message);
        this.messages = this.messages.filter(element => {
          return element.id !== message.id;
        });
      });
  },
  computed: {
    ...mapState(["navig"]),
    avecS() {
      return this.messages.length === 1 ? "" : "s";
    }
  }
};
</script>
