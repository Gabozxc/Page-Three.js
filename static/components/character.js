import {Mesh, BoxGeometry, MeshBasicMaterial, TextureLoader} from 'three';

import imagen from '../img/jeff.jpg'

const meTexture = new TextureLoader().load(imagen);

const me = new Mesh(
    new BoxGeometry(3,3,3),
    new MeshBasicMaterial({map: meTexture})
);

console.log("hola")

export default me