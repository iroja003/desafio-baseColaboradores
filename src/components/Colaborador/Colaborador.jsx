import React, { useState } from 'react';
import { Basecolaboradores } from '../Basecolaboradores/Basecolaboradores';
//import Formulario from '../Formulario/Formulario'

const Colaborador = (Props) => {
// Variable Colaboradores: Lista Colaboradores
// Estado Inicial : BaseColabores
// setColaborados : Funcion cambia estado de Colaboradores
  let  [Colaboradores, setColaboradores] = useState(Basecolaboradores);
  let  [Namecolab, setNamecolab] = useState(""); // variable: Namecolab, Update Estado : setNamecolab.
  let  [Mailcolab, setMailcolab] = useState(""); // variable: mailcolab, Update Estado : setMailcolab.
  let  [Contaid  , setContaid  ] = useState(4) ; // variable: ContaId ( se usara como index secuencial), Update Estado : set Contaid 
  /* Function : AddColaborador
     Objetivo : Agregar un colaborador a lista de colaboradores
  */
  const addColaborador = (e) => {
      e.preventDefault(); // evitar envio de datos del formulario.
      if ( Namecolab ==='' || Mailcolab ==='') {
          alert('Favor completar nombre y correo');
      } else {
        setContaid((Contaid+1) > 0 ? (Contaid+1):0);  
        setColaboradores([...Colaboradores,{ id:Contaid, nombre:Namecolab, correo:Mailcolab}
        ]);
        setNamecolab(""); // setear input nombre
        setMailcolab(""); // setear input mail
      }
  };
  //
 return (
    <> 
      <div className='container'>
        <form onSubmit={addColaborador}>
            <label>Nombre Colaborador</label>
            <input 
                type="text" 
                className='form-control my-0' 
                placeholder='Ingrese Nombre Colaborador' 
                onChange={(e) => setNamecolab(e.target.value)} 
                />
            <label>Email  Colaborador</label>
            <input 
              type='text' 
              className='form-control my-0' 
              placeholder='Ingrese email del Colaborador'
                onChange={(e) => setMailcolab(e.target.value)}
              />
            <input 
               type='submit'
               className='btn btn-primary my-1' 
                value='Add Colaborador'
               />
        </form>
        <hr />
        <h3> Listado de Colaboradores</h3>
        <div className='listado'> 
           <div>
            <table className='table table-bordered border-primary'>
                <thead>
                  <tr>
                      <th>Id.   </th>
                      <th>Nombre</th>
                      <th>Mail  </th>
                  </tr>
                </thead>
                <tbody>
                   {Colaboradores.filter((colab) => { 
                    if ( colab.nombre.toLocaleLowerCase().includes(Props.buscastr.toLocaleLowerCase())
                     ){
                       return colab;
                    } 
                   }).map((colab)=>(
                     <tr>
                     <td key={colab.id}>{colab.id}</td> 
                     <td>{colab.nombre}</td> 
                     <td>{colab.correo}</td> 
                     </tr>
                   ))}
                </tbody>
            </table>
           </div>
        </div>
      </div>
    </>
  )
}

export default Colaborador