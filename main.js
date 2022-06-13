/*============ NAVIGATION ============*/
const tabs = document.querySelectorAll('[data-target]');
const tabContents = document.querySelectorAll('[data-content]');

tabs.forEach(tab => {
    tab.addEventListener('click', () => { 
        const target = document.querySelector(tab.dataset.target)
        console.log('hi')

        tabContents.forEach(tabContent => {
            tabContent.classList.remove('active-section')
        })

        target.classList.add('active-section')

        tabs.forEach(tab => {
            tab.classList.remove('active-section')
        })
        tab.classList.add('active-section')
    })
})



/*============ ARTISTS MODAL ============*/

const modalViews = document.querySelectorAll('.artist_modal');
const modalCards = document.querySelectorAll('.artist_card');
const modalCloses = document.querySelectorAll('.artist_modal-cross');

let modal = function(modalClick) {
    modalViews[modalClick].classList.add('active-modal')
}

modalCards.forEach((modalCard, i) => {
    modalCard.addEventListener('click', () => {
        modal(i);    
    })
})

modalCloses.forEach((modalClose) => {
    modalClose.addEventListener('click', () => {
        modalViews.forEach((modalView) => {
            modalView.classList.remove('active-modal')
        })
    })
})


/*============ MIXITUP FILTER FOR ALBUMS ============*/

let mixer = mixitup('.albums_container', {
    selectors: {
        target: '.album_card'
    },
    animation: {
        duration: 300
    }
});

/* Active Link Album */
const linkAlbum = document.querySelectorAll('.album_filter')

function activeAlbum() {
    linkAlbum.forEach(item => item.classList.remove('active-album'))
    this.classList.add('active-album')
}

linkAlbum.forEach(item => item.addEventListener('click', activeAlbum))



