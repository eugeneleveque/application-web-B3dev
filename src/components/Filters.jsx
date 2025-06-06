import React from "react";

const Filters = ({ filters, setFilters }) => {
  const categories = ["All", "Pierres de caractère", "Pierres relax", "Cailloux de légende", "Armes naturelles", "Pierres de compagnie"];

  const handleCategory = (cat) => {
    setFilters(prev => ({ ...prev, category: cat }));
  };

  const handlePrice = (e) => {
    setFilters(prev => ({ ...prev, price: parseFloat(e.target.value) }));
  };

  const resetFilters = () => {
    setFilters({ category: "All", price: 20 });
  };

  return (
    <div className="space-y-4">
      <h3 className="font-bold">Categories</h3>
      <ul className="space-y-1">
        {categories.map(cat => (
          <li key={cat}>
            <button
              className={`text-sm ${filters.category === cat ? "text-yellow-700 font-semibold" : "text-gray-600"}`}
              onClick={() => handleCategory(cat)}
            >
              {cat}
            </button>
          </li>
        ))}
      </ul>

      <h3 className="font-bold mt-4">Price</h3>
      <p className="text-red-600 font-semibold">${filters.price}</p>
      <input
        type="range"
        min="0"
        max="20"
        value={filters.price}
        onChange={handlePrice}
        className="w-full"
      />

      <button
        onClick={resetFilters}
        className="mt-4 px-3 py-1 border border-red-500 text-red-500 rounded hover:bg-red-100"
      >
        Reset Filters
      </button>
    </div>
  );
};

export default Filters;
