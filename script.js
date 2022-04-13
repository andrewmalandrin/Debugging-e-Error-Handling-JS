
var arr = [1,2,3,4]
var num = 6



function checkVars(arr, num){
    if(!arr || !num) throw new ReferenceError('Parametros não informados.')
    if(typeof arr !== 'object') throw new TypeError('Parametros inválidos.')
    if(typeof num !== 'number') throw new TypeError('Parametros inválidos.')
    if(arr.length !== num) throw new RangeError('Numero deve ser igual ao numero de elementos de arr')
}

function getError(arr, num){

    try {
        checkVars(arr,num)

    }catch(erro){
        if(erro instanceof RangeError){
            console.log('Range Error: ')
            console.log(erro.message)
        }else if(erro instanceof TypeError){
            console.log('Type error:')
            console.log(erro.message)
        }else if(erro instanceof ReferenceError){
            console.log('Reference error:')
            console.log(erro.message)
        }else{
            console.log('Ocorreu um tipo de erro desconhecido.' + e)
            console.log(erro.message)
        }


    }
}

getError(arr,num)