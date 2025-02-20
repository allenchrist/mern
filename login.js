function handlelogin()
{
    const username=document.getElementById('user').Value;
    const password=document.getElementById('pass').Value;
    const error=document.getElementById('error');


const logindata=[{username:"cristiano",password:"pass123"},
                  {username:"virat",password:"123pass"},
]

const isValid=logindata.some((user)=>
user.username===username && user.password===password)
if(isValid){
    window.location.href='positioning.html';
    error.innerText='login successful';
}
else{
    error.innerText="Invalid credentials";
}
}