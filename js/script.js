

// signOutBtn

const signOutBtn = document.querySelector('.signOutBtn')
signOutBtn.addEventListener('click' , () => {
    localStorage.setItem('isAuth' , 'false')
    window.location.reload()
})

window.addEventListener('load' , () => {
    const isAuth = localStorage.getItem('isAuth')
    isAuth === 'true' ? null : window.open('auth.html' , '_self')
})


const Base = [
    {
        title: "Что должен знать фронтенд-разработчик",
        itemOne: 'HTML, CSS и JavaScript',
        itemTwo: 'PHP, HTML и CSS',
        itemThree: 'Kotlin, PHP и JavaScript',
        itemFour: 'Python, CSS, SCSS',
        id: 0,
    }, {
        title: "С помощью какого тега следует разделять абзацы",
        itemOne: 'p',
        itemTwo: 'span',
        itemThree: 'b',
        itemFour: 'br',
        id: 1,
    }
    , {
        title: "С помощью какого тега в HTML создаются ссылки",
        itemOne: 'p',
        itemTwo: 'b',
        itemThree: 'a',
        itemFour: 'i',
        id: 2,
    }
    , {
        title: "С помощью какого тега создаются поля формы",
        itemOne: 'input',
        itemTwo: 'field',
        itemThree: 'form',
        itemFour: 'parameter',
        id: 3,
    }
    , {
        title: "Как расшифровывается CSS",
        itemOne: 'Common Style Sheets',
        itemTwo: 'Computer Style Sheets',
        itemThree: 'Cascading Style Sheets',
        itemFour: 'Custom Style Sheets',
        id: 4,
    }  
    , {
        title: "Укажите CSS свойство позволяющее устанавливать размер шрифта",
        itemOne: 'font-weight',
        itemTwo: 'font-size',
        itemThree: 'size',
        itemFour: 'weight',
        id: 5,
    }  
    , {
        title: "Укажите селектор позволяющий выбрать все элементы div имеющие атрибут id='wrap'",
        itemOne: 'div-wrap',
        itemTwo: 'div id.wrap',
        itemThree: 'div.wrap',
        itemFour: 'div#wrap',
        id: 6,
    }  
    , {
        title: "С помощью какого тэга можно подключить к HTML документу внешний файл стилей",
        itemOne: 'style',
        itemTwo: 'link',
        itemThree: 'meta',
        itemFour: 'css',
        id: 7,
    }  
    , {
        title: "С помощью какого CSS свойства можно оформить границу элемента",
        itemOne: 'border',
        itemTwo: 'padding',
        itemThree: 'margin',
        itemFour: 'outline',
        id: 8,
    }  
    , {
        title: "Выберите свойство с правильно заданным значением цвета",
        itemOne: 'color:#000000',
        itemTwo: 'color:00-00-00',
        itemThree: 'color:%00-00-00',
        itemFour: 'color:#00:00:00',
        id: 9,
    } 
    , {
        title: "Выберите существующее CSS свойство для оформления списков",
        itemOne: 'list-color',
        itemTwo: 'list-width',
        itemThree: 'list-style',
        itemFour: 'list-height',
        id: 10,
    }  
]

window.addEventListener('load' , () => {
    if(localStorage.getItem('quiz')){
        return
    }else{
        localStorage.setItem('quiz' , JSON.stringify(Base))
    }
})

// id 0

const getQuiz = JSON.parse(localStorage.getItem('quiz'))

const container = document.querySelector('.quiz_container')

function showCard(arr){
    const newArr = arr.map(item => {
        if(item.id === 0){
            return `
            <div class="quiz_body">
                <div class="quiz_question">
                    <h2>1) ${item.title} <span>?</span></h2>
                </div>
                <div class="quiz_content">
                    <ul>
                        <span onclick='clicked()'><li onclick="correct()"><span class="circle"></span><span class="bot">A</span> ${item.itemOne}</li></span>
                        <li onclick='clicked1()'><span class="circle circle1"></span><span class="bot">B</span> ${item.itemTwo}</li>
                        <li onclick='clicked2()'><span class="circle circle2"></span><span class="bot">C</span> ${item.itemThree}</li>
                        <li onclick='clicked3()'><span class="circle circle3"></span><span class="bot">D</span> ${item.itemFour}</li>
                    </ul>
                </div>
            </div>
            <div class="admin">
                <button onclick="EditTask(${item.id})">Edit</button>
                <button onclick="DeleteTask(${item.id})">Delete</button>
            </div>
            <div class="quiz_submit next1">
                submit
            </div>
            `
        }
    }).join(' ')
    container.innerHTML = newArr
}
window.addEventListener('load' , showCard(getQuiz))

// id 1

const next1 = document.querySelector('.next1')

next1.addEventListener('click' , e => {
    e.preventDefault();

    const quizes = JSON.parse(localStorage.getItem('quiz'))
    const newquiz = quizes.map(item => {
        if(item.id === 1){
             return `
            <div class="quiz_body">
                <div class="quiz_question">
                    <h2>2) ${item.title} <span>?</span></h2>
                </div>
                <div class="quiz_content">
                    <ul>
                        <li onclick='clicked4()'><span class="circle circle4"></span><span class="bot">A</span> ${item.itemOne}</li>
                        <li onclick='clicked5()'><span class="circle circle5"></span><span class="bot">B</span> ${item.itemTwo}</li>
                        <li onclick='clicked6()'><span class="circle circle6"></span><span class="bot">C</span> ${item.itemThree}</li>
                        <span onclick='clicked7()'> <li onclick="correct()"><span class="circle circle7"></span><span class="bot">D</span> ${item.itemFour}</li></span>
                    </ul>
                </div>
            </div>
            <div class="admin">
                <button onclick="EditTask(${item.id})">Edit</button>
                <button onclick="DeleteTask1(${item.id})">Delete</button>
            </div>
            <div class="quiz_submit" onclick="next2()">
                submit
            </div>
            `
        }
    }).join('')
    container.innerHTML = newquiz
})
// id 2
function next2(){
    const quizes = JSON.parse(localStorage.getItem('quiz'))
    const newquiz = quizes.map(item => {
        if(item.id === 2){
             return `
            <div class="quiz_body">
                <div class="quiz_question">
                    <h2>3) ${item.title} <span>?</span></h2>
                </div>
                <div class="quiz_content">
                    <ul>
                        <li onclick='clicked8()'><span class="circle circle8"></span><span class="bot">A</span> ${item.itemOne}</li>
                        <li onclick='clicked9()'><span class="circle circle9"></span><span class="bot">B</span> ${item.itemTwo}</li>
                        <span onclick='clicked10()'><li onclick="correct()"><span class="circle circle10"></span><span class="bot">C</span> ${item.itemThree}</li></span>
                        <li onclick='clicked11()'><span class="circle circle11"></span><span class="bot">D</span> ${item.itemFour}</li>
                    </ul>
                </div>
            </div>
            <div class="admin">
                <button onclick="EditTask(${item.id})">Edit</button>
                <button onclick="DeleteTask2(${item.id})">Delete</button>
            </div>
            <div class="quiz_submit" onclick="next3()">
                submit
            </div>
            `
        }
    }).join('')
    container.innerHTML = newquiz
}
// id 3
function next3(){
    const quizes = JSON.parse(localStorage.getItem('quiz'))
    const newquiz = quizes.map(item => {
        if(item.id === 3){
             return `
            <div class="quiz_body">
                <div class="quiz_question">
                    <h2>4) ${item.title} <span>?</span></h2>
                </div>
                <div class="quiz_content">
                    <ul>
                        <span onclick='clicked12()'><li onclick="correct()"><span class="circle circle12"></span><span class="bot">A</span> ${item.itemOne}</li></span>
                        <li onclick='clicked13()'><span class="circle circle13"></span><span class="bot">B</span> ${item.itemTwo}</li>
                        <li onclick='clicked14()'><span class="circle circle14"></span><span class="bot">C</span> ${item.itemThree}</li>
                        <li onclick='clicked15()'><span class="circle circle15"></span><span class="bot">D</span> ${item.itemFour}</li>
                    </ul>
                </div>
            </div>
            <div class="admin">
                <button onclick="EditTask(${item.id})">Edit</button>
                <button onclick="DeleteTask3(${item.id})">Delete</button>
            </div>
            <div class="quiz_submit" onclick="next4()">
                submit
            </div>
            `
        }
    }).join('')
    container.innerHTML = newquiz
}
// id 4
function next4(){
    const quizes = JSON.parse(localStorage.getItem('quiz'))
    const newquiz = quizes.map(item => {
        if(item.id === 4){
             return `
            <div class="quiz_body">
                <div class="quiz_question">
                    <h2>5) ${item.title} <span>?</span></h2>
                </div>
                <div class="quiz_content">
                    <ul>
                        <li onclick='clicked16()'><span class="circle circle16"></span><span class="bot">A</span> ${item.itemOne}</li>
                        <li onclick='clicked17()'><span class="circle circle17"></span><span class="bot">B</span> ${item.itemTwo}</li>
                        <span onclick='clicked18()'><li onclick="correct()"><span class="circle circle18"></span><span class="bot">C</span> ${item.itemThree}</li></span>
                        <li onclick='clicked19()'><span class="circle circle19"></span><span class="bot">D</span> ${item.itemFour}</li>
                    </ul>
                </div>
            </div>
            <div class="admin">
                <button onclick="EditTask(${item.id})">Edit</button>
                <button onclick="DeleteTask4(${item.id})">Delete</button>
            </div>
            <div class="quiz_submit" onclick="next5()">
                submit
            </div>
            `
        }
    }).join('')
    container.innerHTML = newquiz
}
// id 5
function next5(){
    const quizes = JSON.parse(localStorage.getItem('quiz'))
    const newquiz = quizes.map(item => {
        if(item.id === 5){
             return `
            <div class="quiz_body">
                <div class="quiz_question">
                    <h2>6) ${item.title} <span>?</span></h2>
                </div>
                <div class="quiz_content">
                    <ul>
                        <li onclick='clicked20()'><span class="circle circle20"></span><span class="bot">A</span> ${item.itemOne}</li>
                        <span onclick='clicked21()'><li onclick="correct()"><span class="circle circle21"></span><span class="bot">B</span> ${item.itemTwo}</li></span>
                        <li onclick='clicked22()'><span class="circle circle22"></span><span class="bot">C</span> ${item.itemThree}</li>
                        <li onclick='clicked23()'><span class="circle circle23"></span><span class="bot">D</span> ${item.itemFour}</li>
                    </ul>
                </div>
            </div>
            <div class="admin">
                <button onclick="EditTask(${item.id})">Edit</button>
                <button onclick="DeleteTask5(${item.id})">Delete</button>
            </div>
            <div class="quiz_submit" onclick="next6()">
                submit
            </div>
            `
        }
    }).join('')
    container.innerHTML = newquiz
}
// id 6
function next6(){
    const quizes = JSON.parse(localStorage.getItem('quiz'))
    const newquiz = quizes.map(item => {
        if(item.id === 6){
             return `
            <div class="quiz_body">
                <div class="quiz_question">
                    <h2>7) ${item.title} <span>?</span></h2>
                </div>
                <div class="quiz_content">
                    <ul>
                        <li onclick='clicked24()'><span class="circle circle24"></span><span class="bot">A</span> ${item.itemOne}</li>
                        <li onclick='clicked25()'><span class="circle circle25"></span><span class="bot">B</span> ${item.itemTwo}</li>
                        <li onclick='clicked26()'><span class="circle circle26"></span><span class="bot">C</span> ${item.itemThree}</li>
                        <span onclick='clicked27()'><li onclick="correct()"><span class="circle circle27"></span><span class="bot">D</span> ${item.itemFour}</li></span>
                    </ul>
                </div>
            </div>
            <div class="admin">
                <button onclick="EditTask(${item.id})">Edit</button>
                <button onclick="DeleteTask6(${item.id})">Delete</button>
            </div>
            <div class="quiz_submit" onclick="next7()">
                submit
            </div>
            `
        }
    }).join('')
    container.innerHTML = newquiz
}
// id 7
function next7(){
    const quizes = JSON.parse(localStorage.getItem('quiz'))
    const newquiz = quizes.map(item => {
        if(item.id === 7){
             return `
            <div class="quiz_body">
                <div class="quiz_question">
                    <h2>8) ${item.title} <span>?</span></h2>
                </div>
                <div class="quiz_content">
                    <ul>
                        <li onclick='clicked28()'><span class="circle circle28"></span><span class="bot">A</span> ${item.itemOne}</li>
                        <span onclick='clicked29()'><li onclick="correct()"><span class="circle circle29"></span><span class="bot">B</span> ${item.itemTwo}</li></span>
                        <li onclick='clicked30()'><span class="circle circle30"></span><span class="bot">C</span> ${item.itemThree}</li>
                        <li onclick='clicked31()'><span class="circle circle31"></span><span class="bot">D</span> ${item.itemFour}</li>
                    </ul>
                </div>
            </div>
            <div class="admin">
                <button onclick="EditTask(${item.id})">Edit</button>
                <button onclick="DeleteTask7(${item.id})">Delete</button>
            </div>
            <div class="quiz_submit" onclick="next8()">
                submit
            </div>
            `
        }
    }).join('')
    container.innerHTML = newquiz
}
// id 8
function next8(){
    const quizes = JSON.parse(localStorage.getItem('quiz'))
    const newquiz = quizes.map(item => {
        if(item.id === 8){
             return `
            <div class="quiz_body">
                <div class="quiz_question">
                    <h2>9) ${item.title} <span>?</span></h2>
                </div>
                <div class="quiz_content">
                    <ul>
                        <span onclick='clicked32()'> <li onclick="correct()"><span class="circle circle32"></span><span class="bot">A</span> ${item.itemOne}</li></span>
                        <li onclick='clicked33()'><span class="circle circle33"></span><span class="bot">B</span> ${item.itemTwo}</li>
                        <li onclick='clicked34()'><span class="circle circle34"></span><span class="bot">C</span> ${item.itemThree}</li>
                        <li onclick='clicked35()'><span class="circle circle35"></span><span class="bot">D</span> ${item.itemFour}</li>
                    </ul>
                </div>
            </div>
            <div class="admin">
                <button onclick="EditTask(${item.id})">Edit</button>
                <button onclick="DeleteTask8(${item.id})">Delete</button>
            </div>
            <div class="quiz_submit" onclick="next9()">
                submit
            </div>
            `
        }
    }).join('')
    container.innerHTML = newquiz
}
// id 9
function next9(){
    const quizes = JSON.parse(localStorage.getItem('quiz'))
    const newquiz = quizes.map(item => {
        if(item.id === 9){
             return `
            <div class="quiz_body">
                <div class="quiz_question">
                    <h2>10) ${item.title} <span>?</span></h2>
                </div>
                <div class="quiz_content">
                    <ul>
                        <span onclick='clicked36()'><li onclick="correct()"><span class="circle circle36"></span><span class="bot">A</span> ${item.itemOne}</li></span>
                        <li onclick='clicked37()'><span class="circle circle37"></span><span class="bot">B</span> ${item.itemTwo}</li>
                        <li onclick='clicked38()'><span class="circle circle38"></span><span class="bot">C</span> ${item.itemThree}</li>
                        <li onclick='clicked39()'><span class="circle circle39"></span><span class="bot">D</span> ${item.itemFour}</li>
                    </ul>
                </div>
            </div>
            <div class="admin">
                <button onclick="EditTask(${item.id})">Edit</button>
                <button onclick="DeleteTask9(${item.id})">Delete</button>
            </div>
            <div class="quiz_submit" onclick="next10()">
                submit
            </div>
            `
        }
    }).join('')
    container.innerHTML = newquiz
}
// id 10
function next10(){
    const quizes = JSON.parse(localStorage.getItem('quiz'))
    const newquiz = quizes.map(item => {
        if(item.id === 10){
             return `
            <div class="quiz_body">
                <div class="quiz_question">
                    <h2>11) ${item.title} <span>?</span></h2>
                </div>
                <div class="quiz_content">
                    <ul>
                        <li onclick='clicked40()'><span class="circle circle40"></span><span class="bot">A</span> ${item.itemOne}</li>
                        <li onclick='clicked41()'><span class="circle circle41"></span><span class="bot">B</span> ${item.itemTwo}</li>
                        <span onclick='clicked42()'> <li onclick="correct()"><span class="circle circle42"></span><span class="bot">C</span> ${item.itemThree}</li></span>
                        <li onclick='clicked43()'><span class="circle circle43"></span><span class="bot">D</span> ${item.itemFour}</li>
                    </ul>
                </div>
            </div>
            <div class="admin">
                <button onclick="EditTask(${item.id})">Edit</button>
                <button onclick="DeleteTask10(${item.id})">Delete</button>
            </div>
            <div class="quiz_submit" onclick="result()">
                submit
            </div>
            `
        }
    }).join('')
    container.innerHTML = newquiz
}

// counter

localStorage.setItem('counter' , JSON.stringify('0'))
function correct(){
    const counter = JSON.parse(localStorage.getItem('counter'))
    const newCounter = +counter + 1
    localStorage.setItem('counter' , JSON.stringify(newCounter))
}

function result(){
    const counter = JSON.parse(localStorage.getItem('counter'))
    const result = `
    <div style='padding-bottom: 40px' class="quiz_body center">
        <div class="result_container">
            <h2>Правильные ответы ${counter}/11</h2>
        </div>
        <div class='line'>
            <div style='margin-bottom: 15px' class='back' onclick="back()">AGAIN</div>
            <div class='back' onclick="question()">VIEW CORRECT ANSWERS</div>
        </div>
    </div>
    `
    container.innerHTML = result
}
function back(){
    window.location.reload()
}

function question(){
    const quests = Base.map(({title , itemOne , itemTwo ,itemThree , itemFour , id}) => {
        if(id === 0){
            return `    
            <div class="quiz_body">
                <div class="quiz_question">
                    <h2> ${title} <span>?</span></h2>
                </div>
                <div class="quiz_content">
                    <ul>
                        <li><span style='background: #00e400' class="circle"></span><span class="bot">A</span> ${itemOne}</li>
                        <li><span class="circle"></span><span class="bot">B</span> ${itemTwo}</li>
                        <li><span class="circle"></span><span class="bot">C</span> ${itemThree}</li>
                        <li><span class="circle"></span><span class="bot">D</span> ${itemFour}</li>
                    </ul>
                </div>
            </div>
            `
        }else if(id === 1){
            return `    
            <div class="quiz_body">
                <div class="quiz_question">
                    <h2> ${title} <span>?</span></h2>
                </div>
                <div class="quiz_content">
                    <ul>
                        <li><span class="circle"></span><span class="bot">A</span> ${itemOne}</li>
                        <li><span class="circle"></span><span class="bot">B</span> ${itemTwo}</li>
                        <li><span class="circle"></span><span class="bot">C</span> ${itemThree}</li>
                        <li><span style='background: #00e400' class="circle"></span><span class="bot">D</span> ${itemFour}</li>
                    </ul>
                </div>
            </div>
            `
        }else if(id === 2){
            return `    
            <div class="quiz_body">
                <div class="quiz_question">
                    <h2> ${title} <span>?</span></h2>
                </div>
                <div class="quiz_content">
                    <ul>
                        <li><span class="circle"></span><span class="bot">A</span> ${itemOne}</li>
                        <li><span class="circle"></span><span class="bot">B</span> ${itemTwo}</li>
                        <li><span style='background: #00e400' class="circle"></span><span class="bot">C</span> ${itemThree}</li>
                        <li><span class="circle"></span><span class="bot">D</span> ${itemFour}</li>
                    </ul>
                </div>
            </div>
            `
        }else if(id === 3){
            return `    
            <div class="quiz_body">
                <div class="quiz_question">
                    <h2> ${title} <span>?</span></h2>
                </div>
                <div class="quiz_content">
                    <ul>
                        <li><span style='background: #00e400' class="circle"></span><span class="bot">A</span> ${itemOne}</li>
                        <li><span class="circle"></span><span class="bot">B</span> ${itemTwo}</li>
                        <li><span class="circle"></span><span class="bot">C</span> ${itemThree}</li>
                        <li><span class="circle"></span><span class="bot">D</span> ${itemFour}</li>
                    </ul>
                </div>
            </div>
            `
        }else if(id === 4){
            return `    
            <div class="quiz_body">
                <div class="quiz_question">
                    <h2> ${title} <span>?</span></h2>
                </div>
                <div class="quiz_content">
                    <ul>
                        <li><span class="circle"></span><span class="bot">A</span> ${itemOne}</li>
                        <li><span class="circle"></span><span class="bot">B</span> ${itemTwo}</li>
                        <li><span style='background: #00e400' class="circle"></span><span class="bot">C</span> ${itemThree}</li>
                        <li><span class="circle"></span><span class="bot">D</span> ${itemFour}</li>
                    </ul>
                </div>
            </div>
            `
        }else if(id === 5){
            return `    
            <div class="quiz_body">
                <div class="quiz_question">
                    <h2> ${title} <span>?</span></h2>
                </div>
                <div class="quiz_content">
                    <ul>
                        <li><span class="circle"></span><span class="bot">A</span> ${itemOne}</li>
                        <li><span style='background: #00e400' class="circle"></span><span class="bot">B</span> ${itemTwo}</li>
                        <li><span class="circle"></span><span class="bot">C</span> ${itemThree}</li>
                        <li><span class="circle"></span><span class="bot">D</span> ${itemFour}</li>
                    </ul>
                </div>
            </div>
            `
        }else if(id === 6){
            return `    
            <div class="quiz_body">
                <div class="quiz_question">
                    <h2> ${title} <span>?</span></h2>
                </div>
                <div class="quiz_content">
                    <ul>
                        <li><span class="circle"></span><span class="bot">A</span> ${itemOne}</li>
                        <li><span class="circle"></span><span class="bot">B</span> ${itemTwo}</li>
                        <li><span class="circle"></span><span class="bot">C</span> ${itemThree}</li>
                        <li><span style='background: #00e400' class="circle"></span><span class="bot">D</span> ${itemFour}</li>
                    </ul>
                </div>
            </div>
            `
        }else if(id === 7){
            return `    
            <div class="quiz_body">
                <div class="quiz_question">
                    <h2> ${title} <span>?</span></h2>
                </div>
                <div class="quiz_content">
                    <ul>
                        <li><span class="circle"></span><span class="bot">A</span> ${itemOne}</li>
                        <li><span style='background: #00e400' class="circle"></span><span class="bot">B</span> ${itemTwo}</li>
                        <li><span class="circle"></span><span class="bot">C</span> ${itemThree}</li>
                        <li><span class="circle"></span><span class="bot">D</span> ${itemFour}</li>
                    </ul>
                </div>
            </div>
            `
        }else if(id === 8){
            return `    
            <div class="quiz_body">
                <div class="quiz_question">
                    <h2> ${title} <span>?</span></h2>
                </div>
                <div class="quiz_content">
                    <ul>
                        <li><span style='background: #00e400' class="circle"></span><span class="bot">A</span> ${itemOne}</li>
                        <li><span class="circle"></span><span class="bot">B</span> ${itemTwo}</li>
                        <li><span class="circle"></span><span class="bot">C</span> ${itemThree}</li>
                        <li><span class="circle"></span><span class="bot">D</span> ${itemFour}</li>
                    </ul>
                </div>
            </div>
            `
        }else if(id === 9){
            return `    
            <div class="quiz_body">
                <div class="quiz_question">
                    <h2> ${title} <span>?</span></h2>
                </div>
                <div class="quiz_content">
                    <ul>
                        <li><span style='background: #00e400' class="circle"></span><span class="bot">A</span> ${itemOne}</li>
                        <li><span class="circle"></span><span class="bot">B</span> ${itemTwo}</li>
                        <li><span class="circle"></span><span class="bot">C</span> ${itemThree}</li>
                        <li><span class="circle"></span><span class="bot">D</span> ${itemFour}</li>
                    </ul>
                </div>
            </div>
            `
        }else if(id === 10){
            return `    
            <div class="quiz_body">
                <div class="quiz_question">
                    <h2> ${title} <span>?</span></h2>
                </div>
                <div class="quiz_content">
                    <ul>
                        <li><span class="circle"></span><span class="bot">A</span> ${itemOne}</li>
                        <li><span class="circle"></span><span class="bot">B</span> ${itemTwo}</li>
                        <li><span style='background: #00e400' class="circle"></span><span class="bot">C</span> ${itemThree}</li>
                        <li><span class="circle"></span><span class="bot">D</span> ${itemFour}</li>
                    </ul>
                </div>
            </div>
            `
        }
    })
    container.innerHTML = quests
    const refresh = `<div style='margin-bottom: 15px' class='back' onclick="back()">AGAIN</div>`
    container.insertAdjacentHTML('beforeend', refresh)
}
// #0
function clicked(){
    const circle = document.querySelector('.circle')
    circle.classList.toggle('active')
}
function clicked1(){
    const circle = document.querySelector('.circle1')
    circle.classList.toggle('active')
}
function clicked2(){
    const circle = document.querySelector('.circle2')
    circle.classList.toggle('active')
}
function clicked3(){
    const circle = document.querySelector('.circle3')
    circle.classList.toggle('active')
}
// #1
function clicked4(){
    const circle = document.querySelector('.circle4')
    circle.classList.toggle('active')
}
function clicked5(){
    const circle = document.querySelector('.circle5')
    circle.classList.toggle('active')
}
function clicked6(){
    const circle = document.querySelector('.circle6')
    circle.classList.toggle('active')
}
function clicked7(){
    const circle = document.querySelector('.circle7')
    circle.classList.toggle('active')
}
// #2
function clicked8(){
    const circle = document.querySelector('.circle8')
    circle.classList.toggle('active')
}
function clicked9(){
    const circle = document.querySelector('.circle9')
    circle.classList.toggle('active')
}
function clicked10(){
    const circle = document.querySelector('.circle10')
    circle.classList.toggle('active')
}
function clicked11(){
    const circle = document.querySelector('.circle11')
    circle.classList.toggle('active')
}
//#3
function clicked12(){
    const circle = document.querySelector('.circle12')
    circle.classList.toggle('active')
}
function clicked13(){
    const circle = document.querySelector('.circle13')
    circle.classList.toggle('active')
}
function clicked14(){
    const circle = document.querySelector('.circle14')
    circle.classList.toggle('active')
}
function clicked15(){
    const circle = document.querySelector('.circle15')
    circle.classList.toggle('active')
}
//#4
function clicked16(){
    const circle = document.querySelector('.circle16')
    circle.classList.toggle('active')
}
function clicked17(){
    const circle = document.querySelector('.circle17')
    circle.classList.toggle('active')
}
function clicked18(){
    const circle = document.querySelector('.circle18')
    circle.classList.toggle('active')
}
function clicked19(){
    const circle = document.querySelector('.circle19')
    circle.classList.toggle('active')
}
//#5
function clicked20(){
    const circle = document.querySelector('.circle20')
    circle.classList.toggle('active')
}
function clicked21(){
    const circle = document.querySelector('.circle21')
    circle.classList.toggle('active')
}
function clicked22(){
    const circle = document.querySelector('.circle22')
    circle.classList.toggle('active')
}
function clicked23(){
    const circle = document.querySelector('.circle23')
    circle.classList.toggle('active')
}
//#6
function clicked24(){
    const circle = document.querySelector('.circle24')
    circle.classList.toggle('active')
}
function clicked25(){
    const circle = document.querySelector('.circle25')
    circle.classList.toggle('active')
}
function clicked26(){
    const circle = document.querySelector('.circle26')
    circle.classList.toggle('active')
}
function clicked27(){
    const circle = document.querySelector('.circle27')
    circle.classList.toggle('active')
}
//#7
function clicked28(){
    const circle = document.querySelector('.circle28')
    circle.classList.toggle('active')
}
function clicked29(){
    const circle = document.querySelector('.circle29')
    circle.classList.toggle('active')
}
function clicked30(){
    const circle = document.querySelector('.circle30')
    circle.classList.toggle('active')
}
function clicked31(){
    const circle = document.querySelector('.circle31')
    circle.classList.toggle('active')
}
//#8
function clicked32(){
    const circle = document.querySelector('.circle32')
    circle.classList.toggle('active')
}
function clicked33(){
    const circle = document.querySelector('.circle33')
    circle.classList.toggle('active')
}
function clicked34(){
    const circle = document.querySelector('.circle34')
    circle.classList.toggle('active')
}
function clicked35(){
    const circle = document.querySelector('.circle35')
    circle.classList.toggle('active')
}
//#9
function clicked36(){
    const circle = document.querySelector('.circle36')
    circle.classList.toggle('active')
}
function clicked37(){
    const circle = document.querySelector('.circle37')
    circle.classList.toggle('active')
}
function clicked38(){
    const circle = document.querySelector('.circle38')
    circle.classList.toggle('active')
}
function clicked39(){
    const circle = document.querySelector('.circle39')
    circle.classList.toggle('active')
}
//#10
function clicked40(){
    const circle = document.querySelector('.circle40')
    circle.classList.toggle('active')
}
function clicked41(){
    const circle = document.querySelector('.circle41')
    circle.classList.toggle('active')
}
function clicked42(){
    const circle = document.querySelector('.circle42')
    circle.classList.toggle('active')
}
function clicked43(){
    const circle = document.querySelector('.circle43')
    circle.classList.toggle('active')
}


// Edit

const editContainer = document.querySelector('.edit')
const quizTitle = document.querySelector('.quizTitle')
const editText1 = document.querySelector('.editText1')
const editText2 = document.querySelector('.editText2')
const editText3 = document.querySelector('.editText3')
const editText4 = document.querySelector('.editText4')

function EditTask(id){
    editContainer.classList.toggle('appear')

    const editBtn = document.querySelector('.editBtn')
    editBtn.addEventListener('click' , e => {
        e.preventDefault()

        if(quizTitle.value === '' || editText1.value === '' || editText2.value === '' || editText3.value === '' || editText4.value === '') alert("Fill the inputs")

        if(quizTitle.value !== '' || editText1.value !== '' || editText2.value !== '' || editText3.value !== '' || editText4.value !== ''){
            const quiz = JSON.parse(localStorage.getItem('quiz'))
            const newQuiz = quiz.map(item => {
                if(item.id === id){
                    return {
                        ...item,
                        title: quizTitle.value,
                        itemOne: editText1.value,
                        itemTwo: editText2.value,
                        itemThree: editText3.value,
                        itemFour: editText4.value,
                    }
                }else{
                    return item
                }
            })
            localStorage.setItem('quiz' , JSON.stringify(newQuiz))
            window.location.reload()
    
            quizTitle.value = ''
            editText1.value = ''
            editText2.value = ''
            editText3.value = ''
            editText3.value = ''
        }
    })

    const edtiCloseBtn = document.querySelector('.edtiCloseBtn')
    edtiCloseBtn.addEventListener('click' , e => {
        e.preventDefault()
        editContainer.classList.remove('appear')

        quizTitle.value = ''
        editText1.value = ''
        editText2.value = ''
        editText3.value = ''
        editText3.value = ''
    })
}
