import {SphereGeometry, MeshStandardMaterial, Mesh, MathUtils} from 'three'

function addStart(scene) {

 console.log(scene)

    const geometry = new SphereGeometry(0.25, 24, 24),
          material = new MeshStandardMaterial({color: 0xFFFF}),
          star = new Mesh(geometry, material);
    const [x, y, z] = Array(3).fill().map(() => MathUtils.randFloatSpread(100));

          star.position.set(x, y, z);
          scene.add(star);
}

export default addStart;