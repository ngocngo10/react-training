function Feature() {
  return (
    <div className="feature">
      <img src="" alt="" className="feature-image" />
      <h3 className="feature-title">Title</h3>
      <p className="feature-des">
        Lorem ipsum dolor sit amen, consectetur adipiscing elit. Nullam
        pellentesque turpis mi. Aenean eget lectus urna. Sed ac efficitur ex.
        Suspendisse tincidunt non libero sed varius. Quisque id imperdiet elit.
        Etiam pretium dui in velit malesuada, at pretium lectus sagittis. Morbi
        id nulla rhoncus, tempus ligula quis, pulvinar dolor. Mauris nec tempus
        dui. Fusce blandit nunc et purus ultrices, sed laoreet nibh fringilla.
        Curabitur eu urna erat.
      </p>
    </div>
  );
}

function Welcome(props) {
  return <h1>Hello, {props.name}</h1>;
}

function List() {
  return (
    <div>
      <Welcome name="Sara" />
      <Welcome name="Cahal" />
      <Welcome name="Edite" />
    </div>
  );
}

export { Feature, List };
