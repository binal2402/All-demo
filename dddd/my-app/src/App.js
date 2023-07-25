import {useState, useEffect} from "react";
import './App.css';

const query  = `{

  example1 {
    items {
      title
      logo {
        url
      }
    }
  }
}
`;

function App() {
  const [page, setPage] = useState(null);

  useEffect(() => {
    window.fetch(` https://graphql.contentful.com/content/v1/spaces/eiu1lmaisw4n/explore?access_token=zcj0iKVq4vdeMKeiJpGIXK4S403VR8GE4gzyudjhBLI`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          // Authenticate the request
          Authorization: "Bearer zcj0iKVq4vdeMKeiJpGIXK4S403VR8GE4gzyudjhBLI",
        },
        // send the GraphQL query
        body: JSON.stringify({ query  }),
      })
       .then((response) => response.json())
       .then(({ data, errors }) => {
        if (errors) {
          console.error(errors);
        }
        setPage(data.example1.items[0]);
      });
  }, []);

  return (
    <div className="App">
    <header className="App-header">
        <img src={page.logo.url} className="App-logo" alt="logo"  />
        <div>{page.logo.title}</div>
    </header>
  </div>
  );
}


export default App;
