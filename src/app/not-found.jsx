import React from "react";
import { headers } from "next/headers";

async function NotFoundPage() {
  const headersList = headers();
  const domain = headersList.get("host");
  return (
    <div className="prose">
      <h1>{domain} is not found</h1>
    </div>
  );
}

export default NotFoundPage;
