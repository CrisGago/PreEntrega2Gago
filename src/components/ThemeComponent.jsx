import React, { useContext } from 'react';
import ThemeContext from '../context/ThemeContext';

const ThemeComponent = () => {

    //COSUMIMOS LOS DATOS QUE ESTAMOS ENVIANDO EN EL PROOVEDOR
    const {darkMode,toggleDarkMode,setDarkMode,mostrarMensaje,ejemplo} = useContext(ThemeContext)


    
    return (
        <div style={{background: darkMode ? "black" : "white",color: darkMode ? "white" : "black"}}>
            
            <button onClick={toggleDarkMode}>CAMBIAR FONDO</button>

            <p style={{background: darkMode ? "black" : "white",color: darkMode ? "white" : "black"}}>
                {ejemplo}
            </p>
            
        </div>

        
    );
};

export default ThemeComponent;