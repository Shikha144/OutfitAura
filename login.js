

        function handleLogin(){
            const email=document.getElementById("email").value;

            const password=document.getElementById("password").value;
        

        if(email===""||password===""){
            alert("please fill in both fields");
            return;
        }

        if(email==="demo@gmail.com"&& password==="123456"){
            alert("login successfull");
        }
        else{

            alert("invalid credentials.Try again");
        
        }
    }
