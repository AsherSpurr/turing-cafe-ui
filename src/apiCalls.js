
function fetchReservations() {
    return fetch('http://localhost:3001/api/v1/reservations')
    .then(response => {
        if(!response.ok) {
            throw new Error('Failed to get reservations')
        } 
        return response.json()
    }) 
    .catch(error => {
        throw error
    })
}

function postReservation(newRes) {
    return fetch('http://localhost:3001/api/v1/reservations', {
        method: 'POST', 
        body: JSON.stringify(newRes),
        headers: {
            'content-type': 'application/json'
        }
    })
    .then(response => {
        return response.json()
    })
}

export {fetchReservations, postReservation}