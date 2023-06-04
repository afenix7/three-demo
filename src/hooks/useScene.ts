import { Height } from './../../node_modules/csstype/index.d'
import { reactive, watch } from 'vue'
import { Scene, WebGLRenderer, PerspectiveCamera, Color } from 'three'

interface Config {
  fov?: number
  width?: number
  height?: number
}

export const useScene = (selector?: string, config?: Config) => {
  const el = document.querySelector(selector!) || document.body
  const width = config!.width || el.clientWidth || window.innerWidth
  const height = config!.height || el.clientHeight || window.innerHeight
  const scene = reactive(new Scene())
  const renderer = reactive(new WebGLRenderer({ antialias: true }))
  const camera = reactive(new PerspectiveCamera(config!.fov || 75))
  renderer.setClearColor(new Color(0, 0, 255))
  renderer.setSize(width, height)
  el.appendChild(renderer.domElement)
  return [scene, renderer, camera]
}
