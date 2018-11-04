const SHOW_MORE = 'SHOW_MORE';
const REMOVE_USER = 'REMOVE_USER';
const FILTER = 'FILTER';

function addAction(type, value) {
    return {
        type: type,
        value: value
    };
};

const removeItem = (index) => {
    return {
        type: REMOVE_USER,
        payload: index
    };
};

export {
    SHOW_MORE,
    REMOVE_USER,
    FILTER,
    removeItem,
    addAction
};
