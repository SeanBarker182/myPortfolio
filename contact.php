<?php
/*	Author:	Sean Barker
	Date Written:   July 12, 2019
	Dependencies:	index.html
	Description:	Processing script contact

*/
$Name 		= $_POST['name'];
$emailAddress 		= $_POST['email'];

?>
<!DOCTYPE html>
<html lang="en">
  <head>
    <title>Sean Barker</title>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <link
      rel="stylesheet"
      href="https://maxcdn.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"
    />
    <link rel="stylesheet" href="styles.css" />
    <link
      href="https://fonts.googleapis.com/css?family=Noto+Sans|Permanent+Marker|Raleway|Rock+Salt&display=swap"
      rel="stylesheet"
    />
    <link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons">
  </head>

  <body>
    <div id="wrap">
      <div class="contain">
        <!-- NAV BAR -->
        <nav class="navbar navbar-expand-lg navbar-dark">
          <a class="navbar-brand" href="#"
            ><img
              src="assets/logo.png"
              class="img-fluid"
              id="logo-nav"
              alt="Responsive image"
          /></a>
          <button
            class="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
            id="navBut"
          >
            <span class="navbar-toggler-icon"></span>
          </button>

          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav ml-auto thetest">
              <li class="nav-item">
                <a class="nav-link" href="#design-intro" data-page='design-intro'>PROJECTS</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#experience-section" data-page='experience-section'>EXPERIENCE</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#contact" data-page='contact'>CONTACT</a>
              </li>
            </ul>
          </div>
        </nav>
        <!-- HERO TEXT -->
        <div class="head-text" id="head-info">
          <h2 class="display-4 head-4"><b>Front-end Web Developer</b></h2>
          <p class="lead head-p">
            I focus on front-end web technologies to develop robust web pages
            with responsive design. Let's meet up and talk about your next
            project.
          </p>
          <p class="lead">
            <a class="btn btn-primary btn-sm" href="#" role="button"
              >Contact me</a
            >
          </p>
        </div>
        <!-- HEADER BACKGROUND -->
        <div class="img-header">
          <img
            src="assets/headimg.jpg"
            class="img-fluid"
            alt="Responsive image"
          />
        </div>
      </div>
    </div>
    <!-- INTRO SECTION -->
    <div id="design-intro">
      <div class="contain container-fluid">
        <h1>PROJECTS</h1>

        <div class="col-md-12 project-box">
          <div class="row">
            <div class="col-md-6">
              <img
                src="assets/SBT_mac.png"
                alt="Website on Mac"
                class="img-fluid img-mac mx-auto"
              />
            </div>
            <div class=" col-md-6">
              <div class="card">
                <h2 class="card-header">
                  Summit Beverages on Tap
                </h2>
                <div class="card-body">
                  <p class="card-text">
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                    Ratione tempora officiis harum excepturi sunt tenetur,
                    dolorem illum adipisci necessitatibus explicabo facere ex
                    dignissimos, quibusdam doloribus magnam modi sequi cumque
                    labore!
                  </p>
                  <div class="btn-group btn-group-sm" role="group">
                    <button class="btn btn-secondary" type="button">
                      Code
                    </button>
                    <button class="btn btn-secondary" type="button">
                      Site
                    </button>
                  </div>
                </div>
                <div class="card-footer">
                  <label>Built with:</label>
                  <div class="container-fluid">
                    <div class="row">
                      <div class="col-12 col-sm-12 col-md-12">
                        <div class="row">
                          <div class="col-3 col-sm-3 col-md-3">
                            <img
                              src="assets/html-logo.png"
                              alt="HTML5 Logo"
                              class="img-fluid"
                            />
                          </div>
                          <div class="col-3 col-sm-3 col-md-3">
                            <img
                              src="assets/css.png"
                              alt="CSS3 Logo"
                              class="img-fluid"
                            />
                          </div>
                          <div class="col-3 col-sm-3 col-md-3">
                            <img
                              src="assets/JavaScript.png"
                              alt="JavaScript Logo"
                              class="img-fluid"
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="contain container-fluid">
              <div class="row ">
                <div class="col-md-12 logo-box">
                  <div class="row">
                    <div class=" col-md-6">
                      <div class="card">
                        <h2 class="card-header">
                          My Portfolio
                        </h2>
                        <div class="card-body">
                          <p class="card-text">
                            Lorem ipsum, dolor sit amet consectetur adipisicing
                            elit. Ratione tempora officiis harum excepturi sunt
                            tenetur, dolorem illum adipisci necessitatibus
                            explicabo facere ex dignissimos, quibusdam doloribus
                            magnam modi sequi cumque labore!
                          </p>
                          <div class="btn-group btn-group-sm" role="group">
                            <button class="btn btn-secondary" type="button">
                              Code
                            </button>
                            <button class="btn btn-secondary" type="button">
                              Site
                            </button>
                          </div>
                        </div>
                        <div class="card-footer">
                          <label>Built with:</label>
                          <div class="container-fluid">
                            <div class="row">
                              <div class="col-12 col-sm-12 col-md-12">
                                <div class="row">
                                  <div class="col-3 col-sm-3 col-md-3">
                                    <img
                                      src="assets/html-logo.png"
                                      alt="HTML5 Logo"
                                      class="img-fluid"
                                    />
                                  </div>

                                  <div class="col-3 col-sm-3 col-md-3">
                                    <img
                                      src="assets/JavaScript.png"
                                      alt="JavaScript Logo"
                                      class="img-fluid"
                                    />
                                  </div>
                                  <div class="col-3 col-sm-3 col-md-3">
                                    <img
                                      src="assets/sass.png"
                                      alt="Sass Logo"
                                      class="img-fluid"
                                    />
                                  </div>
                                  <div class="col-3 col-sm-3 col-md-3">
                                    <img
                                      src="assets/bootstrap.png"
                                      alt="Bootstrap Logo"
                                      class="img-fluid"
                                    />
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div class="col-md-6">
                      <img
                        src="assets/portfolio_img.png"
                        alt="Website on Mac"
                        class="img-fluid img-mac mx-auto"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div id="experience-section">
      <div class="contain">
        <h1>EXPERIENCE</h1>
        <div class="container-fluid  exp-box">
          <div class="row">
            <div class="col-md-12">
              <div class="row exp-sep">
                <div class="col-md-2">
                  <img
                    alt="Apple Logo"
                    src="assets/Apple_Logo.png"
                    class="img-fluid"
                  />
                </div>
                <div class="col-md-8">
                  <h3>
                    Apple Inc.
                  </h3>
                  <h4>Social Response Advisor</h4>
                  <p>2015-current</p>
                  <p>
                    I've worked for Apple for 4 years now providing technical
                    support through many of our channels. I've also done
                    multiple special projects allowing me to use my web
                    development skills, advanced Excel, and Python. In my
                    current role, I work for Apples Social team providing
                    support and moderation for our customers over Twitter,
                    Instagram, and Facebook.
                  </p>
                </div>
              </div>
              <div class="row exp-sep">
                <div class="col-md-2">
                  <img
                    alt="Summit Cold Brew Logo"
                    src="assets/summit_logo.png"
                    class="img-fluid"
                  />
                </div>
                <div class="col-md-8">
                  <h3>
                    Summit Cold Brew
                  </h3>
                  <h4>Owner/Operator</h4>
                  <p>
                    2018-Current
                  </p>
                  <p>
                    Summit Cold Brew is a project that I started last summer
                    with my wife. We started Summit to become more involved in
                    our community. Through the company, I was able to learn a
                    lot about marketing, graphic design, and buisness
                    administaration. Check us out on Instagram or Facebook under
                    the handle @SummitColdBrew.
                  </p>
                </div>
              </div>
              <div class="row exp-sep">
                <div class="col-md-2">
                  <img
                    alt="Ivy Tech Logo"
                    src="assets/ivytech-logo.png"
                    class="img-fluid"
                  />
                </div>
                <div class="col-md-8">
                  <h3>
                    Software Development (A.S.)
                  </h3>
                  <h4>Ivy Tech Community College of Indiana</h4>
                  <p>
                    2017-2020
                  </p>
                  <p>
                    I've been going to Ivy Tech for the last 3 years as a
                    student of Software Development. My course work has
                    introduced me to the basics of web development technologies
                    and programming languages. In 2019 I earned a certificate in
                    Web Foundations and in the Spring semester of 2020 I will
                    finish my A.A.S. in Software Development which I plan to turn
                    into a B.S. in Computer Science.
                  </p>
                </div>
                
              </div>
              
                
              </div>
              <p><a href="/freelance/">View my resume ⟶</a></p>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="container-fluid contain" id='contact'>
        <legend><h1>CONTACT</h1></legend>
        <h1>Thank you, <?php echo $Name ?>!</h1>
        <h2>I will contact you at <?php echo $emailAddress ?> at my earliest convenience.</h2>
  <footer>
    <div id='footer-sec'></div>
  </footer>
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.4.0/jquery.min.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.7/umd/popper.min.js"></script>
    <script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.3.1/js/bootstrap.min.js"></script>
    <script src="onHover.js"></script>
    <script src="form.js"></script>
    <script src="scroll.js"></script>
  </body>
</html>

