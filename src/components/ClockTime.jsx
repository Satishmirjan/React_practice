export default function ClockTime(){
  let time=new Date();
 
  return (<>
  <p>THe Current Time is : {time.toLocaleDateString()}- <br></br>
    {time.toLocaleTimeString()}</p>
  </>)
}