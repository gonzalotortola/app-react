// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore, getDocs, getDoc, doc, collection, query, where } from 'firebase/firestore';

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
  
  const docref = doc(appFirestore, "productos", itemId);
  
  const docSnapshot = await getDoc(docref);

  return { id: docSnapshot.id, ...docSnapshot.data()};
}

export default appFirestore;