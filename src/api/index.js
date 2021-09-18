import axios from 'axios'

// axios.defaults.baseURL = 'http://localhost:5000'
const java_base = 'http://localhost:8084'

export function getHotUps(options) {
    const {page, itemsPerPage} = options

    return axios.get(java_base + '/up/top', {
        params: {
            sort: 0,
            page: page,
            size: itemsPerPage
        }
    })
}

// const {tsCode, start_time, end_time} = params
/*export function addUp2watch(id) {

    return axios.post(analysis + '/stock/analysis', {
        tsCode: tsCode,
        start_time: start_time,
        end_time: end_time,
    })
}*/
export function addUp2watch(id, interval) {
    return axios.get(java_base + '/up/watch/', {
        params: {
            mid: id,
            interval: interval
        }
    })
}

export function getUpData(mid) {
    return axios.get(java_base + '/up/detail', {
        params: {
            mid: mid
        }
    })
}

export function getUpHistory(mid, days) {
    return axios.get(java_base + '/up/history', {
        params: {
            mid: mid,
            days: days
        }
    })
}