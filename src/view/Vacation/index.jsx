import vacationStatus from "./logic"

 function Vacation({ avaliable}) {
    return <h1>{vacationStatus(avaliable)}</h1>
}

export default Vacation;