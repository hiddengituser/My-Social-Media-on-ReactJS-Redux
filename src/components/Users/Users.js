import React from "react";
import styles from './Users.module.css'
import {NavLink} from "react-router-dom";
import axios from "axios";
import {toggleButtonDisabled} from "../../redux/users-reducer";

let Users = (props) => {

    let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize);
    let pages = [];
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i)
    }

    let curP = props.currentPage;
    let curPF = ((curP - 5) < 0) ? 0 : curP - 5;
    let curPL = curP + 5;
    let slicedPages = pages.slice(curPF, curPL);

    return (<div className={styles.outerDiv}>
        {
            props.users.map(u => <div className={styles.everyDiv} key={u.id}>
                <div className={styles.leftWrapper}>
                    <div className={styles.leftDiv}>
                        <div>
                            <NavLink to={"/profile/" + u.id}>
                                <img
                                    src={u.photos.small !== null ? u.photos.small : 'https://cutt.ly/jHHtZLz'}
                                    alt="avatar"
                                    className={styles.userPhoto}/>
                            </NavLink>
                        </div>
                        <div>
                            {u.followed ?
                                <button disabled={props.followingInProgress.some(id => id === u.id)} onClick={() => {
                                    props.toggleFollowingProgress(true, u.id);
                                    axios.delete(`https://social-network.samuraijs.com/api/1.0/follow/${u.id}`, {
                                        withCredentials: true,
                                        headers: {"API-KEY": "6ea0edf3-8af8-4005-8a44-59778857b236"},
                                    })
                                        .then(response => {
                                            if (response.data.resultCode == 0) {
                                                props.unfollow(u.id);
                                            }
                                            props.toggleFollowingProgress(false, u.id);
                                        });

                                }}>Unfollow</button> :
                                <button disabled={props.followingInProgress.some(id => id === u.id)} onClick={() => {
                                    props.toggleFollowingProgress(true, u.id);
                                    axios.post(`https://social-network.samuraijs.com/api/1.0/follow/${u.id}`, {}, {
                                        withCredentials: true,
                                        headers: {"API-KEY": "6ea0edf3-8af8-4005-8a44-59778857b236"}
                                    })
                                        .then(response => {
                                            if (response.data.resultCode == 0) {
                                                props.follow(u.id);
                                            }
                                            props.toggleFollowingProgress(false, u.id);
                                        });

                                }}>Follow</button>}
                        </div>
                    </div>
                    <div className={styles.centerDiv}>
                        <div>{u.name}</div>
                        <div>{u.status}</div>
                    </div>
                </div>
                <div className={styles.rightDiv}>
                    <div>{'u.location.country'}</div>
                    <div>{'u.location.city'}</div>
                </div>
            </div>)
        }
        <div className={styles.activeSpan}>
            {slicedPages.map(p => {
                return <span className={props.currentPage === p && styles.selectedPage} onClick={e => {
                    props.onPageChanged(p)
                }}>{p}</span>
            })}
        </div>
    </div>)
}

export default Users;