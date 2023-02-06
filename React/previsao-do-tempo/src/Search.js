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

            if(sys != undefined){
                if(weather != undefined){
                    const icon = `https://s3-us-west-2.amazonaws.com/s.cdpn.io/162656/${weather[0]["icon"]}.svg`;
                    setCidade(`
                    <div class="dados">
                    <p>Temperatura: ${main.temp}</p>
                    <p>País: ${sys.country}</p>
                    <p>Cidade: ${name}</p>
                    <p>Céu: ${weather[0]['description']}</p>
                    <img src="${icon}" />
                    </div>
                    `);
                }
                }else{
                    setCidade("");
                }
            })    
        }

    return(
        <div className="searchWraper">
        <div className="search">
        <h3>Digite a cidade que você deseja saber a previsão</h3>
        <form onSubmit={(e)=>searchInput(e)}>
        <input placeholder="Digite a cidade..." type="text" name="searchInput"></input>
        <input type="submit" value="PESQUISAR" />
        </form>
        </div>

        {
            (cidade!= "")?
            <div dangerouslySetInnerHTML={{__html: cidade}} />:
            <div>Pesquise por algo acima...</div>
        }

        </div>
    )
}

export default Search