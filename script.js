const myLibrary = [
    {
        author: 'Станислав Лем',
        title: 'Солярис',
        numPage: 286,
        readStatus: 'Not read'
    },
];

class Book {
    constructor(title, author, numPage, readStatus) {
        this.title = title
        this.author = author
        this.numPage = numPage
        this.readStatus = readStatus
    }
}

function addBookToLibrary() {
    // let form = document.createElement('FORM')
    // form.method = 'GET'
    // form.setAttribute('id', 'formm')
    
    // let books = document.querySelector('.books')

    // let authorLabel = document.createElement('LABEL')
    // authorLabel.setAttribute('for', 'Author')
    // authorLabel.textContent = 'Author'
    // let authorInput = document.createElement('INPUT')
    // authorInput.setAttribute('type', 'text')
    // authorInput.setAttribute('id', 'Author')
    // authorInput.setAttribute('placeholder', 'Войнич')
    // authorInput.required = true

    // const spanAuthor = document.createElement('span')
    // spanAuthor.setAttribute('class', 'error')
    // spanAuthor.setAttribute('aria-live', 'polite')


    // let titleLabel = document.createElement('LABEL')
    // titleLabel.setAttribute('for', 'Title')
    // titleLabel.textContent = 'Title'
    // let titleInput = document.createElement('INPUT')
    // titleInput.setAttribute('type', 'text')
    // titleInput.setAttribute('id', 'Title')
    // titleInput.setAttribute('placeholder', 'Овод')
    // titleInput.required = true

    // let numPageLabel = document.createElement('LABEL')
    // numPageLabel.setAttribute('for', 'numPage')
    // numPageLabel.textContent = 'How many pages?'
    // let numPageInput = document.createElement('INPUT')
    // numPageInput.setAttribute('type', 'number')
    // numPageInput.setAttribute('id', 'numPage')
    // numPageInput.setAttribute('placeholder', '...')
    // numPageInput.setAttribute('min', 1)
    // numPageInput.required = true
    

    // let p = document.createElement('p')
    // p.textContent = 'Have you already read this book?'

    // let readStatusYES = document.createElement('button')
    // readStatusYES.setAttribute('class', 'YES')
    // readStatusYES.setAttribute('type', 'button')
    // readStatusYES.setAttribute('class', 'yesBtn')
    // readStatusYES.textContent = "Yes"

    // let readStatusNO = document.createElement('button')
    // readStatusNO.setAttribute('class', 'NO')
    // readStatusNO.setAttribute('type', 'button')
    // readStatusNO.setAttribute('class', 'noBtn')
    // readStatusNO.textContent = "No"

    // let deleteBtn = document.createElement('button')
    // deleteBtn.textContent = 'Close'
    // deleteBtn.setAttribute('type', 'button')
    // deleteBtn.setAttribute('class', 'closeBtn')

    // form.appendChild(authorLabel)
    // form.appendChild(authorInput)

    // form.appendChild(spanAuthor)

    // form.appendChild(titleLabel)
    // form.appendChild(titleInput)

    // form.appendChild(numPageLabel)
    // form.appendChild(numPageInput)

    // form.appendChild(p)
    // form.appendChild(readStatusYES)
    // form.appendChild(readStatusNO)
    // form.appendChild(deleteBtn)

    // return document.querySelector('.main-content').insertBefore(form, document.querySelector('.books'))
  }

function displayAllBooks(array) {
    let books = document.querySelector('.books')
    while (books.firstChild) {
        books.removeChild(books.firstChild)
    }
    for (let i = 0; i < array.length; i++) {
        let card = document.createElement('div')
        card.classList.add(`card${i.toString()}`)

        let author = document.createElement('p')
        author.textContent = array[i].author
        card.appendChild(author)

        let title = document.createElement('p')
        title.textContent = array[i].title
        card.appendChild(title)

        let numPage = document.createElement('p')
        numPage.textContent = array[i].numPage
        card.appendChild(numPage)

        let readStatus = document.createElement('button')
        readStatus.classList.add('readStatus')
        readStatus.classList.add(`status${i.toString()}`)
        readStatus.textContent = array[i].readStatus
        card.appendChild(readStatus)

        let removeCard = document.createElement('button')
        removeCard.classList.add('removeCard')
        removeCard.classList.add(`remove${i.toString()}`)
        removeCard.textContent = 'Remove'
        card.appendChild(removeCard)

        card.classList.add('card')
        document.querySelector('.books').appendChild(card)
        console.log(card)
    }
}

function cleanForm() {
    document.getElementById("formm").reset()
}

displayAllBooks(myLibrary)

let addBook = document.querySelector('.addBook')

addBook.addEventListener('click', function() {
    document.querySelector('#formm').classList.toggle('hidden')
    document.querySelector('svg').classList.toggle('rotated')
        
    const author = document.querySelector('#Author')
    const title = document.querySelector('#Title')
    const numPage = document.querySelector('#numPage')

    let yesBtn = document.querySelector('.yesBtn')

    yesBtn.addEventListener('click', function() {
        if (author.validity.valid && title.validity.valid && numPage.validity.valid) {
            myLibrary.push({
                author: document.querySelector('#Author').value,
                title: document.querySelector('#Title').value,
                numPage: document.querySelector('#numPage').value,
                readStatus: 'Read'
            })
            document.querySelector('#formm').classList.toggle('hidden')
            document.querySelector('svg').classList.toggle('rotated')

            displayAllBooks(myLibrary)
            refreshBtns()
            cleanForm()
        } 
    })
    let noBtn = document.querySelector('.noBtn')

    noBtn.addEventListener('click', function() {
        if (author.validity.valid && title.validity.valid && numPage.validity.valid) {
            myLibrary.push({
                author: document.querySelector('#Author').value,
                title: document.querySelector('#Title').value,
                numPage: document.querySelector('#numPage').value,
                readStatus: 'Not read'
            })
            document.querySelector('#formm').classList.toggle('hidden')
            document.querySelector('svg').classList.toggle('rotated')

            displayAllBooks(myLibrary)
            refreshBtns()
            cleanForm()
        }
    })

    author.addEventListener('input', (event) => {
        if (!author.validity.valid) {
            document.querySelector('.author').children[1].classList.add('invalid')
            document.querySelector('.author').children[1].textContent = 'You need to enter Author'
        } else {
            document.querySelector('.author').children[1].classList.remove('invalid')
            document.querySelector('.author').children[1].textContent = ""
        }
    })

    title.addEventListener('input', (event) => {
        if (!title.validity.valid) {
            document.querySelector('.title').children[1].classList.add('invalid')
            document.querySelector('.title').children[1].textContent = 'You need to enter Title'
        } else {
            document.querySelector('.title').children[1].classList.remove('invalid')
            document.querySelector('.title').children[1].textContent = ""
        }
    })

    numPage.addEventListener('input', (event) => {
        if (!numPage.validity.valid) {
            document.querySelector('.numpage').children[1].classList.add('invalid')
            document.querySelector('.numpage').children[1].textContent = 'You need to enter Title'
        } else {
            document.querySelector('.numpage').children[1].classList.remove('invalid')
            document.querySelector('.numpage').children[1].textContent = ""
        }
    })
})

function refreshBtns() {
    for (i = 0; i < myLibrary.length; i++) {
        let statusBtn = document.querySelector(`.status${i.toString()}`)
        statusBtn.addEventListener('click', function() {
            statusBtn.innerHTML = (statusBtn.innerHTML === 'Read') ? statusBtn.innerHTML = 'Not read' : statusBtn.innerHTML = 'Read'
        })
    }

    for (i = 0; i < myLibrary.length; i++) {
        let removeBtn = document.querySelector(`.remove${i.toString()}`)
        removeBtn.addEventListener('click', function() {
            let a = removeBtn.classList[1]
            let b = a[a.length-1]
            let card = document.querySelector(`.card${b.toString()}`)
            card.parentNode.removeChild(card)
            myLibrary.splice(b, 1)
        })
    }
    
}

displayAllBooks(myLibrary)

refreshBtns()
