import http from 'k6/http'
import { check, sleep } from 'k6'

export const options = {
    stages: [
        { duration: '60s', target: 60 },
        { duration: '60s', target: 80 },
        { duration: '60s', target: 100 },
        { duration: '60s', target: 120 },
        { duration: '60s', target: 140 },
        { duration: '60s', target: 160 },
        { duration: '60s', target: 180 },
        { duration: '60s', target: 200 },
        { duration: '30s', target: 0 },
    ],
}

export default function () {
    const res = http.get('http://localhost/')
    check(res, {
        'status was 200': (r) => r.status == 200
    })
    sleep(1)
}