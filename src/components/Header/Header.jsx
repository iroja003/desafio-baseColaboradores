import React from 'react'

const Header = (Props) => {
  return (
    <>
      <nav className='navbar navbar-expand-lgh bg-dark p-0 cabecera'>
        <div className='container'>
             <h3 className='text-white'>Buscador de Colaboradores</h3>
             <form className='d-flex'>
                 <input className='form-control me-2' 
                 type='text' 
                 placeholder='Busca un colaborador'
                 onChange={(e) => {
                    Props.setBuscastr(e.target.value);
                    //console.log(e.target.value);
                 } }
                  />
             </form>
        </div>
      </nav>
    </>
  );
};

export default Header