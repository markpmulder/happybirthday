import * as THREE from './build/three.module.js';
import { GLTFLoader } from './examples/jsm/loaders/GLTFLoader.js';
var catmodel;
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );
camera.position.set(0, 0, 1000);

const renderer = new THREE.WebGLRenderer();
renderer.setSize( window.innerWidth, window.innerHeight );
document.body.appendChild( renderer.domElement );

renderer.setClearColor(0x808080);
var canvas = renderer.domElement
document.body.appendChild(canvas);

const loader = new GLTFLoader();
loader.load( 'assets/newcat.glb', function ( gltf ) {
    catmodel = gltf.scene
	scene.add( catmodel );
}, undefined, function ( error ) {
	console.error( error );
} );

//light
var light = new THREE.HemisphereLight( 0xffffbb, 0x080820, 1 );
scene.add( light );

camera.position.z = 5;

const animate = function () {
    requestAnimationFrame( animate );
    catmodel.rotation.y += 0.01;
    renderer.render( scene, camera );
};

function play() {
    var audio = new Audio('https://interactive-examples.mdn.mozilla.net/media/cc0-audio/t-rex-roar.mp3');
    audio.play();
  }
  play();
animate();
