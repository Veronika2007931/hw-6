import { alert } from '@pnotify/core'; 
import '@pnotify/core/dist/PNotify.css'; 




const button = document.querySelector('.button')

button.addEventListener('click', (event)=>{
    event.preventDefault()

    alert({ 
        text: 'Повідомлення успішно відправлене!' 
      }); 
       

})





