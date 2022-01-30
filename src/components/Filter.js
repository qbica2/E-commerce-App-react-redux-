import React from 'react';
import { Checkbox } from '@mui/material'

import StarIcon from '@mui/icons-material/Star';

import { orange } from "@mui/material/colors"

import { changeFilterType, checkedFourStar, checkedThreeStar, checkedTwoStar, checkedOneStar } from "../redux/ProductsSlice"
import { useSelector, useDispatch } from "react-redux"



function Filter() {
    
    const dispatch = useDispatch()

    const filter = useSelector(state => state.products.filter)

    const handleFilter = (id) => {
        dispatch(changeFilterType(id))
    }

    const hanldleClearAllFilters = () => {
        dispatch(changeFilterType("All"))
        dispatch(checkedFourStar(false))
        dispatch(checkedThreeStar(false))
        dispatch(checkedTwoStar(false))
        dispatch(checkedOneStar(false))
    }

    return (
        <div className="filterbar">
            <button onClick={() => hanldleClearAllFilters()}>Clear All Filters</button>
            <div className="price-filter">
                <div className="filter-header">Fiyat Aralığı</div>
                <button
                    id="1"
                    className="filter-button"
                    onClick={(e) => handleFilter(e.target.id)}>
                    0 - 50 $
                </button>

                <button
                    id="2"
                    className="filter-button"
                    onClick={(e) => handleFilter(e.target.id)}>
                    50 - 100 $
                </button>

                <button
                    id="3"
                    className="filter-button"
                    onClick={(e) => handleFilter(e.target.id)}>
                    100 - 250 $
                </button>

                <button
                    id="4"
                    className="filter-button"
                    onClick={(e) => handleFilter(e.target.id)}>
                    250 - 500 $
                </button>

                <button
                    id="5"
                    className="filter-button"
                    onClick={(e) => handleFilter(e.target.id)}>
                    500 - 1000 $
                </button>
                <button
                    id="6"
                    className="filter-button"
                    onClick={(e) => handleFilter(e.target.id)}>
                    1000 + $
                </button>
            </div>
            <div className="rate-filter">
                <div className="filter-header">Değerlendirme Sayısı</div>
                <div>
                    <Checkbox
                        sx={{ '& .MuiSvgIcon-root': { fontSize: 40, color: orange[800] } }}
                        checked={filter.fourStarCheck ? true : false}
                        onChange={(e) => dispatch(checkedFourStar(e.target.checked))} />
                    <StarIcon sx={{ color: orange[500] }} /> 
                    4 +
                    <span className="text">  puan </span>
                </div>
                <div>
                    <Checkbox
                        sx={{ '& .MuiSvgIcon-root': { fontSize: 40, color: orange[800] } }}
                        checked={filter.threeStarCheck ? true : false}
                        onChange={(e) => dispatch(checkedThreeStar(e.target.checked))} />
                    <StarIcon sx={{ color: orange[500] }} /> 
                    3 - 3.9
                    <span className="text">  puan </span>
                </div>
                <div>
                    <Checkbox
                        sx={{ '& .MuiSvgIcon-root': { fontSize: 40, color: orange[800] } }}
                        checked={filter.twoStarCheck ? true : false}
                        onChange={(e) => dispatch(checkedTwoStar(e.target.checked))} />
                    <StarIcon sx={{ color: orange[500] }} /> 
                    2 - 2.9
                    <span className="text">  puan </span>
                </div>
                <div>
                    <Checkbox
                        sx={{ '& .MuiSvgIcon-root': { fontSize: 40, color: orange[800] } }}
                        checked={filter.oneStarCheck ? true : false}
                        onChange={(e) => dispatch(checkedOneStar(e.target.checked))} />
                    <StarIcon sx={{ color: orange[500] }} /> 
                    1 - 1.9
                    <span className="text">  puan </span>
                </div>
            </div>
            <div className="count-filter">
                <div className="filter-header">Yorum Sayısı</div>
                <div><Checkbox sx={{ '& .MuiSvgIcon-root': { fontSize: 40, color: orange[800] } }} /> 0 - 100 <span className="text">  yorum </span></div>
                <div><Checkbox sx={{ '& .MuiSvgIcon-root': { fontSize: 40, color: orange[800] } }} /> 100 - 250 <span className="text">  yorum </span></div>
                <div><Checkbox sx={{ '& .MuiSvgIcon-root': { fontSize: 40, color: orange[800] } }} /> 250 - 500 <span className="text">  yorum </span></div>
                <div><Checkbox sx={{ '& .MuiSvgIcon-root': { fontSize: 40, color: orange[800] } }} /> 500 + <span className="text">  yorum </span></div>
            </div>
        </div>
    );
}

export default Filter;
