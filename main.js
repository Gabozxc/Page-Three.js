import './static/css/main.css';
import {Scene, PerspectiveCamera, WebGLRenderer, PointLight, AmbientLight, TextureLoader}  from 'three';
import {OrbitControls} from 'three/examples/jsm/controls/OrbitControls';

import helperPosition from './static/components/helpers/helpersPositions';
import me from './static/components/character';
import moon from './static/components/moon';
import builtgeometryTorus from './static/components/goemetryTorus'
import builtgeometrySphere from "./static/components/geometrySphere";
import addStars from './static/components/helpers/addStars'

const aspectRadio = window.innerWidth / window.innerHeight,
    scene = new Scene(),
    camera = new PerspectiveCamera(75, aspectRadio, 0.1, 100),
    renderer = new WebGLRenderer({
        canvas: document.getElementById('bg')
    }),
    pointLight = new PointLight(0xfffff),
    ambientLight = new AmbientLight(0xfffff),
    controls = new OrbitControls(camera, renderer.domElement);
    const spaceTexture = new TextureLoader().load("./static/img/normal.jpg");

pointLight.position.set(0, 10, 0), 
camera.position.setZ(30);
renderer.setPixelRatio(window.devicePixelRatio);
renderer.setSize(window.innerWidth, window.innerHeight);

// scene.add(helperPosition(pointLight)[0], helperPosition(pointLight)[1])
scene.add(me);
scene.add(moon);
scene.background = spaceTexture;
scene.add(ambientLight, pointLight, builtgeometrySphere, builtgeometryTorus);
Array(200).fill().forEach(() => addStars(scene));

function animate() {
    requestAnimationFrame(animate);

    builtgeometryTorus.rotation.x += 0.006;
    builtgeometryTorus.rotation.y += 0.006;
    builtgeometryTorus.rotation.z += 0.006;

    moon.rotation.x += 0.006;
    moon.rotation.y += 0.006;
    moon.rotation.z += 0.006;

    builtgeometrySphere.rotation.x += 0.009;
    builtgeometrySphere.rotation.y += 0.009;
    builtgeometrySphere.rotation.z += 0.009;

    builtgeometrySphere.position.set(10, 10, 10)

    controls.update();
    renderer.render(scene, camera);
}

function moveCamara() {
const t = document.body.getBoundingClientRect().top;

moon.rotation.x += 0.05
moon.rotation.y += 0.075
moon.rotation.z += 0.05

me.rotation.y += 0.01
me.rotation.z += 0.01

camera.position.z = t * -0.01
camera.position.x = t * -0.0002
camera.position.y = t * -0.0002

}

document.body.onscroll = moveCamara;

animate();