console.clear()

const openCodeName = 'Open Code'

// Retorna o tamanho da string
// const lengthOfOpenCodeName = openCodeName.length
// console.log(lengthOfOpenCodeName)

// Retorna o caracter do index informado
// const nameWithTwoChar = openCodeName.charAt(2)
// console.log(nameWithTwoChar)

// Primeiro parâmetro pesquisa o texto a ser substituído e o segundo parâmetro substitui o texto pesquisado
// const replaceOpenCodeName = openCodeName.replace('Open', 'Close')
// console.log(replaceOpenCodeName)

// Substitui todas as ocorrências do texto pesquisado
// const replaceAllOpenCodeName = openCodeName.replaceAll('Open', 'Close')
// console.log(replaceAllOpenCodeName)

// Converte todos os caracteres para maiúsculas
// const nameWithUpperCase = openCodeName.toUpperCase()
// console.log(nameWithUpperCase)

// Converte todos os caracteres para minúsculos
// const nameWithLowerCase = openCodeName.toLowerCase()
// console.log(nameWithLowerCase)

// Remove os espaços em branco do início e do final da string
// const nameWithTrim = openCodeName.trim()
// console.log(nameWithTrim)

// Remove os espaços em branco do final da string
// const nameWithTrimEnd = openCodeName.trimEnd()
// console.log(nameWithTrimEnd)

// Remove os espaços em branco do início da string
// const nameWithTrimStart = openCodeName.trimStart()
// console.log(nameWithTrimStart)

// Retorna a posição da primeira ocorrência do texto pesquisado
// const indexOfCode = openCodeName.indexOf('Code')
// console.log(indexOfCode)

// Retorna a posição da última ocorência do texto pesquisado
// const lastIndexOfCode = openCodeName.lastIndexOf('Code')
// console.log(lastIndexOfCode)

// Junta duas ou mais strings
// const concatName = openCodeName.concat(' - ', 'Canal do Youtube', ' -> Link: ', 'https://youtube.com/@open_code')
// console.log(concatName)

// Divide uma string em um array de strings, usando o separador informado
// const nameWithSplit = openCodeName.split(' ')
// console.log(nameWithSplit)

// Verifica se a string começa com o texto informado
// const startsWithOpen = openCodeName.startsWith('Open')
// console.log(startsWithOpen)

// Verifica se a string termina com o texto informado
// const endsWithCode = openCodeName.endsWith('Code')
// console.log(endsWithCode)

// Preenche a string com o texto informado até atingir o tamanho informado
// const nameWithPadStart = openCodeName.padStart(20, '*')
// console.log(nameWithPadStart)

// Preenche a string com texto informado até atingir o tamanho informado, porém somente no final da string
// const nameWithPadEnd = openCodeName.padEnd(20, '*')
// console.log(nameWithPadEnd)

// Repete a string com o número de vezes informado
// const nameRepeated = openCodeName.repeat(5)
// console.log(nameRepeated)

// Pesquisa o texto informado e retorna a posição da primeira ocorrência
// const searchName = openCodeName.search('Code')
// console.log(searchName)

// Retorna uma parte da string, começando do índice informado até antes do índice final informado
// const nameWithSlice = openCodeName.slice(0, 4)
// console.log(nameWithSlice)

// É semelhante ao slice, mas não aceita índices negativos
// const nameWithSubstring = openCodeName.substring(0, 4)
// console.log(nameWithSubstring)

// Verifica se a string contém o texto informado
// const includesCode = openCodeName.includes('Code')
// console.log(includesCode)

// Verifica se a string contém o texto informado, mas de forma case-insensitive
// const includesCodeInsensitive = openCodeName.toLowerCase().includes('code')
// console.log(includesCodeInsensitive)

// Retorna a string com os caracteres na ordem inversa
const reverseString = openCodeName.split('').reverse().join('')
console.log(reverseString)