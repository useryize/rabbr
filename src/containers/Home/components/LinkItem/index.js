import React, { Component } from 'react';
import styles from './LinkItem.less';

class LinkItem extends Component {
    render() {
        const { item } = this.props;
        return (
            <div className={styles.likeItem}>
                <div className={styles.likeItem_picContainer}>
                    <div className={styles.likeItem_picTag}>{item.itemtag}</div>
                    <img alt='' className={styles.likeItem_pic} src={item.picture} />
                </div>
                <div className={styles.likeItem_content}>
                    <div className={styles.likeItem_shop}>{item.shop}</div>
                    <div className={styles.likeItem_product}>{item.product}</div>
                    <div className={styles.likeItem_detail}>
                        <div className={styles.likeItem_price}>
                            <ins className={styles.likeItem_currentPrice}>{item.currentPrice}</ins>
                            <del className={styles.likeItem_oldPrice}>{item.oldPrice}</del>
                        </div>
                        <div className={styles.likeItem_sale}>{item.saleDesc}</div>
                    </div>
                </div>
            </div>
        );
    }
}

export default LinkItem;