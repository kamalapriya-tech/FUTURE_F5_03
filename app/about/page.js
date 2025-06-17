
export default function AboutPage() {
  return (
    <div className="about-wrapper">
      <h1>About ZODISH</h1>
      <p>ZODISH brings your favourite meals to your doorstep with speed and quality.</p>
      <p>From crispy dosas to cheesy pizzas, we partner with top kitchens to serve you joy!</p>
      <p>Our goal: Make every meal feel like a celebration — hot, fresh, and affordable.</p>
    </div>
  );
}


const styles = {
  container: {
    maxWidth: '800px',
    margin: '60px auto',
    padding: '0 20px',
    fontFamily: 'Arial, sans-serif',
    lineHeight: '1.8',
    backgroundColor: '#fff',
    borderRadius: '12px',
    boxShadow: '0 4px 12px rgba(0,0,0,0.08)',
  },
  title: {
    textAlign: 'center',
    color: '#e23744',
    fontSize: '32px',
    marginBottom: '20px',
    paddingTop: '30px',
  },
  text: {
    fontSize: '16px',
    color: '#333',
    paddingBottom: '16px',
  },
};
