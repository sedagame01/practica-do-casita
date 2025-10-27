/* VARIABLES */
/* capturar elementos DOM */
const imagenBanner = document.querySelector('#bienvenidos img')
const contenedor = document.querySelector(`#recomendados .flexContainer` )
const fragmento =document.createDocumentFragment();
/* Acceder al elemento del DOM para crear los artículos de viajes */


/* Acceder al elemento del DOM para crear añadir los options */

const arrayBanners = [
    {
        id: 1,
        src: 'assets/banner/1.jpg',
        alt: 'Banner uno'
    },
    {
        id: 2,
        src: 'assets/banner/2.jpg',
        alt: 'Banner uno'
    },
    {
        id: 3,
        src: 'assets/banner/3.jpg',
        alt: 'Banner uno'
    },
    {
        id: 4,
        src: 'assets/banner/4.jpg',
        alt: 'Banner uno'
    },
    {
        id: 5,
        src: 'assets/banner/5.jpg',
        alt: 'Banner uno'
    },
    {
        id: 6,
        src: 'assets/banner/6.jpg',
        alt: 'Banner uno'
    },
    {
        id: 7,
        src: 'assets/banner/7.jpg',
        alt: 'Banner uno'
    },
    {
        id: 8,
        src: 'assets/banner/8.jpg',
        alt: 'Banner uno'
    },
]
//creamos los banners con la info 
const viaje =[{
        destino:"barcelona",
        parrafo:"ciudad muy bonita casa del mejor equipo del mundo",
        imagen:"assets/viajes/barcelona.jpg"
    },
    {
        destino:"madrid",
        parrafo:"ciudad muy concurrida hogas del segundo mejor equipo del mundo",
        imagen:"assets/viajes/Madrid.jpg"
    },

    {
        destino:"paris",
        parrafo:"Una de las ciudades mas visitadas del mundo por su encanto y romanticismo, mas no por su gente",
        imagen:"assets/viajes/paris.jpg"
    },
]
//creamos una contenedor para los elemtos creados
const recomendados = ()=>{

    viaje.forEach(element => {
    //paso 1 creamos las etiquetas a utilizar
    const arti=document.createElement(`ARTICLE`)
    const titul=document.createElement(`h2`)
    const conteImagen=document.createElement(`div`)
    const img=document.createElement(`img`)
    const descripcion=document.createElement(`p`)


    //paso 2 asignarle valores y atributos

    arti.classList.add(`cartaViaje`);//asigna clase
    titul.textContent=element.destino
    //le asignamos los atributos de ruta y alt a las img
    img.setAttribute(`src`,element.imagen)
    img.setAttribute(`alt`,`es una imagen de ${element.destino}`)
    descripcion.textContent=element.parrafo

    // paso 3 añadimos las etiquetas creadas a cada arti en cada vuelta 
    conteImagen.append(img)//img a contenedor y contenedor a arti    
    arti.append(titul)
    arti.append(conteImagen)
    arti.append(descripcion)

    // paso 4 añadimso el arti al fragmeto
    fragmento.append(arti);
    

});

/* tenemos ahora el fragmento con todos los arti metido
tenemos que añadirlos al selec principal por medio del 
contenedor */
    contenedor.append(fragmento);

}



const arrayViajes = {

}
const arrayDestinos = {}


/* EVENTOS */

/* FUNCIONES */
const aleatorio = () => {
    const indice = Math.floor(Math.random() * arrayBanners.length);
    return indice;
};

const pintarBanner = () => {
    //guardamos la invocacion del numero random
    const indice = aleatorio();
    //asignamos el numero random como indice en una constante
    const elemento = arrayBanners[indice];
    imagenBanner.setAttribute('src', elemento.src);
    imagenBanner.alt = elemento.alt;
};






/* INVOCACIÓN A LAS FUNCIONES */
pintarBanner()

recomendados()