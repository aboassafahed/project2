import "./home.css";
import { data } from "./Data";
import Cards from "./Cards";
const Home = () => {
 const dataShow = data.map((el) => <Cards  key ={el.id} title={el.title} desc={el.desc}/>);
  return (
    <main className="Container">
      <section className="section-2">
        <div>
          <h1 className="title-section ">Our Blog</h1>
          <p className="text-section1">
            Sed ut perspiciatis unde omnis iste natus error sit voluptatem
            accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
            quae ab illo inventore veritatis et quasi architecto beatae vitae
            dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit
            aspernatur aut odit aut fugit.
          </p>
        </div>
      </section>
      <div className="card-1">
        {dataShow} 
      </div>
    </main>
  );
};

export default Home;
