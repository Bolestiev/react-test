const Headder = () => {
  return (
    <header>
      <div>Logo</div>
      <nav>
        <ul>
          <li>Home</li>
          <li>About</li>
          <li>Profile</li>
        </ul>
      </nav>
    </header>
  );
};

const Section = () => {
  return (
    <section>
      <h2>Welcome to React</h2>
      <button>click</button>
      <button>hello</button>
      <button>sumbit</button>
      <p>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Maxime beatae
        iure aliquid suscipit unde. Vitae numquam quisquam eaque, aperiam ut
        repudiandae, rem alias sequi possimus cupiditate cum eligendi tempore
        quod!
      </p>
      <p>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Maxime beatae
        iure aliquid suscipit unde. Vitae numquam quisquam eaque, aperiam ut
        repudiandae, rem alias sequi possimus cupiditate cum eligendi tempore
        quod!
      </p>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore, iure
        magnam incidunt quidem odit excepturi ullam ex cum in eum facilis, nemo
        nostrum suscipit a quasi tempora veritatis nulla laborum? Earum maxime
        magni minus totam officiis illum sunt dolorum suscipit, placeat qui
        alias quod neque enim pariatur mollitia numquam possimus iusto! Aperiam,
        ea quod blanditiis dolore velit facilis! Aliquam, atque.
      </p>
    </section>
  );
};

const Footer = () => {
  return (
    <footer>
      <h2>OLLA</h2>
      <span>&copy; All right reserved! 2024</span>
    </footer>
  );
};

const App = () => {
  return (
    <div>
      <Headder />
      <Section />
      <Section />
      <Footer />
    </div>
  );
};

export default App;
