import {Mesh, SphereGeometry, MeshStandardMaterial, TextureLoader} from 'three';

import moonImg from '../img/moon.jpg'
import textureZone from '../img/texture.jpg'


const moonTexture = new TextureLoader().load(moonImg);
const texturaLuna = new TextureLoader().load(textureZone);

const moon = new Mesh(
  new SphereGeometry(3, 32, 32),
  new MeshStandardMaterial({
      map:moonTexture,
      normalMap: texturaLuna,
      color: 0xFFFF,
    })
)

moon.position.z = 30;
moon.position.setX(-10);


export default moon