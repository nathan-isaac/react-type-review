
## Flash Cards

## Components 

- Quiz
- QuizCard

JSON will hold all the data.

Card modes.

## QuizCard 

### PROPS
- Answer name
- Text Image

### EVENTS
- Guess input submit

### STATE
- Submitted?


# Questions 

- Why does React encourage housing functionality of one component inside its parent instead of in the component itself?
 Example: why would a card not house its own functions for checking the answer that the user has entered? (in this case, our hand is forced because we want the quiz to be able to check all the answers at once)
- Why wouldn’t we want to be able to simply pass information up from a child component to its parent component? (What problem might it cause?)
- What would be the equivalent of a service in the React landscape? Do they even exist?
- Why would we want an architectural pattern that encourages us to pass props down the parent-child chain just to display child components (Redux attempts to solve this)
- Components vs objects - where does the logic live? 
- Why can you not modify state directly instead be required to use events? 
- Where do you test? Can you change the internals without changing the tests? 
- How do you do TDD with front-end development? 