import Card from './components/Card';
import data from './db.json';
import Header from './components/Header';

function App() {
  return (
    <div className="md:container md:mx-auto p-5 sm:p-0">
      <Header />
      <div className="grid gap-5 md:grid-cols-4">
        {data.map((user) => (
          <Card key={user._id} user={user} />
        ))}
      </div>
    </div>
  );
}

export default App;
