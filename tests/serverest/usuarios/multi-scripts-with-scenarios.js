import listarId from './listar-id.js'
import listarTodos from './listar-todos.js'

let scenarios = {}

if (__ENV.SCENARIO === 'constant-vus') {
    scenarios = {
        listarId: {
            executor: 'constant-vus',
            exec: 'listarId',
            vus: 1,
            duration: '1m',
        },
        listarTodos: { 
            executor: 'constant-vus',
            exec: 'listarTodos',
            vus: 1,
            duration: '1m',
        },
    }
} else if (__ENV.SCENARIO === 'constant-arrival-rate') {
    scenarios = {
        listarId: {
            executor: 'constant-arrival-rate',
            exec: 'listarId',
            rate: 10,
            duration: '1m',
            preAllocatedVUs: 1,
            maxVUs: 50
        },
        listarTodos: { 
            executor: 'constant-arrival-rate',
            exec: 'listarTodos',
            rate: 10,
            duration: '1m',
            preAllocatedVUs: 1,
            maxVUs: 50
        },
    }
} else if (__ENV.SCENARIO === 'ramping-vus') {
    scenarios = {
        listarId: {
            executor: 'ramping-vus',
            exec: 'listarId',
            stages: [
                { duration: '30s', target: 10 },
                { duration: '1m', target: 50 },
                { duration: '30s', target: 0 }, 
            ]
        },
        listarTodos: {
            executor: 'ramping-vus',
            exec: 'listarTodos',
            stages: [
                { duration: '30s', target: 10 },
                { duration: '1m', target: 50 },
                { duration: '30s', target: 0 }, 
            ]
        }
    }
} else {
    console.error("Cenário inválido. Use SCENARIO=constant-vus, SCENARIO=constant-arrival-rate ou SCENARIO=ramping-vus.")
    scenarios = {}
}

export let options = { scenarios }

export { listarId, listarTodos }