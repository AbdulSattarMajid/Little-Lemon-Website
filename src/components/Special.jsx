import React from 'react';
import '../componentsStyles/Special.css'
import pizzaImage from '../../public/food1.jpg'
import burgerImage from '../../public/food2.jpg'
import pastaImage from '../../public/food3.jpg'
function Special() {
  return (
    <>
      <div className="overall-container">
        <div className="speciality">
          <div className="for_image">
            <img src={pizzaImage} alt="Pizza" />
          </div>
          <div className="rest">
            <h1 className="title">Italian Pizza</h1>
            <p className="description">A delicious wood-fired pizza with fresh mozzarella, basil, and tomato sauce.</p>
            <p className="price">$12.99</p>
          </div>
        </div>

        <div className="speciality">
          <div className="for_image">
            <img src={burgerImage} alt="Burger" />
          </div>
          <div className="rest">
            <h1 className="title">Classic Cheeseburger</h1>
            <p className="description">Juicy grilled beef patty with melted cheese, lettuce, tomato, and special sauce.</p>
            <p className="price">$9.99</p>
          </div>
        </div>

        <div className="speciality">
          <div className="for_image">
            <img src={pastaImage} alt="Pasta" />
          </div>
          <div className="rest">
            <h1 className="title">Creamy Alfredo Pasta</h1>
            <p className="description">Rich and creamy fettuccine pasta with parmesan cheese and grilled chicken.</p>
            <p className="price">$14.99</p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Special;
