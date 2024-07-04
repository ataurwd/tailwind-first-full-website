// This is for faq section
function faqbtn(btn, question, ){
   document.getElementById(btn).addEventListener('click', function(){
        const answer = document.getElementById(question)
        if(answer.style.display === 'none' || answer.style.display === ''){
            answer.style.display = 'block';
        }
        else{
            answer.style.display = 'none';
        }
    })
}



faqbtn('plusBtn1', 'question1')
faqbtn('plusBtn2', 'question2')
faqbtn('plusBtn3', 'question3')

//this is for disable right click
document.addEventListener('contextmenu', function(e){
    e.preventDefault(e)
}, false);



document.getElementById('menu-toggle').addEventListener('click', function() {
    const menu = document.getElementById('menu');
    menu.classList.toggle('hidden');
});