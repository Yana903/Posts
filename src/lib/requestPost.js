const requestPost = url => fetch(url)
.then(response => {
    const totalCount = response.headers.get('X-Total-Count');  
    return { jsonData: response, totalCount };
})

export {requestPost};

