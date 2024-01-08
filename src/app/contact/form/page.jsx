import React from "react";
import Link from "next/link";

function FormPage() {
  return (
    <div className="prose my-5">
      <h1>Form</h1>
      <form className="">
        <label>
          <p className="mb-0">Your Email:</p>
          <input type="email" className="input" />
        </label>
        <label>
          <p className="mb-0">Your Email:</p>
          <input type="email" className="input" />
        </label>
      </form>
      <Link href="/contact" className="link-hover">
        Contact
      </Link>
    </div>
  );
}

export default FormPage;
