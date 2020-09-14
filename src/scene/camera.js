import sceneConf from "../../confs/scene.conf"

class Camera {
  constructor() {
    this.instance = null
  }
  init() {
    //使用正交相机，因为透视相机会近大远小
    const aspect = window.innerHeight / window.innerWidth
    //renderer和可视区域的长宽比例是一样的，可以保证映射不变形
    this.instance = new THREE.OrthographicCamera(-sceneConf.frustumSize, sceneConf.frustumSize, sceneConf.frustumSize * aspect, -sceneConf.frustumSize.aspect, -100, 85)
    this.instance.position.set(-10, 10, 10)
    this.target = new THREE.Vector3(0, 0, 0)
    this.instance.lookAt(this.target)
    
  }
}

export default new Camera()