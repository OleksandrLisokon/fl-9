const SHOW_MORE = 'SHOW_MORE';
const REMOVE_USER = 'REMOVE_USER';
const SEARCH_USER = 'SEARCH_USER';

const showMore = () => {
    return {
        type: SHOW_MORE,
        payload: '',
    };
};

const removeUser = (index) => {
    return {
        type: REMOVE_USER,
        payload: index,
    };
};

const searchUser = (value) => {
    return {
        type: SEARCH_USER,
        payload: value,
    };
};

export {SHOW_MORE, showMore, REMOVE_USER, removeUser, SEARCH_USER, searchUser};