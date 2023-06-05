import { reactive, ref } from 'vue'
import {
  Scene,
  WebGLRenderer,
  PerspectiveCamera,
  Color,
  Renderer,
  Camera
} from 'three'

interface Config {
  fov?: number
  width?: number
  height?: number
}

interface Context {
  renderer: Renderer
  scene: Scene
  camera: Camera
}

export const useScene = (selector?: string, config?: Config) => {
  const el = selector ? document.querySelector(selector) : document.body
  if (!el) return []
  const width = config?.width || el.clientWidth
  const height = config?.height || el.clientHeight
  const context = {
    renderer: new WebGLRenderer({ antialias: true }),
    scene: new Scene(),
    camera: new PerspectiveCamera(
      config?.fov || 75,
      el.clientWidth / el.clientHeight,
      0.1,
      1000
    )
  }
  context.renderer.setClearColor(new Color(1, 1, 1))
  context.renderer.setPixelRatio(window.devicePixelRatio)
  context.renderer.setSize(width, height)
  el.appendChild(context.renderer.domElement)
  const render = () => {
    context.renderer.render(context.scene, context.camera)
    requestAnimationFrame(render)
  }
  window.addEventListener('resize', () => {
    context.camera.aspect = el.clientWidth / el.clientHeight
    context.camera.updateProjectionMatrix()
    context.renderer.setSize(el.clientWidth, el.clientHeight)
  })
  // render()
  return [context, render]
}
