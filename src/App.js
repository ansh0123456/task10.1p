import './App.css';
import CenteredBar from './Components/CenteredBar';
import Header from './Components/Header';
import FeaturedArticle from './Components/FeaturedAricle';
import FeaturedTutorial from './Components/FeaturedTutorial';
import Mail from './Components/mail';
import About from './Components/about';


function App() {
  const imageUrls = [
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSXVL5BFE8D8kOW52bcbhprS66VvOBOn15EPaG39e0THyGZ09M78M6z5YKZ9Xs-5kOY4_Q&usqp=CAU',
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS9MloTkyz-kmNygMjKuaa5EexSjPSM-u3ahw&usqp=CAU',
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRqLt6P1xX1RRFPet0L48cov2meFP34liGQvQ&usqp=CAU'
  ];
  const titles = ['Sunset 1', 'Sunset 2', 'Sunset 3'];
  const descriptions = [
    'Paradise has been found.',
    'A sunset should never go unnoticed.',
    'Breathe in the sunset.'
  ];
  const authors = ['Victor', 'Bella', 'GD47'];
  const ratings = [4.5, 3.8, 5.0];

  const imageUrl = [
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ1eH-5Fq3iZYW0K7br7qACG573Og1DEWvDFA&usqp=CAU',
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSIAUloI_GJrf6GITvnrFbE1OaqmKchJKViYQ&usqp=CAU',
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRFYWpB9ZPij9DnLpynjChhG25oFnqNFwpOOw&usqp=CAU'
  ];
  const title = ['Sunset 4', 'Sunset 5', 'Sunset 6'];
  const description = [
    'The trouble with sunsets is they have to end.',
    'A promise of a new tomorrow.',
    'A sunset this good dont need a filter.'
  ];
  const author = ['Sunny', 'Danger', 'White'];
  const rating = [4.5, 3.8, 5.0];

  return (
    <div className="App">

  <CenteredBar/>
  <Header/>
  <h1> FEATURED ARTICLE</h1>
  <FeaturedArticle
        imageUrls={imageUrls}
        titles={titles}
        descriptions={descriptions}
        authors={authors}
        ratings={ratings}
      />

<button >See all Articles</button>

  <h1> FEATURED TUTORIAL</h1>
 <FeaturedTutorial
        imageUrls={imageUrl}
        titles={title}
        descriptions={description}
        authors={author}
        ratings={rating}
      /> 
<button >See all Tutorials</button>
  <Mail/>
  <About/>
      

     
     
    </div>
  );
}

export default App