export const SearchAPI = async(searchQuery) => {
    try{
        const response = await fetch(`https://dummyjson.com/products/search?q=${searchQuery}`)
        const res = response.json()
        return res
    }
    catch(error){
        console.log(error,'error')
    }
}
