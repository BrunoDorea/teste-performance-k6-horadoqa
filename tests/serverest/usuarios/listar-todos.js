import http from 'k6/http'
import { check, sleep } from 'k6'

export const options = {
    stages: [
        { duration: '60s', target: 10 },
        { duration: '4m', target: 10 },
        { duration: '30s', target: 0 },
    ],
}

export default function () {
    const url = 'http://localhost:3010/usuarios'
    const headers = {
        'accept': 'application/json'
    }
    const res = http.get(url, { headers: headers })

    check(res, {
        'status was 200': (r) => r.status == 200
    })
}