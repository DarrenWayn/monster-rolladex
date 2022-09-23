import { useState, useEffect } from "react";
import CardList from "./components/card-list/CardList";
import SearchBox from "./components/search-box/SearchBox";
import AutoSuggest from "./components/auto-suggestion/AutoSuggest";
import "./App.css";

function App() {
  const [monsters, setMonsters] = useState([]);
  const [suggestions, setSuggestions] = useState([]);
  const [searchField, setSearchField] = useState("");

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((users) => setMonsters(users));
  }, []);

  const filteredMonster = monsters.filter((monster) =>
    monster.name.toLocaleLowerCase().includes(searchField)
  );

  const handleChange = (e) => {
    const onSearch = e.target.value;
    setSearchField(onSearch.toLocaleLowerCase());
    setSuggestions(filteredMonster);
  };

  const handleChoose = (suggest) => {
    setSearchField(suggest.name.toLocaleLowerCase());
  };

  return (
    <div className="App">
      <h1 className="app-title">Monster Rolladex</h1>
      <SearchBox
        handleChange={handleChange}
        placeholder="Search monster"
        value={searchField}
        className={searchField ? "mb-none" : "search-box"}
        type="search"
      />
      {searchField && (
        <AutoSuggest suggestions={suggestions} handleChoose={handleChoose} />
      )}
      <CardList monsters={filteredMonster} searchField={searchField} />
    </div>
  );
}

export default App;
