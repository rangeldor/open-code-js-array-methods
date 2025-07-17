console.clear()

const names = ['Daniel', 'Camila', 'Dean']

// Adiciona elementos no final do array
// names.push('Jade', 'Maia')
// console.log(names)

// Adiciona elementos no inicio do array
// names.unshift('Jade', 'Maia')
// console.log(names)

// Remove o último elemento do array
// names.pop()
// console.log(names)

// Remove o primeiro elemento do array
// names.shift()
// console.log(names)

// Retorna o elemento no indice 2 (contagem começa do 0)
// const thirdName = names.at(2)
// console.log(thirdName)

// Retorna o indice do elemento 'Camila'
// const index = names.indexOf('Camila')
// console.log(index)

// Verifica se o array inclui 'Dean'
// const hasName = names.includes('Dean')
// console.log(hasName)

// Cria um novo array transformando cada nome em letras maiúsculas
// .map() -> sempre retorna uma rray do mesmo tamanho; transforma valores.
// const upperCasedNames = names.map(name => name.toUpperCase())
// console.log(upperCasedNames)

// Filtra nomes que são exatamente 'Daniel
// .filter() -> remove itens que não passam no teste; array pode ficar menor.
// const filteredNames = names.filter(name => name === 'Daniel')
// console.log(filteredNames)

// const mapNames = names.map(name => name === 'Daniel')
// console.log(mapNames)

// Verifica se todos os nomes tem mais de 2 caracteres
// const isVeryLongerThanTwoChars = names.every(name => name.length > 2)
// console.log(isVeryLongerThanTwoChars)

// Verifica se algum nome tem mais de 5 caracteres
// const isSomeLongerThanFiveChars = names.some(name => name.length > 6)
// console.log(isSomeLongerThanFiveChars)

// Preenche o array com o valor 1
// names.fill(1)
// console.log(names)

// Reduz oa rray para a soma
// 0 é o valor inicial do acumulador(acc)
// const numbers = [1, 2, 3]
// const total = numbers.reduce((acc, number) => acc + number, 0)
// console.log(total)

// Inverte a ordem dos elementos
// names.reverse()
// console.log(names)

// Ordena os nomes em ordem alfabética
// names.sort()
// console.log(names)

// Encontra o primeiro nome que começa com a letra 'D'
// const findFirstNameStartsWithLetterD = names.find(name => name.startsWith('D'))
// console.log(findFirstNameStartsWithLetterD)

// const findFirstNameEndsWithLetterN = names.find(name => name.endsWith('n'))
// console.log(findFirstNameEndsWithLetterN)

// const findIndexStartsWithLetterC = names.findIndex(name => name.startsWith('C'))
// console.log(findIndexStartsWithLetterC)

// Cria um novo array a partir uma string
// const fromString = Array.from("Open Code")
// console.log(fromString)

// Verifica se é um array
// const checkIsArray = Array.isArray(names)
// console.log(checkIsArray)

// Junta os nomes em uma string separados por virgula
// const namesWithComma = names.join(' -> ')
// console.log(namesWithComma)

// Cria uma cópia parcial do array (do indice 1 até antes do indice 3)
// const sliced = names.slice(1, 3)
// console.log(sliced)

// Altera o array removendo ou adicionando elementos
const spliced = names.splice(1, 2, 'Link') // remove ['Camila', 'Dean]; e adiciona 'Link'
// console.log(spliced) // retorna os removidos ['Camila', 'Dean]
console.log(names)
