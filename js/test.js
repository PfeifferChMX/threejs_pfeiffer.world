
const DEG_TO_RAD = Math.PI / 180;
// Gen random data
const N = 20;

const params = { 
color: '#000000',
transparent: true, 
opacity: 0.1,
alpha: true };

//OrbitControl controls = new THREE.OrbitControls(camera, renderer.domElement); controls.autoRotate = true; controls.autoRotateSpeed = 2; controls.maxDistance = 350; controls.minDistance = 150; controls.enablePan = false;

const arcsDataON = [...Array(N).keys()].map(() => ({     startLat: (Math.random() - 0.5) * 180,   startLng: (Math.random() - 0.5) * 360,   endLat: (Math.random() - 0.5) * 180,   endLng: (Math.random() - 0.5) * 360,   color: ['red', 'white', 'blue', 'green'][Math.round(Math.random() * 3)]   }));
const arcsDataOFF = "";

if (artisatani == "active"){arcsData = arcsDataON;} else {arcsData = arcsDataOFF;}




// background image 
const loader = new THREE.TextureLoader(); 
//loader.background = new THREE.Color( params.color );
loader.load('assets/img/bg-' + bild + '.jpg', function(texture) {scene.background = texture;} );



const Pl1 = new ThreeGlobe()
      .globeImageUrl('assets/img/' + P1 + '-' + bild + '.jpg')
      .bumpImageUrl('assets/img/bump-'+P1+'.jpg')
      .arcsData(arcsData)
      .arcColor('color')
      .arcDashLength(0.4)
      .arcDashGap(4)
      .arcDashInitialGap(() => Math.random() * 5)
      .arcDashAnimateTime(1000);

 const Pl2 = new ThreeGlobe()
      Pl2.globeImageUrl('assets/img/' + P2 + '-' + bild + '.jpg')
      .bumpImageUrl('assets/img/bump-'+P2+'.jpg')
      Pl2.scale.set( P2DM, P2DM, P2DM );
 const Pl3 = new ThreeGlobe()
      Pl3.globeImageUrl('assets/img/' + P3 + '-' + bild + '.jpg')
      .bumpImageUrl('assets/img/bump-'+P3+'.jpg')
      Pl3.scale.set( P3DM, P3DM, P3DM );
 const Pl4 = new ThreeGlobe()
      Pl4.globeImageUrl('assets/img/' + P4 + '-' + bild + '.jpg')
      .bumpImageUrl('assets/img/bump-'+P4+'.jpg')
      Pl4.scale.set( P4DM, P4DM, P4DM );
 const Pl5 = new ThreeGlobe()
      Pl5.globeImageUrl('assets/img/' + P5 + '-' + bild + '.jpg')
      .bumpImageUrl('assets/img/bump-'+P5+'.jpg')
      Pl5.scale.set( P5DM, P5DM, P5DM );
 const Pl6 = new ThreeGlobe()
      Pl6.globeImageUrl('assets/img/' + P6 + '-' + bild + '.jpg')
      .bumpImageUrl('assets/img/bump-'+P6+'.jpg')
      Pl6.scale.set( P6DM, P6DM, P6DM );
 const Pl7 = new ThreeGlobe()
      Pl7.globeImageUrl('assets/img/' + P7 + '-' + bild + '.jpg')
      .bumpImageUrl('assets/img/bump-'+P7+'.jpg')
      Pl7.scale.set( P7DM, P7DM, P7DM );
 const Pl8 = new ThreeGlobe()
      Pl8.globeImageUrl('assets/img/' + P8 + '-' + bild + '.jpg')
      .bumpImageUrl('assets/img/bump-'+P8+'.jpg')
      Pl8.scale.set( P8DM, P8DM, P8DM );
 const Pl9 = new ThreeGlobe()
      Pl9.globeImageUrl('assets/img/' + P9 + '-' + bild + '.jpg')
      .bumpImageUrl('assets/img/bump-'+P9+'.jpg')
      Pl9.scale.set( P9DM, P9DM, P9DM );

// P1 umkreisen
var orbitRadius = 65.0; 
var date;
date = Date.now() * 0.0001;


Pl2.position.set( Math.cos(date) * orbitRadius + P2Abst, 0, Math.sin(date) * orbitRadius + 0);
Pl3.position.set( Math.cos(date) * orbitRadius + P3Abst, 0, Math.sin(date) * orbitRadius + 0);
Pl4.position.set( Math.cos(date) * orbitRadius + P4Abst, 0, Math.sin(date) * orbitRadius + 0);
Pl5.position.set( Math.cos(date) * orbitRadius + P5Abst, 0, Math.sin(date) * orbitRadius + 0);
Pl6.position.set( Math.cos(date) * orbitRadius + P6Abst, 0, Math.sin(date) * orbitRadius + 0);
Pl7.position.set( Math.cos(date) * orbitRadius + P7Abst, 0, Math.sin(date) * orbitRadius + 0);
Pl8.position.set( Math.cos(date) * orbitRadius + P8Abst, 0, Math.sin(date) * orbitRadius + 0);
Pl9.position.set( Math.cos(date) * orbitRadius + P9Abst, 0, Math.sin(date) * orbitRadius + 0);




    // Auto-rotate
    //world.controls().autoRotate = true;
    //world.controls().autoRotateSpeed = 0.35;

    // Add clouds sphere
    const CLOUDS_IMG_URL = './clouds.png'; // from https://github.com/turban/webgl-earth
    const CLOUDS_ALT = 0.004;
    const CLOUDS_ROTATION_SPEED = -0.006; // deg/frame

    new THREE.TextureLoader().load(CLOUDS_IMG_URL, cloudsTexture => {
      const clouds = new THREE.Mesh(
        new THREE.SphereBufferGeometry(Pl1.getGlobeRadius() * (1 + CLOUDS_ALT), 75, 75),
        new THREE.MeshPhongMaterial({ map: cloudsTexture, transparent: true })
      );
      Pl1.scene().add(clouds);

      (function rotateClouds() {
        clouds.rotation.y += CLOUDS_ROTATION_SPEED * Math.PI / 180;
        requestAnimationFrame(rotateClouds);
      })();
    });



    // Setup renderer
    const renderer = new THREE.WebGLRenderer();
    renderer.setSize(window.innerWidth, window.innerHeight);
    document.getElementById('globeViz').appendChild(renderer.domElement);

    // Setup scene
    const scene = new THREE.Scene();
    scene.add(new THREE.AmbientLight(0xbbbbbb));
    scene.add(new THREE.DirectionalLight(0xffffff, 0.6));
    scene.add(Pl1);
    scene.add(Pl2);
    scene.add(Pl3);
    scene.add(Pl4);
    scene.add(Pl5);
    scene.add(Pl6);
    scene.add(Pl7);
    scene.add(Pl8);
    scene.add(Pl9);


    // Setup camera
    const camera = new THREE.PerspectiveCamera();
    camera.aspect = window.innerWidth/window.innerHeight;
    camera.updateProjectionMatrix();
    camera.position.z = cameraposition;

    // Add camera controls
    const tbControls = new THREE.TrackballControls(camera, renderer.domElement);
    tbControls.minDistance = 101;
    tbControls.rotateSpeed = 1.0;
    tbControls.zoomSpeed = 1.2;


    // Kick-off renderer
    (function animate() { // IIFE
      // Frame cycle
      tbControls.update();
      Pl1.rotation.y += 0.002;
      Pl2.rotation.y -= 0.002;
      Pl2.receiveShadow = true;
      Pl3.rotation.y -= 0.002;
      Pl3.receiveShadow = true;
      Pl4.rotation.y -= 0.002;
      Pl4.receiveShadow = true;
      Pl5.rotation.y -= 0.002;
      Pl5.receiveShadow = true;
      Pl6.rotation.y -= 0.002;
      Pl6.receiveShadow = true;
      Pl7.rotation.y -= 0.002;
      Pl7.receiveShadow = true;
      Pl8.rotation.y -= 0.002;
      Pl8.receiveShadow = true;
      Pl9.rotation.y -= 0.002;
      Pl9.receiveShadow = true;


      renderer.render(scene, camera);
      requestAnimationFrame(animate);
    })();
