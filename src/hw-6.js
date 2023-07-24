import { alert } from '@pnotify/core'; 
import '@pnotify/core/dist/PNotify.css'; 
import {obj} from './object.js'



const button = document.querySelector('.button')


const name = document.querySelector('.name')
const email = document.querySelector('.email')
const messege= document.querySelector('.messege')

button.addEventListener('click', (event)=>{
   event.preventDefault()

    obj.name = name.value
    obj.email = email.value
    obj.messege = messege.value
    console.log(obj)

    alert({ 
        text: 'Повідомлення успішно відправлене!' 
      }); 
       

})


