import { productos } from '../mock/data'
export const pedirDatos = () => {
    return new Promise((resolve, reject) => {
setTimeout(() => {
    resolve(productos)
}, 2500)
    })
}