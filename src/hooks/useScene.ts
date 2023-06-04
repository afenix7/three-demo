import { Height } from './../../node_modules/csstype/index.d'
import { reactive, watch } from 'vue'
import { Scene, WebGLRenderer, PerspectiveCamera } from 'three'

export const useScene = (config) => {
  const scene = reactive(new Scene())
  const renderer = reactive(new WebGLRenderer({ antialias: true }))
  const camera = reactive(
    new PerspectiveCamera(
      config.fov || 75,
      config.width || window.innerWidth,
      config.height || window.innerHeight
    )
  )
}
