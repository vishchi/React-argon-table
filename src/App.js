import ArgonTable from './components/ArgonTable';

function App() {
  const styling = {
    'textAlign': 'center',
    'border': '5px solid #ddd',
    'color': 'white',
    'padding': '5px',
    'backgroundColor': 'purple',

  }
  return (
    <>
      <h1 style = {styling}> Argon Table </h1>
      <ArgonTable />
      </>
  );
}

export default App;
