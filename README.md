hey I'm Starting forward my web development to React 
here are some key points that need to remember.


# Reconciliation
the algorithm React uses to diff one tree with another to determine which parts to be changed.

# Virtual DOM
The virtual DOM (VDOM) is a programming concept where an ideal, or “virtual”, representation of a UI is kept in memory and synced with the “real” DOM by a library such as ReactDOM


# update 
a change in the data used to render a react app. Usually the result of 'setState'. Eventually results in a re-render.


# Fiber 
React Fiber is a reimplementation of React's core algorithm, designed to enhance the user interface's responsiveness and renderability. 

# Hooks 
"hooks are  special functions in React that let you use features like state (a way to remember things) and do things when your component loads or updates, all from within function components. This means you can do a lot more with simple functions without needing to write class components"

## here are some Hooks
1. useState = useState is a React Hook that lets you add a state variable to your component.

2. useEffect = useEffect runs on every render of the component (i.e when a state variable changes) and can also run every time a specific value changes that is mentioned in it's dependency array.

3. useID = useId is a React Hook for generating unique IDs that can be passed to accessibility attributes. const id = useId()