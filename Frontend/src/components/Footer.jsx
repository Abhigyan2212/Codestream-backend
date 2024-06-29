import React from "react";

function Footer() {
  return (
    <div>
      <hr />
      <footer className="footer footer-center p-10 text-base-content rounded dark:bg-slate-900 dark:text-white">
        <nav className="grid grid-flow-col gap-4">
          <a className="link link-hover" href="#">About us</a>
          <a className="link link-hover" href="#">Contact</a>
          <a className="link link-hover" href="#">News</a>
          <a className="link link-hover" href="#">Suggestions</a>
        </nav>
        <nav>
          <div className="grid grid-flow-col gap-4">
            <a href="https://x.com/AbhigyanShriv10" target="_blank" rel="noopener noreferrer">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                className="fill-current"
              >
                <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"></path>
              </svg>
            </a>
            <a href="https://github.com/Abhigyan2212" target="_blank" rel="noopener noreferrer">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                className="fill-current"
              >
                <path d="M12 0c-6.63 0-12 5.37-12 12 0 5.3 3.438 9.799 8.205 11.387.6.111.82-.261.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.611-4.042-1.611-.546-1.387-1.332-1.756-1.332-1.756-1.087-.744.083-.729.083-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.836 2.809 1.306 3.495.998.108-.776.419-1.306.762-1.606-2.665-.305-5.466-1.332-5.466-5.93 0-1.31.467-2.381 1.235-3.221-.123-.304-.536-1.526.117-3.176 0 0 1.008-.322 3.3 1.23.957-.266 1.983-.398 3.003-.403 1.02.005 2.047.137 3.005.403 2.29-1.552 3.295-1.23 3.295-1.23.655 1.65.243 2.872.12 3.176.77.84 1.235 1.911 1.235 3.221 0 4.61-2.807 5.62-5.478 5.92.431.372.815 1.1.815 2.217 0 1.6-.015 2.887-.015 3.282 0 .319.215.694.825.577 4.765-1.589 8.198-6.087 8.198-11.387 0-6.63-5.37-12-12-12z"></path>
              </svg>
            </a>
            <a href="https://www.linkedin.com/in/abhigyan-shrivastava-8aa537226/" target="_blank" rel="noopener noreferrer">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                className="fill-current"
              >
               <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.761 0 5-2.239 5-5v-14c0-2.761-2.239-5-5-5zm-11.75 20h-3v-11h3v11zm-1.5-12.234c-.966 0-1.75-.785-1.75-1.751s.784-1.75 1.75-1.75 1.75.784 1.75 1.75-.784 1.751-1.75 1.751zm13.25 12.234h-3v-5.604c0-3.473-4-3.207-4 0v5.604h-3v-11h3v1.431c1.396-2.586 7-2.777 7 2.434v7.135z"></path>              </svg>
            </a>
          </div>
        </nav>
        <aside>
          <p>Copyright © 2024 - All right reserved by Code Stream</p>
        </aside>
      </footer>
    </div>
  );
}

export default Footer;
