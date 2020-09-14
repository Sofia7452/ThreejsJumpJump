// 贴图是一张照片，用于替代模型。纹理是重复，阵列，缩放的贴图。材质是视觉层面的表现力。
import { scene } from '../scene/index'
export default class GamePage {
  constructor(callbacks) {
    this.callbacks = callbacks
  }
  init() {
    this
    console.log('game page init ')
    // 渲染器
    // scene场景
    // camera
    var width = window.innerWidth
    var height = window.innerHeight

    var renderer = new THREE.WebGLRenderer({
      canvas: canvas
    })
    var scene = new THREE.Scene()
    this.scene = scene
    //正交相机，不需要做透视，上下左右前后
    var camera = new THREE.OrthographicCamera(-width / 2, width / 2, height / 2, -height / 2, -1000, 1000)

    renderer.setClearColor(new THREE.Color(0x000000))
    renderer.setSize(375, 667)

    var triangleShape = new THREE.Shape()
    triangleShape.moveTo(0, 100)
    triangleShape.lineTo(-100, -100)
    triangleShape.lineTo(100, -100)
    triangleShape.lineTo(0, 100)

    // geometry定义形状，类比顶点着色器，不涉及颜色
    var geometry = new THREE.ShapeGeometry(triangleShape);
    //MeshBasicMaterial不接受光照
    //material类比片元着色器
    var material = new THREE.MeshBasicMaterial({
      color: 0xff0000,
      side: THREE.DoubleSide
    });
    //geometry, material组成一个mesh
    var mesh = new THREE.Mesh(geometry, material);
    this.mesh = mesh
    mesh.position.x = 0;
    mesh.position.y = 0;
    mesh.position.z = 1;
    scene.add(mesh);

    var axesHelper = new THREE.AxesHelper(100);
    // scene.add(axesHelper);

    // 相机默认沿着z轴负方向望进去
    camera.position.x = 0
    camera.position.y = 0
    camera.position.z = 0
    camera.lookAt(new THREE.Vector3(0, 0, 1))

    var currentAngle = 0
    var lastTimeStamp = Date.now()

    var animate = function () {
      var now = Date.now()
      var duration = now - lastTimeStamp
      lastTimeStamp = now
      currentAngle = currentAngle + duration / 1000 * Math.PI
    }
    // setTimeout(() => {
    //   this.callbacks.showGameOverPage()
    // }, 2000)
    var render = function () {
      animate()
      mesh.rotation.set(0, currentAngle, 0)
      renderer.render(scene, camera)
      requestAnimationFrame(render)
    }
    render()
  }
  show() {
    this.mesh.visible = true
  }
  hide() {
    this.mesh.visible = false
  }
  restart() {
    console.log('game page restart')
  }
}