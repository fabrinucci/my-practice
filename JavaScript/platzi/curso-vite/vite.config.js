import { defineConfig, loadEnv } from 'vite'
import { resolve, dirname, format } from 'path'
import { fileURLToPath } from 'url'

const _dirname = typeof __dirname !== 'undefined'
  ? __dirname
  : dirname(fileURLToPath(import.meta.url))
/** @type {import('vite').UserConfig} */
export default defineConfig(({command, mode})=>{
  const env = loadEnv(mode, process.cwd());

  const port = env.VITE_PORT;

  console.log(command, mode)

  if (mode === "development") {
    console.log("modo desarrollo")
    return {
      server:{
        port
      }
    }
  } else {
    console.log("modo produccion")
    return {
      build:{
        lib: {
        entry: resolve(_dirname, 'lib', 'main.js'),
        name: 'demo',
        fileName: (format)=>`demo.${format}.js`
        }
      }
    }
  }
})

