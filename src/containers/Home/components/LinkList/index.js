import React, { Component } from 'react';
import { connect } from 'react-redux';
import LinkItem from '../LinkItem';
import styles from './LinkList.less';

class LinkList extends Component {
    render() {
        const { dataInfo } = this.props;
        return (
            <div className={styles.likeList}>
                <div className={styles.likeList_header}>猜你喜欢</div>
                <div className={styles.likeList_list}>
                    {
                        dataInfo.map((item, index) => (
                            <LinkItem item={item} key={index}></LinkItem>
                        ))
                    }
                </div>
            </div>
        );
    }
}

export default connect((state) => {
    const { homeLikeList } = state.homeModules;
    return { ...homeLikeList };
})(LinkList);