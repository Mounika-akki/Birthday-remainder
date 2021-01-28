import React from "react";

const List = ({ people, removeItem }) => {
  return people.map((item) => {
    const { id, name, age, image } = item;
    return (
      <article key={id} className="person">
        <img src={image} alt={name} />
        <div>
          <h4 className="name">{name}</h4>
          <button
            type="button"
            className="closeBtn"
            onClick={() => removeItem(id)}
          >
            &times;
          </button>
          <p>{age} years</p>
        </div>
      </article>
    );
  });
};

export default List;
