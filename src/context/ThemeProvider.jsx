//COMPONENTE ENCARGADO DE PROOVER DATOS Y FUNCIONALIDADES

//IMPORTAMOS HOOKS Y EL CONTEXTO
import React, {useState} from "react";
import ThemeContext from "./ThemeContext";

//ESTRUCTURA DEL COMPONENTE PROVIDER
const ThemeProvider = ({children}) => {

    const [darkMode, setDarkMode] = useState(false);

    const toggleDarkMode = () => {
        setDarkMode(prevMode => !prevMode)
    }

   

    const ejemplo = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam aspernatur, quae debitis nobis amet, repellat quos excepturi doloribus quo perferendis explicabo vel dolorum quod neque officiis! Similique praesentium provident laudantium."

    return(
        <ThemeContext.Provider value={
            {
                darkMode,
                setDarkMode,
                toggleDarkMode,
                ejemplo
            }
        }>
            {children}
        </ThemeContext.Provider>
    )
}

export default ThemeProvider