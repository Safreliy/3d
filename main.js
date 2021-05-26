document.addEventListener("DOMContentLoaded", function(event) {
    var scene = new THREE.Scene();
    var camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    var renderer = new THREE.WebGLRenderer();
    renderer.setSize(window.innerWidth, window.innerHeight);
    document.body.appendChild(renderer.domElement);
    const geometry = new THREE.ConeGeometry( 10, 10, 100, 100, true, 0, Math.PI); //radius, height, radialSegments,heightSegments, openEnded,thetaStart, thetaLength
    const material = new THREE.MeshPhongMaterial( {
        color: 0xdaa520,
        specular: 0xbcbcbc,
    } );
    material.side = THREE.DoubleSide;

    var frontSpot = new THREE.SpotLight(0xeeeece);
    frontSpot.position.set(1000, 1000, 1000);
    scene.add(frontSpot);
    var frontSpot2 = new THREE.SpotLight(0xddddce);
    frontSpot2.position.set(-300, -300, -300);
    scene.add(frontSpot2);

    const cone1 = new THREE.Mesh( geometry, material );
    cone1.rotation.z = Math.PI;
    cone1.rotation.y = Math.PI;
    cone1.position.y -= 10;


    const cone3 = new THREE.Mesh( geometry, material );
    cone3.position.y -= 5;
    cone3.position.z += 5;
    cone3.rotation.y = Math.PI;
    cone3.rotation.x = Math.PI/2;

    const cone2 = new THREE.Mesh( geometry, material );
    cone2.rotation.z = Math.PI;
    cone2.rotation.y = Math.PI;
    cone2.position.y -= 10;

    const cone4 = new THREE.Mesh( geometry, material );

    cone3.add(cone1);
    cone4.add(cone3);
    cone4.add(cone2);
    scene.add( cone4 );

    camera.position.z = 25;

    cone4.rotation.x += 3;
    cone4.rotation.y += 3;
    cone4.rotation.z += 3;
    function render() {

        requestAnimationFrame(render);
         cone4.rotation.x += 0.01;
         cone4.rotation.y += 0.01;
         cone4.rotation.z += 0.01;
        renderer.render(scene, camera);
    }

    render();
});