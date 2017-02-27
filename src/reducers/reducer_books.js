// A reducer is a function that returns a piece of the application state.
// Because our application can have many different pieces of state,
// we can have many different reducers.

export default function() {
  return [
    {title: 'Javascript: The Good Parts', pages: 101},
    {title: 'Harry Potter', pages: 39},
    {title: 'The Dark Tower', pages: 85},
    {title: 'Eloquent Ruby', pages: 1}
  ]
}
