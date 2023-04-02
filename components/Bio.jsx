const Bio = ({ className }) => {
  return (
    <aside className={className}>
      <h1>Create, solve problems, make pretty things along the way</h1>

      <div>
        image
        <div className="">
          <h2>Stack</h2>

          <ul>
            <li>JavaScript</li>
            <li>React, Next</li>
            <li>PHP, Laravel</li>
            <li>HTML, CSS, SASS</li>
            <li>MongoDB</li>
            <li>MySQL</li>
          </ul>
        </div>
        <div className="">
          <h2>Contact</h2>

          <ul>
            <li>
              <a href="mailto:hello@filipchrapek.com">hello@filipchrapek.com</a>
            </li>
            <li>
              <a href="tel:+48737471069">+48 737 471 069</a>
            </li>
          </ul>
        </div>
      </div>
    </aside>
  );
};

export default Bio
