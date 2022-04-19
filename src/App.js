import { useState } from 'react';
import './App.css';
import Categories from './componants/Categories';
import menu from './componants/data';
import MenuItem from './componants/MenuItem';

const allCategories = ['all', ...new Set(menu.map((item) => item.category))];

console.log(allCategories)
function App() {
  const [items , setItems] = useState(menu);
  const [categories, setCategories] = useState(allCategories);

  const filterItems = (category) => {
    if (category === 'all') {
      setItems(menu);
      return;
    }
    const newItems = menu.filter((item) => item.category === category);
    setItems(newItems);
  };

  return (
    <main>
      <section className="menu section">
        <div className="title">
          <h2>our menu</h2>
          <div className="underline"></div>
        </div>
        <Categories categories={categories} filterItems={filterItems} />
        <MenuItem items={items} />
      </section>
    </main>
  );
}

export default App;
