'use client';

export default function Preloader() {
  return (
    <div className="mil-preloader">
      <div className="mil-preloader-animation">
        <div className="mil-pos-abs mil-animation-1">
          <p className="mil-h3 mil-muted mil-thin">Software</p>
          <p className="mil-h3 mil-muted">Engineer</p>
          {/* <p className="mil-h3 mil-muted mil-thin">Portfolio</p> */}
        </div>
        <div className="mil-pos-abs mil-animation-2">
          <div className="mil-reveal-frame">
            <p className="mil-reveal-box"></p>
            <p className="mil-h3 mil-muted mil-thin">Mohammed Hashil</p>
          </div>
        </div>
      </div>
    </div>
  );
}
