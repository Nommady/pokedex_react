import React, { Component, Fragment } from 'react'
import axios from 'axios'
import ApiLista from './components/ChamadaDaApiParaLista'
import "./App.css"





class App extends Component {
    state = {
        pokemons: [],
        dado: [],
    }

     componentDidMount() {
        ApiLista.get(" ")
         .then((resposta)=>{
             this.setState({ pokemons: resposta.data.results })               
             

            for(let i = 0; i < resposta.data.results.length; i++ ){                
                axios.get('https://pokeapi.co/api/v2/pokemon/'+ resposta.data.results[i].name)
                .then(dados=>{            
                    this.setState({ dado :[ ...this.state.dado, dados.data ]})          
                    
                })
            }
                
            })
        }
   

    render() {
        const { dado } = this.state
        return (
            <Fragment>
                <h1 className="TituloDaLista">Pokedex</h1>
            <div className="full">
                {dado.map(pokemon => {
                    return (
                        <div className="App">
                            <ul className="ListaPokemon">                               
                                <li  className="ItemDaListaPokemon">
                                    <h6>#{pokemon.id} - {pokemon.name} </h6><img className="imageCard" alt="pokemon" src={pokemon.sprites.front_default}></img>
                                    <p>{pokemon.types[0].type.name}</p>
                                </li>
                            </ul>
                        </div>
                    )
                })}
              
            </div>
           
            </Fragment>
        )
    }
}

export default App;