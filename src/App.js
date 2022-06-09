import React from "react";
import './App.css';
import HeaderContainer from "./components/Header/HeaderContainer";
import Nav from "./components/Nav/Nav";
import ProfileContainer from "./components/Profile/ProfileContainer";
import {Routes, Route} from 'react-router-dom';
import DialogsContainer from "./components/Dialogs/DialogsContainer";
import UsersContainer from "./components/Users/UsersContainer";

const App = (props) => {
    return (
        <div className="wrapper">
            <HeaderContainer/>
            <Nav dialogsData={props.store.getState().dialogsPage.dialogsData}/>
            <div className="wrapper-content">
                <Routes>
                    <Route path='/profile' element={<ProfileContainer/>}/>
                    <Route path="/profile/:userId" element={<ProfileContainer/>}/>


                    <Route path="/dialogs/*" element={<DialogsContainer/>}/>
                    <Route path='/users' element={<UsersContainer/>}/>
                </Routes>
            </div>
        </div>)
}
export default App;
