import CalculateScore from './Components/CalculateScore';

function App() {
  return (
    <div>
      <CalculateScore 
        Name="Gaurav Diwan" 
        School="Children's Well Academy" 
        total={284} 
        goal={300} 
      />
    </div>
  );
}

export default App;