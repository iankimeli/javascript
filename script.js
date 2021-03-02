function getName()
        {
            var female_names=["Akosua","Adwoa","Abenaa","Akua","Yaa","Afua","Ama"];
            var male_names=["Kwasi","Kwadwo","Kwabena","Kwaku","Yaw","Kofi"];
            var date=new Date(document.getElementById("users_date").value); //get the date from the html element
            var gender=document.getElementById("gender").value.toLowerCase(); //get the gender
            var day=date.getDay();
            //getDay() -- day of the week 0 for sunday upto 6 saturday
            
            if (gender==="male")
            {document.getElementById("akan_name").innerHTML=male_names[day];}
            else
            {document.getElementById("akan_name").innerHTML=female_names[day];}
            
            return false;
        }   
        
        function clearAll()
        {
            document.getElementById("akan_name").innerHTML="";
        } 