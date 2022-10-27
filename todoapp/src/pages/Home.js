
import "./Home.css";

 function Home() {

  /*const [a,setA]=useState([])


  var bla = a
  bla.push("enter your name")
  setA("")*/


    function myfunction()
    {
      
  var fullName = document.getElementById("fullname");
    var studentClass = document.getElementById("studentclass");
    var divisionName = document.getElementById("division");
    var genderSelect=document.forms["form"]["gender"];
    var dob = document.getElementById("dob");
       if(fullName.value===""){
        alert("Please enter your name");
            return false;
         };
        if(studentClass.value===""){
        alert("Please enter your class");
             return false;
         };

         if(divisionName.value===""){
        alert("Please enter your division");
           return false;
         };
         if(genderSelect.value !== "on"){

        alert(" select ");
             return false;
         };
        if(dob.value===""){
        alert("Please enter your date of birth");
          return false;
         };
         if(fullName.value|| studentClass.value ||divisionName.value||genderSelect.value||dob.value){
         alert("Successfully submitted");}
         return true;
        };
  
      
  
    
  
  return (
    <div className="parent">
      
      <h3> Student Form</h3>
      <form  className="form" onSubmit={myfunction} id="form">
        <label>Name</label>
        <input
          type="text"
          id="fullname" 
          placeholder="Enter your name"
          
        />
        <label>Class</label>
        <input
         type="number"
         placeholder=" Enter your class"
         id="studentclass" 
         />
        <label>Division</label>
        <input
         type="text" 
         placeholder=" Enter your class division"   
         id="division"
         />
        <label>Gender</label>
        <div className="gender" id="gender">
          <input type="radio" name="gender" id="male" />
          Male
          <input type="radio" name="gender" id="female" />
          Female
          <input type="radio" name="gender" id="other" />
          Other
        </div>
        <label>Date of Birth</label>
        <input
         type="date" 
         id="dob"  
          />
        <button>Submit</button>
        
      </form>
    </div>
  );
  }
  export default Home