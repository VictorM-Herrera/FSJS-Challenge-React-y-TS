// import React,{useState} from 'react'

// export const Test = () => {
//     //let nombre= "Victor Maximiliano Herrera";
//     let array=["Maximiliano",
//         "Victor",
//         "El pepe",
//         "Ete Setch"
//     ];
    
//     const[nombre,setNombre] = useState("Victor Maximiliano Herrera")
//     function cambiarNombre()
//     {
//         const nuevoName=document.getElementById("nombre").value;
//         setNombre(nuevoName);
//     }

//   return (
//     <div>
//         <h1>Como te llaman?</h1>
//         <span><strong>{nombre}</strong>, o tambien me conocen como:</span>
//         <ul>
//             {
//                 array.map((element, key)=>{
//                     return(
//                     <li key={key}>{element}</li>)
//                 })
//             }
//         </ul>
//         <label htmlFor="nombre">Ingrese tu nombre: </label>
//         <input type="text" id='nombre'/>
//         <input type="button" value="Enviar" onClick={cambiarNombre}/>
        
//     </div>
//   )
// }
