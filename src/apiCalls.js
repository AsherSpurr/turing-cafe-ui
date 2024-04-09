
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

export {fetchReservations}