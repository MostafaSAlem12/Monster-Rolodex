// import { Component } from 'react';
import { useState, useEffect } from 'react';
import logo from './logo.svg';
import CardList from './components/card-list/card-list.component';
import SearchBox from './components/search-box/search-box.component';
import './App.css';

const App = () => {
  console.log('Render');

  const [searchField, setSearchField] = useState('');
  const [monsters, setMonsters] = useState([])
  const [filterdMonsters, setFilterdMonsters] = useState(monsters)


  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then((users) => setMonsters(users),
      );
  }, []
  )

  useEffect(() => {
    const newFilterdMonsters = monsters.filter((monster) => {
      return monster.name.toLocaleLowerCase().includes(searchField)
    })
    setFilterdMonsters(newFilterdMonsters)
  }, [monsters, searchField])
  const onSeacrhChange = (event) => {
    const searchFieldString = event.target.value.toLocaleLowerCase();
    setSearchField(searchFieldString);
  }

  // const filterdMonsters = monsters.filter((monster) => {
  //   return monster.name.toLocaleLowerCase().includes(searchField)
  // });

  return (
    <div className="App" >
      <h1 className='app-title'>Monster Rolodex</h1>

      <SearchBox
        className='search-box'
        onChangeHandler={onSeacrhChange}
        placeholder='search monsters' />
      <CardList monsters={filterdMonsters} />
    </div >
  );
}

// class App extends Component {
//   constructor() {
//     super();
//     this.state = {
//       monsters: [],
//       searchField: '',
//     }
//   }
// componentDidMount() {
//   fetch('https://jsonplaceholder.typicode.com/users')
//     .then(response => response.json())
//     .then((users) => this.setState(() => {
//       return { monsters: users }
//     },
//       () => { console.log(this.state) }
//     ))
// }

//   onSeacrhChange = (event) => {
//     const searchField = event.target.value.toLocaleLowerCase();
//     this.setState(() => {
//       return { searchField };
//     })
//   };

//   render() {
//     const { monsters, searchField } = this.state;
//     const { onSeacrhChange } = this;
//     const filterdMonsters = monsters.filter((monster) => {
//       return monster.name.toLocaleLowerCase().includes(searchField)
//     });
//     return (
//       <div className="App" >
//         <h1 className='app-title'>Monster Rolodex</h1>
//         <SearchBox
//           onChangeHandler={onSeacrhChange}
//           placeholder='search monsters'
//           className='search-box' />
//         <CardList monsters={filterdMonsters} />
//       </div >
//     );
//   }
// }

export default App;
