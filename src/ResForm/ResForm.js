import './ResForm.css'

function ResForm() {
    return (
        <div>
            <form>
                <input type='text' placeholder='Name'></input>
                <input type='text' placeholder='Date(mm/dd)'></input>
                <input type='text' placeholder='Time'></input>
                <input type='text' placeholder='Number of guests'></input>
                <button type='submit'>Make Reservation</button>
            </form>
        </div>
    )
}

export default ResForm