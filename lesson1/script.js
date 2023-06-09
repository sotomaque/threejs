// Canvas
const canvas = document.querySelector('.webgl');

// Scene
const scene = new THREE.Scene();

// Red Cube
const geometry = new THREE.BoxGeometry(1, 1, 1);
const material = new THREE.MeshBasicMaterial({
  color: 'red',
});
const mesh = new THREE.Mesh(geometry, material);
scene.add(mesh);

// Sizes
const sizes = {
  width: 500,
  height: 500,
};

// Camera
const camera = new THREE.PerspectiveCamera(
  45, // fov (degrees)
  sizes.width / sizes.height // aspect ratio
);
// Move camera from out of the cube
camera.position.z = 3;
scene.add(camera);

// Renderer
const renderer = new THREE.WebGLRenderer({
  canvas,
});
renderer.setSize(sizes.width, sizes.height);

// First Render
renderer.render(scene, camera);
