import { HashRouter, Routes, Route } from "react-router-dom"
import { HomePage } from "./HomePage";
import { BlogPage } from "./BlogPage";
import { BlogPost } from "./BlogPost";
import { ProfilePage } from "./ProfilePage";
import { LoginPage } from "./LoginPage";
import { LogoutPage } from "./LogoutPage";
import { Menu } from "./Menu";
import { AuthProvider, AuthRoute } from "./auth";

function App() {
  return (
    <>
      <HashRouter>
        <AuthProvider>
          <Menu />

          <Routes>
            <Route path="/" element={<HomePage />}/>

            <Route path="/blog" element={<BlogPage />}>
              <Route path=":slug" element={<BlogPost />}/>
            </Route>

            <Route path="/login" element={<LoginPage />}/>
            <Route path="/logout" element={<LogoutPage />}/>
            <Route
              path="/profile"
              element={
              <AuthRoute>
                <ProfilePage/>
              </AuthRoute>
              }
            />

            <Route path="*" element={<h1>Not found</h1>}/>
          </Routes>
        </AuthProvider>
      </HashRouter>
    </>
  );
}

export default App;
