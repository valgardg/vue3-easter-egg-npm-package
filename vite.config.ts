import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { resolve } from "path"

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  build: {
    lib: {
      // src/index.ts is where we have exported the component
      entry: resolve(__dirname, "src/index.ts"),
      name: "EeastereggComponent",
      // the name of the output files when the build is run
      fileName: "eeasteregg-component",
    },
    rollupOptions: {
      // make sure to externalize deps that shoulnd't be bundled
      // into your library
      external: ["vue"],
      output: {
        // provide global variables to use in the UMD build
        globals: {
          vue: "Vue",
        }
      }
    }
  }
})
