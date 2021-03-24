import React from "react";

const categories = [
  "הנדסה",
  "מדעים",
  "מדעי הרוח",
  "מדעי החברה",
  "מדעי הרפואה ובריאות ",
  "משפטים וניהול",
  "הנדסאים",
];
function CategoryFilter({ catFilter, setCatFilter }) {
  return (
    <fieldset>
      <legend>Category</legend>
      {categories.map((cat) => (
        <label htmlFor={cat} key={cat}>
          {cat}
          <input
            type="radio"
            name={cat}
            id={cat}
            value={cat}
            checked={cat === catFilter}
            onChange={(e) => setCatFilter(e.target.value)}
          />
        </label>
      ))}
    </fieldset>
  );
}

export default CategoryFilter;
