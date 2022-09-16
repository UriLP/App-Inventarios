// import { addDoc, collection, doc, DocumentSnapshot, getDocs, updateDoc } from "firebase/firestore";
// import { db } from "./config";

// const colMedi = collection(db, "medicinas");

// export const getAllMedicinas = async() => {
//     const respuesta = await getDocs(colMedi);
//     const allMedicinas = [];
//     respuesta.forEach( (medicina) => {
//         allMedicinas.push({...medicina.data(), id : medicina.id});
//     });
//     return allMedicinas;
// }