<template>
  <div>
    <div class="pointer" @click="navigationSwitch">
      <v-icon v-if="navig" large>label</v-icon>
      <v-icon v-else large>label_outline</v-icon>
    </div>
    <h1>Gauthier Amano</h1>
    <p>contact@proj9ct.com</p>
  </div>
</template>

<script>
import { mapState } from "vuex";
import { mapMutations } from "vuex";

export default {
  methods: {
    ...mapMutations(["navigationSwitch"]),
  },
  computed: {
    ...mapState(["navig"]),
  },
};
</script>
