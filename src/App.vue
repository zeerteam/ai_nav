<script setup>
import { ref, toRef } from 'vue';
import Unit from './components/Unit.vue'
// import info from './assets/datas.json'
const datas = ref({})
fetch("/public/datas.json")
  .then(res => res.json())
  .then(data => {
    datas.value = data;
  })
  .catch(e => console.log(e));
// datas.value = info;
</script>

<template>
  <div class="nav_title">
    <div>
      国内
    </div>
    <div>
      国外
    </div>
    <div>
      工具
    </div>
    <div>
      其它
    </div>
  </div>
  <div class="nav">
    <div v-for="i in datas" :key="i">
      <div v-for="item in i" :key="item">
        <Unit :unit="item" />
      </div>
    </div>
  </div>
</template>

<style scoped>
.nav_title {
  line-height: 3em;
  font-size: 1.4em;
  font-weight: 600;
  background: #7535bb;
  position: sticky;
  z-index: 999;
  top: 0;
}

.nav>div,
.nav_title>div {
  display: inline-block;
  width: 25%;
  overflow: hidden;
  vertical-align: top;
  text-align: center;
}
</style>
