import './App.css';
import {Component} from "react";

class App extends Component {
    constructor() {
        super();
        this.state = {
            monsters: [],
            searchField: ''
        };
    }

    componentDidMount() {
        fetch('http://jsonplaceholder.typicode.com/users')
            .then(response => response.json())
            .then(users => this.setState({monsters: users}))
    }

    render() {
        const {monsters, searchField} = this.state
        const {onSearchChange} = this

        const filteredMonsters = monsters.filter((element) =>
            element.name.toLowerCase().includes(searchField))


        return (
            <div className="App">
                <input className='searchBox'
                       type='search'
                       placeholder='search monsters'
                       onChange={onSearchChange}/>
                {
                    filteredMonsters.map((monster) => {
                        return <div key={monster.id}><h1>{monster.name}</h1></div>
                    })
                }
            </div>
        );
    }

    onSearchChange = (event) => {
        const searchField = event.target.value.toLocaleLowerCase()
        this.setState(() => {
            return {searchField};
        })
    }

}

export default App;
