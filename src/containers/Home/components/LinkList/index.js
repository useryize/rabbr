import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import LinkItem from '../LinkItem';
import styles from './LinkList.less';
import Loading from '../../../../components/Loading';

class LinkList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: props.dataInfo,
            loadingState: 1, // 是否加载 更多数据
        }
        this.mayRef = React.createRef();
        this.isLoading = true; // 是否销毁滚动事件
    }
    render() {
        const { data, loadingState } = this.state;
        return (
            <Fragment>
                <div ref={this.mayRef} className={styles.likeList}>
                    <div className={styles.likeList_header}>猜你喜欢</div>
                    <div className={styles.likeList_list}>
                        {
                            data.map((item, index) => (
                                <LinkItem item={item} key={index}></LinkItem>
                            ))
                        }
                    </div>
                </div>
                {
                    loadingState < 3 ? <Loading /> : <div className={styles.likeList_viewAll}>查看更多</div>
                }
            </Fragment>
        )
    }
    componentDidMount() {
        // 绑定滚动事件
        document.addEventListener('scroll', this.scrollSlice);
    }
    componentDidUpdate() {
        const { loadingState } = this.state;
        // 当加载两次后 显示为查看更多 销毁滚动事件 释放内存
        if (loadingState >= 3 && this.isLoading) {
            this.removeEvent();
            this.isLoading = false;
        }

    }
    componentWillUnmount () {
        // 页面销毁同时销魂绑定事件
        this.isLoading && this.removeEvent();
    }
    removeEvent = () => {
        document.removeEventListener("scroll", this.scrollSlice);
    }
    scrollSlice = () => {
        let scrollTop = document.documentElement.scrollTop || document.body.scrollTop; // 滚动条高度
        let documentHeight = document.documentElement.clientHeight; // 视口高度
        let LinkListTop = this.mayRef.current.offsetTop; // 滑动块距离顶部高度
        let LinkListHeight = this.mayRef.current.offsetHeight; // 滑动快高度
        const { data, loadingState } = this.state;
        if (scrollTop >= LinkListHeight + LinkListTop - documentHeight && loadingState < 3) {
            let newData = data.concat(data);
            let newLoadingState = loadingState + 1;
            setTimeout(() => {
                this.setState({
                    data: newData,
                    loadingState: newLoadingState
                });
            }, 1000);
        }
    }
}

export default connect((state) => {
    const { homeLikeList } = state.homeModules;
    return { ...homeLikeList };
})(LinkList);
