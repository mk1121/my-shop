import {useState , useEffect} from "react";
function useCustomHook(){
  const [prd,setProducts] = useState([])
 useEffect(() => {
    fetch('https://fakestoreapi.com/products')
    .then(res => res.json())
    .then(data => setProducts(data))
  },[])
  return prd; 
  }
  export default useCustomHook
