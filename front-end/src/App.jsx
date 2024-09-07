import "./App.css";
import { BrowserRouter } from "react-router-dom";
import Main from "./routers";
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import { fetchAdmin, fetchDashBoardDetails } from "./redux/slices/admin.slices";
function App() {
  const { loggedIn } = useSelector((state) => state.admin);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchAdmin());
    dispatch(fetchDashBoardDetails());
  }, [dispatch, loggedIn]);

  return (
    <div>
      <BrowserRouter>
        <Main />
      </BrowserRouter>
    </div>
  );
}

export default App;
