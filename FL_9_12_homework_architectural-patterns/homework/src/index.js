import './style.scss';
import {createStore} from 'redux';
import {renderList, getID} from './utils';
import {reducer} from './reducer';
import {showMore, removeUser, searchUser} from './actions';

const SELECTORS = {
    SHOW_BUTTON: '#showMore',
    INPUT: '#input',
    DISPLAYED: '#displayed',
    OUT_OF: '#of',
    USER: '.user',
    REMOVE_BUTTON: '.btn-remove',
};

const domElements = {
    showButton: document.querySelector(SELECTORS.SHOW_BUTTON),
    input: document.querySelector(SELECTORS.INPUT),
    displayed: document.querySelector(SELECTORS.DISPLAYED),
    outOf: document.querySelector(SELECTORS.OUT_OF),
    removeButton: document.querySelectorAll(SELECTORS.REMOVE_BUTTON)
};

const store = createStore(reducer);
initApp();

function initApp() {
    initStore();
    initHandlers();
};

function initStore() {
    store.subscribe(() => {
        renderList(store.getState().users, store.getState().rowsDefault);
        initHandlers();
    });
};

const displayedOutOf = () => {
    domElements.displayed.innerText = store.getState().rowsDefault;
    domElements.outOf.innerText = store.getState().users.length;
};
displayedOutOf();
store.subscribe(displayedOutOf);

function initHandlers() {
    domElements.showButton.addEventListener('click', showMoreClick),
    domElements.removeButton.forEach((btn) => btn.addEventListener('click', removeClick));
    domElements.input.addEventListener('change', filterName);
};

function showMoreClick() {
    store.dispatch(showMore());
};

function removeClick(event) {
    const id = getID(event.target);
    store.dispatch(removeUser(id));
};

function filterName(event) {
    const name = event.target.value;
    store.dispatch(searchUser(name));
};
