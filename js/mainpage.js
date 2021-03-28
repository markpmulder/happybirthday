import * as THREE from './build/three.module.js';
import { GLTFLoader } from './examples/jsm/loaders/GLTFLoader.js';

const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 2000 );
// camera.position.set(0, 0, 1000);

const renderer = new THREE.WebGLRenderer();
renderer.setSize( window.innerWidth, window.innerHeight );
document.body.appendChild( renderer.domElement );

const geometry = new THREE.BoxGeometry();
const material = new THREE.MeshBasicMaterial( { color: 0x00ff00 } );
const cube = new THREE.Mesh( geometry, material );
scene.add( cube );

camera.position.z = 5;

const animate = function () {
    requestAnimationFrame( animate );

    cube.rotation.x += 0.01;
    cube.rotation.y += 0.01;

    renderer.render( scene, camera );
};

animate();







// //init scene and camera
// const scene = new THREE.Scene();
// const camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );
// // const camera = new THREE.PerspectiveCamera(60, 1, 1, 1000);
// // camera.position.set(0, 0, 500);

// //init renderer 
// const renderer = new THREE.WebGLRenderer();
// renderer.setSize( window.innerWidth, window.innerHeight );
// document.body.appendChild( renderer.domElement );

// // //cat loader
// // const loader = new GLTFLoader();
// // loader.load( 'assets/cat.glb', function ( gltf ) {
// //         scene.add( gltf.scene );
// //     }, undefined, function ( error ) {
// //         console.error( error );
// // } );

// //light 
// //var light = new THREE.HemisphereLight( 0xffffbb, 0x080820, 1 );
// //scene.add( light );

// // cube
// const geometry = new THREE.BoxGeometry();
// const material = new THREE.MeshBasicMaterial( { color: 0x00ff00 } );
// const cube = new THREE.Mesh( geometry, material );
// scene.add( cube );

// camera.position.z = 5;

// // // const animate = function () {
// // //     // requestAnimationFrame( animate );

// // //     // cube.rotation.x += 0.01;
// // //     // scene.rotation.y += 0.01;

// // //     renderer.render( scene, camera );
// // // };

// // // animate();

// function render() {

//     renderer.render(scene, camera);
// }
// render();
