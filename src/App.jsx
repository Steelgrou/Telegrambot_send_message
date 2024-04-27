import { useState } from 'react'
import './App.css'
import axios from 'axios'

export default function App() {
  
  // Send message
  const sendMessage = (event) => {
    event.preventDefault();
    const token = "6807646236:AAGeUZUjG8k_owEhXgSmLi_yZDMzbLXw4cQ";
    const chatID = 806346535;
    // const groupID = 7181738438;
    // const allID = chatID + groupID;
    const url = `https://api.telegram.org/bot${token}/sendMessage`;
    const ID = document.getElementById("ID").value;
    const BS = document.getElementById("BS").value;
    const Add = document.getElementById("Add").value;
    const Delete = document.getElementById("Delete").value;
    const Plus = document.getElementById("Plus").value;

    const messageContent = `ID: ${ID}\nНазвание БС: ${BS}\nДобавить контакт: ${Add}\nУдалить контакт: ${Delete}\nДополнительная информация: ${Plus}`
    axios({
      url: url,
      method: 'POST',
      data: {
        "chat_id": chatID,
        "text": messageContent,

      }
    }).then((res) => {
      document.getElementById("myForm").reset();
      alert("Успешно отправлено")
    }).catch((error) => {
      console.log("Что то пошло не так!");
    })
  }

  // closed Send message спасибо

  return (
    <>
      <form id='myForm' onSubmit={sendMessage}>
        <label htmlFor="text">ID</label>
        <input type="text" id='ID' />
        <label htmlFor="">Название базовой станции</label>
        <input type="text" id='BS' />
        <label htmlFor="">Добавление нового контакта</label>
        <input type="text" id='Add' placeholder='+998' />
        <label htmlFor="">Удаление контакта</label>
        <input type="text" id='Delete' placeholder='+998' />
        <label htmlFor="">Дополнительная информация</label>
        <input type="text" id='Plus' />
        <button className='btn-grad' type='submit'>Отправить</button>
      </form>


    </>
  )
}


