import { combineReducers, createStore } from 'redux';
import imageReducer, { GlobalState } from '../reducers/imageReducer';

const appReducer = combineReducers({
    isImage: imageReducer.isImage
});

const saveToLocalStorage = (state: GlobalState) => {
    try {
        const convertedStateToLocalstorage = JSON.stringify(state);
        localStorage.setItem("applicationPersistantState", convertedStateToLocalstorage);
    } catch (error) {
        console.log(error)
    }
}

const loadFromLocalStorage = () => {
    try {
        const convertedStateToLocalstorage = localStorage.getItem("applicationPersistantState");
        if (convertedStateToLocalstorage === null) return undefined;
        return JSON.parse(convertedStateToLocalstorage);
    } catch (error) {
        console.log(error);
        return undefined;
    }
}

const rootStore = createStore(appReducer, loadFromLocalStorage());

rootStore.subscribe(() => saveToLocalStorage(rootStore.getState()));

export default rootStore;