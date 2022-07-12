// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore, getDocs, getDoc, doc, collection, query, where, setDoc, addDoc, Timestamp } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyCvzPmDCtFns8W_GihPlkqnVhCXTBylyYk",
  authDomain: "waymara-coder.firebaseapp.com",
  projectId: "waymara-coder",
  storageBucket: "waymara-coder.appspot.com",
  messagingSenderId: "1030259211507",
  appId: "1:1030259211507:web:8aaa80c7a6e5c0194d8b86"
};

const appFirebase = initializeApp(firebaseConfig);

const appFirestore = getFirestore(appFirebase);



export async function traerProductos() {
  
  const productosCollection = collection(appFirestore, "productos");
  
  const productosSnapshot = await getDocs(productosCollection);

  let respuesta = productosSnapshot.docs.map ( doc => {
    
    return {
      ...doc.data(),
      id: doc.id
    }

  })

  return respuesta;
}



export async function traerProductosDeCategoria(categoryId) {

  const productosCollection = collection(appFirestore, "productos");

  const q = query(productosCollection, where("category", "==", categoryId));

  const productosSnapshot = await getDocs(q);

  let respuesta = productosSnapshot.docs.map ( doc => {
    
    return {
      ...doc.data(),
      id: doc.id
    }

  })

  return respuesta;
}



export async function traerUnProducto(itemId) {
  
  const docRef = doc(appFirestore, "productos", itemId);
  
  const docSnapshot = await getDoc(docRef);

  return { id: docSnapshot.id, ...docSnapshot.data()};
}



export async function exportDataToFirestore() {
  const productos = [
    {
      name: 'Camisola Oasis',
      category: 'urban',
      description: 'Modelo amplio. Mangas 3/4 con tajo. Seda fina importada. Estampado tipo distorsión.',
      tagline: 'Lucí espléndida y a la moda',
      price: 3899,
      pictureURL: 'https://gonzalotortola.github.io/waymara-coder/assets/img/urban/Urban-1.png',
      stock: 7,
  },
  {
      name: 'Remerón Celestina',
      category: 'urban',
      tagline: 'Lucí espléndida y a la moda',
      description: 'Línea amplia. Con detalles tajo a los costados con vuelo. Piquet de algodón azul francia.',
      price: 4299,
      pictureURL: 'https://gonzalotortola.github.io/waymara-coder/assets/img/urban/Urban-2.png',
      stock: 2,
  },
  {
      name: 'Remerón Waymara',
      category: 'urban',
      tagline: 'Lucí espléndida y a la moda',
      description: 'Remera manga larga. Modelo amplio. Microfibra sublimada. Full print ESPECIAL.',
      price: 2799,
      pictureURL: 'https://gonzalotortola.github.io/waymara-coder/assets/img/urban/Urban-3.png',
      stock: 5,
  },
  {
      name: 'Remera Sally',
      category: 'urban',
      tagline: 'Lucí espléndida y a la moda',
      description: 'Mangas 3/4. Hombro caído. Escote en V. Jersey flame. Cómoda y versátil.',
      price: 1999,
      pictureURL: 'https://gonzalotortola.github.io/waymara-coder/assets/img/urban/Urban-4.png',
      stock: 10,
  },
  {
      name: 'Remera Rachel',
      category: 'urban',
      tagline: 'Lucí espléndida y a la moda',
      description: 'Jersey flame. Blanco con rayas lateral negro. Modelo comfie, amplio.',
      price: 2399,
      pictureURL: 'https://gonzalotortola.github.io/waymara-coder/assets/img/urban/Urban-5.png',
      stock: 8,
  },
  {
      name: 'Remera Zia',
      category: 'urban',
      tagline: 'Lucí espléndida y a la moda',
      description: 'Remera en crepe de poul. Modelo amplio. Color amarillo limón.',
      price: 2799,
      pictureURL: 'https://gonzalotortola.github.io/waymara-coder/assets/img/urban/Urban-6.png',
      stock: 4,
  },
  {
      name: 'Short Gianna',
      category: 'urban',
      tagline: 'Lucí espléndida y a la moda',
      description: 'Pantalón corto. Cintura alta con elástico. Cinturón con hebilla de metal. Tela Creppe Crash.',
      price: 3499,
      pictureURL: 'https://gonzalotortola.github.io/waymara-coder/assets/img/urban/Urban-7.png',
      stock: 12,
  },
  {
      name: 'Remera Alyn',
      category: 'urban',
      tagline: 'Lucí espléndida y a la moda',
      description: 'Jersey acanalado con sisas y cintura con volados. También disponible en otros colores.',
      price: 1999,
      pictureURL: 'https://gonzalotortola.github.io/waymara-coder/assets/img/urban/Urban-8.png',
      stock: 9,
  },
  {
    name: 'Biker Amor',
    category: 'energy',
    description: 'Calza rosa corta. Tela POLISAP sport dry silver con protección UV.',
    tagline: '¡Entrená con estilo!',
    price: 2699,
    pictureURL: 'https://gonzalotortola.github.io/waymara-coder/assets/img/energy/Energy-1.png',
    stock: 3,
  },
  {
      name: 'Top Lavanda',
      category: 'energy',
      tagline: '¡Entrená con estilo!',
      description: 'Forrado. Tela POLISAP sport dry silver con protección UV.',
      price: 2799,
      pictureURL: 'https://gonzalotortola.github.io/waymara-coder/assets/img/energy/Energy-2.png',
      stock: 2,
  },
  {
      name: 'Conjunto Tina',
      category: 'energy',
      tagline: '¡Entrená con estilo!',
      description: 'Buzo y jogging de microfibra jaspeada en color gris melange, con detalles en negro.',
      price: 8299,
      pictureURL: 'https://gonzalotortola.github.io/waymara-coder/assets/img/energy/Energy-3.png',
      stock: 6,
  },
  {
      name: 'Conjunto Ocean',
      category: 'energy',
      tagline: '¡Entrená con estilo!',
      description: 'Top y calza, microfibra AIR FIT sublimada full azul geomético.',
      price: 2799,
      pictureURL: 'https://gonzalotortola.github.io/waymara-coder/assets/img/energy/Energy-4.png',
      stock: 13,
  },
  {
      name: 'Buzo Olivia',
      category: 'energy',
      tagline: '¡Entrená con estilo!',
      description: 'Buzo con capucha de lanilla en color verde oliva con detalles en negro.',
      price: 4699,
      pictureURL: 'https://gonzalotortola.github.io/waymara-coder/assets/img/energy/Energy-5.png',
      stock: 4,
  },
  {
      name: 'Campera Bomber Rama',
      category: 'energy',
      tagline: '¡Entrená con estilo!',
      description: 'Campera de microfibra con lycra sublimada, estampado de hojas full print.',
      price: 4599,
      pictureURL: 'https://gonzalotortola.github.io/waymara-coder/assets/img/energy/Energy-6.png',
      stock: 8,
  },
  {
      name: 'Sudadera Amber Nude',
      category: 'energy',
      tagline: '¡Entrená con estilo!',
      description: 'Musculosa amplia de microfibra sedificada. Tecnología dry-fit antisudor.',
      price: 2899,
      pictureURL: 'https://gonzalotortola.github.io/waymara-coder/assets/img/energy/Energy-7.png',
      stock: 5,
  },
  {
      name: 'Top Cancún',
      category: 'energy',
      tagline: '¡Entrená con estilo!',
      description: 'Top deportivo de microfibra sublimada con estampado en color amarillo y negro.',
      price: 1699,
      pictureURL: 'https://gonzalotortola.github.io/waymara-coder/assets/img/energy/Energy-8.png',
      stock: 6,
  },
  {
    name: 'Soft Cream Vitality',
    category: 'cosmetica',
    description: 'Crema humectante corporal con aceites naturales de naranjas y jenjibre con activos de aloe vera, caléndula y hanmamelis.',
    tagline: '¡Entrená con estilo!',
    price: 830,
    pictureURL: 'https://gonzalotortola.github.io/waymara-coder/assets/img/cosmetica/Cosmetica-1.png',
    stock: 5,
  },
  {
    name: 'Body Splash | Vitality',
    category: 'cosmetica',
    tagline: '¡Entrená con estilo!',
    description: 'Rocío corporal que renueva y levanta las energias con la exquisita fragancia cítrica oriental.',
    price: 999,
    pictureURL: 'https://gonzalotortola.github.io/waymara-coder/assets/img/cosmetica/Cosmetica-2.png',
    stock: 4,
  },
  {
    name: 'Jabón líquido Vitality',
    category: 'cosmetica',
    tagline: '¡Entrená con estilo!',
    description: 'Delicioso jabón aromático con extractos cítricos que deja tu piel sedosa y perfumada.',
    price: 799,
    pictureURL: 'https://gonzalotortola.github.io/waymara-coder/assets/img/cosmetica/Cosmetica-3.png',
    stock: 6,
  },
  {
    name: 'Esmalte Naked Golden',
    category: 'cosmetica',
    tagline: '¡Entrená con estilo!',
    description: 'Vibra con los colores de la colección Ayres del Norte de esmaltes WayBeauty.',
    price: 349,
    pictureURL: 'https://gonzalotortola.github.io/waymara-coder/assets/img/cosmetica/Cosmetica-4.png',
    stock: 10,
  },
  {
    name: 'Esmalte Ruby Red',
    category: 'cosmetica',
    tagline: '¡Entrená con estilo!',
    description: 'Vibra con los colores de la colección Ayres del Norte de esmaltes WayBeauty.',
    price: 349,
    pictureURL: 'https://gonzalotortola.github.io/waymara-coder/assets/img/cosmetica/Cosmetica-5.png',
    stock: 5,
  },
  {
    name: 'WaySkin | Crema exfoliante',
    category: 'cosmetica',
    tagline: '¡Entrená con estilo!',
    description: 'Crema exfoliante para manos y pies elaborado con pepitas de durazno y lanolina.',
    price: 799,
    pictureURL: 'https://gonzalotortola.github.io/waymara-coder/assets/img/cosmetica/Cosmetica-6.png',
    stock: 5,
  },
  {
    name: 'WaySkin | Crema humectante',
    category: 'cosmetica',
    tagline: '¡Entrená con estilo!',
    description: 'Crema de renovación profunda para pies resecos. Elaborada a base de lanolina, té verde y urea.',
    price: 799,
    pictureURL: 'https://gonzalotortola.github.io/waymara-coder/assets/img/cosmetica/Cosmetica-7.png',
    stock: 5,
  },
  {
    name: 'Body Splash | Flower White',
    category: 'cosmetica',
    tagline: '¡Entrená con estilo!',
    description: 'Un intenso y cautivador rocío corporal elaborado a base de gardenia, conocida como "la flor del romance".',
    price: 999,
    pictureURL: 'https://gonzalotortola.github.io/waymara-coder/assets/img/cosmetica/Cosmetica-8.png',
    stock: 8,
  },
  {
    name: 'Body Splash | Energía Vibrante',
    category: 'perfumeria',
    description: 'Fragancia cítrica frutal y vivificante. Ideal para cuando necesites un plus de energía. Revela notas tropicales, vibrantes.',
    tagline: '¡Entrená con estilo!',
    price: 1149,
    pictureURL: 'https://gonzalotortola.github.io/waymara-coder/assets/img/perfumes/Perfumes-1.png',
    stock: 5,
  },
  {
      name: 'Body Splash | Transformación',
      category: 'perfumeria',
      tagline: '¡Entrená con estilo!',
      description: 'Fragancia cálida y relajante. Esencias para cambiar tus vibraciones y aliviar tu cuerpo, mente y alma.',
      price: 1149,
      pictureURL: 'https://gonzalotortola.github.io/waymara-coder/assets/img/perfumes/Perfumes-2.png',
      stock: 4,
  },
  {
      name: 'Body Splash | Delicate Flower',
      category: 'perfumeria',
      tagline: '¡Entrená con estilo!',
      description: 'Rocío corporal con fragancia suave, delicada y misteriosa que desprende una estela floral con acentos orientales y toques frutales.',
      price: 1149,
      pictureURL: 'https://gonzalotortola.github.io/waymara-coder/assets/img/perfumes/Perfumes-3.png',
      stock: 6,
  },
  {
      name: 'Body Splash | Rose of Women',
      category: 'perfumeria',
      tagline: '¡Entrená con estilo!',
      description: 'Rocío corporal que se percibe desde sus inicios con un ligero y adictivo aroma frutal de la discreta mezcla tonka, jazmín y pachuli.',
      price: 1149,
      pictureURL: 'https://gonzalotortola.github.io/waymara-coder/assets/img/perfumes/Perfumes-4.png',
      stock: 10,
  },
  {
      name: 'Fragancias Home | Mandarina y Frutos Rojos',
      category: 'perfumeria',
      tagline: '¡Entrená con estilo!',
      description: 'Armoniza los ambientes. Equilibra la energía de los chakras.',
      price: 799,
      pictureURL: 'https://gonzalotortola.github.io/waymara-coder/assets/img/perfumes/Perfumes-5.png',
      stock: 5,
  },
  {
      name: 'Inda | Eau de perfum',
      category: 'perfumeria',
      tagline: '¡Entrená con estilo!',
      description: 'Dulce aroma floral con toque de frutas y almizcle.',
      price: 1759,
      pictureURL: 'https://gonzalotortola.github.io/waymara-coder/assets/img/perfumes/Perfumes-6.png',
      stock: 5,
  },
  {
      name: 'Meira | Eau de perfum',
      category: 'perfumeria',
      tagline: '¡Entrená con estilo!',
      description: 'Elaborado a base de múltiples matices olfativos. Notará un aroma cítrico y flores con un toque amaderado.',
      price: 1759,
      pictureURL: 'https://gonzalotortola.github.io/waymara-coder/assets/img/perfumes/Perfumes-7.png',
      stock: 5,
  },
  {
      name: 'Red Seduction | Eau de Toilette',
      category: 'perfumeria',
      tagline: '¡Entrená con estilo!',
      description: 'Atrevidas notas de grosella roja y el exótico lichi y rosas. De base: vetiver y vainilla, proporcionan un acabado sorprendente.',
      price: 1149,
      pictureURL: 'https://gonzalotortola.github.io/waymara-coder/assets/img/perfumes/Perfumes-8.png',
      stock: 8,
  },
  ];

  const productoCollection = collection(appFirestore, "productos");

  productos.forEach(item => {
   
    const newDoc = doc(productoCollection);

    setDoc(newDoc, item).then( res => {
      console.log("Documento guardado:", newDoc.id)
    })
    .catch((error) => console.log("Error obteniendo los datos: ", error))
  }) 
  
}


export async function createBuyOrder( dataOrder ) {
  
  const orderCollectionRef = collection(appFirestore, "orders");

  const dateTimestamp = Timestamp.now();

  const dataOrderWithDate = {
    buyer: dataOrder.buyer,
    items: dataOrder.items,
    date: dateTimestamp,
    total: dataOrder.total,
  }

  const orderCreated = await addDoc(orderCollectionRef, dataOrderWithDate);

  return orderCreated;
}

export default appFirestore;