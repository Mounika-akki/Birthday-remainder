import React, { useState } from "react";
import data from "./data";
import List from "./List";

function App() {
  const [people, setPeople] = useState(data);
  function clearAllRecords() {
    setPeople([]);
  }

  const removeItem = (id) => {
    const newPeople = people.filter((item) => item.id !== id);
    setPeople(newPeople);
  };

  return (
    <>
      <main>
        <section className="container">
          <h3>{people.length} Birthdays Today</h3>
          <List people={people} removeItem={removeItem} />
          <button
            className="clearAllBtn"
            type="button"
            onClick={clearAllRecords}
          >
            Clear All
          </button>
        </section>
      </main>
    </>
  );
}

export default App;
