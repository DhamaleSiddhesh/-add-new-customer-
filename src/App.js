// import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div class="center">
      <div class="box">
        <div class="title">Add a new customer</div><br />
        <div class="title">Customer name</div>
        <div><input type="text" placeholder="type here.." /></div><br />
        <div class="title">Customer email</div>
        <div><input type="text" placeholder="type here.." /></div><br />
        <div class="title">Buisness ID</div>
        <div><input type="text" placeholder="type here.." /></div><br />
        <div class="title">Billing adress</div>
        <div ><input type="text" placeholder="type here.." /></div><br />
        <button class = "button">Create</button>
      </div>
    </div>
  );
}

export default App;
