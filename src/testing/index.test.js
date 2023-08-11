import axios from 'axios';
import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import * as actions from './../store/actionCreators';

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);




describe('async actions', () => {
    it('creates FETCH_SUCCESS when fetching data has been done', () => {
        const responseData = { some: 'data' };
        axios.get = jest.fn().mockResolvedValue({ data: responseData });
        const expectedActions = [{ type: 'FETCH_SUCCESS', payload: responseData },];
        const store = mockStore({});
        return store.dispatch(actions.fetchingStock()).then(() => {
            expect(store.getActions()).toEqual(expectedActions);
        });
    });
});