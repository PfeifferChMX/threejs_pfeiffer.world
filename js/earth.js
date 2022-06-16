
const DEG_TO_RAD = Math.PI / 180;
// Gen random data
const N = 20;

const params = { 
color: '#000000',
transparent: true, 
opacity: 0.1,
alpha: true };

//OrbitControl controls = new THREE.OrbitControls(camera, renderer.domElement); controls.autoRotate = true; controls.autoRotateSpeed = 2; controls.maxDistance = 350; controls.minDistance = 150; controls.enablePan = false;

    const arcsData = [...Array(N).keys()].map(() => ({


     if (artificialsatellitesani === true) {};
    /*  startLat: (Math.random() - 0.5) * 180,
      startLng: (Math.random() - 0.5) * 360,
      endLat: (Math.random() - 0.5) * 180,
      endLng: (Math.random() - 0.5) * 360,
      color: ['red', 'white', 'blue', 'green'][Math.round(Math.random() * 3)] 
    */  
    }));


// background image 
const loader = new THREE.TextureLoader(); 
//loader.background = new THREE.Color( params.color );
loader.load('assets/img/bg-' + bild + '.jpg', function(texture) {scene.background = texture;} );


 const Moon = new ThreeGlobe()
       Moon.globeImageUrl('assets/img/' + P2 + '-' + bild + '.jpg')
      Moon.scale.set( 0.2, 0.2, 0.2 );
      //Moon.position.x = 125.0;
      //Moon.position.z = 125.0;

 const Globe = new ThreeGlobe()
      .globeImageUrl('assets/img/' + P1 + '-' + bild + '.jpg')
      .arcsData(arcsData)
      .arcColor('color')
      .arcDashLength(0.4)
      .arcDashGap(4)
      .arcDashInitialGap(() => Math.random() * 5)
      .arcDashAnimateTime(1000);

// Erde umkreisen
var orbitRadius = 165.0; 
var date;
date = Date.now() * 0.0001;
//date = 946681201 * 0.0001;
Moon.position.set( Math.cos(date) * orbitRadius, 0, Math.sin(date) * orbitRadius );


    // Setup renderer
    const renderer = new THREE.WebGLRenderer();
    renderer.setSize(window.innerWidth, window.innerHeight);
    document.getElementById('globeViz').appendChild(renderer.domElement);

    // Setup scene
    const scene = new THREE.Scene();
    scene.add(Globe);
    scene.add(new THREE.AmbientLight(0xbbbbbb));
    scene.add(new THREE.DirectionalLight(0xffffff, 0.6));
    scene.add(Moon);


    // Setup camera
    const camera = new THREE.PerspectiveCamera();
    camera.aspect = window.innerWidth/window.innerHeight;
    camera.updateProjectionMatrix();
    camera.position.z = 700;

    // Add camera controls
    const tbControls = new THREE.TrackballControls(camera, renderer.domElement);
    tbControls.minDistance = 101;
    tbControls.rotateSpeed = 1.0;
    tbControls.zoomSpeed = 1.2;


    // Kick-off renderer
    (function animate() { // IIFE
      // Frame cycle
      tbControls.update();

      Moon.rotation.y -= 0.002;
      Moon.receiveShadow = true;
      Moon.rotateSpeed = 16.0;  // geht nicht, muss ueber die CameraControls laufen
      
      Globe.rotation.y += 0.002;

      renderer.render(scene, camera);
      requestAnimationFrame(animate);
    })();
