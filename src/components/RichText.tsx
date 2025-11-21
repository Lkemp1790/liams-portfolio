import React from "react";

export default function RichText({ field }: { field: any }) {
  if (!field) return null;

  if (typeof field === "string") {
    // Basic handling for string content (could be markdown or html in future)
    return <div dangerouslySetInnerHTML={{ __html: field }} />;
  }

  if (field?.text) {
    return <p>{field.text}</p>;
  }

  // Fallback for array of objects (Prismic style) if we kept it
  if (Array.isArray(field)) {
    return (
      <>
        {field.map((block: any, i: number) => (
          <p key={i}>{block.text}</p>
        ))}
      </>
    );
  }

  return null;
}

