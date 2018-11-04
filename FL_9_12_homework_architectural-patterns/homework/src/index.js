import './style.scss';
import {createStore} from 'redux';
import {template} from './utils';
import LIST from './data';
import {SHOW_MORE, REMOVE_USER, FILTER, addAction} from './actions';

const DEF_STEP = 5;
const STEP = 5;
const USERS = userStorage(LIST);
const defaultState = USERS.showByDefault();
const defaultAction = {
    type: 'EMPTY'
};
const root = document.querySelector('#root');
root.innerHTML = template;

const SELECTORS = {
    TABLE_BODY: '#table-body',
    SHOW_BUTTON: '#showMore',
    INPUT: '#input',
    DISPLAYED: '#displayed',
    OUT_OF: '#of',
    USER: '.user',
    REMOVE_BUTTON: '.btn-remove',
};

const renderList = (list) => {
    const listHTML = list.map((item) => {
        return `
        <tr class='user' id=${ item.id }>
            <td class='user-img'><img src=${ item.picture } alt='photo'></td>
            <td>${ item.name }</td>
            <td>${ item.location }</td>
            <td>${ item.email }</td>
            <td>${ item.phone }</td>
            <td>${ item.timezone }</td>
            <td><button class="btn-remove" data-id=${ item.id }>Remove</button></td>
        </tr>`;
    }).join('\n');

    domElements.tableBody.innerHTML = listHTML;
};

const domElements = {
    tableBody: document.querySelector(SELECTORS.TABLE_BODY),
    showButton: document.querySelector(SELECTORS.SHOW_BUTTON),
    input: document.querySelector(SELECTORS.INPUT),
    displayed: document.querySelector(SELECTORS.DISPLAYED),
    outOf: document.querySelector(SELECTORS.OUT_OF),
    removeButton: document.querySelector(SELECTORS.REMOVE_BUTTON)
};

function userStorage(defaultUsers) {
    let _users = defaultUsers;
    let _showed = DEF_STEP;
    const getUsers = () => {
        return _users;
    };
    const showByDefault = () => {
        return _users.slice(0, DEF_STEP);
    };
    const showMore = () => {
        return _users.slice(_showed, _showed += STEP);
    };
    const deleteUser = (removeId) => {
        return _users = _users.filter((user) => user.id != removeId);
    };
    return {
        getUsers,
        showByDefault,
        showMore,
        deleteUser
    };
}

const reducer = (state = defaultState, action = defaultAction) => {
    switch (action.type) {
    case SHOW_MORE:
        return [...state, action.payload];

    case REMOVE_USER:
        USERS.deleteUser(action.payload);
        state = state.filter((user) => user.id != action.value);
        if (state.length < DEF_STEP) {
            return state = USERS.showByDefault();
        };
        return state;

    case FILTER:
        state.filter((user) => {
            return user.name.indexOf(action.payload) !== -1;
        });

    default:
        return state;
    }
};

const store = createStore(reducer);
initApp();

function initApp() {
    initStore();
    initHandlers();
};

function initStore() {
    renderList(store.getState());
    store.subscribe(() => {
        renderList(store.getState());
    });
};

const displayedOutOf = () => {
    domElements.displayed.innerText = store.getState().length;
    domElements.outOf.innerText = USERS.getUsers().length;
};
displayedOutOf();
store.subscribe(displayedOutOf);

function initHandlers() {
    domElements.showButton.addEventListener('click', showMoreClick),
    domElements.tableBody.addEventListener('click', onTableClick);
    domElements.input.addEventListener('keyup', filterName);
};

function showMoreClick() {
    const value = USERS.showMore();
    const action = addAction(SHOW_MORE, value);
    store.dispatch(action);
};

function onTableClick(event) {
    if (event.target.classList.contains('btn-remove')) {
        const id = event.target.parentElement.parentElement.id;
        const action = addAction(REMOVE_USER, id);
        store.dispatch(action);
    }
};

function filterName() {
    const action = addAction(FILTER, event.target.value);
    store.dispatch(action);
};