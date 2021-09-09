// Primeiro código utilizando o Node.js para 
// carregar o status de memória do PC

const os = require('os')
const log = require('./logger')


setInterval(() => { //função global que atualiza a cada tempo

    const {freemem, totalmem} = os

    const total = parseInt( totalmem() /1024 / 1024)
    const mem = parseInt( freemem() /1024 / 1024)
    const percents = parseInt((mem / total)* 100)

    const stats = {
        free: `${mem} MB`,
        total: `${total} MB`,
        usage: `${percents}%`
    }

    console.clear()
    console.log("====== PC STATS ======")
    console.table(stats)

    log(`${JSON.stringify(stats)}\n`)


}, 1000) // Tempo para o loop

