const container=document.querySelector('.container');
const loginLink=document.querySelector('.SignInlink')
const RegisterLink=document.querySelector('.SignUplink')
RegisterLink.addEventListener('click',()=>{
    container.classList.add('active');
})
loginLink.addEventListener('click',()=>{
    container.classList.remove('active');
})