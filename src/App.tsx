import './App.css';
import cat from './assets/images/cat.png';
import cat2x from './assets/images/cat@2x.png';
import cat3x from './assets/images/cat@3x.png';



function App() {
	return (
		<div className="App">
			<p>Hello, Retina &#128075;</p>
			{/* <div className={'bg'}></div> */}

			<img src={cat} srcSet={`${cat2x} 2x, ${cat3x} 3x`} alt="Super cat" />

			<picture>
				<source srcSet={`${cat2x} 2x, ${cat3x} 3x`} />
				<img src={cat} srcSet={`${cat2x} 2x, ${cat3x} 3x`} alt="Super cat" />
			</picture>

			<figure>
				<img src={cat} srcSet={`${cat2x} 2x, ${cat3x} 3x`} alt="Super cat" />
				<figcaption>Super cat</figcaption>
			</figure>
		</div>
	);
}

export default App;



