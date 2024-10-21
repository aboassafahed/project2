const Cards = (props) => {
  return (
    <main className="flex">
      <section className=" flex section-3 ">
        <article className=" card-1">
          <div className="box" style={{ width: "300" }}>
            <h1 className="title-box">{props.title}</h1>
            <p className="sub-title">{props.desc}</p>
            <div className="flex icon">
              <div />
              <div />
            </div>
          </div>
        </article>
      </section>
    </main>
  );
};

export default Cards;
