import listarId from './listar-id.js'
import listarTodos from './listar-todos.js'

export let options = {
    scenarios: {
        listarId: {
            executor: 'constant-vus',
            exec: 'listarId',
            vus: 1,
            duration: '30s'
        },
        listarTodos: {
            executor: 'constant-vus',
            exec: 'listarTodos',
            vus: 1,
            duration: '30s'
        },
    },
}

export { listarId, listarTodos }