import {GridHelper, PointLightHelper} from  "three"


const helperVisibilidad = (pointLight) => {
    const gridHelper = new GridHelper(200, 50), //Ayuda ver la grid del entorno 3D
    lightHelper = new PointLightHelper(pointLight);//Ayuda a saber la 

    return [gridHelper, lightHelper];
}


export default helperVisibilidad;