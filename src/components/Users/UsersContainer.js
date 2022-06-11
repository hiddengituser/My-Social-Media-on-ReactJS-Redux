import React from "react";
import styles from './Users.module.css'
import {connect} from "react-redux";
import {
    follow, followThunk, getUsers,
    setCurrentPage,
    toggleFollowingProgress,
    unfollow, unfollowThunk
} from "../../redux/users-reducer";
import Users from "./Users";
import Preloader from "../common/Preloader";
import {compose} from "redux";
import {withAuthRedirect} from "../../hoc/withAuthRedirect";

class UsersContainer extends React.Component {
    componentDidMount() {
        this.props.getUsers(this.props.currentPage, this.props.pageSize)
    }

    onPageChanged = (pageNumber) => {
        this.props.setCurrentPage(pageNumber);
        this.props.getUsers(this.props.currentPage, this.props.pageSize)
    }

    render() {
        return <div className={styles.usersContainerOuterDiv}>
            {this.props.isFetching ? <Preloader/> : <Users totalUsersCount={this.props.totalUsersCount}
                                                           pageSize={this.props.pageSize}
                                                           currentPage={this.props.currentPage}
                                                           users={this.props.users}
                                                           onPageChanged={this.onPageChanged}
                                                           unfollow={this.props.unfollowThunk}
                                                           follow={this.props.followThunk}
                                                           toggleFollowingProgress={this.props.toggleFollowingProgress}
                                                           followingInProgress={this.props.followingInProgress}/>}
        </div>
    }
}

let mapStateToProps = (state) => {
    return {
        users: state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        totalUsersCount: state.usersPage.totalUsersCount,
        currentPage: state.usersPage.currentPage,
        isFetching: state.usersPage.isFetching,
        followingInProgress: state.usersPage.followingInProgress,
    }
};

export default compose(
    withAuthRedirect,
    connect(mapStateToProps, {
        follow,
        unfollow,
        setCurrentPage,
        toggleFollowingProgress,
        getUsers,
        followThunk,
        unfollowThunk,
    }))(UsersContainer);