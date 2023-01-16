/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./index.js":
/*!******************!*\
  !*** ./index.js ***!
  \******************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var three__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! three */ \"./node_modules/three/build/three.module.js\");\n/* harmony import */ var _node_modules_ar_js_org_ar_js_three_js_build_ar_threex_location_only_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@ar-js-org/ar.js/three.js/build/ar-threex-location-only.js */ \"./node_modules/@ar-js-org/ar.js/three.js/build/ar-threex-location-only.js\");\n/* harmony import */ var _node_modules_ar_js_org_ar_js_three_js_build_ar_threex_location_only_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_ar_js_org_ar_js_three_js_build_ar_threex_location_only_js__WEBPACK_IMPORTED_MODULE_0__);\n\n\n\nasync function addFeatures(scene) {\n    const resp = await fetch(\"poifake.json?t=\" + Date.now());\n    const data = await resp.json();\n    for (let poi of data) {\n        console.log(poi);\n        const geom = new three__WEBPACK_IMPORTED_MODULE_1__.BoxGeometry(1, 1, 1);\n        const mtl = new three__WEBPACK_IMPORTED_MODULE_1__.MeshBasicMaterial({\n            color: 0xff0000,\n            wireframe: true,\n            wireframeLinewidth: 2\n        });\n        const box = new three__WEBPACK_IMPORTED_MODULE_1__.Mesh(geom, mtl);\n        scene.add(box);\n        box.position.set(poi.x, 0, poi.z);\n    }\n}\n\nfunction main() {\n    document.getElementById(\"req\").remove();\n    const canvas = document.getElementById(\"canvas1\");\n    const scene = new three__WEBPACK_IMPORTED_MODULE_1__.Scene();\n    const camera = new three__WEBPACK_IMPORTED_MODULE_1__.PerspectiveCamera(68, 1.33, 0.1, 10000);\n    const renderer = new three__WEBPACK_IMPORTED_MODULE_1__.WebGLRenderer({canvas: canvas});\n    const arjs = new _node_modules_ar_js_org_ar_js_three_js_build_ar_threex_location_only_js__WEBPACK_IMPORTED_MODULE_0__.LocationBased(scene, camera);\n    const webcam = new _node_modules_ar_js_org_ar_js_three_js_build_ar_threex_location_only_js__WEBPACK_IMPORTED_MODULE_0__.WebcamRenderer(renderer);\n    const deviceOrientationControls = new _node_modules_ar_js_org_ar_js_three_js_build_ar_threex_location_only_js__WEBPACK_IMPORTED_MODULE_0__.DeviceOrientationControls(camera);\n\n    addFeatures(scene);\n    camera.position.set(-2.205, 0, 4.575);\n\n    requestAnimationFrame(render);\n    function render() {\n        if (canvas.width != canvas.clientWidth || canvas.height != canvas.clientHeight) {\n            renderer.setSize(canvas.clientWidth, canvas.clientHeight, false);\n            const aspect = canvas.clientWidth / canvas.clientHeight;\n            camera.aspect = aspect;\n            const horizontalFov = 41 * Math.PI / 180;\n            const verticalFov = Math.atan(Math.tan(horizontalFov / 2) / camera.aspect) * 2;\n            camera.fov = verticalFov * 180 / Math.PI;\n            camera.updateProjectionMatrix();\n            console.log(camera.fov);\n        }\n        deviceOrientationControls.update();\n        webcam.update();\n        renderer.render(scene, camera);\n        requestAnimationFrame(render);\n    }\n    \n    const ws = new WebSocket(\"ws://172.25.3.251:8765/sub\");\n    ws.addEventListener(\"message\", (e) => {\n        const [x, y, z] = JSON.parse(e.data);\n        camera.position.set(x, y, z);\n    });\n}\n\ndocument.addEventListener(\"DOMContentLoaded\", () => {\n    const btn = document.getElementById(\"req\");\n    btn.onclick = () => {\n        if (typeof(DeviceMotionEvent) !== \"undefined\" && typeof(DeviceMotionEvent.requestPermission) === \"function\") {\n            DeviceMotionEvent.requestPermission()\n            .then((resp) => {\n                if (resp === \"granted\") {\n                    main();\n                } else {\n                    alert(resp);\n                }\n            });\n        } else {\n            main();\n        }\n    };\n});\n\n//# sourceURL=webpack:///./index.js?");

/***/ }),

/***/ "./node_modules/@ar-js-org/ar.js/three.js/build/ar-threex-location-only.js":
/*!*********************************************************************************!*\
  !*** ./node_modules/@ar-js-org/ar.js/three.js/build/ar-threex-location-only.js ***!
  \*********************************************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

eval("!function(t,e){ true?module.exports=e(__webpack_require__(/*! three */ \"./node_modules/three/build/three.cjs\")):0}(this,(t=>(()=>{\"use strict\";var e={381:e=>{e.exports=t}},i={};function o(t){var n=i[t];if(void 0!==n)return n.exports;var s=i[t]={exports:{}};return e[t](s,s.exports,o),s.exports}o.d=(t,e)=>{for(var i in e)o.o(e,i)&&!o.o(t,i)&&Object.defineProperty(t,i,{enumerable:!0,get:e[i]})},o.o=(t,e)=>Object.prototype.hasOwnProperty.call(t,e),o.r=t=>{\"undefined\"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:\"Module\"}),Object.defineProperty(t,\"__esModule\",{value:!0})};var n={};return(()=>{o.r(n),o.d(n,{DeviceOrientationControls:()=>l,LocationBased:()=>i,WebcamRenderer:()=>s});class t{constructor(){this.EARTH=40075016.68,this.HALF_EARTH=20037508.34}project(t,e){return[this.lonToSphMerc(t),this.latToSphMerc(e)]}unproject(t){return[this.sphMercToLon(t[0]),this.sphMercToLat(t[1])]}lonToSphMerc(t){return t/180*this.HALF_EARTH}latToSphMerc(t){return Math.log(Math.tan((90+t)*Math.PI/360))/(Math.PI/180)*this.HALF_EARTH/180}sphMercToLon(t){return t/this.HALF_EARTH*180}sphMercToLat(t){var e=t/this.HALF_EARTH*180;return 180/Math.PI*(2*Math.atan(Math.exp(e*Math.PI/180))-Math.PI/2)}getID(){return\"epsg:3857\"}}var e=o(381);class i{constructor(e,i,o={}){this._scene=e,this._camera=i,this._proj=new t,this._eventHandlers={},this._lastCoords=null,this._gpsMinDistance=0,this._gpsMinAccuracy=100,this._maximumAge=0,this._watchPositionId=null,this.setGpsOptions(o)}setProjection(t){this._proj=t}setGpsOptions(t={}){void 0!==t.gpsMinDistance&&(this._gpsMinDistance=t.gpsMinDistance),void 0!==t.gpsMinAccuracy&&(this._gpsMinAccuracy=t.gpsMinAccuracy),void 0!==t.maximumAge&&(this._maximumAge=t.maximumAge)}startGps(t=0){return null===this._watchPositionId&&(this._watchPositionId=navigator.geolocation.watchPosition((t=>{this._gpsReceived(t)}),(t=>{this._eventHandlers.gpserror?this._eventHandlers.gpserror(t.code):alert(`GPS error: code ${t.code}`)}),{enableHighAccuracy:!0,maximumAge:0!=t?t:this._maximumAge}),!0)}stopGps(){return null!==this._watchPositionId&&(navigator.geolocation.clearWatch(this._watchPositionId),this._watchPositionId=null,!0)}fakeGps(t,e,i=null,o=0){null!==i&&this.setElevation(i),this._gpsReceived({coords:{longitude:t,latitude:e,accuracy:o}})}lonLatToWorldCoords(t,e){const i=this._proj.project(t,e);return[i[0],-i[1]]}add(t,e,i,o){this.setWorldPosition(t,e,i,o),this._scene.add(t)}setWorldPosition(t,e,i,o){const n=this.lonLatToWorldCoords(e,i);[t.position.x,t.position.z]=n,void 0!==o&&(t.position.y=o)}setElevation(t){this._camera.position.y=t}on(t,e){this._eventHandlers[t]=e}_gpsReceived(t){let e=Number.MAX_VALUE;t.coords.accuracy<=this._gpsMinAccuracy&&(null===this._lastCoords?this._lastCoords={latitude:t.coords.latitude,longitude:t.coords.longitude}:e=this._haversineDist(this._lastCoords,t.coords),e>=this._gpsMinDistance&&(this._lastCoords.longitude=t.coords.longitude,this._lastCoords.latitude=t.coords.latitude,this.setWorldPosition(this._camera,t.coords.longitude,t.coords.latitude),this._eventHandlers.gpsupdate&&this._eventHandlers.gpsupdate(t,e)))}_haversineDist(t,i){const o=e.Math.degToRad(i.longitude-t.longitude),n=e.Math.degToRad(i.latitude-t.latitude),s=Math.sin(n/2)*Math.sin(n/2)+Math.cos(e.Math.degToRad(t.latitude))*Math.cos(e.Math.degToRad(i.latitude))*(Math.sin(o/2)*Math.sin(o/2));return 2*Math.atan2(Math.sqrt(s),Math.sqrt(1-s))*6371e3}}class s{constructor(t,i){let o;this.renderer=t,this.renderer.autoClear=!1,this.sceneWebcam=new e.Scene,void 0===i?(o=document.createElement(\"video\"),o.setAttribute(\"autoplay\",!0),o.setAttribute(\"playsinline\",!0),o.style.display=\"none\",document.body.appendChild(o)):o=document.querySelector(i),this.geom=new e.PlaneBufferGeometry,this.texture=new e.VideoTexture(o),this.material=new e.MeshBasicMaterial({map:this.texture});const n=new e.Mesh(this.geom,this.material);if(this.sceneWebcam.add(n),this.cameraWebcam=new e.OrthographicCamera(-.5,.5,.5,-.5,0,10),navigator.mediaDevices&&navigator.mediaDevices.getUserMedia){const t={video:{width:1280,height:720,facingMode:\"environment\"}};navigator.mediaDevices.getUserMedia(t).then((t=>{console.log(\"using the webcam successfully...\"),o.srcObject=t,o.play()})).catch((t=>{setTimeout((()=>{this.createErrorPopup(\"Webcam Error\\nName: \"+t.name+\"\\nMessage: \"+t.message)}),1e3)}))}else setTimeout((()=>{this.createErrorPopup(\"sorry - media devices API not supported\")}),1e3)}update(){this.renderer.clear(),this.renderer.render(this.sceneWebcam,this.cameraWebcam),this.renderer.clearDepth()}dispose(){this.material.dispose(),this.texture.dispose(),this.geom.dispose()}createErrorPopup(t){if(!document.getElementById(\"error-popup\")){var e=document.createElement(\"div\");e.innerHTML=t,e.setAttribute(\"id\",\"error-popup\"),document.body.appendChild(e)}}}const r=new e.Vector3(0,0,1),a=new e.Euler,h=new e.Quaternion,c=new e.Quaternion(-Math.sqrt(.5),0,0,Math.sqrt(.5)),d={type:\"change\"};class l extends e.EventDispatcher{constructor(t){super(),!1===window.isSecureContext&&console.error(\"THREE.DeviceOrientationControls: DeviceOrientationEvent is only available in secure contexts (https)\");const i=this,o=new e.Quaternion;this.object=t,this.object.rotation.reorder(\"YXZ\"),this.enabled=!0,this.deviceOrientation={},this.screenOrientation=0,this.alphaOffset=0,this.TWO_PI=2*Math.PI,this.HALF_PI=.5*Math.PI,this.orientationChangeEventName=\"ondeviceorientationabsolute\"in window?\"deviceorientationabsolute\":\"deviceorientation\",this.smoothingFactor=1;const n=function(t){i.deviceOrientation=t},s=function(){i.screenOrientation=window.orientation||0};this.connect=function(){s(),void 0!==window.DeviceOrientationEvent&&\"function\"==typeof window.DeviceOrientationEvent.requestPermission?window.DeviceOrientationEvent.requestPermission().then((t=>{\"granted\"===t&&(window.addEventListener(\"orientationchange\",s),window.addEventListener(i.orientationChangeEventName,n))})).catch((function(t){console.error(\"THREE.DeviceOrientationControls: Unable to use DeviceOrientation API:\",t)})):(window.addEventListener(\"orientationchange\",s),window.addEventListener(i.orientationChangeEventName,n)),i.enabled=!0},this.disconnect=function(){window.removeEventListener(\"orientationchange\",s),window.removeEventListener(i.orientationChangeEventName,n),i.enabled=!1},this.update=function(){if(!1===i.enabled)return;const t=i.deviceOrientation;if(t){let n=t.alpha?e.Math.degToRad(t.alpha)+i.alphaOffset:0,s=t.beta?e.Math.degToRad(t.beta):0,l=t.gamma?e.Math.degToRad(t.gamma):0;const u=i.screenOrientation?e.Math.degToRad(i.screenOrientation):0;if(this.smoothingFactor<1){if(this.lastOrientation){const t=this.smoothingFactor;n=this._getSmoothedAngle(n,this.lastOrientation.alpha,t),s=this._getSmoothedAngle(s+Math.PI,this.lastOrientation.beta,t),l=this._getSmoothedAngle(l+this.HALF_PI,this.lastOrientation.gamma,t,Math.PI)}else s+=Math.PI,l+=this.HALF_PI;this.lastOrientation={alpha:n,beta:s,gamma:l}}!function(t,e,i,o,n){a.set(i,e,-o,\"YXZ\"),t.setFromEuler(a),t.multiply(c),t.multiply(h.setFromAxisAngle(r,-n))}(i.object.quaternion,n,this.smoothingFactor<1?s-Math.PI:s,this.smoothingFactor<1?l-this.HALF_PI:l,u),8*(1-o.dot(i.object.quaternion))>1e-6&&(o.copy(i.object.quaternion),i.dispatchEvent(d))}},this._orderAngle=function(t,e,i=this.TWO_PI){return e>t&&Math.abs(e-t)<i/2||t>e&&Math.abs(e-t)>i/2?{left:t,right:e}:{left:e,right:t}},this._getSmoothedAngle=function(t,e,i,o=this.TWO_PI){const n=this._orderAngle(t,e,o),s=n.left,r=n.right;n.left=0,n.right-=s,n.right<0&&(n.right+=o);let a=r==e?(1-i)*n.right+i*n.left:i*n.right+(1-i)*n.left;return a+=s,a>=o&&(a-=o),a},this.dispose=function(){i.disconnect()},this.connect()}}})(),n})()));\n\n//# sourceURL=webpack:///./node_modules/@ar-js-org/ar.js/three.js/build/ar-threex-location-only.js?");

/***/ }),

/***/ "./node_modules/three/build/three.cjs":
/*!********************************************!*\
  !*** ./node_modules/three/build/three.cjs ***!
  \********************************************/
/***/ ((__unused_webpack_module, exports) => {

"use strict";

/***/ }),

/***/ "./node_modules/three/build/three.module.js":
/*!**************************************************!*\
  !*** ./node_modules/three/build/three.module.js ***!
  \**************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./index.js");
/******/ 	
/******/ })()
;