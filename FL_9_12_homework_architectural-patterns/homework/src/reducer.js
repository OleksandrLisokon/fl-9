import USERS from './data';
import {SHOW_MORE, REMOVE_USER, SEARCH_USER} from './actions';

const DEF_STEP = 5;
const defaultState = {
    users: USERS,
    rowsDefault: DEF_STEP,
    searchName: '',
};

const defaultAction = {
    type: 'DEFAULT',
};

const reducer = (state = defaultState, action = defaultAction) => {
    switch (action.type) {
    case REMOVE_USER:
        return removeUser(state, action.payload);

    case SHOW_MORE:
        return showMore(state);

    case SEARCH_USER:
        return searchUser(state, action.payload);

    default:
        return getDefaultState(state);
    }
};

function getDefaultState(state) {
    if (state.users.length < 1) {
        return 'No users are found';
    }

    return state;
}

function removeUser(state, index) {
    let filteredUsers = state.users.filter((item) => {
        return item.id !== index;
    });
    state.users = filteredUsers;

    return state;
}

function showMore(state) {
    state.rowsDefault += DEF_STEP;
    if (state.rowsDefault > state.users.length) {
        state.rowsDefault = state.users.length;
    }
    return state;
}

function searchUser(state, value) {
    state.searchName = value;

    let filteredUsers = state.users.filter((item) => {
        return item.name.toLowerCase().indexOf(query.toLowerCase()) !== -1;
    });
    state.users = filteredUsers;

    return state
}

export {reducer};