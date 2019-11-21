import request from '@/utils/request';
export async function queryImg() {
    return request('/api/users/img');
}
