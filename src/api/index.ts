import { kimiAxios } from './config';

/**
 * 首页
 */
export const home = (params: {}) => {
    return kimiAxios.get(
        'http://10.238.121.254:3000/kimi/',
        { params: params || {} }
    )
}