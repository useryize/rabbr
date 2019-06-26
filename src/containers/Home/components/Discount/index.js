import React, { Component } from 'react';
import { connect } from 'react-redux';
import styles from './Discount.less';

class Discount extends Component {
    render() {
        const { dataPro } = this.props;
        console.error(dataPro);
        return (
            <div className={styles.discount}>
                <div className={styles.discount_header}>
                    <span className={styles.discount_title}>超值特惠</span>
                    <span className={styles.discount_more}>更多优惠</span>
                    <span className={styles.discount_arrow} />
                </div>
                <div className={styles.discount_content}>
                    {dataPro.map((item, index) => {
                        return (
                            <div
                                key={item.id}
                                className={styles.discount_item}
                            >
                                <div className={styles.discount_itemPic}>
                                    <img alt="" width="100%" height="100%" src={item.picture} />
                                </div>
                                <div className={styles.discount_itemTitle}>{item.shop}</div>
                                <div className={styles.discount_itemPriceWrapper}>
                                    <ins className={styles.discount_itemCurrentPrice}>
                                        {item.currentPrice}
                                    </ins>
                                    <del className={styles.discount_itemOldPrice}>{item.oldPrice}</del>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        );
    }
}

export default connect((state, action) => {
    const { homeDiscount } = state.homeModules;
    return { ...homeDiscount };
})(Discount);