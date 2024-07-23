import "./features.css";

function Features({ icon1, icon2, icon3, icon4 }) {
  return (
    <div className="features">
      <article className="boxes">
        <img
          src={icon1}
          alt="training-icon"
        />
        <h4>Declarative</h4>
        <p>
          React makes it painless to create interactive UI's.
        </p>
      </article>
      <article className="boxes">
        <img
          src={icon2}
          alt="training-icon"
        />
        <h4>Components</h4>
        <p>
          Build encapsulated components that manage thier state.
        </p>
      </article>
      <article className="boxes">
        <img
          src={icon3}
          alt="training-icon"
        />
        <h4>Single-Way</h4>
        <p>
          A set of immutable values are passed to the component's.
        </p>
      </article>
      <article className="boxes">
        <img
          src={icon4}
          alt="training-icon"
        />
        <h4>JSX</h4>
        <p>
          Statically-typed, design to run on modern browsers.
        </p>
      </article>
    </div>
  );
}

export default Features;
