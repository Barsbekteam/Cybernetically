import React, {useEffect} from 'react';
import Loader from "../Loader";
import './limit.scss'
import {fetchingStock, setNextPage, setPrevPage} from "../../store/actionCreators";
import {useDispatch, useSelector} from "react-redux";

const StockLimit = () => {
    const dispatch = useDispatch()
    const {stock, limit, loader} = useSelector(state => state.main)

    useEffect(() => {
        dispatch(fetchingStock(limit))
    }, [limit])
    return (
        <div className="container limits">
                {loader && <Loader/>}
                <h1>page: {limit / 10}</h1>
            <div className="limit">
                {
                    stock.slice(limit - 10, limit).map(({volume, mic}) => {
                            return (
                                <div className="limit__group">
                                    <h4>Volume: {volume}</h4>
                                    <h3>Model: {mic}</h3>
                                </div>
                            )
                        }
                    )
                }
            </div>

            <div>
                <button onClick={() => dispatch(setPrevPage(limit))}>prev</button>
                <button onClick={() => dispatch(setNextPage(limit))}>next</button>
            </div>
        </div>
    )
        ;
};

export default StockLimit;