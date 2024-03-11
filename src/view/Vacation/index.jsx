import vacationStatus from "./logic"

 const Vacation = ({ avaliable}) => 
     <h1>{vacationStatus(avaliable)}</h1>

export default Vacation;