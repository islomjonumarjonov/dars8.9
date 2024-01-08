import Link from "next/link";
import React from "react";

function Faq() {
  return (
    <div className="prose">
      <h1>Faq</h1>
      <ul>
        <li>
          <h3>Lorem, ipsum.</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum
            ipsum, voluptates, expedita et id sint tempore dolorum deserunt unde
            fugiat quas assumenda ut eos animi distinctio? Nostrum culpa
            praesentium quos.
          </p>
        </li>
        <li>
          <h3>ipsum.</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum
            ipsum, voluptates, expedita et id sint tempore dolorum deserunt unde
            fugiat quas assumenda ut eos animi distinctio? Nostrum culpa
            praesentium quos.
          </p>
        </li>
      </ul>
      <Link href="/contact" className="link-hover">
        Contact
      </Link>
    </div>
  );
}

export default Faq;
