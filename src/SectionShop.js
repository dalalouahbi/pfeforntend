import React from 'react'
import "./App.css"
import SearchInput from './RecherchBar'
export default function Shope() {
  return (
    <div>
      <section class="container my-5">
  
  <div class="container my-5">
  <div class="row">     <div class="col-lg-12 mx-auto">
      
    </div>
  </div>
</div>
</section>

<SearchInput/>

    </div>
    
  ) }


// import React, { useState } from "react";

// function SearchEngine() {
//   const [query, setQuery] = useState("");
//   const [results, setResults] = useState([]);

//   const handleSearch = (e) => {
//     e.preventDefault();
//     // Replace with your search logic
//     const newResults = [
//       { title: "Result 1", url: "./Home.js" },
//       { title: "Result 2", url: "https://example.com/result2" },
//       { title: "Result 3", url: "https://example.com/result3" },
//     ];
//     setResults(newResults);
//   };

//   return (
//     <div>
//       <form onSubmit={handleSearch}>
//         <input
//           type="text"
//           value={query}
//           onChange={(e) => setQuery(e.target.value)}
//         />
//         <button type="submit">Search</button>
//       </form>

//       {results.length > 0 && (
//         <ul>
//           {results.map((result, index) => (
//             <li key={index}>
//               <a href={result.url}>{result.title}</a>
//             </li>
//           ))}
//         </ul>
//       )}
//     </div>
//   );
// }

// export default SearchEngine;

