GET_API = "www.thecocktaildb.com/api/json/v1/1/random.php";


async function getCocktailData(){
    try {
        const response = await fetch(GET_API);
        const responseJSON = await response.json();
        console.log(responseJSON)

    }
    catch(error){
        console.log("error")
    }
}
getCocktailData()