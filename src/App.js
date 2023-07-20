import './App.css';
import {Component} from "react";

class App extends Component {
    constructor() {
        super();
        this.state = {
            monsters: [
                {
                    id:'asdasd1',
                    name: 'Linda'
                }, {
                    id:'asassasa1',
                    name: 'Frank'
                }, {
                    id:'adada212',
                    name: 'Jacky'
                }]

        }
    }

    render() {
        return (
            <div className="App">
                {
                    this.state.monsters.map((monster)=>{
                        return <div key={monster.id}><h1>{monster.name}</h1></div>
                    })
                }
            </div>
        );
    }
}

export default App;
