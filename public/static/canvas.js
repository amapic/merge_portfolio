// import * as THREE from "https://cdnjs.cloudflare.com/ajax/libs/three.js/0.152.0/three.min.js";
// import * as THREE from  "https://cdnjs.cloudflare.com/ajax/libs/three.js/0.138.3/three.js"

import * as THREE from   "https://unpkg.com/three@v0.149.0/build/three.module.js"

// import * as THREE from  "https://unpkg.com/es-module-shims@1.6.3/dist/es-module-shims.js"
import vertexShader from "./shaders/vertexShader.js";
import fragmentShader from "./shaders/wood.js";


let scrollable = document.querySelector(".scrollable");
// console.log(document)
let current = 0;
let target = 0;
let ease = 0.075;
// alert("ree");

// Linear inetepolation used for smooth scrolling and image offset uniform adjustment

function lerp(start, end, t) {
  return start * (1 - t) + end * t;
}

// init function triggered on page load to set the body height to enable scrolling and EffectCanvas initialised
function init() {
  document.body.style.height = `${scrollable.getBoundingClientRect().height}px`;

  // document.querySelector("#test").addEventListener("mouseenter", () => {
    // alert(scrollable.getBoundingClientRect().height);
  // });
}

// translate the scrollable div using the lerp function for the smooth scrolling effect.
function smoothScroll() {
  // target = window.scrollY;
  target = document.querySelector('.scrollable').scrollTop
  console.log("rfr",target);
  current = lerp(current, target, ease);
  scrollable.style.transform = `translate3d(0,${-current}px, 0)`;
  // alert("rr")
  // console.log("rr")
}

class EffectCanvas {
  constructor() {
    this.container = document.querySelector("main");
    this.images = [...document.querySelectorAll(".aaa")];
    this.meshItems = []; // Used to store all meshes we will be creating.
    this.setupCamera();
    this.createMeshItems();
    this.render();
  }

  // Getter function used to get screen dimensions used for the camera and mesh materials
  get viewport() {
    let width = window.innerWidth;
    let height = window.innerHeight;
    let aspectRatio = width / height;
    return {
      width,
      height,
      aspectRatio,
    };
  }

  setupCamera() {
    window.addEventListener("resize", this.onWindowResize.bind(this), false);

    // console.log("sfgsd",this.images[0]);
    // this.images[3].addEventListener(
    //   "mouseenter",
    //   (e) => {
    //     alert("rrf");
    //   },
    //   false
    // );

    // alert(this.images[0])
    // this.addEventListener("mouseleave", this.Amouseenter.bind(this), false);

    // Create new scene
    // console.log(window.sc)
    this.scene = new THREE.Scene();

    // Initialize perspective camera

    let perspective = 1000;
    const fov =
      (180 * (2 * Math.atan(window.innerHeight / 2 / perspective))) / Math.PI; // see fov image for a picture breakdown of this fov setting.
    this.camera = new THREE.PerspectiveCamera(
      fov,
      this.viewport.aspectRatio,
      1,
      1000
    );
    this.camera.position.set(0, 0, perspective); // set the camera position on the z axis.

    // renderer
    // this.renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    this.renderer = new THREE.WebGL1Renderer({ antialias: true, alpha: true });
    this.renderer.setSize(this.viewport.width, this.viewport.height); // uses the getter viewport function above to set size of canvas / renderer
    this.renderer.setPixelRatio(window.devicePixelRatio); // Import to ensure image textures do not appear blurred.
    this.container.appendChild(this.renderer.domElement); // append the canvas to the main element
  }

  onWindowResize() {
    init();
    this.camera.aspect = this.viewport.aspectRatio; // readjust the aspect ratio.
    this.camera.updateProjectionMatrix(); // Used to recalulate projectin dimensions.
    this.renderer.setSize(this.viewport.width, this.viewport.height);
  }

  Amouseenter() {
    // alert("rr");
    this.uniforms.hover.value = 1.0;
  }

  Amouseleave() {
    // alert("rr");
    this.uniforms.hover.value = 0.0;
  }

  createMeshItems() {
    // Loop thorugh all images and create new MeshItem instances. Push these instances to the meshItems array.
    this.images.forEach((image) => {
      let meshItem = new MeshItem(image, this.scene);
      this.meshItems.push(meshItem);
      console.log("dhfdf",image)
      // image.addEventListener(
      //   "click",
      //   function() {
      //     alert("rrf");
      //   }
      // );
    });
  }

  // Animate smoothscroll and meshes. Repeatedly called using requestanimationdrame
  render() {
    smoothScroll();
    for (let i = 0; i < this.meshItems.length; i++) {
      this.meshItems[i].render();
    }
    this.renderer.render(this.scene, this.camera);
    requestAnimationFrame(this.render.bind(this));
  }
}

class MeshItem {
  // Pass in the scene as we will be adding meshes to this scene.
  constructor(element, scene) {
    this.element = element;
    this.scene = scene;
    this.offset = new THREE.Vector2(0, 0); // Positions of mesh on screen. Will be updated below.
    this.sizes = new THREE.Vector2(0, 0); //Size of mesh on screen. Will be updated below.
    this.createMesh();
    element.addEventListener("click", ()=>{
      // alert("rr")
    })
    // console.log(element)
  }

  init() {
    // this.addEventListener(
    //   "mouseenter",
    //   (e) => {
    //     alert("rrf");
    //   },
    //   false
    // );
  }

  getDimensions() {
    const { width, height, top, left } = this.element.getBoundingClientRect();
    this.sizes.set(width, height);
    this.offset.set(
      left - window.innerWidth / 2 + width / 2,
      -top + window.innerHeight / 2 - height / 2
    );
  }

  createMesh() {
    this.geometry = new THREE.PlaneBufferGeometry(1, 1, 100, 100);
    this.imageTexture = new THREE.TextureLoader().load(this.element.src);
    console.log("rr")
    this.uniforms = {
      uTexture: {
        //texture data
        value: this.imageTexture,
      },
      uOffset: {
        //distortion strength
        value: new THREE.Vector2(0.0, 0.0),
      },
      uAlpha: {
        //opacity
        value: 1,
      },
      uTime: {
        //opacity
        value: 0,
      },
      ratio: {
        value: this.sizes.x / this.sizes.y,
      },
      resolution: {
        value: new THREE.Vector2(this.sizes.x, this.sizes.y),
      },
      mouse: {
        value: new THREE.Vector2(this.sizes.x, this.sizes.y),
      },
      turns: {
        value: 1.0,
      },
      hover: {
        value: 0,
      },
    };
    this.material = new THREE.ShaderMaterial({
      uniforms: this.uniforms,
      vertexShader: vertexShader,
      fragmentShader: fragmentShader,
      transparent: true,
      // wireframe: true,
      side: THREE.DoubleSide,
    });
    this.mesh = new THREE.Mesh(this.geometry, this.material);
    this.getDimensions(); // set offsetand sizes for placement on the scene
    this.mesh.position.set(this.offset.x, this.offset.y, 0);
    this.mesh.scale.set(this.sizes.x, this.sizes.y, 1);

    this.scene.add(this.mesh);
  }

  render() {
    // this function is repeatidly called for each instance in the aboce

    var e = window.MouseEvent;

    // var posX = e.clientX;
    // var posY = e.clientY;

    this.getDimensions();
    this.mesh.position.set(this.offset.x, this.offset.y, 0);
    this.mesh.scale.set(this.sizes.x, this.sizes.y, 1);
    this.uniforms.uOffset.value.set(
      this.offset.x * 0.0,
      -(target - current) * 0.0003
    );
    this.uniforms.uTime.value = this.uniforms.uTime.value + 0.0001;
    this.uniforms.ratio.value = this.sizes.x / this.sizes.y;
    this.uniforms.resolution.value = new THREE.Vector2(
      this.sizes.x,
      this.sizes.y
    );
    this.uniforms.mouse.value = new THREE.Vector2(e.clientX, e.clientY);
    // console.log(-(target - current) * 0.0003)
  }
}

init();
new EffectCanvas();
