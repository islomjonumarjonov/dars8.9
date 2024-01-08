import Link from "next/link";
import React from "react";

function Contact() {
  return (
    <div>
      <h1 className="text-3xl">Contact</h1>
      <p className="mb-3">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi
        exercitationem praesentium laboriosam adipisci? Ducimus alias, id cum
        molestiae esse hic rem nobis molestias doloremque optio eum, sunt
        repellat sapiente cumque, voluptate modi. Officia, libero. Harum impedit
        qui eum a? Labore temporibus eligendi consequuntur perferendis obcaecati
        doloribus illo ducimus omnis reprehenderit quae nesciunt velit delectus
        minus tempore, nulla veritatis similique aspernatur distinctio quis
        iure. Et ipsa porro quasi. Excepturi aliquid ut pariatur odit voluptate
        ducimus beatae earum aspernatur animi unde accusamus necessitatibus
        molestias mollitia molestiae, voluptates enim harum maxime id amet, modi
        rerum voluptas saepe iste. Impedit voluptas quos sunt ipsa.
      </p>
      <hr className="mb-3" />
      <div className="flex gap-3">
        <Link className="link-hover underline" href="/contact/faq">
          Faq
        </Link>
        <Link className="link-hover underline" href="/contact/form">
          Form
        </Link>
      </div>
    </div>
  );
}

export default Contact;
