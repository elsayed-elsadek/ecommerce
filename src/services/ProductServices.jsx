import axios from "axios";

    const BASE_URL = 'https://fakestoreapi.com/products' ;

export const fetchAllProducts =async ()=>{
    try{
        const response =await axios.get(BASE_URL);
        return response.data ;
    } catch(error){
        console.log('Error fetch products' , error);
        throw error ;   
    }

};


export const fetchProductById =async (id)=> {
    try{
        const response = await axios.get(`${BASE_URL}/${id}`)
      return  response.data ;
    }catch(error){
        console.log(`error feyching from id ${id}` , error);
        throw error
    }
}
