/*
import profileReducer from "./profile-reducer";
import dialogsReducer from "./dialogs-reducer";

let store = {
    _state: {
        profilePage: {
            postsData: [
                {id: 1, message: 'Hi, how are you', likes: 7},
                {id: 2, message: 'It\'s my second post.', likes: 51},
                {id: 3, message: 'This is really cool!', likes: 13}
            ],
            newPostText: '',
        },
        dialogsPage: {
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
                    avatar: 'https://www.meme-arsenal.com/memes/36b78c8b7cd957e082f53148b74787ea.jpg'
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
                {id: 3, message: 'This is two phone baby king!'},
                {id: 4, message: 'Yo'},
                {id: 5, message: 'Yo'}
            ],
            newMessageText: '',
        }
    },
    _callSubscriber() {
        console.log('State has changed!')
    },

    getState() {
        return this._state;
    },
    subscribe(observer) {
        this._callSubscriber = observer;
    },

    dispatch(action) {
        this._state.profilePage = profileReducer(this._state.profilePage, action)
        this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action)
        this._callSubscriber(this._state)
    },
}

export default store;
window.store = store;*/
