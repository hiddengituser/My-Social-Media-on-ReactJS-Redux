const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';
const SET_USER_PROFILE = 'SET_USER_PROFILE';

function randomLikesCount(min = 1, max = 100) {
    // получить случайное число от (min-0.5) до (max+0.5)
    let rand = min - 0.5 + Math.random() * (max - min + 1);
    return Math.round(rand);
}

let initialState = {
    postsData: [
        {id: 1, message: 'Hi, how are you', likes: 7},
        {id: 2, message: 'It\'s my second post.', likes: 51},
        {id: 3, message: 'This is really cool!', likes: 13}
    ],
    newPostText: '',
    profile: null,
}

const profileReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_POST:
            let newPost = {
                id: 4,
                message: state.newPostText,
                likes: randomLikesCount(),
            }
            return {...state,
            postsData: [...state.postsData, newPost],
            newPostText: ''}
        case UPDATE_NEW_POST_TEXT: {
            return {...state,
            newPostText: action.newText}
        }
        case SET_USER_PROFILE: {
            return {...state, profile: action.profile}
        }
        default:
            return state;
    }
}

export const addPostActionCreator = () => {
    return {
        type: ADD_POST
    }
}
export const updateNewPostTextActionCreator = (text) => {
    return {
        type: UPDATE_NEW_POST_TEXT,
        newText: text,
    }
}
export const setUserProfile = (profile) => {
    return {
        type: SET_USER_PROFILE,
        profile,
    }
}


export default profileReducer;