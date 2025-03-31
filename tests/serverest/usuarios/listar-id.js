import http from 'k6/http'
import { check } from 'k6'

// export const options = {
//     stages: [
//         { duration: '30s', target: 10 },
//         { duration: '4m', target: 10 },
//         { duration: '30s', target: 0 },
//     ],
// }

export default function listarId () {
    const url = 'http://192.168.100.7:3010/usuarios/0uxuPY0cbmQhpEz1'
    const headers = {
        'accept': 'application/json'
    }
    const res = http.get(url, { headers: headers })

    check(res, {
        'listar-id -> status was 200': (r) => r.status == 200,
        'listar-id -> name is Fulano da Silva': (r) => r.json().nome == 'Fulano da Silva'
    })
}


import { htmlReport } from "https://raw.githubusercontent.com/benc-uk/k6-reporter/main/dist/bundle.js"
import { textSummary } from "https://jslib.k6.io/k6-summary/0.0.1/index.js"
export function handleSummary(data) {
    return {
        "report/get-usuarios-by-id.html": htmlReport(data),
        stdout: textSummary(data, { indent: " ", enableColors: true }),
    }
}