import React from 'react';
import '../componentsStyles/Menu.css'
import food1 from '../../public/food1.jpg';
import food2 from '../../public/food2.jpg';
import food3 from '../../public/food3.jpg';
import food4 from '../../public/food4.jpg';
import food5 from '../../public/food5.jpg';
import food6 from '../../public/food6.jpg';
import food7 from '../../public/food7.jpg';
import food8 from '../../public/food8.jpg';
import food9 from '../../public/food9.jpg';
import food10 from '../../public/food10.jpg';
import food11 from '../../public/food11.jpg';
import food12 from '../../public/food12.jpg';

function Menu() {
  const menuItems = [
    { id: 1, name: 'Margherita Pizza', desc: 'Tomato, mozzarella & fresh basil.', price: '$12.99', img: food1 },
    { id: 2, name: 'Pasta Carbonara', desc: 'Creamy sauce with pancetta & egg yolk.', price: '$14.99', img: food3 },
    { id: 3, name: 'Caesar Salad', desc: 'Romaine, parmesan & croutons.', price: '$9.99', img: food4 },
    { id: 4, name: 'Grilled Salmon', desc: 'Served with lemon butter sauce.', price: '$18.99', img: food5 },
    { id: 5, name: 'Cheeseburger', desc: 'Beef patty, cheddar cheese & lettuce.', price: '$11.99', img: food2 },
    { id: 6, name: 'Chicken Alfredo', desc: 'Fettuccine pasta with creamy Alfredo sauce.', price: '$15.99', img: food6 },
    { id: 7, name: 'Sushi Platter', desc: 'Freshly made assorted sushi.', price: '$22.99', img: food7 },
    { id: 8, name: 'French Fries', desc: 'Crispy golden fries with dip.', price: '$5.99', img: food8 },
    { id: 9, name: 'Chocolate Lava Cake', desc: 'Molten chocolate center.', price: '$8.99', img: food9 },
    { id: 10, name: 'Strawberry Cheesecake', desc: 'Rich & creamy cheesecake.', price: '$7.99', img: food10 },
    { id: 11, name: 'Tiramisu', desc: 'Classic Italian dessert with espresso.', price: '$9.49', img: food11 },
    { id: 12, name: 'Fruit Smoothie', desc: 'Mixed berry smoothie.', price: '$6.99', img: food12 },
  ];

  return (
    <div className="menu-container">
      <h1 className="menu-title">Our Delicious Menu</h1>
      <div className="menu-grid">
        {menuItems.map((item) => (
          <div key={item.id} className="menu-item">
            <img src={item.img} alt={item.name} />
            <h2>{item.name}</h2>
            <p className="description">{item.desc}</p>
            <p className="price">{item.price}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Menu;
