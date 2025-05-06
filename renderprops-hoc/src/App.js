import './App.css';
import DataFetching from './components/renderProps/renderProps.class';
import MouseCoordinates from './components/renderProps/renderProps.function';

function App() {
  return (
    <div className="App">
      <h4>Render Props Class Component</h4>
      <header className="App-header">
        <div>
          <DataFetching
            url="https://jsonplaceholder.typicode.com/users/1"
            render={({ data, loading, error }) => {
              if (loading) return <p>Loading...</p>;
              if (error) return <p>Error: {error}</p>;
              if (data.name)
                return (
                  <div>
                    <span>Name: {data.name}</span>
                    <div>Email: {data.email}</div>
                  </div>
                );
            }}
          />
        </div>
        <div>
          <MouseCoordinates
            render={({ coordinates }) => {
              return (
                <div>x: {coordinates.x},y:{coordinates.y}</div>
              )
            }} />
        </div>
      </header>
      <MouseCoordinates
        render={({ coordinates }) => {
          return (
            // eslint-disable-next-line jsx-a11y/img-redundant-alt
            <img
              alt="cat image" style={{ marginLeft: coordinates.x, width: "80px" }}
              src="https://media.4-paws.org/f/8/0/5/f8055215b5cdc5dee5494c255ca891d7b7d33cd1/Molly_006-2829x1886-2726x1886.jpg" />
          )
        }} />
    </div>
  );
}

export default App;
