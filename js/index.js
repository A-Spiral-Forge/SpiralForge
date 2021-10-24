'use strict';

function setTimestamp() {
    let date = Date();
    let dateNew = date.substring(0,25);
    document.getElementById('timestamp').value = dateNew;
    // console.log(date);
};

setInterval(setTimestamp, 1000);

let labelcss1 = `
top: 10px;
letter-spacing: normal;
font-weight: 100;
background-color: #feffde;
z-index:5;
left: 10px;
font-size: 0.9rem;
`;

let labelcss2 = `
top: 2rem;
letter-spacing: normal;
font-weight: 400;
left: 0;
z-index: 1;
width: 100%;
left: 10px;
`;

document.getElementById('fullname').addEventListener('focus', ()=> {
    document.getElementById('fullnamelabel').style = labelcss1;
    document.getElementById('fullnamelabel').style.width = '6rem';
});

document.getElementById('fullname').addEventListener('focusout', ()=> {
    let namevalue = document.getElementById('fullname').value.trim();
    if(namevalue === ''){
        document.getElementById('fullnamelabel').style = labelcss2;
        document.getElementById('fullnamelabel').style.width = '8rem';
    }
});

document.getElementById('email').addEventListener('focus', ()=> {
    document.getElementById('emaillabel').style = labelcss1;
    document.getElementById('emaillabel').style.width = '8rem';
});

document.getElementById('email').addEventListener('focusout', ()=> {
    let emailvalue = document.getElementById('email').value.trim();
    if(emailvalue === ''){
        document.getElementById('emaillabel').style = labelcss2;
        document.getElementById('emaillabel').style.width = '8rem';
    }
});

document.getElementById('message').addEventListener('focus', ()=> {
    document.getElementById('messagelabel').style = labelcss1;
    document.getElementById('messagelabel').style.width = '10rem';
});

document.getElementById('message').addEventListener('focusout', ()=> {
    let msgvalue = document.getElementById('message').value.trim();
    if(msgvalue === ''){
        document.getElementById('messagelabel').style = labelcss2;
        document.getElementById('messagelabel').style.width = '10rem';
    }
});

function labelcsschanger() {
    let namevalue1 = document.getElementById('fullname').value.trim();
    let emailvalue1 = document.getElementById('email').value.trim();
    let msgvalue1 = document.getElementById('message').value.trim();
    if(namevalue1 === ''){
        document.getElementById('fullnamelabel').style = labelcss2;
        document.getElementById('fullnamelabel').style.width = '8rem';
    }
    else
    {
        document.getElementById('fullnamelabel').style = labelcss1;
        document.getElementById('fullnamelabel').style.width = '6rem';
    }
    if(emailvalue1 === ''){
        document.getElementById('emaillabel').style = labelcss2;
        document.getElementById('fullnamelabel').style.width = '8rem';
    }
    else{
        document.getElementById('emaillabel').style = labelcss1;
        document.getElementById('fullnamelabel').style.width = '8rem';
    }
    if(msgvalue1 === ''){
        document.getElementById('messagelabel').style = labelcss2;
        document.getElementById('fullnamelabel').style.width = '10rem';
    }
    else{
        document.getElementById('messagelabel').style = labelcss1;
        document.getElementById('fullnamelabel').style.width = '10rem';
    }
}

let menuOpen = false;
document.getElementById('menu').addEventListener('click',()=>{
    if(menuOpen) {
        document.querySelector('header').style.height = '4rem';
        menuOpen = false;
    } else {
        document.querySelector('header').style.height = '16rem';
        menuOpen = true;
    }
});

let navbarButtons = document.getElementsByClassName('links');
for(let i = 0; i < navbarButtons.length; i++)
{
    navbarButtons[i].addEventListener('click', function() {
        menuOpen = true;
        menu.click();
    });
};