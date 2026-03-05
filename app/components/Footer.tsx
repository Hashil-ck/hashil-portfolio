'use client';

export default function Footer() {
  return (
    <footer className="mil-dark-bg" id="contact">
      <div className="mi-invert-fix">
        <div className="container mil-p-120-60">
          <div className="row justify-content-between">
            <div className="col-md-4 col-lg-4 mil-mb-60">
              <div className="mil-muted mil-logo mil-up mil-mb-30">Hashil.</div>
              <p className="mil-light-soft mil-up mil-mb-30">Let&apos;s build something great together.</p>
              <form
                className="mil-subscribe-form mil-up"
                onSubmit={(e) => e.preventDefault()}
              >
                <input type="email" placeholder="Your email address" />
                <button type="submit" className="mil-button mil-icon-button-sm mil-arrow-place"></button>
              </form>
            </div>
            <div className="col-md-7 col-lg-6">
              <div className="row justify-content-end">
                <div className="col-md-6 col-lg-7">
                  <nav className="mil-footer-menu mil-mb-60">
                    <ul>
                      <li className="mil-up"><a href="#about">About Me</a></li>
                      <li className="mil-up"><a href="#skills">Skills</a></li>
                      <li className="mil-up"><a href="#projects">Projects</a></li>
                      <li className="mil-up"><a href="#experience">Experience</a></li>
                      <li className="mil-up mil-active"><a href="#contact">Contact</a></li>
                    </ul>
                  </nav>
                </div>
                <div className="col-md-6 col-lg-5">
                  <ul className="mil-menu-list mil-up mil-mb-60">
                    <li><a href="mailto:hashilhashy007@gmail.com" className="mil-light-soft">hashilhashy007@gmail.com</a></li>
                    <li><a href="tel:+919946734217" className="mil-light-soft">+91 9946734217</a></li>
                    <li><a href="https://github.com/Hashil-ck" target="_blank" className="mil-light-soft">GitHub — Hashil-ck</a></li>
                    <li><a href="#." className="mil-light-soft">Malappuram, Kerala</a></li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          <div className="row justify-content-between flex-sm-row-reverse">
            <div className="col-md-7 col-lg-6">
              <div className="row justify-content-between">
                <div className="col-md-6 col-lg-5 mil-mb-60">
                  <h6 className="mil-muted mil-up mil-mb-30">Currently At</h6>
                  <p className="mil-light-soft mil-up">Bluecast Technologies <span className="mil-no-wrap">Ernakulam, India</span></p>
                </div>
                <div className="col-md-6 col-lg-5 mil-mb-60">
                  <h6 className="mil-muted mil-up mil-mb-30">Education</h6>
                  <p className="mil-light-soft mil-up">Bachelor of Computer Applications <span className="mil-no-wrap">Calicut University</span></p>
                </div>
              </div>
            </div>
            <div className="col-md-4 col-lg-6 mil-mb-60">
              <div className="mil-vert-between">
                <div className="mil-mb-30">
                  <ul className="mil-social-icons mil-up">
                    <li>
                      <a href="https://github.com/Hashil-ck" target="_blank" className="social-icon" title="GitHub">
                        <i className="fab fa-github"></i>
                      </a>
                    </li>
                    <li>
                      <a href="mailto:hashilhashy007@gmail.com" className="social-icon" title="Email">
                        <i className="fas fa-envelope"></i>
                      </a>
                    </li>
                    <li>
                      <a href="tel:+919946734217" className="social-icon" title="Phone">
                        <i className="fas fa-phone"></i>
                      </a>
                    </li>
                    <li>
                      <a href="#." className="social-icon" title="LinkedIn">
                        <i className="fab fa-linkedin-in"></i>
                      </a>
                    </li>
                  </ul>
                </div>
                <p className="mil-light-soft mil-up">© 2024 Mohammed Hashil. All Rights Reserved.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
