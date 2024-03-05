import { HashRouter, Routes, Route } from "react-router-dom"
import { HomePage } from "./HomePage";
import { BlogPage } from "./BlogPage";
import { BlogPost } from "./BlogPost";
import { ProfilePage } from "./ProfilePage";
import { Menu } from "./Menu";


// /#/
// /#/blog
// /#/profile
// /#/lalala -> Not found
// /lalala -> Home

function App() {
  return (
    <>
      <HashRouter>
        <Menu />

        <Routes>
          <Route path="/" element={<HomePage />}/>

          <Route path="/blog" element={<BlogPage />}>
            <Route path=":slug" element={<BlogPost />}/>
          </Route>

          <Route path="/profile" element={<ProfilePage />}/>

          <Route path="*" element={<h1>Not found</h1>}/>
        </Routes>

      </HashRouter>
    </>
  );
}

export default App;
