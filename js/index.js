const nbObjects = 500;
var conf, scene, camera, cameraCtrl, light, renderer;
var whw, whh;

var objects;
var trucGeometry, trucMaterial;
var destination = new THREE.Vector3();

var mouse = new THREE.Vector2();
var mouseOver = false;
var mousePlane = new THREE.Plane(new THREE.Vector3(0, 0, 1), 0);
var mousePosition = new THREE.Vector3();
var raycaster = new THREE.Raycaster();

function init() {
  conf = {
    move: true,
    followMouse: true,
    attraction: 0.03,
    velocityLimit: 1.2,
    lightColor: 0xff0000,
    lightIntensity: 1,
    shuffle: shuffle
  };

  scene = new THREE.Scene();
  camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
  cameraCtrl = new THREE.OrbitControls(camera);

  renderer = new THREE.WebGLRenderer();
  renderer.setSize(window.innerWidth, window.innerHeight);
  document.body.appendChild(renderer.domElement);

  initScene();

  stats = new Stats();
  document.body.appendChild(stats.dom);

  const gui = new dat.GUI();
  gui.add(conf, 'move');
  gui.add(conf, 'followMouse');
  gui.add(conf, 'attraction', 0.01, 0.1);
  gui.add(conf, 'velocityLimit', 0.1, 2);
  gui.addColor(conf, 'lightColor');
  gui.add(conf, 'lightIntensity', 0.1, 2);
  gui.add(conf, 'shuffle');

  onWindowResize();
  window.addEventListener('resize', onWindowResize, false);

  document.addEventListener('mousemove', onMouseMove, false);
  // document.addEventListener('mouseover', function () { mouseOver = true; }, false);
  document.addEventListener('mouseout', onMouseOut, false);

  animate();
};

function initScene() {
  scene = new THREE.Scene();
  scene.background = new THREE.Color(0xffffff);
  scene.add(new THREE.AmbientLight(0x808080));

  // var plight = new THREE.PointLight(0xffffff, 0.5, 1000);
  // plight.position.set(0, 0, 0);
  // scene.add(plight);

  light = new THREE.PointLight(conf.lightColor, conf.lightIntensity, 500);
  light.position.set(0, 0, 0);
  scene.add(light);

  camera.position.z = 75;

  trucGeometry = new THREE.ConeBufferGeometry( 2, 15, 10 );
  trucMaterial = new THREE.MeshLambertMaterial({
    color: 0xffffff,
    roughness: 0.2,
    metalness: 0.9,
    emissive: 0x1b6cff,
    emissiveIntensity:0.3
  });

  objects = [];
  for (var i = 0; i < nbObjects; i++) {
    var b = new Truc();
    objects.push(b);
    scene.add(b.o3d);
  }

  shuffle();
}

function animate() {
  requestAnimationFrame(animate);

  cameraCtrl.update();

  light.color.set(conf.lightColor);
  light.intensity = conf.lightIntensity;

  if (conf.move) {
    for (var i = 0; i < objects.length; i++) {
      objects[i].move();
    }
  }

  renderer.render(scene, camera);

  stats.update();
};

function shuffle() {
  for (var i = 0; i < objects.length; i++) {
    objects[i].shuffle();
  }
}

function Truc() {
  this.velocity = new THREE.Vector3(rnd(1, true), rnd(1, true), rnd(1, true));
  this.destination = destination;

  this.init();
}

Truc.prototype.init = function (bconf) {
  var mesh = new THREE.Mesh(trucGeometry, trucMaterial);
  mesh.rotation.x = Math.PI/2;

  this.o3d = new THREE.Object3D();
  this.o3d.add(mesh);
};

Truc.prototype.move = function () {
  var destination;
  if (mouseOver && conf.followMouse) {
    destination = mousePosition;
  } else {
    destination = this.destination;
  }

  var dv = destination.clone().sub(this.o3d.position).normalize();
  this.velocity.x += conf.attraction * dv.x;
  this.velocity.y += conf.attraction * dv.y;
  this.velocity.z += conf.attraction * dv.z;
  this.limitVelocity();

  this.o3d.lookAt(this.o3d.position.clone().add(this.velocity));
  this.o3d.position.add(this.velocity);
};

Truc.prototype.limitVelocity = function (y) {
  this.velocity.x = limit(this.velocity.x, -conf.velocityLimit, conf.velocityLimit);
  this.velocity.y = limit(this.velocity.y, -conf.velocityLimit, conf.velocityLimit);
  this.velocity.z = limit(this.velocity.z, -conf.velocityLimit, conf.velocityLimit);
};

Truc.prototype.shuffle = function () {
  this.velocity = new THREE.Vector3(rnd(1, true), rnd(1, true), rnd(1, true));
  this.o3d.position.set(rnd(100, true), rnd(100, true), rnd(100, true));
  var scale = rnd(0.4) + 0.1;
  this.o3d.scale.set(scale, scale, scale);
};

function limit(number, min, max) {
  return Math.min(Math.max(number, min), max);
}

function rnd(max, negative) {
  return negative ? Math.random() * 2 * max - max : Math.random() * max;
}

function onWindowResize() {
  whw = window.innerWidth / 2;
  whh = window.innerHeight / 2;
  camera.aspect = window.innerWidth / window.innerHeight;
  camera.updateProjectionMatrix();
  renderer.setSize(window.innerWidth, window.innerHeight);
}

function onMouseMove(event) {
  var v = new THREE.Vector3();
  camera.getWorldDirection(v);
  v.normalize();
  mousePlane.normal = v;

  mouseOver = true;
  mouse.x = (event.clientX / window.innerWidth) * 2 - 1;
  mouse.y = - (event.clientY / window.innerHeight) * 2 + 1;

  raycaster.setFromCamera(mouse, camera);
  raycaster.ray.intersectPlane(mousePlane, mousePosition);

  light.position.set(mousePosition.x, mousePosition.y, mousePosition.z);
}

function onMouseOut(event) {
  mouseOver = false;
  light.position.set(destination.x, destination.y, destination.z);
}

init();