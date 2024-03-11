const myLibrary = [
    {
        author: 'Станислав Лем',
        title: 'Солярис',
        numPage: 286,
        readStatus: 'Not read'
    },
];

// function Book(title, author, numPage, readStatus) { 
//     this.title = title
//     this.author = author
//     this.numPage = numPage
//     this.readStatus = readStatus
//     this.info = function() {
//         return `${this.title} by ${this.author}, ${this.numPage} pages, ${this.readStatus}`
//     }
// }

class Book {
    constructor(title, author, numPage, readStatus) {
        this.title = title
        this.author = author
        this.numPage = numPage
        this.readStatus = readStatus
    }
}

function addBookToLibrary() {
    let form = document.createElement('FORM')
    form.method = 'GET'
    form.setAttribute('id', 'formm')
    
    let books = document.querySelector('.books')

    let authorLabel = document.createElement('LABEL')
    authorLabel.setAttribute('for', 'Author')
    authorLabel.textContent = 'Author'
    let authorInput = document.createElement('INPUT')
    authorInput.setAttribute('type', 'text')
    authorInput.setAttribute('id', 'Author')
    authorInput.setAttribute('placeholder', 'Войнич')

    let titleLabel = document.createElement('LABEL')
    titleLabel.setAttribute('for', 'Title')
    titleLabel.textContent = 'Title'
    let titleInput = document.createElement('INPUT')
    titleInput.setAttribute('type', 'text')
    titleInput.setAttribute('id', 'Title')
    titleInput.setAttribute('placeholder', 'Овод')

    let numPageLabel = document.createElement('LABEL')
    numPageLabel.setAttribute('for', 'numPage')
    numPageLabel.textContent = 'How many pages?'
    let numPageInput = document.createElement('INPUT')
    numPageInput.setAttribute('type', 'number')
    numPageInput.setAttribute('id', 'numPage')
    numPageInput.setAttribute('placeholder', '...')

    let p = document.createElement('p')
    p.textContent = 'Have you already read this book?'

    let readStatusYES = document.createElement('button')
    readStatusYES.setAttribute('class', 'YES')
    readStatusYES.setAttribute('type', 'button')
    readStatusYES.setAttribute('class', 'yesBtn')
    readStatusYES.textContent = "Yes"

    let readStatusNO = document.createElement('button')
    readStatusNO.setAttribute('class', 'NO')
    readStatusNO.setAttribute('type', 'button')
    readStatusNO.setAttribute('class', 'noBtn')
    readStatusNO.textContent = "No"

    let deleteBtn = document.createElement('button')
    deleteBtn.textContent = 'Close'
    deleteBtn.setAttribute('type', 'button')
    deleteBtn.setAttribute('class', 'closeBtn')

    form.appendChild(authorLabel)
    form.appendChild(authorInput)

    form.appendChild(titleLabel)
    form.appendChild(titleInput)

    form.appendChild(numPageLabel)
    form.appendChild(numPageInput)

    form.appendChild(p)
    form.appendChild(readStatusYES)
    form.appendChild(readStatusNO)
    form.appendChild(deleteBtn)

    return document.querySelector('.main-content').insertBefore(form, document.querySelector('.books'))

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

displayAllBooks(myLibrary)

let addBook = document.querySelector('.addBook')

addBook.addEventListener('click', function() {
    if (!document.querySelector('form')) {
        addBookToLibrary()
        let closeBtn = document.querySelector('.closeBtn')
        closeBtn.addEventListener('click', closeForm)
        
        let yesBtn = document.querySelector('.yesBtn')

        yesBtn.addEventListener('click', function() {
            if (document.querySelector('#Author').value && document.querySelector('#Title').value && document.querySelector('#numPage').value) {
                myLibrary.push({
                    author: document.querySelector('#Author').value,
                    title: document.querySelector('#Title').value,
                    numPage: document.querySelector('#numPage').value,
                    readStatus: 'Read'
                })
                closeForm()
                displayAllBooks(myLibrary)
                refreshBtns()
            }
        })

        let noBtn = document.querySelector('.noBtn')

        noBtn.addEventListener('click', function() {
            if (document.querySelector('#Author').value && document.querySelector('#Title').value && document.querySelector('#numPage').value) {
                myLibrary.push({
                    author: document.querySelector('#Author').value,
                    title: document.querySelector('#Title').value,
                    numPage: document.querySelector('#numPage').value,
                    readStatus: 'Not read'
                })
                closeForm()
                displayAllBooks(myLibrary)
                refreshBtns()
            }
        })

    }
})

function closeForm() {
    if (document.querySelector('form')) {
        let form = document.querySelector('form')
        let parent = document.querySelector('.main-content')
        return parent.removeChild(form)
    }
}

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
