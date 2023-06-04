<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { useScene } from '../hooks/useScene'
import { BoxGeometry, MeshBasicMaterial, Mesh, AxesHelper } from 'three'

defineProps<{}>()
onMounted(() => {
  const [scene, renderer, camera] = useScene(
    'body'
  )

})
</script>

<template>
  <div id="root"></div>
</template>

<style scoped>
#root {
  width: 100%;
  height: 100%;
}
</style>
