<div>
  <meta charSet="utf-8" />
  <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
  <meta name="viewport" content="width=device-width, initial-scale=1" />
  <title>Login</title>
  <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css" />
  <link href="https://fonts.googleapis.com/css?family=Open+Sans:300,400,700" rel="stylesheet" />
  <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.7.2/css/all.css" integrity="sha384-fnmOCqbTlWIlj8LyTjo7mOUStjsKC4pOpQbqyi7RrhN7udi9RwhKkMHpvLbHG9Sr" crossOrigin="anonymous" />
  {/* Bulma Version 0.7.4*/}
  <link rel="stylesheet" href="https://unpkg.com/bulma@0.7.4/css/bulma.min.css" />
  <link rel="stylesheet" type="text/css" href="login.css" />
  <section className="hero is-success is-fullheight">
    <div className="hero-body">
      <div className="container has-text-centered">
        <div className="column is-4 is-offset-4">
          <h3 className="title has-text-grey">Let's get you started</h3>
          <p className="subtitle has-text-grey">Please fill all boxes to proceed.</p>
          <div className="box">
            <form>
              <div className="field">
                <label className="label">First Name</label>
                <div className="control">
                  <input className="input" type="text" placeholder="Joe" />
                </div>
              </div>
              <div className="field">
                <label className="label">Last Name</label>
                <div className="control">
                  <input className="input" type="text" placeholder="Johnson" />
                </div>
              </div>
              <div className="field">
                <label className="label">Email</label>
                <div className="control has-icons-left">
                  <input className="input" type="email" placeholder="JoeJohn@joe.com" />
                  <span className="icon is-small is-left">
                    <i className="fas fa-envelope-open" />
                  </span>
                  <span className="icon is-small is-right">
                    <i className="fas fa-check" />
                  </span>
                </div>
              </div>
              <div className="field">
                <label className="label">Password</label>
                <p className="control has-icons-left">
                  <input className="input" type="password" placeholder="JJsWeightTraining" />
                  <span className="icon is-small is-left">
                    <i className="fas fa-unlock" />
                  </span>
                </p>
              </div>
              <button className="button is-block is-info is-large is-fullwidth">Register</button>
            </form>
          </div>
          <p className="has-text-grey">
            <a href="login.html">Log-in</a> &nbsp;·&nbsp;
            <a href="../">Forgot Password</a> &nbsp;·&nbsp;
            <a href="../">Need Help?</a>
          </p>
        </div>
      </div>
    </div>
  </section>
</div>
