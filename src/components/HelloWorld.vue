<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { useScene } from '../hooks/useScene'
import { BoxGeometry, MeshBasicMaterial, Mesh, AxesHelper } from 'three'

defineProps<{}>()
onMounted(() => {
  const [context, render] = useScene('body')
  const axes = new AxesHelper(20)
  context.scene.add(axes)
  const cubeGeometry = new BoxGeometry(1, 1, 1)
  const cubeMaterial = new MeshBasicMaterial({
    color: 0xff0000
    // wireframe: true
  })
  const cube = new Mesh(cubeGeometry, cubeMaterial)
  //cube.rotation.x=-0.5*Math.PI
  cube.position.x = 0
  cube.position.y = 0
  cube.position.z = 0
  context.scene.add(cube)
  context.camera.position.z = 5
  context.camera.position.y = 10
  context.camera.lookAt(cube.position)
  console.log(context.scene)
  render()
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
