// Import libraries
import * as THREE from 'three'
import { OrbitControls } from 'three/addons/controls/OrbitControls.js'
import { Rhino3dmLoader } from 'three/addons/loaders/3DMLoader.js'

let camera, scene, raycaster, renderer
const mouse = new THREE.Vector2()
window.addEventListener('click', onClick);
const model = 'Rhino_FCwithColors.3dm'

// call functions
init()
animate()

// function to setup the scene, camera, renderer, and load 3d model
function init () {

    // Rhino models are z-up, so set this as the default
    THREE.Object3D.DefaultUp = new THREE.Vector3( 0, 0, 1 )

    // create a scene and a camera
    scene = new THREE.Scene()
    scene.background = new THREE.Color('Yellow')
    camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 )
    camera.position.y = 0

    // create the renderer and add it to the html
    renderer = new THREE.WebGLRenderer( { antialias: true } )
    renderer.setSize( window.innerWidth, window.innerHeight )
    document.body.appendChild( renderer.domElement )

    const controls = new OrbitControls( camera, renderer.domElement )

    const directionalLight = new THREE.DirectionalLight( 0xffffff )
    directionalLight.position.set( 0, 0, 2 )
    directionalLight.castShadow = true
    directionalLight.intensity = 2
    scene.add( directionalLight )

    raycaster = new THREE.Raycaster()

    // add some controls to orbit the camera
    const controls = new OrbitControls( camera, renderer.domElement )

    // add a directional light
    const directionalLight = new THREE.DirectionalLight( 0xffffff )
    directionalLight.intensity = 2
    scene.add( directionalLight )


    // load the model
    const loader = new Rhino3dmLoader()
    loader.setLibraryPath( 'https://cdn.jsdelivr.net/npm/rhino3dm@7.11.1/' )

    loader.load( model, function ( object ) {

        scene.add( object )
    // Render
//     function animate() {

//       requestAnimationFrame( animate )

//  // rotate object a little bit each frame
//     object.rotation.x += 0.01
//     object.rotation.y += 0.00

//     renderer.render( scene, camera )

// }

// animate()
//     } )

// }

// function to continuously render the scene
// function animate() {

//     requestAnimationFrame( animate )
//     renderer.render( scene, camera )

// }