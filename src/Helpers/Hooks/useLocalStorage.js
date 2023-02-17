
import { useState,useEffect } from "react";
let useLocalStorage=(intialValue,key)=>{
  const getValue=()=>{
    const storage=localStorage.getItem(key);
    if(!storage){
      return JSON.parse(storage);
    }
    return intialValue;
  }
  const [value,setValue]=useState(getValue);
  useEffect(()=>{
    localStorage.setItem(vey,JSON.stringify(value));
  },[value])
  return [value,setValue]
}
export default useLocalStorage;