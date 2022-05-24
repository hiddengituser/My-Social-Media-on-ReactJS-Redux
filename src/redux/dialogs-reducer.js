const ADD_MESSAGE = 'ADD-MESSAGE';
const UPDATE_NEW_MESSAGE_TEXT = 'UPDATE-NEW-MESSAGE-TEXT';

let initialState = {
    dialogsData: [
        {
            id: 1,
            name: 'Dima',
            avatar: 'https://shapka-youtube.ru/wp-content/uploads/2021/02/prikolnaya-avatarka-dlya-patsanov.jpg'
        },
        {
            id: 2,
            name: 'Sveta',
            avatar: 'https://shapka-youtube.ru/wp-content/uploads/2021/02/avatarka-dlya-skaypa-dlya-parney.jpg'
        },
        {
            id: 3,
            name: 'Yura',
            avatar: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSp3xq6yMAh7HKpnLoT17HDDvOIAJb0u98jPw&usqp=CAU'
        },
        {id: 4, name: 'Artem', avatar: 'https://econet.ru/uploads/pictures/456173/content_199820.jpg'},
        {
            id: 5,
            name: 'Stepan',
            avatar: 'https://dthezntil550i.cloudfront.net/rm/latest/rm1711280555375570004061391/1280_960/b968feed-501e-4f19-96b3-20294068d00f.png'
        },
        {
            id: 6,
            name: 'Sasha',
            avatar: 'https://marketplace.canva.com/EAEjuxgtTrE/1/0/1600w/canva-%D0%B6%D0%B5%D0%BB%D1%82%D1%8B%D0%B9-%D0%B8-%D1%87%D0%B5%D1%80%D0%BD%D1%8B%D0%B9-%D0%B3%D0%B5%D0%B9%D0%BC%D0%B5%D1%80-%D0%B3%D1%80%D0%B0%D0%BD%D0%B4%D0%B6-%D0%B8%D0%B7%D0%BE%D0%B1%D1%80%D0%B0%D0%B6%D0%B5%D0%BD%D0%B8%D0%B5-%D0%B4%D0%BB%D1%8F-%D0%BF%D1%80%D0%BE%D1%84%D0%B8%D0%BB%D1%8F-twitch-TctTVI0Tna4.jpg'
        }
    ],
    messagesData: [
        {id: 1, message: 'Hi!'},
        {id: 2, message: 'How are you?'},
        {id: 3, message: 'I am OK!'},
        {id: 4, message: 'Yo'},
        {id: 5, message: 'Yo'}
    ],
    newMessageText: '',
}

const dialogsReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_MESSAGE: {
            let newMessage = {
                id: 6,
                message: state.newMessageText,
            }
            return {
                ...state,
                messagesData: [...state.messagesData, newMessage],
                newMessageText: ''
            }
        }
        case UPDATE_NEW_MESSAGE_TEXT:
            return {
                ...state,
                newMessageText: action.newMessage
            }
        default:
            return state;
    }
}

export const sendMessageActionCreator = () => {
    return {
        type: ADD_MESSAGE,
    }
}
export const updateNewMessageTextActionCreator = (text) => {
    return {
        type: UPDATE_NEW_MESSAGE_TEXT,
        newMessage: text,
    }
}

export default dialogsReducer;