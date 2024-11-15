import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';

export default defineConfig({
  plugins: [vue()],
  json: {
    // 配置 JSON 不被编译到 JS 文件中
    stringify: false,
    namedExports: false
  },
});
