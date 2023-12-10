//COMPONENTE ENCARGADO DE INSTANCIAR EL CONTEXTO

//IMPORTAMOS EL createContext
import { createContext } from "react";

//CREAMOS EL NUEVO CONTEXTO
const ThemeContext = createContext();

//EXPORTAR EL CONTEXTO PARA QUE PUEDA SER UTILIZADO EN OTROS COMPONENTES
export default ThemeContext;