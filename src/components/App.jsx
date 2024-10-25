import Button from "./Button/Button";
import Countries from "./Countries/Countries";
import Header from "./Header/Header";
import List from "./List/List";
import Message from "./Message/Message";
import Modal from "./Modal/Modal";
import Phones from "./Phones/Phones";

const App = () => {
  const isOnline = false;
  const isLoading = false;
  const age = 44;
  const filmsData = [
    {
      id: "1",
      title: "Terminator",
    },

    {
      id: "2",
      title: "Spiderman",
    },
    {
      id: "3",
      title: "Batman",
    },
  ];
  const goodsData = [
    {
      id: "1",
      title: "Морква",
    },

    {
      id: "2",
      title: "Капуста",
    },
    {
      id: "5",
      title: "Банку огірків",
    },
    {
      id: "3",
      title: "Iphone",
    },
  ];
  const countriesData = [
    { id: "1", name: "Ukraine", capital: "Kyiv" },
    { id: "2", name: "Japan", capital: "Tokyo" },
    { id: "3", name: "Canada", capital: "Ottawa" },
  ];

  const phonesData = [
    { id: "1", name: "Iphone", state: "USA" },
    { id: "2", name: "Samsung", state: "Japan" },
    { id: "3", name: "Redmi", state: "China" },
  ];

  return (
    <div>
      <Phones title="Phones List" data={phonesData} />
      <Header />
      {isOnline && <h1>Welcome back!</h1>}
      {isLoading && <h2>Loading...</h2>}
      {age > 18 ? <h2>Ти диви який вимахав!</h2> : <h2>Йди їж кашу</h2>}
      <List title="My films" data={filmsData} />
      <List title="Goods" data={goodsData} />
      <Modal title="Children how it works?">
        <h2>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Facere
          necessitatibus animi ea autem fugiat officiis veniam, voluptate earum
          nemo ut fuga delectus debitis nisi quo reprehenderit ullam sunt
          molestias temporibus!
        </h2>
        <button>CLICK</button>
      </Modal>
      <Modal title="Login">
        <input type="text" />
        <input type="text" />
        <button>CLick</button>
      </Modal>
      <Modal title="Message box">
        <Message text="Куплю праску!" author="Олена" />
        <Message text="Продам телевізор" author="Макс" />
        <Message text="Куплю шапку" author="Ігор" />
      </Modal>

      <Modal title="Countries box">
        <Countries title="Countries List" data={countriesData} />
      </Modal>

      <Button>Click</Button>
      <Button>🔥 Click</Button>
    </div>
  );
};

export default App;
