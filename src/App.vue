<script setup lang="ts">
import HelloWorld from './components/HelloWorld.vue'
import EeasterEgg from './components/Eeasteregg.vue'
import { ref } from 'vue';

const eeasterEggRef = ref<InstanceType<typeof EeasterEgg> | null>(null);

const handleTrigger = () => {
  console.log("handle trigger");
  eeasterEggRef.value.triggerEasterEgg();
}

</script>

<template>
  <EeasterEgg imageSrc="../../public/IMG_6388.jpg" ref="eeasterEggRef"/>
  <div>
    <a href="https://vitejs.dev" target="_blank">
      <img src="/vite.svg" class="logo" alt="Vite logo" />
    </a>
    <a href="https://vuejs.org/" target="_blank">
      <img src="./assets/vue.svg" class="logo vue" alt="Vue logo" />
    </a>
  </div>
  <HelloWorld msg="Vite + Vue" />
  <button @click="handleTrigger">trigger easter egg</button>
</template>

<style scoped>
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>
