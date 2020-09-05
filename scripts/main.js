// alert('yes')

window.onload = () => {

    // const listings1 = document.getElementsByClassName('listings')
    const listings2 = Array.from(document.getElementsByClassName('listings')) // Même chose que listings1 mais de sorte à retrouné une Array

    console.log(listings2);

    // loop through listings
    listings2.forEach(listing => handleSlider(listing) )
    
}

