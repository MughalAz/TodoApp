import './App.css';
import Expences from './components/Expences';
import NewExpence from './components/NewExpence';

const App = () => {
  const expences = [
    {
      id: 'e1',
      title: 'Toilet Paper',
      amount: 94.12,
      date: new Date(2018, 7, 14)
    },
    {
      id: 'e2',
      title: 'Car Insurance',
      amount: 74.13,
      date: new Date(2019, 3, 15),
    },
    {
      id: 'e3',
      title: 'New TV',
      amount: 67.12,
      date: new Date(2020, 6, 17)
    },
    {
      id: 'e4',
      title: 'New Desk (wooden)',
      amount: 91.12,
      date: new Date(2021, 9, 11)
    }
  ]
  return (
    <div className='container'>
      <NewExpence/>
      <Expences items={expences} />
    </div>
  );
}
export default App;
