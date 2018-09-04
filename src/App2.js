import React, {Component} from 'react'
import axios from 'axios'

class App extends Component {
    klikGet (){
        var url = 'https://facebook.github.io/react-native/movies.json'
        axios.get(url)
        .then(()=>{
            console.log(x)
        })
    }
    render() {
        return (
            <div>
                <h3></h3>
                <button onClick={()=>{this.klikGet()}}>GET API</button>
            </div>
        )
    }
}