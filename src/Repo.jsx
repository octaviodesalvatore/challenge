import React, { useContext, useState, useEffect } from "react";
import File from "./File";
import RepoContext from "./context/RepoContext";

const Repo = () => {
  const { saveUrl } = useContext(RepoContext);

  const [content, setContent] = useState([]);
  const [currentUrl, setCurrentUrl] = useState(`${saveUrl}/contents`);
  const [contentProps, setContentProps] = useState();

  const [clickedComponent, setclickedComponent] = useState(false);

  //console.log(atob(""));

  // console.log(currentUrl);

  const updateUrl = (url) => {
    // console.log("entre al update");
    setCurrentUrl(`${currentUrl}${url}`);
    //console.log("desde el update url", currentUrl);
  };

  const openInNewTab = (url) => {
    window.open(url, "_blank", "noopener,noreferrer");
  };

  useEffect(() => {
    fetch(currentUrl, {
      headers: {
        Authorization: `${process.env.REACT_APP_GITHUB_API}`,
      },
    })
      .then((response) => response.json())
      .then((data) => {
        //console.log(data);
        setContent(data);
      })
      .catch((err) => {
        // setIsLoading(false);
        // setError(true);
        //console.error(err);
      });
    console.log("currentUrl en useEffect", currentUrl);
    //  console.log(content, "desde el use effect");
  }, [currentUrl]);
  console.log("currentUrl fuera useEffect", currentUrl);
  return (
    <>
      <button
        onClick={() => {
          console.log(currentUrl, updateUrl);
          setTimeout(() => {
            setCurrentUrl(currentUrl.slice(0, currentUrl.lastIndexOf("/")));
            setclickedComponent(false);
            //console.log(updateUrl);
          }, 2000);
        }}
      >
        volver
      </button>
      {/* {console.log("click", clickedComponent)} */}
      {clickedComponent ? (
        <File content={content} />
      ) : (
        <table>
          <tr>
            <th>Nombre</th>
            <br />
            <th>Tipo</th>
          </tr>
          {content.map((contenido) => (
            <tr>
              <td
                onClick={() => {
                  if (contenido.type === "dir") {
                    updateUrl(`/${contenido.name}`);
                    //console.log("carpeta");
                  } else if (contenido.type === "file") {
                    //console.log("antes del update", currentUrl);
                    updateUrl(`/${contenido.name}`);
                    //console.log("despues del update", currentUrl);
                    setContentProps(contenido);
                    setclickedComponent(true);
                    // console.log(content, "contenido");
                    //console.log("name en on click", contenido.name);

                    //console.log("clcikeando");
                  }
                }}
              >
                {contenido.path}
              </td>
              <br />
              <br />
              <td>{contenido.type}</td>
            </tr>
          ))}
        </table>
      )}
    </>
  );
};

export default Repo;

// {clickedComponent ? (
//   <File />
// ) : (
//   <table>
//     <tr>
//       <th>Nombre</th>
//       <br />
//       <th>Tipo</th>
//     </tr>
//     {content.map((contenido) => (
//       <tr>
//         <td
//           onClick={() => {
//             if (contenido.type === "dir") {
//               updateUrl(`/${contenido.name}`);
//               console.log("carpeta");
//             } else if (contenido.type === "file") {
//               console.log("clcikeando");
//               setclickedComponent(true);
//             }
//           }}
//         >
//           {contenido.path}
//         </td>
//         <br />
//         <br />
//         <td>{contenido.type}</td>
//       </tr>
//     ))}
//   </table>
// )}
