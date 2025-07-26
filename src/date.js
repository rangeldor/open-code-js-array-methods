console.clear()

const date = new Date() // Cria uma nova data com o horário atual
// const date = new Date('2025-07-21') // Cria uma nova data com a data informada

/* Conversions */
// console.log(date)
// console.log(date.toString()) // Converte a data para uma string
// console.log(date.toDateString()) // Converte a data para uma string sem o horário
// console.log(date.toTimeString()) // Converte a data para uma string e exibe somente o horário
// console.log(date.toISOString()) // Converte a data para uma string no formato ISO 8601
// console.log(date.toLocaleString()) // Converte a data para uma string no formato local com a hora
// console.log(date.toLocaleDateString()) // Converte a data para uma string no formato local sem a hora
// console.log(date.toTimeString()) // Converte a data para uma string e exibe somente o horário

/* Get Methods */
// console.log(date.getTime()) // Retorna o timestamp da data (número de milissegundos desde 1 de janeiro de 1970)
// console.log(date.getFullYear()) // Retorna o ano da data
// const incrementMonth = 1 // Incrementa 1 mês
// console.log(date.getMonth() + incrementMonth) // Retorna o mês da data (0-11, onde 0 é janeiro e 11 é dezembro)
// console.log(date.getDate()) // Retorna o dia do mês da data (1-31)
// console.log(date.getDay()) // Retorna o dia da semana da data (0-6, onde 0 é domingo e 6 é sábado)
// console.log(date.getHours()) // Retorna a hora da data (0-23)
// console.log(date.getMinutes()) // Retorna os minutos da data (0-59)
// console.log(date.getSeconds()) // Retorna os segundos da data (0-59)
// console.log(date.getMilliseconds()) // Retorna os milissegundos da data (0-999)
// console.log(date.getTimezoneOffset()) // Retorna o fuso horário da data em minutos (diferença entre UTC e o horário local)

/* Set Methods */
// date.setTime(date.getTime()) // Define o horário em milissegundos
// console.log(date.toString())

// date.setFullYear(2024) // Define o ano da data
// console.log(date.toString())

// date.setMonth(10) // Define o mês da data (0-11, onde 0 é janeiro e 11 é dezembro)
// console.log(date.toString())

// date.setDate(15) // Define o dia do mês da data (1-31)
// console.log(date.toString())

// date.setHours(10) // Define a hora da data (0-23)
// console.log(date.toString())

// date.setMinutes(30) // Define os minutos da data (0-59)
// console.log(date.toString())

// date.setSeconds(20) // Define os segundos da data (0-59)
// console.log(date.toString())

date.setMilliseconds(500) // Define os milissegundos da data (0-999)
console.log(date.toString())