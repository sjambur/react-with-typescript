import React, { useState } from "react";
import "./App.css";
import AddToList from "./components/AddToList";
import List from "./components/List";

export interface State {
  people: {
    name: string;
    age: number;
    url: string;
    note?: string;
  }[];
}

function App() {
  const [people, setPeople] = useState<State["people"]>([
    {
      name: "LeBron James",
      url: "https://a.espncdn.com/combiner/i?img=/i/headshots/nba/players/full/1966.png",
      age: 36,
      note: "Allergic to staying on the same team",
    },
  ]);

  return (
    <div className="App">
      <h1>People invited to my party</h1>
      <List people={people} />
      <AddToList people={people} setPeople={setPeople} />
    </div>
  );
}

export default App;
