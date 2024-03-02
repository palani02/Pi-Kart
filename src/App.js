
import './App.css';
import BodyComponent from './components/BodyComponent';
import FooterComponent from './components/FooterComponent';
import HeaderComponent from './components/HeaderComponent';
import LoginForm from './components/LoginFormComponent';
import RegisterForm from './components/RegisterFormComponent';
import SellerComponent from './components/SellerComponent';
import UserComponent from './components/UserComponent';

function App() {
  return (
    <div className="App">
      {/* <UserComponent/>
      <SellerComponent/> */}
      <LoginForm/>
      <RegisterForm/>
      <HeaderComponent/>
      <BodyComponent/>
      <FooterComponent/>
    </div>
  );
}

export default App;
