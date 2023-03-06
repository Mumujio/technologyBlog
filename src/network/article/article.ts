import require from "@/util/require";
export const get_article = function ()  {
    return require({
        url: 'article',
        method: 'get',
       
    })
}

export const upload_article = function (data:{article_title:string,article_content:string,article_time:string,article_views:number})  {
    return require({
        url: 'article',
        method: 'post',
        timeout:0,
        data
    })
}
