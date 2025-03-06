import http from 'k6/http'
import { check, sleep } from 'k6'

export const options = {
    stages: [
        { duration: '60s', target: 100 },
        { duration: '4m', target: 100 },
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

import { htmlReport } from "https://raw.githubusercontent.com/benc-uk/k6-reporter/main/dist/bundle.js"
import { textSummary } from "https://jslib.k6.io/k6-summary/0.0.1/index.js"
export function handleSummary(data) {
    return {
        "report/summary.html": htmlReport(data),
        stdout: textSummary(data, { indent: " ", enableColors: true }),
    }
}