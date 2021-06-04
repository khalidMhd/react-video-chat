import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.css'
import VideoPalyer from './screens/videoPlayer';
import Opetions from './screens/Opetions';
import Notification from './screens/Notifications';
function App() {
  return (
    <div>
        <h3 className="text-center text-info my-4">Video Chat</h3>
        <VideoPalyer />
        <Opetions>
          <Notification />
        </Opetions>
    </div>
  );
}

export default App;
