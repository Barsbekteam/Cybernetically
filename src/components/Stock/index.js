import React, {useEffect} from 'react';
import Loader from "../Loader";
import {DragDropContext, Draggable, Droppable} from "react-beautiful-dnd";
import {fetchingStock, setNextPage, setPrevPage} from "../../store/actionCreators";
import {useDispatch, useSelector} from "react-redux";
import {GET_STOCK} from "../../store/actionTypes";
import './../../style.scss'
const Stock = () => {
    const dispatch = useDispatch()
    const {stock, limit, loader} = useSelector(state => state.main)
    function handleOnDragEnd(result) {
        const items= Array.from(stock)
        const [reorderedItem] = items.splice(result.source.index, 1)
        items.splice(result.destination.index, 0,reorderedItem)
        dispatch({type: GET_STOCK, payload: items})
        console.log(stock)
    }

    useEffect(() => {
        dispatch(fetchingStock(limit))
    }, [limit])
    return (
        <div className="stocks container">
            {loader && <Loader/>}
            <DragDropContext onDragEnd={handleOnDragEnd}>
                <Droppable droppableId="characters">
                    {(provided) => (
                        <div className="stock" {...provided.droppableProps} ref={provided.innerRef}>
                            {
                                stock.slice(0, 10).map(({volume, mic}, index) => {
                                    return (
                                        <Draggable key={volume} draggableId={volume.toString()} index={index}>
                                            {(provided) => (
                                                <div className="stock__group"  {...provided.draggableProps}  {...provided.dragHandleProps}
                                                     ref={provided.innerRef}>
                                                    <h4>Volume: {volume}</h4>
                                                    <h3>Model: {mic}</h3>
                                                </div>
                                            )}
                                        </Draggable>
                                    )
                                })
                            }
                            {provided.placeholder}
                        </div>
                    )}
                </Droppable>
            </DragDropContext>

        </div>
    );
};

export default Stock;