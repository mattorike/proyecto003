import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div>
      <center>
      <h1>Suma de numeros</h1>
      </center>
      <hr></hr>
      <form onSubmit={presion}>
        
<center>
        <p> ingrese el primer numero:
          <input type="number" name="valor1" />
        </p>
        </center>
        <hr></hr>
        <center>
        <p>ingrese el segundo numero:
          <input type="number" name="valor2" />
        </p>
        <p>
          <input type="submit" value="Sumar" />
          </p>
          <hr></hr>
          </center>
      </form>
    </div>
  );
}

function presion(e) {
  e.preventDefault();
  const v1=parseInt(e.target.valor1.value, 10);
  const v2=parseInt(e.target.valor1.value, 10);
  const suma=v1+v2;
  alert('Resultado de la suma es:'+suma);
}

export default App;