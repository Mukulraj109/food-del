import React from 'react';
import './Header.css';

function Header() {
    return (
        <div className='header'>
            <div className="header-contents">
                <h2>Order your favourite food here</h2>
                <p>Discover a wide variety of delicious meals from the best restaurants in town. Fast delivery right to your doorstep. Enjoy exclusive discounts and offers on your first order!</p>
                <button>
                    View Menu
                </button>
            </div>
        </div>
    );
}

export default Header;
