import React, { useEffect,useState }from 'react';
import User from "./User"
import { Link } from "react-router-dom"

import SearchIcon from '@mui/icons-material/Search';


import Badge from '@mui/material/Badge';
import { styled } from '@mui/material/styles';
import IconButton from '@mui/material/IconButton';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

import { useSelector } from "react-redux"

const StyledBadge = styled(Badge)(({ theme }) => ({
    '& .MuiBadge-badge': {
        right: -1,
        top: 3,
        border: `2px solid ${theme.palette.background.paper}`,
        padding: '0 4px',
    },
}));


function Header() {

    // const numberofProducts = useSelector(state => state.user.basket).length
    const [total,setTotal] = useState(0)

    const isLoggedIn = useSelector(state => state.user.isLoggedIn)
    const basketItems = useSelector(state => state.basket.items)

    useEffect(() => {

        function count(item){
            return item.count;
          }
         setTotal(basketItems.map(count).reduce((a, b) => a + (b || 0), 0))

    }, [basketItems])


  

    return (
        <div className="header">
            <div className="logo-container">
                <Link to="/" className="logo">Qbica </Link>
            </div>
            <div className="search-container">
                <label htmlFor="">
                    <SearchIcon className="search-icon" fontSize="medium" />
                </label>
                <input id="search" name="search" className="search-input" type="search" />

            </div>
            <User />

            <div className="basket-container">
                <IconButton aria-label="cart">
                    <StyledBadge badgeContent={total} color="warning">
                        <ShoppingCartIcon />
                    </StyledBadge>
                </IconButton>
                <Link to="/basket" className="b">Sepetim</Link>
            </div>
        </div>
    )

}

export default Header;
