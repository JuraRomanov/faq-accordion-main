
const getQuestions = () => { 
    return document.querySelectorAll(".questions__item")
}
const offAll =  (questions) => { 
    questions.forEach(question=> {
        
        const btn  = question.querySelector (".question__btn")
        const answer  = question.querySelector (".question__answer")

        btn.classList.remove("question__btn--active")
        answer.classList.add("question__answer--hiden")
        

    }) 
}
const changeView =  (question,isActive) => { 
    const btn  = question.querySelector(".question__btn")
    const answer  = question.querySelector(".question__answer")
    
    
    if (isActive) {
        btn.classList.remove("question__btn--active")
        answer.classList.add("question__answer--hiden")   
    }
    else { 
        btn.classList.add("question__btn--active")
        answer.classList.remove("question__answer--hiden")
    }
    
   

    
}
document.addEventListener("DOMContentLoaded" , () => { 
    const questions =  getQuestions() ;
    
    questions.forEach((question) => { 
        question.addEventListener("click" ,() => {
            const isActive  =  !!( question.querySelector(".question__btn--active") )
            offAll(questions) ; 
            changeView(event.currentTarget,isActive)
        })
    })
}) ; 