<!-- src/EasterEgg.vue -->
<template>
    <div class="easter-egg" ref="easterEgg">
      <img :src="imageSrc" alt="Head" class="head-image">
    </div>
  </template>
  
  <script setup lang="ts">
  import { ref } from 'vue';
  import { defineProps, defineExpose } from 'vue';
  
  const props = defineProps<{ imageSrc: string }>();
  const easterEgg = ref<HTMLDivElement | null>(null);
  
  const triggerEasterEgg = () => {
    if (easterEgg.value) {
      easterEgg.value.classList.add('peek');
      setTimeout(() => {
        if (easterEgg.value) {
          easterEgg.value.classList.remove('peek');
        }
      }, 2000); // Adjust the timing as needed
    }
  };
  
  defineExpose({
    triggerEasterEgg
  });
  </script>
  
  <style scoped>
  .easter-egg {
    position: fixed;
    left: -100px;
    transform: translate(-50%, -50%);
    transition: transform 0.5s ease-in-out;
  }
  
  .easter-egg.peek {
    transform: rotate(90deg);
  }
  
  .head-image {
    width: 250px;
    height: auto;
  }
  </style>
  