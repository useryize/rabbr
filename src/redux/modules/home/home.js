// import { get } from '../../utils/request';
import url from '../../../utils/url';
import { FETCH_DATA } from '../../middleware/api';
import schema from '../entities/products';
export const types = {
    FETCH_LIKES_REQUEST: "HOME/FETCH_LIKES_REQUEST", // 获取猜你喜欢 请求
    FETCH_LIKES_SUCCESS: "HOME/FETCH_LIKES_SUCCESS", // 获取猜你喜欢 请求成功
    FETCH_LIKES_FAIURE: "HOME/FETCH_LIKES_FAIURE", // 获取猜你喜欢 请求失败
};

export const action = {
    loadLikes: () => {
        return (dispatch, getState) => {
            const endpoint = url.getProductList(0, 10);
            return dispatch(fetchLikes(endpoint))
        }
    }
    // loadLikes: () => {
    //     return (dispatch, getState) => {
    //         dispatch(fetChLikesRequest());
    //         return get(url.getProductList(0, 10)).then(
    //             data => {
    //                 dispatch(fetChLikesSuccess(data))
    //              },
    //             error => {
    //                 dispatch(fetChLikesFaiure(error));
    //             }

    //         )
    //     }
    // }
}

const fetchLikes = (endpoint, params) => ({
    [FETCH_DATA]: {
        types: [
            types.FETCH_LIKES_REQUEST,
            types.FETCH_LIKES_SUCCESS,
            types.FETCH_LIKES_FAIURE
        ],
        endpoint,
        schema
    }
});

// const fetChLikesRequest = () => ({
//     type: HOME/FETCH_LIKES_REQUEST
// })

// const fetChLikesSuccess = (data) => ({
//     type: HOME/FETCH_LIKES_SUCCESS,
//     data
// })

// const fetChLikesFaiure = (error) => ({
//     type: HOME/FETCH_LIKES_FAIURE,
//     error
// })

const reducer = (state = {}, action) => {
    switch (action.type) {
        case types.FETCH_LIKES_REQUEST:
            break;
        case types.FETCH_LIKES_SUCCESS:
            break;
        case types.FETCH_LIKES_FAILURE:
            break;
        default:
            return state;
    }
}

export default reducer;