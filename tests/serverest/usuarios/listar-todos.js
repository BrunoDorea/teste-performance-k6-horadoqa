import http from 'k6/http'
import { check } from 'k6'

export const options = {
    stages: [
        { duration: '30s', target: 10 },
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


import { htmlReport } from "https://raw.githubusercontent.com/benc-uk/k6-reporter/main/dist/bundle.js"
import { textSummary } from "https://jslib.k6.io/k6-summary/0.0.1/index.js"
export function handleSummary(data) {
    return {
        "report/get-usuarios.html": htmlReport(data),
        stdout: textSummary(data, { indent: " ", enableColors: true }),
    }
}