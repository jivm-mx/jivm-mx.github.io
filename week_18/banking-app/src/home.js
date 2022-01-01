import { Card } from './context';

function Home() {
  return (
    <Card
      bgcolor="secondary"
      txtcolor="white"
      header="Really Bad Bank"
      title="Welcome to the worst bank you would find!"
      text="Please, try some operations within the navigation bar"
      body={
        // eslint-disable-next-line jsx-a11y/img-redundant-alt
        <img src="bank.png" className="img-fluid" alt="Responsive image" />
      }
    />
  );
}

export default Home;
