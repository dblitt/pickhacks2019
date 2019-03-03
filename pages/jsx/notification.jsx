<div>
  <meta charSet="UTF-8" />
  <title>Notification</title>
  <link rel="stylesheet" href="https://unpkg.com/bulma@0.7.4/css/bulma.min.css" />
  <link rel="stylesheet prefetch" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.css" />
  <link rel="stylesheet" href="kanban.css" />
  <style dangerouslySetInnerHTML={{__html: "\n        .column {\n            float: left;\n            width: 50%;\n            padding: 10px;\n        }\n        .row:after {\n            content = \"\";\n            display: table;\n            clear: both;\n        }\n    " }} />
  <section className="hero is-primary">
    <div className="hero-body">
      <div className="container">
        <h1 className="title">Notifications</h1>
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
          <a href="notification.html" className="navbar-item is-active">Notification</a>
          <a href="nutrition.html" className="navbar-item">Nutrition</a>
          <a href="workout.html" className="navbar-item">Workout</a>
          <a href="pdata.html" className="navbar-item">Account</a>
        </div>
      </div>
    </div>
  </nav>
  <section className="container">
    <div className="level-item">
      <div className="dual_column">
        <div className="column">
          <h2>Today</h2>
          <div className="column is-narrow">
            <article className="message is-primary">
              <div className="message-header">
                <p>Nutrition</p>
                <button className="delete" aria-label="delete" />
              </div>
              <div className="message-body">
                <div className="board-item">
                  <div className="notification">
                    <button className="delete" />
                    Lorem ipsum dolor sit amet, consectetur
                    adipiscing elit lorem ipsum dolor. <strong>Pellentesque risus mi</strong>, tempus quis placerat ut, porta nec nulla. Vestibulum rhoncus ac ex sit amet fringilla. Nullam gravida purus diam, et dictum <a>felis venenatis</a> efficitur. Sit amet,
                    consectetur adipiscing elit
                  </div>
                </div>
                <div className="board-item">
                  <div className="notification">
                    <button className="delete" />
                    Lorem ipsum dolor sit amet, consectetur
                    adipiscing elit lorem ipsum dolor. <strong>Pellentesque risus mi</strong>
                  </div>
                </div>
                <div className="board-item">
                  <div className="notification">
                    <button className="delete" />
                    Lorem ipsum dolor sit amet, consectetur
                    adipiscing elit lorem ipsum dolor. <strong>Pellentesque risus mi</strong>
                  </div>
                </div>
                <div className="board-item">
                  <div className="notification">
                    <button className="delete" />
                    Lorem ipsum dolor sit amet, consectetur
                    adipiscing elit lorem ipsum dolor. <strong>Pellentesque risus mi</strong>
                  </div>
                </div>
                <div className="board-item">
                  <div className="notification">
                    <button className="delete" />
                    Lorem ipsum dolor sit amet, consectetur
                    adipiscing elit lorem ipsum dolor. <strong>Pellentesque risus mi</strong>
                  </div>
                </div>
                <div className="board-item">
                  <div className="notification">
                    <button className="delete" />
                    Lorem ipsum dolor sit amet, consectetur
                    adipiscing elit lorem ipsum dolor. <strong>Pellentesque risus mi</strong>
                  </div>
                </div>
              </div>
            </article>
          </div>
          <div className="column is-narrow">
            <article className="message is-link">
              <div className="message-header">
                <p>Workout</p>
                <button className="delete" aria-label="delete" />
              </div>
              <div className="message-body">
                <div className="board-item">
                  <div className="notification">
                    <button className="delete" />
                    Lorem ipsum dolor sit amet, consectetur
                  </div>
                </div>
                <div className="board-item">
                  <div className="notification">
                    <button className="delete" />
                    Lorem ipsum dolor sit amet, consectetur
                    adipiscing elit lorem ipsum dolor. <strong>Pellentesque risus mi</strong>
                  </div>
                </div>
                <div className="board-item">
                  <div className="notification">
                    <button className="delete" />
                    Lorem ipsum dolor sit amet, consectetur
                  </div>
                </div>
                <div className="board-item">
                  <div className="notification">
                    <button className="delete" />
                    Lorem ipsum dolor sit amet, consectetur
                  </div>
                </div>
                <div className="board-item">
                  <div className="notification">
                    <button className="delete" />
                    Lorem ipsum dolor sit amet, consectetur
                  </div>
                </div>
                <div className="board-item">
                  <div className="notification">
                    <button className="delete" />
                    Lorem ipsum dolor sit amet, consectetur
                  </div>
                </div>
                <div className="board-item">
                  <div className="notification">
                    <button className="delete" />
                    Lorem ipsum dolor sit amet, consectetur
                  </div>
                </div>
                <div className="board-item">
                  <div className="notification">
                    <button className="delete" />
                    Lorem ipsum dolor sit amet, consectetur
                  </div>
                </div>
              </div>
            </article>
          </div>
          <div className="column is-narrow">
            <article className="message is-info">
              <div className="message-header">
                <p>Info</p>
                <button className="delete" aria-label="delete" />
              </div>
              <div className="message-body">
                <div className="board-item">
                  <div className="notification">
                    <button className="delete" />
                    Lorem ipsum dolor sit amet, consectetur
                  </div>
                </div>
                <div className="board-item">
                  <div className="notification">
                    <button className="delete" />
                    Lorem ipsum dolor sit amet, consectetur
                  </div>
                </div>
                <div className="board-item">
                  <div className="notification">
                    <button className="delete" />
                    Lorem ipsum dolor sit amet, consectetur
                  </div>
                </div>
                <div className="board-item">
                  <div className="notification">
                    <button className="delete" />
                    Lorem ipsum dolor sit amet, consectetur
                  </div>
                </div>
              </div>
            </article>
          </div>
        </div>
        <div className="column">
          <h2>Yesterday</h2>
          <div className="column is-narrow">
            <article className="message is-primary">
              <div className="message-header">
                <p>Nutrition</p>
                <button className="delete" aria-label="delete" />
              </div>
              <div className="message-body">
                <div className="board-item">
                  <div className="notification">
                    <button className="delete" />
                    Lorem ipsum dolor sit amet, consectetur
                    adipiscing elit lorem ipsum dolor. <strong>Pellentesque risus mi</strong>
                  </div>
                </div>
                <div className="board-item">
                  <div className="notification">
                    <button className="delete" />
                    Lorem ipsum dolor sit amet, consectetur
                    adipiscing elit lorem ipsum dolor. <strong>Pellentesque risus mi</strong>
                  </div>
                </div>
                <div className="board-item">
                  <div className="notification">
                    <button className="delete" />
                    Lorem ipsum dolor sit amet, consectetur
                    adipiscing elit lorem ipsum dolor. <strong>Pellentesque risus mi</strong>
                  </div>
                </div>
                <div className="board-item">
                  <div className="notification">
                    <button className="delete" />
                    Lorem ipsum dolor sit amet, consectetur
                    adipiscing elit lorem ipsum dolor. <strong>Pellentesque risus mi</strong>
                  </div>
                </div>
                <div className="board-item">
                  <div className="notification">
                    <button className="delete" />
                    Lorem ipsum dolor sit amet, consectetur
                    adipiscing elit lorem ipsum dolor. <strong>Pellentesque risus mi</strong>
                  </div>
                </div>
                <div className="board-item">
                  <div className="notification">
                    <button className="delete" />
                    Lorem ipsum dolor sit amet, consectetur
                    adipiscing elit lorem ipsum dolor. <strong>Pellentesque risus mi</strong>
                  </div>
                </div>
              </div>
            </article>
          </div>
          <div className="column is-narrow">
            <article className="message is-link">
              <div className="message-header">
                <p>Season 3</p>
                <button className="delete" aria-label="delete" />
              </div>
              <div className="message-body">
                <div className="board-item">
                  <div className="notification">
                    <button className="delete" />
                    Lorem ipsum dolor sit amet, consectetur
                    adipiscing elit lorem ipsum dolor. <strong>Pellentesque risus mi</strong>
                  </div>
                </div>
                <div className="board-item">
                  <div className="notification">
                    <button className="delete" />
                    Lorem ipsum dolor sit amet, consectetur
                    adipiscing elit lorem ipsum dolor. <strong>Pellentesque risus mi</strong>
                  </div>
                </div>
                <div className="board-item">
                  <div className="notification">
                    <button className="delete" />
                    Lorem ipsum dolor sit amet, consectetur
                    adipiscing elit lorem ipsum dolor. <strong>Pellentesque risus mi</strong>
                  </div>
                </div>
                <div className="board-item">
                  <div className="notification">
                    <button className="delete" />
                    Lorem ipsum dolor sit amet, consectetur
                    adipiscing elit lorem ipsum dolor. <strong>Pellentesque risus mi</strong>
                  </div>
                </div>
                <div className="board-item">
                  <div className="notification">
                    <button className="delete" />
                    Lorem ipsum dolor sit amet, consectetur
                    adipiscing elit lorem ipsum dolor. <strong>Pellentesque risus mi</strong>
                  </div>
                </div>
                <div className="board-item">
                  <div className="notification">
                    <button className="delete" />
                    Lorem ipsum dolor sit amet, consectetur
                    adipiscing elit lorem ipsum dolor. <strong>Pellentesque risus mi</strong>
                  </div>
                </div>
                <div className="board-item">
                  <div className="notification">
                    <button className="delete" />
                    Lorem ipsum dolor sit amet, consectetur
                    adipiscing elit lorem ipsum dolor. <strong>Pellentesque risus mi</strong>
                  </div>
                </div>
                <div className="board-item">
                  <div className="notification">
                    <button className="delete" />
                    Lorem ipsum dolor sit amet, consectetur
                    adipiscing elit lorem ipsum dolor. <strong>Pellentesque risus mi</strong>
                  </div>
                </div>
              </div>
            </article>
          </div>
          <div className="column is-narrow">
            <article className="message is-info">
              <div className="message-header">
                <p>Info</p>
                <button className="delete" aria-label="delete" />
              </div>
              <div className="message-body">
                <div className="board-item">
                  <div className="notification">
                    <button className="delete" />
                    Lorem ipsum dolor sit amet, consectetur
                    adipiscing elit lorem ipsum dolor. <strong>Pellentesque risus mi</strong>
                  </div>
                </div>
                <div className="board-item">
                  <div className="notification">
                    <button className="delete" />
                    Lorem ipsum dolor sit amet, consectetur
                    adipiscing elit lorem ipsum dolor. <strong>Pellentesque risus mi</strong>
                  </div>
                </div>
                <div className="board-item">
                  <div className="notification">
                    <button className="delete" />
                    Lorem ipsum dolor sit amet, consectetur
                    adipiscing elit lorem ipsum dolor. <strong>Pellentesque risus mi</strong>
                  </div>
                </div>
                <div className="board-item">
                  <div className="notification">
                    <button className="delete" />
                    Lorem ipsum dolor sit amet, consectetur
                    adipiscing elit lorem ipsum dolor. <strong>Pellentesque risus mi</strong>
                  </div>
                </div>
              </div>
            </article>
          </div>
        </div>
      </div>
    </div></section>
  <div className="columns is-mobile is-centered">
    <div className="column is-half is-narrow" />
  </div>
</div>
