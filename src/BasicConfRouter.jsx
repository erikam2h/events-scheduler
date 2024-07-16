import {
  createBrowserRouter,
  createRoutesFromElements,
  Navigate,
  Outlet,
  Route,
  RouterProvider,
} from "react-router-dom";

// This function can be her in App or in a extra file
const MainLayout = () => {
  return (
    <>
      <NavBar />
      <div>
        <Outlet />
      </div>
      <Footer />
    </>
  );
};

const ProtectedLayout = () => {
  const isAuthenticated = !!localStorage.getItem("token");
  return <>{isAuthenticated ? <Outlet /> : <Navigate to="/login" />}</>;
};

function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<MainLayout />}>
        <Route index element={<Home />} />
        <Route path="signup" element={<SignUp />} />
        <Route path="login" element={<Login />} />
        <Route path="event/:id" element={<EventDetails />} />
        <Route path="create-event" element={<CreateEvent />} />
        <Route path="/" element={<ProtectedLayout />}>
          <Route path="events/create" element={<EventForm />} />
          <Route path="events/create" element={<EventForm />} />
        </Route>
        <Route path="*" element={<NotFound />} />
      </Route>
    )
  );

  return <RouterProvider router={router} />;
}

export default App;
