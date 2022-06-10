import React from "react";
import Profile from "./Profile";
import {connect} from "react-redux";
import {useParams} from 'react-router-dom';
import {getUserProfile} from "../../redux/profile-reducer";
import {Navigate} from "react-router-dom";

export function withRouter(Children) {
    return (props) => {

        const match = {params: useParams()};
        return <Children {...props} match={match}/>
    }
}


class ProfileContainer extends React.Component {
    componentDidMount() {
        let userId = this.props.match.params.userId;
        if (!userId) {
            userId = 2;
        }
        this.props.getUserProfile(userId);
    }

    render() {
        if (this.props.isAuth === false) {
            return <Navigate to='login'/>
        }

        return (
            <Profile {...this.props} profile={this.props.profile}/>
        )
    }
}

let mapStateToProps = (state) => {
    return {
        profile: state.profilePage.profile,
        isAuth: state.auth.isAuth,
    }
}

let WithRouterContainerComponent = withRouter(ProfileContainer)
export default connect(mapStateToProps, {getUserProfile})(WithRouterContainerComponent);