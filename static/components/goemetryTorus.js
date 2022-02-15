import {Mesh, TorusGeometry, MeshStandardMaterial} from 'three';

const geometryTorus = new TorusGeometry(8, 3, 16, 50),
    materialTorus = new MeshStandardMaterial({color: 0xFF6347}),
    builtgeometryTorus = new Mesh(geometryTorus, materialTorus);

export default builtgeometryTorus;