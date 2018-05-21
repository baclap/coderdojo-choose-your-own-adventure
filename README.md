# Choose Your Own Adventure

CoderDojo LA lesson to build a choose your own adventure game with HTML/CSS/JS.

## Breakdown

This Choose Your Own Adventure app is driven mostly by the JavaScript in `app.js`. The content of the story, however, is entirely defined in `story.js`. The HTML in `index.html` is simply a "shell" which will get filled in by `app.js` with the story content in `story.js`. The page styling is defined in `style.css`.

The `story.js` file contains a variable `story` that is a JavaScript object with properties that each define a "page" in the story. Each page has a `title`, `illustration`, `text`, and `nav` property. Here are the descriptions of these properties:

- `title` - The main title for this page. It will be displayed in bold text at the top of the page.
- `illustration` - URL of an image to be displayed under the title of the page.
- `text` - The main story text to be displayed on the page. This can contain HTML tags but does not have to.
- `nav` - An array of `navOption`s. Each `navOption` will be displayed as a button at the bottom of the page, and clicking the button will take you to the `target` page of the `navOption`.
    - `navOption` - The `navOption` should be an object with a `target` and a `text` property.
        - `target` - The name of the page to navigate to when this button is clicked. The `target` should be the name of a top level property in the `story` object (i.e. a "page").
        - `text` - The text to appear on the button.

Example `story.js`:
```JavaScript
const story = {
    intro: {
        title: 'And so the story begins...',
        illustration: 'http://...',
        text: 'You come across a river...',
        nav: [
            {
                target: 'game_over',
                text: '...you try to swim across'
            },
            {
                target: 'mountain',
                text: '...you walk a mile South then cross a bridge'
            }
        ]
    },
    mountain: {
        title: 'The Great Mountain',
        illustration: 'http://...',
        text: 'You come across a huge mountain...',
        nav: [
            {
                target: 'game_over',
                text: 'Climb up...'
            }
        ]
    },
    game_over: {
        title: 'Game Over',
        illustration: 'http://...',
        text: 'You died!',
        nav: [
            {
                target: 'intro',
                text: 'Start over'
            }
        ]
    }
}
```

The `app.js` code is defined and invoked immediately after `story.js`. It will immediately call the `changePage` function with the `intro` page defined in the `story` variable, thus filling in the "shell" HTML in `index.html` with the first page's content. The navigation buttons have click handlers bound to them which will in turn render the next page as the user clicks an option. As long as the `story` object is defined with the necessary properties the page navigation will work as expected and you can build out as long and complex of a story as you'd like.
