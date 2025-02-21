
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import babel from 'vite-plugin-babel'

const ReactCompilerConfig = {}

export default defineConfig({
  build: {},
  plugins: [
    react(),
    babel({
        babelConfig: {
          plugins: [['babel-plugin-react-compiler', ReactCompilerConfig]],
          presets: ['@babel/preset-typescript'],
        },
        filter: /\.[jt]sx?$/,
      }),
  ],
})
