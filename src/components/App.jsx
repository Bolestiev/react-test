import Header from "./Header/Header";
import Message from "./Message/Message";

const App = () => {
  return (
    <div>
      <Header />
      <Message text="Куплю праску!" author="Олена" />
      <Message text="Продам картоплю!" author="Руслан" />
      <Message text="Куплю шапку!" />
    </div>
  );
};

export default App;
