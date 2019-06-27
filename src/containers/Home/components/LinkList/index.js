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
            loadingState: 1
        }
        this.mayRef = React.createRef();
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
        document.addEventListener('scroll', this.scrollSlice);
    }
    scrollSlice = () => {
        let scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
        let documentHeight = document.documentElement.clientHeight;
        let LinkListTop = this.mayRef.current.offsetTop;
        let LinkListHeight = this.mayRef.current.offsetHeight;
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
