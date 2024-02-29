let input=document.querySelector('input')
let button=document.querySelector('button')
let imgqr=document.querySelector('.imgqr')

imgqr.classList.add('hidden')


button.addEventListener('click',()=>{
    let inputval=input.value;
    if(!inputval){
        return alert('Please enter a text or url')
    }
    button.innerHTML='Receiving QR code'
    imgqr.firstElementChild.src=`https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${inputval}`
    imgqr.firstElementChild.addEventListener('load',()=>{
        imgqr.classList.remove('hidden')
        button.innerHTML='QR code generation'


    })
})
input.addEventListener('keyup',()=>{
    if(!input.value){
        imgqr.classList.add('hidden')

    }
})