import require from "@/util/require";

export const get_article = function ()  {
    return require({
        url: 'article',
        method: 'get',
        timeout:5000
    })
}
