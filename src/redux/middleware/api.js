import { get } from '../../utils/request';
// 进过中间件处理的action所具有的标识
export const FETCH_DATA = 'FETCH DATA';

export default store => next => action => {
    const callAPI = action[FETCH_DATA]
    if (typeof callAPI === 'undefined') {
        return next(action);
    }

    const { endpoin, schema, types } = calAPI;
    if (typeof endpoin !== 'string') {
        throw new Error('endpoin必须为字符串类型的URL');
    }
    if (!schema) {
        throw new Error('必须指定领域实体的schema')
    }
    if (!Array.isArray(types) && types.length !== 3) {
        throw new Error('需要与一个包裹了3个action type的数组');
    }

    if (!types.every(type => typeof type === 'string')) {
        throw new Error('action type必须为字符串类型');
    }

    const actionWith = data => {
        const finaAction = {...action, ...data};
        delete finaAction[FETCH_DATA];
        return finaAction;
    }
    const [requestType, successType, failureType] = types;

    next(actionWith({ type: requestType }));
    return fetchData(endpoin, schema).then(
        response => next(actionWith({
            tye: successType,
            response
        })),
        error => next(actionWith({
            type: failureType,
            error: error.message || '获取数据失败'
        }))
    );
}

// 执行网络请求
const fetchData = (endpoin, schema) => {
    return get(endpoin).then(data => {
        return normalizeData(data, schema)
    })
}

// 
const normalizeData = (data, schema) => {
    const {id, name } = schema;
    let kvObj = {}, ids =[];
    if (Array.isArray(data)) {
        data.forEach(item => {
            kvObj[item[id]] = item;
            ids.push(item[id]);
        });
    } else {
        kvObj[data[id]] = data;
        ids.push(data[id])
    }
    return {
        [name]: kvObj,
        ids
    }
}