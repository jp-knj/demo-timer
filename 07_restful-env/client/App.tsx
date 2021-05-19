function App() {
  fetch('/').then(response => {
    console.log(response);
  });
  return (
    <h1>Hello world</h1>
  );
}
export default App;
