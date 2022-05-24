import React from "react";
import styles from './Users.module.css'
import axios from "axios";

class Users extends React.Component {

    componentDidMount() {
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`)
            .then(response => {
                this.props.setUsers(response.data.items);
            });
    }

    onPageChanged = (pageNumber) => {
        this.props.setCurrentPage(pageNumber);
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize}`)
            .then(response => {
                this.props.setUsers(response.data.items);
                this.props.setTotalUsersCount(response.data.totalCount);
            });
    }

    render() {
        let pagesCount = Math.ceil(this.props.totalUsersCount / this.props.pageSize);
        let pages = [];
        for (let i = 1; i <= pagesCount; i++) {
            pages.push(i)
        }

        let curP = this.props.currentPage;
        let curPF = ((curP - 5) < 0) ? 0 : curP - 5;
        let curPL = curP + 5;
        let slicedPages = pages.slice(curPF, curPL);

        return <div className={styles.outerDiv}>
            {
                this.props.users.map(u => <div className={styles.everyDiv} key={u.id}>
                    <div className={styles.leftWrapper}>
                        <div className={styles.leftDiv}>
                            <div>
                                <img src={u.photos.small !== null ? u.photos.small : 'https://cutt.ly/jHHtZLz'} alt="avatar"
                                     className={styles.userPhoto}/>
                            </div>
                            <div>
                                {u.followed ? <button onClick={() => {
                                    this.props.unfollow(u.id)
                                }}>Unfollow</button> : <button onClick={() => {
                                    this.props.follow(u.id)
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
                    return <span className={this.props.currentPage === p && styles.selectedPage} onClick={e => {
                        this.onPageChanged(p)
                    }}>{p}</span>
                })}
            </div>
        </div>
    }
}

export default Users;