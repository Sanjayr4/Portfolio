/*import * as THREE from 'https://cdn.skypack.dev/three@0.129.0/build/three.module.js';
import { GLTFLoader } from 'https://cdn.skypack.dev/three@0.129.0/examples/jsm/loaders/GLTFLoader.js';
import { gsap } from 'https://cdn.skypack.dev/gsap';

const camera = new THREE.PerspectiveCamera(
    10,
    window.innerWidth / window.innerHeight,
    0.1,
    1000
);
camera.position.z = 20;

const scene = new THREE.Scene();
let bee;
let mixer;
const loader = new GLTFLoader();
loader.load('3dmodel/astronaut_floating_in_space.glb',
    function (gltf) {
        bee = gltf.scene;
        scene.add(bee);

        mixer = new THREE.AnimationMixer(bee);
        mixer.clipAction(gltf.animations[0]).play();
        modelMove();
    },
    function (xhr) {},
    function (error) {}
);
const renderer = new THREE.WebGLRenderer({alpha: true});
renderer.setSize(window.innerWidth, window.innerHeight);
document.getElementById('container3D').appendChild(renderer.domElement);

// light
const ambientLight = new THREE.AmbientLight(0xffffff, 1.3);
scene.add(ambientLight);

const topLight = new THREE.DirectionalLight(0xffffff, 1);
topLight.position.set(500, 500, 500);
scene.add(topLight);


const reRender3D = () => {
    requestAnimationFrame(reRender3D);
    renderer.render(scene, camera);
    if(mixer) mixer.update(0.02);
};
reRender3D();

let width = screen.width;
if (width < 768)
{
    var arrPositionModel = [
        {
            id: 'about',
            position: {x: -3, y: -1.5, z: -10},
            rotation: {x: 0, y: -1, z: 0}
        },
        {
            id: "tech",
            position: { x: -2.5, y: -2, z: -2 },
            rotation: { x: -0.3, y: 1, z: 0 },
        },
        {
            id: "certificate",
            position: { x: -3.3, y: -2.3, z: -6 },
            rotation: { x: 0, y: 0.2, z: 0 },
        },
        {
            id: "project",
            position: { x: 4, y: -2.3, z: -10 },
            rotation: { x: 0.7, y: -1.7, z: 0 },
        },
        {
            id: "contact",
            position: { x: -4.5, y: -3, z: -10 },
            rotation: { x: 0, y: 0.2, z: 0 },
        }
    ];
}

 arrPositionModel = [
    {
        id: 'about',
        position: {x: 2, y: -1.5, z: 3},
        rotation: {x: 0, y: -1, z: 0}
    },
    {
        id: "tech",
        position: { x: -2.5, y: -2, z: -2 },
        rotation: { x: -0.3, y: 1, z: 0 },
    },
    {
        id: "certificate",
        position: { x: -3.3, y: -2.3, z: -6 },
        rotation: { x: 0, y: 0.2, z: 0 },
    },
    {
        id: "project",
        position: { x: 4, y: -2.3, z: -10 },
        rotation: { x: 0.7, y: -1.7, z: 0 },
    },
    {
        id: "contact",
        position: { x: -4.5, y: -3, z: -10 },
        rotation: { x: 0, y: 0.2, z: 0 },
    }
];
const modelMove = () => {
    const sections = document.querySelectorAll('.section');
    let currentSection;
    sections.forEach((section) => {
        const rect = section.getBoundingClientRect();
        if (rect.top <= window.innerHeight / 3) {
            currentSection = section.id;
        }
    });
    let position_active = arrPositionModel.findIndex(
        (val) => val.id == currentSection
    );
    if (position_active >= 0) {
        let new_coordinates = arrPositionModel[position_active];
        gsap.to(bee.position, {
            x: new_coordinates.position.x,
            y: new_coordinates.position.y,
            z: new_coordinates.position.z,
            duration: 3,
            ease: "power1.out"
        });
        gsap.to(bee.rotation, {
            x: new_coordinates.rotation.x,
            y: new_coordinates.rotation.y,
            z: new_coordinates.rotation.z,
            duration: 3,
            ease: "power1.out"
        })
    }
}
window.addEventListener('scroll', () => {
    if (bee) {
        modelMove();
    }
})
/*window.addEventListener('resize', () => {
    renderer.setSize(window.innerWidth, window.innerHeight);
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
})*/

import * as THREE from 'https://cdn.skypack.dev/three@0.129.0/build/three.module.js';
import { GLTFLoader } from 'https://cdn.skypack.dev/three@0.129.0/examples/jsm/loaders/GLTFLoader.js';
import { gsap } from 'https://cdn.skypack.dev/gsap';

const camera = new THREE.PerspectiveCamera(
    10,
    window.innerWidth / window.innerHeight,
    0.1,
    1000
);
camera.position.z = 20;

const scene = new THREE.Scene();
let bee;
let mixer;

const loader = new GLTFLoader();
loader.load('3dmodel/astronaut_floating_in_space.glb',
    function (gltf) {
        bee = gltf.scene;
        scene.add(bee);

        mixer = new THREE.AnimationMixer(bee);
        mixer.clipAction(gltf.animations[0]).play();
        modelMove();
    },
    undefined,
    function (error) {
        console.error('Error loading model:', error);
    }
);

const renderer = new THREE.WebGLRenderer({ alpha: true });
renderer.setSize(window.innerWidth, window.innerHeight);
document.getElementById('container3D').appendChild(renderer.domElement);

// Light setup
const ambientLight = new THREE.AmbientLight(0xffffff, 1.3);
scene.add(ambientLight);

const topLight = new THREE.DirectionalLight(0xffffff, 1);
topLight.position.set(500, 500, 500);
scene.add(topLight);

const reRender3D = () => {
    requestAnimationFrame(reRender3D);
    renderer.render(scene, camera);
    if (mixer) mixer.update(0.02);
};
reRender3D();

let arrPositionModel = screen.width < 768 ? [
    { id: 'about', position: { x: 0, y: -2.5, z: -10 }, rotation: { x: 0, y: 0, z: 0 } },
    { id: 'tech', position: { x: -1.5, y: -3, z: -20 }, rotation: { x: 0, y: 0, z: 0 } },
    { id: 'certificate', position: { x: 0, y: -2.3, z: -5 }, rotation: { x: 0, y: 0, z: 0 } },
    { id: 'project', position: { x: 2, y: 1, z: -50 }, rotation: { x: 0, y: 0, z: 0 } },
    { id: 'contact', position: { x: 1.5, y: 1.3, z: -35 }, rotation: { x: 0, y: 0, z: 0 } }
] : [
    { id: 'about', position: { x: 2, y: -1.5, z: 3 }, rotation: { x: 0, y: -1, z: 0 } },
    { id: 'tech', position: { x: -2.5, y: -2, z: -2 }, rotation: { x: -0.3, y: 1, z: 0 } },
    { id: 'certificate', position: { x: -3.3, y: -2.3, z: -6 }, rotation: { x: 0, y: 0.2, z: 0 } },
    { id: 'project', position: { x: 4, y: -2.3, z: -10 }, rotation: { x: 0.7, y: -1.7, z: 0 } },
    { id: 'contact', position: { x: -4.5, y: -3, z: -10 }, rotation: { x: 0, y: 0.2, z: 0 } }
];

const modelMove = () => {
    const sections = document.querySelectorAll('.section');
    let currentSection;
    sections.forEach((section) => {
        const rect = section.getBoundingClientRect();
        if (rect.top <= window.innerHeight / 3) {
            currentSection = section.id;
        }
    });

    const position_active = arrPositionModel.findIndex(val => val.id === currentSection);
    if (position_active >= 0) {
        const new_coordinates = arrPositionModel[position_active];
        gsap.to(bee.position, { ...new_coordinates.position, duration: 3, ease: 'power1.out' });
        gsap.to(bee.rotation, { ...new_coordinates.rotation, duration: 3, ease: 'power1.out' });
    }
};

window.addEventListener('scroll', () => { if (bee) modelMove(); });

window.addEventListener('resize', () => {
    renderer.setSize(window.innerWidth, window.innerHeight);
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
});
