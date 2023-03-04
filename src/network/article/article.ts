import require from "@/util/require";
export const get_article = function ()  {
    return require({
        url: 'article',
        method: 'get',
       
    })
}

export const upload_article = function ()  {
    return require({
        url: 'article',
        method: 'post',
        timeout:0,
        data: {
            tite: '123'
        }
    })
}
