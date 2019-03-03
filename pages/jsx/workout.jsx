<div>
  <meta charSet="utf-8" />
  <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
  <meta name="viewport" content="width=device-width, initial-scale=1" />
  <title>Photo Album - Free Bulma template</title>
  <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet" />
  <link href="https://fonts.googleapis.com/css?family=Open+Sans:300,400,700" rel="stylesheet" />
  {/* Bulma Version 0.7.4*/}
  <link rel="stylesheet" href="https://unpkg.com/bulma@0.7.4/css/bulma.min.css" />
  <link rel="stylesheet" type="text/css" href="../css/instaAlbum.css" />
  <section className="hero is-primary">
    <div className="hero-body">
      <div className="container">
        <h1 className="title">Your Workouts</h1>
      </div>
    </div>
  </section>
  <nav className="navbar is-primary">
    <div className="container">
      <div className="navbar-brand">
        <a className="navbar-item" href="index.html" style={{fontWeight: 'bold'}}>
          Home
        </a>
        <span className="navbar-burger burger" data-target="navMenu">
          <span />
          <span />
          <span />
        </span>
      </div>
      <div id="navMenu" className="navbar-menu">
        <div className="navbar-end">
          <a href="notification.html" className="navbar-item">Notification</a>
          <a href="nutrition.html" className="navbar-item">Nutrition</a>
          <a href="workout.html" className="navbar-item is-active">Workout</a>
          <a href="pdata.html" className="navbar-item">Account</a>
        </div>
      </div>
    </div>
  </nav>
  <div className="columns body-columns">
    <div className="column is-half is-offset-one-quarter">
      <div className="card">
        <div className="header">
          <div className="media">
            <div className="media-content">
              <p className="title is-4">Today</p>
              <p className="subtitle is-6">03/02/19</p>
            </div>
          </div>
        </div>
        <div className="card-content">
          <div className="content">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus nec iaculis mauris.
            <br />
          </div>
        </div>
      </div>
      <div className="card">
        <div className="header">
          <div className="media">
            <div className="media-content">
              <p className="title is-4">Yesterday</p>
              <p className="subtitle is-6">03/01/19</p>
            </div>
          </div>
        </div>
        <div className="card-content">
          <div className="content">
            <h3><string>Biceps:</string></h3>
            <h5 />
            <ul>
              <li />
              <li />
              <li />
            </ul>
            <br />
          </div>
        </div>
      </div>
      <div className="card">
        <div className="header">
          <div className="media">
            <div className="media-content">
              <p className="title is-4">Past</p>
              <p className="subtitle is-6">02/28/19</p>
            </div>
          </div>
        </div>
        <div className="card-content">
          <div className="content">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus nec iaculis mauris.
            <br />
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
