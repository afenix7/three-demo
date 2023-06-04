<script setup lang="ts">
import { ref } from 'vue'
import { useScene } from '../hooks/useScene';

defineProps<{ msg: string }>()
const [scene,renderer,camera] = useScene('#root',{})
const count = ref(0)
</script>

<template>
 <div id="root"></div>
</template>

<style scoped>
.read-the-docs {
  color: #888;
}
</style>
