const headers = new Headers({
    "Accept": "applicaton/json",
    "Conten-Type": "application"
});

function get(url) {
    return fetch({
        method: 'GET',
        headers: headers
    }).then(response => {
        handleResponse(response, url);
    }).catch(err => {
        console.error(`请求错误~！ url=${url}, err=${err}`);
        return Promise.reject({
            error: {
                message: "请求错误！"
            }
        })
    })
};


function post(url, data) {
    return fetch({
        method: 'POST',
        headers: headers,
        body: data
    }).then(response => {
        handleResponse(response, url);
    }).catch(err => {
        console.error(`请求错误~！ url=${url}, err=${err}`);
        return Promise.reject({
            error: {
                message: "请求错误！"
            }
        })
    })
};

function handleResponse (response, url) {
    if (response.status === 200) {
        return response.json();
    } else {
        console.error(`请求错误~！ url=${url}`);
        return Promise.reject({
            error: {
                message: "请求错误！"
            }
        })
    }
}

export { get, post }