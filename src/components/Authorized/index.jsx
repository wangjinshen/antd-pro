import { getPermission } from "@/utils/utils";

// ar.filter((item) => {

//     return arr.includes(item)
// })

const judge = (rolePermission, permission) => {

}
const RenderAuthorize = (props) => {
    var rolePermission = localStorage.getItem('antd-pro-authority') || []
    let { children, noMatch, authority } = props
    if (authority === undefined || getPermission(authority, rolePermission)) {
        return children
    } else {
        return noMatch
    }
};
export default RenderAuthorize;
