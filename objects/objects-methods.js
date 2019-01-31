let resturant = {
    name: 'The Garden',
    guestCapacity: 75,
    guestCount: 0,
    checkAvailability: function (partySize) {
        let guestBalance = this.guestCapacity - this.guestCount
        return partySize <= guestBalance
    },
    seatParty: function (num) {
        if (this.checkAvailability(num)) {
            this.guestCount += num;
        } else {
            console.log('Not enough seats!')
        }  
    },
    removeParty: function (num) {
        this.guestCount -= num;
    }
}

let add = resturant.seatParty(5)
console.log(resturant)
let remove = resturant.removeParty(2)
console.log(resturant)
