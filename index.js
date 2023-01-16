import * as THREE from "three";
import * as THREEx from "./node_modules/@ar-js-org/ar.js/three.js/build/ar-threex-location-only.js";
let beacons = []
async function addFeatures(scene) {
    const resp = await fetch("poifake.json?t=" + Date.now());
    const data = await resp.json();
    for (let poi of data) {
        console.log(poi);
        const geom = new THREE.BoxGeometry(1, 1, 1);
        const mtl = new THREE.MeshBasicMaterial({
            color: 0xff0000,
            wireframe: true,
            wireframeLinewidth: 2
        });
        const box = new THREE.Mesh(geom, mtl);
        scene.add(box);
        box.position.set(poi.x, 0, poi.z);
    }
}
function getUrlParams () {
  let url = window.location.href
  if (url.split('?')[1] && url.split('?')[1].split('=')[1]) {
    let item = url.split('?')[1].split('=')[1]
    item.split(';').forEach(it => {
      let v =it.split(',')
      beacons.push({
        major: v[0],
        minor: v[1],
        rssi: v[2]
      })
    })
  }
  console.log('beacons', beacons)
}

function main() {
    getUrlParams ();
    document.getElementById("req").remove();
    const canvas = document.getElementById("canvas1");
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(68, 1.33, 0.1, 10000);
    const renderer = new THREE.WebGLRenderer({canvas: canvas});
    const arjs = new THREEx.LocationBased(scene, camera);
    const webcam = new THREEx.WebcamRenderer(renderer);
    const deviceOrientationControls = new THREEx.DeviceOrientationControls(camera);

    addFeatures(scene);
    camera.position.set(-2.205, 0, 4.575);

    requestAnimationFrame(render);
    function render() {
        if (canvas.width != canvas.clientWidth || canvas.height != canvas.clientHeight) {
            renderer.setSize(canvas.clientWidth, canvas.clientHeight, false);
            const aspect = canvas.clientWidth / canvas.clientHeight;
            camera.aspect = aspect;
            const horizontalFov = 41 * Math.PI / 180;
            const verticalFov = Math.atan(Math.tan(horizontalFov / 2) / camera.aspect) * 2;
            camera.fov = verticalFov * 180 / Math.PI;
            camera.updateProjectionMatrix();
            console.log('fov', camera.fov);
        }
        deviceOrientationControls.update();
        webcam.update();
        renderer.render(scene, camera);
        requestAnimationFrame(render);
    }
    
    const ws = new WebSocket("ws://172.25.3.251:8765/sub");
    ws.addEventListener("message", (e) => {
        const [x, y, z] = JSON.parse(e.data);
        camera.position.set(x, y, z);
    });
}

document.addEventListener("DOMContentLoaded", () => {
    const btn = document.getElementById("req");
    btn.onclick = () => {
        if (typeof(DeviceMotionEvent) !== "undefined" && typeof(DeviceMotionEvent.requestPermission) === "function") {
            DeviceMotionEvent.requestPermission()
            .then((resp) => {
                if (resp === "granted") {
                    main();
                } else {
                    alert(resp);
                }
            });
        } else {
            main();
        }
    };
});