//const {sum} = require('./suma')
//suma =sum(1,6)
console.log("HOLA HOLA");

const os =require('node:os')

console.log('Informacion del sistema operativo')

console.log('Nombre del SO', os.platform())
console.log('Version del SO', os.release())
console.log('Arquitectura', os.arch())
console.log('Cpus', os.cpus())
console.log('Memoria libre', os.freemem()/1024 / 1024)
console.log('Memoria total', os.totalmem()/1024 / 1024)
console.log('Uptime', os.uptime()/60 / 60)




console.log("Resultado "+process.argv+" aca termina ");

function installPackages(type,packages){
console.log(`Instalando ${packages} de tipo ${type}`)
}

function removePackages(type,packages){
    console.log(`Removiendo ${packages} de tipo ${type}`)
}

// const params = process.argv
// const action = params[2]
// const type = params[3]
// const packages = params[4]

const [, , action,type,packages] = process.argv

if(action == 'install'){
    installPackages(type,packages)
}

if(action == 'remove'){
    removePackages(type,packages)
}
