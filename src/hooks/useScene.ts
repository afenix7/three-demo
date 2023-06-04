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

export const useScene = (selector?: string, config?: Config) => {
  const el = selector ? document.querySelector(selector) : document.body
  if (!el) return [null, null, null]
  const width = config?.width || el.clientWidth
  const height = config?.height || el.clientHeight
  const scene = reactive(new Scene())
  const renderer = reactive(new WebGLRenderer({ antialias: true }))
  const camera = reactive(
    new PerspectiveCamera(
      config?.fov || 75,
      el.clientWidth / el.clientHeight,
      1,
      1000
    )
  )
  renderer.setClearColor(new Color(1, 1, 1))
  renderer.setPixelRatio(window.devicePixelRatio)
  renderer.setSize(width, height)
  el.appendChild(renderer.domElement)
  const render = () => {
    renderer.render(scene, camera)
    requestAnimationFrame(render)
  }
  window.addEventListener('resize', () => {
    camera.aspect = el.clientWidth / el.clientHeight
    camera.updateProjectionMatrix()
    renderer.setSize(el.clientWidth, el.clientHeight)
  })
  render()
  return [scene, renderer, camera]
}
