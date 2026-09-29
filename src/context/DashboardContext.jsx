import {
  createContext,
  useContext,
  useEffect,
  useReducer,
} from "react";

const DashboardContext = createContext();

const initialState = {
  theme: localStorage.getItem("theme") || "light",
  notifications: true,
};

function reducer(state, action) {
  switch (action.type) {
    case "TOGGLE_THEME":
      return {
        ...state,
        theme: state.theme === "light" ? "dark" : "light",
      };

    case "TOGGLE_NOTIFICATIONS":
      return {
        ...state,
        notifications: !state.notifications,
      };

    default:
      return state;
  }
}

export function DashboardProvider({ children }) {
  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    localStorage.setItem("theme", state.theme);

    document.body.className = state.theme;
  }, [state.theme]);

  return (
    <DashboardContext.Provider value={{ state, dispatch }}>
      {children}
    </DashboardContext.Provider>
  );
}

export function useDashboard() {
  return useContext(DashboardContext);
}