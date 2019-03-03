<div>
  <meta charSet="UTF-8" />
  <title>Personal</title>
  <link rel="stylesheet" href="https://unpkg.com/bulma@0.7.4/css/bulma.min.css" />
  <link rel="stylesheet prefetch" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.css" />
  <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.7.2/css/all.css" integrity="sha384-fnmOCqbTlWIlj8LyTjo7mOUStjsKC4pOpQbqyi7RrhN7udi9RwhKkMHpvLbHG9Sr" crossOrigin="anonymous" />
  <link rel="stylesheet" href="kanban.css" />
  <style dangerouslySetInnerHTML={{__html: "\n        .column {\n            float: left;\n            width: 50%;\n            padding: 10px;\n        }\n        .row:after {\n            content = \"\";\n            display: table;\n            clear: both;\n        }\n    " }} />
  <section className="hero is-primary">
    <div className="hero-body">
      <div className="container">
        <h1 className="title">Your Profile</h1>
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
          <a href="workout.html" className="navbar-item">Workout</a>
          <a href="pdata.html" className="navbar-item is-active">Account</a>
        </div>
      </div>
    </div>
  </nav>
  <div className="box">
    <form>
      <div className="field">
        <label className="label">Name</label>
        <div className="control">
          <input className="input" type="text" placeholder="Joe" />
        </div>
      </div>
      <div className="field">
        <label className="label">Username</label>
        <div className="control has-icons-left has-icons-right">
          <input className="input" type="text" placeholder="JJ1" />
          <span className="icon is-small is-left">
            <i className="fas fa-user" />
          </span>
        </div>
      </div>
      <div className="field">
        <label className="label">Email</label>
        <div className="control has-icons-left has-icons-right">
          <input className="input" type="email" placeholder="jj@joe.com" />
          <span className="icon is-small is-left">
            <i className="fas fa-envelope-open" />
          </span>
        </div>
      </div>
      <div className="field">
        <label className="label">Height</label>
        <div className="control">
          <input className="input" type="number" placeholder="cm" />
        </div>
      </div>
      <div className="field">
        <label className="label">Weight</label>
        <div className="control">
          <input className="input" type="number" placeholder="kg" />
        </div>
      </div>
      <div className="field">
        <label className="label">Sex</label>
        <div className="control">
          <div className="select">
            <select>
              <option>Male</option>
              <option>Female</option>
            </select>
          </div>
        </div>
      </div>
      <div className="field">
        <div className="control">
          <button className="button is-link">Save Changes</button>
        </div>
      </div>
    </form>
  </div>
  <div className="columns is-mobile is-centered">
    <div className="column is-half is-narrow" />
  </div>
</div>
