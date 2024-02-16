<template>
  <div class="unit">
    <a :href="url" target="_blank" :title="title">
      <img class="logo" :title="title" :src="logo" />
      <p class="title">{{ title }}</p>
    </a>
  </div>
</template>

<script setup>
import { toRefs, defineProps } from 'vue';
const props = defineProps({
  unit: Object,
})
const { logo, url, title } = toRefs(props.unit)
</script>

<style scoped>
.unit {
  margin-bottom: 50px;
  margin-top: 20px;
}

.unit:hover {
  background: rgba(20, 20, 20, .3);
}

.logo {
  max-height: 80px;
  max-width: 120px;
}

a {
  color: #fff;
  text-decoration: none;
}

.title {
  margin-top: 0.2em;
  font-weight: 600;
  font-size: 1.2em;
}
</style>