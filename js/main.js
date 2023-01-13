var propertyList = {
	"Block - 1": "Block - 1",

	"content": "1",
	"z-index": "2",
	"cursor": "3",
	"object-fit": "4",
	"user-select": "5",
	"pointer-events": "6",
	"appearance": "7",
	"resize": "8",
	
	"Block - 2": "Block - 2",
	
	"position": "9",
	"top": "10",
	"bottom": "11",
	"left": "12",
	"right": "13",
	
	"Block - 3": "Block - 3",
	
	"display": "14",
	"flex": "15",
	"flex-direction": "16",
	"justify-content": "17",
	"align-items": "18",
	"flex-wrap": "19",
	"flex-flow": "20",
	"align-content": "21",
	"gap": "22",
	"row-gap": "23",
	"column-gap": "24",
	
	"Block - 4": "Block - 4",
	
	"grid": "25",
	"grid-row-start": "26",
	"grid-column-start": "27",
	"grid-row-end": "28",
	"grid-column-end": "29",
	"grid-template": "30",
	"grid-template-rows": "31",
	"grid-template-columns": "32",
	"grid-template-areas": "33",
	"grid-row-gap": "34",
	"grid-column-gap": "35",
	"grid-gap": "36",
	"justify-items": "37",
	"grid-auto-rows": "38",
	"grid-auto-columns": "39",
	"grid-auto-flow": "40",
	
	"Block - 5": "Block - 5",
	
	"box-sizing": "41",
	"width": "42",
	"max-width": "43",
	"min-width": "44",
	
	"Block - 6": "Block - 6",
	
	"height": "45",
	"max-height": "46",
	"min-height": "47",
	
	"Block - 7": "Block - 7",
	
	"margin": "48",
	"margin-top": "49",
	"margin-bottom": "50",
	"margin-left": "51",
	"margin-right": "52",
	
	"Block - 8": "Block - 8",
	
	"padding": "53",
	"padding-top": "54",
	"padding-bottom": "55",
	"padding-left": "56",
	"padding-right": "57",
	
	"Block - 9": "Block - 9",
	
	"font-family": "58",
	"color": "59",
	"font": "60",
	"font-weight": "61",
	"font-stretch": "62",
	"font-style": "63",
	"font-size": "64",
	"font-size-adjust": "65",
	"font-synthesis": "66",
	
	"Block - 10": "Block - 10",
	
	"text-decoration": "67",
	"text-decoration-line": "68",
	"text-transform": "69",
	"text-align": "70",
	"line-height": "71",
	"text-indent": "72",
	"white-space": "73",
	"letter-spacing": "74",
	"tab-size": "75",
	"word-break": "76",
	"line-break": "77",
	"hyphens": "78",
	"overflow-wrap": "79",
	"text-align-all": "80",
	"text-align-last": "81",
	"word-spacing": "82",
	"background": "83",
	"background-color": "84",
	"background-image": "85",
	"background-repeat": "86",
	"background-attachment": "87",
	"background-position": "88",
	"background-clip": "89",
	"background-origin": "90",
	"background-size": "91",
	"backdrop-filter": "92",
	
	"Block - 11": "Block - 11",
	
	"border": "93",
	"border-style": "94",
	"border-color": "95",
	"border-width": "96",
	"border-top": "97",
	"border-bottom": "98",
	"border-left": "99",
	"border-right": "100",
	"border-radius": "101",
	
	"Block - 12": "Block - 12",
	
	"list-style": "102",
	"list-style-type": "103",
	"list-style-image": "104",
	"list-style-position": "105",
	"box-shadow": "106",
	"text-shadow": "107",
	
	"Block - 13": "Block - 13",
	
	"transition": "108",
	"transition-property": "109",
	"transition-duration": "110",
	"transition-timing-function": "111",
	"transition-delay": "112",
	"rotate": "113",
	
	"Block - 14": "Block - 14",
	
	"transform": "114",
	"transform-origin": "115",
	"transform-box": "116",
	
	"Block - 15": "Block - 15",
	
	"animation-name": "117",
	"animation-duration": "118",
	"animation-timing-function": "119",
	"animation-iteration-count": "120",
	"animation-play-state": "121",
	"animation-delay": "122",
	"animation-fill-mode": "123",
	
	"Block - 16": "Block - 16",
	
	"overflow": "124",
	"overflow-x": "125",
	"overflow-y": "126",
	"text-overflow": "127",
	"opacity": "128",
	
	"Block - 17": "Block - 17",
	
	"columns": "129",
	"column-width": "130",
	"column-count": "131",
	"column-rule-color": "132",
	"column-rule-style": "133",
	"column-rule-width": "134",
	"column-rule": "135",
	"column-span": "136",
	"column-fill": "137"
}

const btn = document.querySelector('.btn')
const textarea = document.querySelector('#input')
const result = document.querySelector('#output')
const copyBtn = document.querySelector(".copyBtn")

// ----------------------------------------
// Данный код нужен для:
//     - Сортировка базы с свойствами 
//     - Присвоение каждому свойству порядкового номера
//     - Вывод в поле результата сгенерированного текста с свойствами

// При изменении списка свойств:
//     - Раскоментируйте код
//     - Запустите сайт
//     - Скопируйте сгенерированный текст 
//     - Вставьте текст вместо предыдущего объекта
//     - Обратно закоментируйте блок кода

/* 
let i = 1
let blockId = 1

for (var key in propertyList) {

	if (key.includes("Block")) {
		propertyList[key] = "Block - " + blockId
		blockId++
		
		let a = '"' + key + '": ' + '"' + propertyList[key] + '",'

		addString("\n")
		addString(a)
		addString("\n")

	} else {
		propertyList[key] = i

		let a = '"' + key + '": ' + '"' + propertyList[key] + '",'

		addString(a)
		i++
	}
}
*/
var mainArr = []

btn.addEventListener('click', () => {
	// Очистка поля для вывода результата
	result.innerHTML = ''
	mainArr = []
	// Получение кода пользователя
	let codeText = String(textarea.value)

	// Делим код на блоки
	let blocksList = codeText.split(/(}|{)/)
	var blocksList2 = []

	for (let i = 0; i < blocksList.length; i++) {
		if (blocksList[i] != '') {
			blocksList2.push(blocksList[i])
		}
	}
	blocksList = blocksList2

	for (let i = 0; i < blocksList.length; i++) {

		if (blocksList[i].includes("@media")) {
			// Добавляем медиязапрос и переходим к следующей строке
			addString(blocksList[i] + "{")
			i++

		} else if (blocksList[i] === '{') {
			// Удаляем первый "\n", который остался после разделения по "}"
			blocksList[i - 1] = blocksList[i - 1].replace('\n', '')
			addString(blocksList[i - 1] + "{")

			// Проверяем на наличие свойств и начинаем их сортировать 
			if (blocksList[i + 1] != "}") {
				splitBlock(blocksList[i + 1])
			}

		} else if (blocksList[i] === '}') {
			// Если блок пустой, то передаем значение отменяющее вычитание пробелов для тега
			if (blocksList[i - 1] == '{') {
				addCloseTag(blocksList[i - 2], 0)

			} else {
				addCloseTag(blocksList[i - 1])
			}
		}
	}
})


function addCloseTag(blockId, minusStatus) {
	// Я сам не помню что тут происходит, но это работает нормально. 
	// Просто используйте, но не трогайте сам код
	// Статус минуса нужен для отмены вычитания табляции 
	let a = blockId
	a = a.split(/\n/)
	a = a.filter(element => element !== '');
	let aId = a[0]
	let b = 0
	if (aId != undefined) {
		for (let i = 0; i < aId.length; i++) {
			if (aId[i] == " ") {
				b++
			} else if(aId[i] == "\t"){
				b = b + 2
			} else {
				break
			}
		}
	} 

	if (b == 0) {
		addString("}")
	} else {
		if (minusStatus == 0) {
			addString(" ".repeat(b) + "}")
		} else {
			addString(" ".repeat(b-2) + "}")
		}
	}	
}


function splitBlock(blockId) {
	let resultArr  = []
	
	let currentBlock = blockId

	currentBlock = currentBlock.split(/\n/)
	// Обработка всех строк выбранного блока
	for (let stringNum = 0; stringNum < currentBlock.length; stringNum++) {
		if (currentBlock[stringNum] != 0) {
			// Шаблон для создания CSS свойств 
			class Property {
				name;
				value;
				tag;

				constructor(propertyName, propertyValue, propertyTag) {
					this.name = propertyName;
					this.value = propertyValue;
					this.tag = propertyTag;
				}
			}

			let propertyString = currentBlock[stringNum]

			if (propertyString != '') {
				// Деление CSS свойства на элементы
				propertyString = propertyString.split(": ")

				let propertyName = propertyString[0]

				// Поиск номера данного свойства
				let propertyTag = propertyList[`${propertyName.replace(/\s/g, '')}`]

				propertyName = propertyName + ": "

				// Создание обьекта с полученными данными
				let propertyObj = new Property(propertyName, propertyString[1], propertyTag)

				resultArr.push(propertyObj)
			}	
		}
	}
	
	// Сортировка массива по рейтингу CSS свойства 
	resultArr.sort((x, y) => x.tag - y.tag)

	// Вывод на экран результата
	for (let i = 0; i < resultArr.length; i++) {
		obj = resultArr[i]
		errorTag(obj)
	}

	// Выделение не найденных свойств красным
	function errorTag(obj) {
		if (obj.tag == undefined) {
			const string = document.createElement('pre')

			string.classList.add('string')

			string.style.color = "red"

			result.append(string)

			string.innerHTML = obj.name + obj.value
		} else {
			addString(obj.name + obj.value)
		}
	}
}


// Функция выводящяя входящее значение на экран
function addString(value) {
	mainArr.push(value)
	const string = document.createElement('pre')

	string.classList.add('string')
	result.append(string)
	string.innerHTML = value
}

copyBtn.addEventListener("click", () => {
	mainArr = mainArr.join('\n')
	navigator.clipboard.writeText(mainArr)
})