import { Route, Routes, BrowserRouter } from 'react-router-dom'
import './App.css'
import Home from './pages/Home'
import Article from './pages/Article'
import ArticleList from './pages/ArticleList'
import About from './pages/About'


function App() {

  return (
    <BrowserRouter>
      <div className="App">
        <h1>My Blog</h1>  
        <p>Welcome to my blog</p>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/article' element={<ArticleList />} />
          <Route path='/article/:articleId'  element={<Article />} />    
        </Routes>
      </div>
    </BrowserRouter>
    

  )
}

export default App;
