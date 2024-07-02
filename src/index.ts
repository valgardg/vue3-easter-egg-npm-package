// src/index.ts
import { App } from 'vue';
import EasterEgg from './EasterEgg.vue';

export default {
  install: (app: App): void => {
    app.component('EasterEgg', EasterEgg);
  }
};

export { EasterEgg };
