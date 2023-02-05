import { useState } from "react";

function Search(props){

    const [cidade, setCidade] = useState("")

    function searchInput(e){
        e.preventDefault()
        let currentValue = document.querySelector('input[name=searchInput]').value

        const url = `https://api.openweathermap.org/data/2.5/weather?q=${currentValue}&appid=1b9e4ad1bb00b93948d5cf147a93fc98&units=metric`;
        fetch(url)
        .then(response=> response.json())
        .then(data=>{
            const {main, name, sys, weather} = data;
            if(sys != undefined)
                console.log(sys);
            if(weather != undefined)
                console.log(weather[0]['description']);
        })
    }

    return(
        <div className="search">
        <h3>Digite a cidade que você deseja saber a previsão</h3>
        <form onSubmit={(e)=>searchInput(e)}>
        <input placeholder="Digite a cidade..." type="text" name="searchInput"></input>
        <input type="submit" value="PESQUISAR" />
        </form>
        </div>
    )
}

export default Search