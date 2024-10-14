# Animal Adoption Cards

This project dynamically generates animal adoption cards using vanilla JavaScript. Each card displays the animal's name, picture, and an "Adopt Now" button. When the button is clicked, an alert shows that the animal has been adopted.

## Features

- Dynamically creates a list of animal cards.
- Displays animal pictures and names.
- Includes an "Adopt Now" button for each card.
- Alerts the user when an animal is adopted.

## Project Structure

- `index.html`: Contains the HTML structure and a `.cards` container where the cards will be generated.
- `app.js`: Contains the JavaScript logic to create and append the animal cards to the DOM.

## How It Works

1. **HTML**:  
   You need a container in your HTML file with the class `.cards`:
   ```html
   <div class="cards"></div>
   ```
2. **\*JavaScript**:
   The `app.js` file creates an array of animals to adopt, each containing a name and a picture URL. The script generates a card for each animal and adds them to the `.cards` container.

3. **Adopt Button:**
   Each card has a button labeled "Adopt Now." When clicked, an alert will show that the animal has been adopted:

```js
figCaptionButton.addEventListener("click", () => alert(`${name} adopted !`));
```

## License

This project is open-source and free to use under the [MIT License](https://opensource.org/license/mit).
