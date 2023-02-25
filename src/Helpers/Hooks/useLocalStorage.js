
import { useState,useEffect } from "react";

const useLocalStorage=(key,intialValue)=>{

  const getValue=()=>{
    const storage=localStorage.getItem(key);
    if(storage){
      return JSON.parse(storage);
    }
    return intialValue;
  }
  
  const [value,setValue]=useState(getValue);

  useEffect(()=>{
    localStorage.setItem(key,JSON.stringify(value));
  },[value])

  return [value,setValue]
}

export default useLocalStorage;