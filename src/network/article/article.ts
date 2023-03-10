import require from "@/util/require";
export const get_article = function ()  {
    return require({
        url: 'article',
        method: 'get',
       
    })
}

export const upload_article = function (data:{article_title:string,article_content:string,article_time:string,article_views:number,article_img:string})  {
    return require({
        url: 'article',
        method: 'post',
      
        data
    })
}

export const modify_article = function (data: { article_title: string, article_content: string, article_time: string, article_views: number, article_img: string, article_id: number }) {
    return require({
        url: 'article',
        method: 'put',
  
        data
    })
}

export const delete_article = function (data:{id:number})  {
    return require({
        url: 'article_delete',
        method: 'post',
        data
    })
}

