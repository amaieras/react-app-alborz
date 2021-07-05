import { useCollectionData } from "react-firebase-hooks/firestore";
import firebase from "./Firestore";
import 'firebase/firestore';
import CoreDrawer from './core/drawer';

const firestore = firebase.firestore();

function App() {
  return (
      <div className="App">
        <header className="App-header">
        </header>
        <section>
          { GetTeams() }
        </section>
      </div>
  )

}

function GetTeams() {
  const messagesRef = firestore.collection('teams');
  const query = messagesRef.orderBy('name').limit(25);
  const [teams] = useCollectionData(query, { idField: 'id' });
  console.log(teams)
  return (
      <CoreDrawer />
  )
}
export default App;
