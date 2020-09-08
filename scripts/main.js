// alert('yes')

window.onload = () => {

    // const listings1 = document.getElementsByClassName('listings')
    const listings2 = Array.from(document.getElementsByClassName('listings')) // Même chose que listings1 mais de sorte à retrouné une Array

    console.log(listings2);

    // loop through listings
    listings2.forEach(listing => handleSlider(listing) )
    
}

// define function to handle slider
const handleSlider = listing => {
    const listingGrid = listing.getElementsByClassName('listings-grid')[0]
    const arrowLeft = listing.getElementsByClassName('left')[0]
    const arrowRight = listing.getElementsByClassName('right')[0]

    // Error checking

    if (!listingGrid || !arrowLeft || !arrowRight) {
        console.log(listing)
        return
        
    }

    // Right Arrow click action

    arrowRight.addEventListener('click', e => {
        e.preventDefault()
        listingGrid.scrollTo({
            left: listingGrid.offsetWidth,
            behaviour: 'smooth'
        })
    })
    
    arrowLeft.addEventListener('click', e => {
        e.preventDefault()
        listingGrid.scrollTo({
            left: 0, // Retour point d'origine
            behaviour: 'smooth'
        })
    })
}