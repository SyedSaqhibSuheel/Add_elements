import UiList from "./components/UiList";
import Error from "./components/Error";
import Input from "./components/input";
import { useState } from "react";
import styles from "./App.css";
function App(){

  

  const[foodItems, setFoodItems]=useState(["Egg","Roti"])

  const onKeydown=(event)=>{
    if(event.key==="Enter"){
      let newFoodItem=event.target.value;
      let newFood=[...foodItems,newFoodItem];
      setFoodItems(newFood);
      
    }
  
  }

  return(
    <>
    <div className={styles.apply}>
      <h1>Buy Your Food</h1>
      <Input Handle={onKeydown} />

      <UiList ok={foodItems} />
      <Error ok={foodItems} />
    </div>
    </>
   


    
 


  )
}

export default App;