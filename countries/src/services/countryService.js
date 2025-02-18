const URL = "https://restcountries.com/v3.1/all";


export const getCountries = async() => {
    try{
        const response = await fetch(URL);
        if(!response.ok) throw new Error("Error al obtener los países");
        return await response.json();
    } catch(error){
        console.log('error en getCountries', error);
        return []
    }
}