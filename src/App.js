import Layout from './layout';
import Banner from './components/bannerComponents';
import Ads from './components/adsComponents';
import Post from './components/PostsComponents';
function App() {
  return (
    <div>
      <Layout>
        <Banner/>
        <Ads/>
        <Post/>
        <Ads/>      
        </Layout>  
    </div>    
  );
}

export default App;
