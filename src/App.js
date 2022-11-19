import { BrowserRouter, Routes, Route } from "react-router-dom";
import AllMeetupsPage from "./pages/AllMeetups";
import NewMeetup from "./pages/NewMeetup";
import Favorites from "./pages/Favorites";
import Layout from "./components/layout/Layout";
import { FavoritesContextProvider } from "./store/favorites-context";

function App() {
  return (
    <FavoritesContextProvider>
      <BrowserRouter>
        <Layout>
          <Routes>
            <Route path="/" element={<AllMeetupsPage />} />

            <Route path="/new-meetup" element={<NewMeetup />} />

            <Route path="/favorites" element={<Favorites />} />
          </Routes>
        </Layout>
      </BrowserRouter>
    </FavoritesContextProvider>
  );
}

export default App;
