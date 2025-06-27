// // src/components/markdownComponents.ts

// import Image from "next/image";
// import type { Components } from "react-markdown";
// import type { ComponentPropsWithoutRef } from "react";

// export const markdownComponents: Components = {
//   p: ({ children }) => (
//     <p className="text-base leading-relaxed text-gray-100 mb-2">{children}</p>
//   ),
//   code: ({ inline, className, children, }: ComponentPropsWithoutRef<"code"> & { inline?: boolean }) =>
//   inline ? (
//     <code className="bg-gray-800 text-green-400 px-1 py-0.5 rounded">{children}</code>
//   ) : (
//     <pre className="bg-black text-sm text-gray-100 p-4 rounded-md overflow-x-auto my-2">
//       <code className={className}>{children}</code>
//     </pre>
//   ),
//   a: ({ href, children }) => (
//     <a
//       href={href ?? "#"}
//       target="_blank"
//       rel="noopener noreferrer"
//       className="text-blue-400 underline hover:text-blue-300"
//     >
//       {children}
//     </a>
//   ),
//   ul: ({ children }) => (
//     <ul className="list-disc ml-6 text-sm text-gray-200">{children}</ul>
//   ),
//   ol: ({ children }) => (
//     <ol className="list-decimal ml-6 text-sm text-gray-200">{children}</ol>
//   ),
//   li: ({ children }) => (
//     <li className="mb-1 flex items-start gap-2">{children}</li>
//   ),
//   table: ({ children }) => (
//     <div className="overflow-x-auto my-4">
//       <table className="table-auto w-full border border-gray-700 text-sm">
//         {children}
//       </table>
//     </div>
//   ),
//   thead: ({ children }) => (
//     <thead className="bg-gray-800 text-gray-100">{children}</thead>
//   ),
//   tr: ({ children }) => (
//     <tr className="border-b border-gray-700">{children}</tr>
//   ),
//   td: ({ children }) => (
//     <td className="px-3 py-2 text-gray-200">{children}</td>
//   ),
//   th: ({ children }) => (
//     <th className="px-3 py-2 text-left font-semibold">{children}</th>
//   ),
//   input: ({ checked, type }) =>
//     type === "checkbox" ? (
//       <input
//         type="checkbox"
//         checked={checked}
//         className="mr-2 accent-green-500"
//         readOnly
//       />
//     ) : null,
//   blockquote: ({ children }) => (
//     <blockquote className="border-l-4 border-gray-600 pl-4 italic text-gray-400 my-2">
//       {children}
//     </blockquote>
//   ),
//   h1: ({ children }) => <h1 className="text-2xl font-bold mt-4 mb-2">{children}</h1>,
//   h2: ({ children }) => <h2 className="text-xl font-semibold mt-3 mb-2">{children}</h2>,
//   h3: ({ children }) => <h3 className="text-lg font-medium mt-2 mb-1">{children}</h3>,
//   h4: ({ children }) => <h4 className="text-base font-medium mt-1 mb-1">{children}</h4>,
//   h5: ({ children }) => <h5 className="text-sm font-medium mt-1 mb-1">{children}</h5>,
//   h6: ({ children }) => <h6 className="text-xs font-medium mt-1 mb-1">{children}</h6>,
//   img: ({ src, alt }) => {
//     const imageSrc = typeof src === "string" ? src : "/placeholder.png";
//     return (
//       <Image
//         src={imageSrc}
//         alt={alt ?? "Image"}
//         width={500}
//         height={300}
//         className="rounded-lg my-2"
//       />
//     );
//   },
//   hr: () => <hr className="border-gray-700 my-4" />,
//   strong: ({ children }) => (
//     <strong className="font-semibold text-gray-100">{children}</strong>
//   ),
//   em: ({ children }) => <em className="italic text-gray-300">{children}</em>,
//   del: ({ children }) => <span className="line-through text-gray-500">{children}</span>,
//   mark: ({ children }) => (
//     <span className="bg-yellow-200 text-gray-800 px-1 rounded">{children}</span>
//   ),
//   sub: ({ children }) => <sub className="text-xs align-baseline">{children}</sub>,
//   sup: ({ children }) => <sup className="text-xs align-baseline">{children}</sup>,
//   kbd: ({ children }) => (
//     <kbd className="bg-gray-700 text-gray-100 px-2 py-1 rounded font-mono text-sm">
//       {children}
//     </kbd>
//   ),
//   details: ({ children }) => (
//     <details className="bg-gray-800 text-gray-100 p-3 rounded my-2">
//       <summary className="cursor-pointer font-semibold">Details</summary>
//       <div className="mt-2">{children}</div>
//     </details>
//   ),
//   summary: ({ children }) => (
//     <summary className="cursor-pointer font-semibold text-gray-200">{children}</summary>
//   ),
//   video: ({ src, controls = true }) => (
//     <video
//       src={src ?? ""}
//       controls={controls}
//       className="w-full rounded-lg my-2"
//       style={{ maxHeight: "400px" }}
//     >
//       Your browser does not support the video tag.
//     </video>
//   ),
//   audio: ({ src, controls = true }) => (
//     <audio src={src ?? ""} controls={controls} className="w-full rounded-lg my-2">
//       Your browser does not support the audio element.
//     </audio>
//   ),
// };



// src/components/markdownComponents.ts
import Image from "next/image";
import type { Components } from "react-markdown";
import type { ComponentPropsWithoutRef } from "react";

export const markdownComponents: Components = {
  p: ({ children }) => <p className="text-inherit text-base leading-relaxed mb-2">{children}</p>,
  code: ({ inline, className, children }: ComponentPropsWithoutRef<"code"> & { inline?: boolean }) =>
    inline ? (
      <code className="bg-gray-200 dark:bg-gray-800 text-inherit px-1 py-0.5 rounded">{children}</code>
    ) : (
      <pre className="bg-gray-100 dark:bg-black text-sm text-inherit p-4 rounded-md overflow-x-auto my-2">
        <code className={className}>{children}</code>
      </pre>
    ),
  a: ({ href, children }) => (
    <a
      href={href ?? "#"}
      target="_blank"
      rel="noopener noreferrer"
      className="underline text-blue-600 dark:text-blue-400 hover:text-blue-500 dark:hover:text-blue-300"
    >
      {children}
    </a>
  ),
  ul: ({ children }) => <ul className="list-disc ml-6 text-sm text-inherit">{children}</ul>,
  ol: ({ children }) => <ol className="list-decimal ml-6 text-sm text-inherit">{children}</ol>,
  li: ({ children }) => <li className="mb-1 flex items-start gap-2 text-inherit">{children}</li>,
  table: ({ children }) => (
    <div className="overflow-x-auto my-4">
      <table className="table-auto w-full border border-gray-300 dark:border-gray-700 text-sm text-inherit">
        {children}
      </table>
    </div>
  ),
  thead: ({ children }) => <thead className="bg-gray-200 dark:bg-gray-800">{children}</thead>,
  tr: ({ children }) => <tr className="border-b border-gray-300 dark:border-gray-700">{children}</tr>,
  td: ({ children }) => <td className="px-3 py-2 text-inherit">{children}</td>,
  th: ({ children }) => <th className="px-3 py-2 text-left font-semibold text-inherit">{children}</th>,
  input: ({ checked, type }) =>
    type === "checkbox" ? (
      <input
        type="checkbox"
        checked={checked}
        className="mr-2 accent-blue-600 dark:accent-green-500 cursor-pointer"
        readOnly
      />
    ) : null,
  blockquote: ({ children }) => (
    <blockquote className="border-l-4 border-gray-300 dark:border-gray-600 pl-4 italic text-inherit my-2 opacity-80">
      {children}
    </blockquote>
  ),
  h1: ({ children }) => <h1 className="text-2xl font-bold mt-4 mb-2 text-inherit">{children}</h1>,
  h2: ({ children }) => <h2 className="text-xl font-semibold mt-3 mb-2 text-inherit">{children}</h2>,
  h3: ({ children }) => <h3 className="text-lg font-medium mt-2 mb-1 text-inherit">{children}</h3>,
  h4: ({ children }) => <h4 className="text-base font-medium mt-1 mb-1 text-inherit">{children}</h4>,
  h5: ({ children }) => <h5 className="text-sm font-medium mt-1 mb-1 text-inherit">{children}</h5>,
  h6: ({ children }) => <h6 className="text-xs font-medium mt-1 mb-1 text-inherit">{children}</h6>,
  img: ({ src, alt }) => {
    const imageSrc = typeof src === "string" ? src : "/placeholder.png";
    return (
      <Image
        src={imageSrc}
        alt={alt ?? "Image"}
        width={500}
        height={300}
        className="rounded-lg my-2 object-contain"
      />
    );
  },
  hr: () => <hr className="border-gray-300 dark:border-gray-700 my-4" />,
  strong: ({ children }) => <strong className="font-semibold text-inherit">{children}</strong>,
  em: ({ children }) => <em className="italic text-inherit">{children}</em>,
  del: ({ children }) => <span className="line-through text-inherit opacity-70">{children}</span>,
  mark: ({ children }) => (
    <span className="bg-yellow-200 dark:bg-yellow-300 text-inherit px-1 rounded">{children}</span>
  ),
  sub: ({ children }) => <sub className="text-xs align-baseline text-inherit">{children}</sub>,
  sup: ({ children }) => <sup className="text-xs align-baseline text-inherit">{children}</sup>,
  kbd: ({ children }) => (
    <kbd className="bg-gray-200 dark:bg-gray-700 px-2 py-1 rounded font-mono text-sm text-inherit">
      {children}
    </kbd>
  ),
  details: ({ children }) => (
    <details className="bg-gray-100 dark:bg-gray-800 p-3 rounded my-2 text-inherit">
      <summary className="cursor-pointer font-semibold text-inherit">Details</summary>
      <div className="mt-2">{children}</div>
    </details>
  ),
  summary: ({ children }) => <summary className="cursor-pointer font-semibold text-inherit">{children}</summary>,
  video: ({ src, controls = true }) => (
    <video
      src={src ?? ""}
      controls={controls}
      className="w-full rounded-lg my-2"
      style={{ maxHeight: "400px" }}
    >
      Your browser does not support the video tag.
    </video>
  ),
  audio: ({ src, controls = true }) => (
    <audio src={src ?? ""} controls={controls} className="w-full rounded-lg my-2">
      Your browser does not support the audio element.
    </audio>
  ),
};
