'use strict';
let notif = document.querySelector('#notif')

function showNotification() {
    const topPosition = Number(prompt('enter top position value: '))
    const rightPosition = Number(prompt('enter right position value: '))
    const massage = prompt('enter html message: ')
    const classInput = prompt('enter className(optional): ')
    const notifValues = {
        top: `${topPosition}px`,
        right: `${rightPosition}px`,
        html: massage,
        class: classInput
    }
    notif.style.top = notifValues.top;
    notif.style.right = notifValues.right;
    notif.textContent = notifValues.html;
    notifValues.class ? notif.classList.add(notifValues.class) : notif.className = ''

}

showNotification()
// console.log(notif)