import { useState } from "react"; 
import { AddCategory, GifGrid } from "./components/";


export const GitExpertApp = () => {

    const [categories, setCategories] = useState([ 'One Punch' ]);
    
    // Insertar Valorant al useState o arreglo
    const onAddCategory = (newCategory) =>{
        if(categories.includes(newCategory)) return;
        // Opcion 1
        setCategories([ newCategory, ...categories ]);
        //Opcion 2
        //setCategories( cat => [ ...cat, newCategory ] );
    }

  return (
    <>
        {/* titulo */}
        <h1>GitExpertApp</h1>

        {/* Input */}
        <AddCategory 
            //setCategories={setCategories}
            onNewCategory={ (value) => onAddCategory(value)}
        />
        {/* Listado de Gif */}
        
        
            { categories.map((category) => (
                <GifGrid 
                key={category}
                category={category}
                />
            )
                 
        ) }
            {/* <li> ABC </li> */}
        
            {/* Gif Item */}
    </>
  )
}
