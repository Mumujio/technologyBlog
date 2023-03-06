import require from "@/util/require_manager";

export const manager_login = function (data:{account:string,password:string})  {
    return require({
        url: 'login',
        method: 'post',
        data
    })
}
export const manager_enroll = function (data:{account:string,password:string})  {
    return require({
        url: 'enroll',
        method: 'post',
        data
    })
}