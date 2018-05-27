import React from 'react';

const Header = ({ className }) => {
    return (
        <nav className="header-area">
			<div className="search-area">
				<input type="text"/>
			</div>
			<div className="logout-area">
				<span id="logout-btn">LOGOUT</span>	
			</div>
		</nav>
    );
};


export default Header;
