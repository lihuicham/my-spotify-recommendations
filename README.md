# My Spotify Recommendations (Glassmorphism)

- Created using HTML, CSS, JavaScript.
- **Glassmorphism** design using CSS ```background-image: linear-gradient()``` property. 
- Responsive side navigation bar using Vanilla JavaScript.
- **MixItUp filter** is used for categorization of songs in Favourites section. 

### Glass Effect (CSS property)

```
--glass-color: linear-gradient(
    to right bottom, 
    rgba(255, 255, 255, 0.8), 
    rgba(255, 255, 255, 0.5)
);

```

### MIXITUP (JavaScript function)

```
let mixer = mixitup('.favourites_container', {
    selectors: {
        target: '.fav_card'
    },
    animation: {
        duration: 300
    }
});

```

To use MixItUp 3 or read the documentation, visit [KunkaLabs website](https://www.kunkalabs.com/mixitup/).


