import {SphereGeometry, MeshStandardMaterial, Mesh} from 'three';

const geometrySphere = new SphereGeometry(5, 32, 32),
    materialSphere = new MeshStandardMaterial({color: 0xFF6347}),
    builtgeometrySphere = new Mesh(geometrySphere, materialSphere);

export default builtgeometrySphere;