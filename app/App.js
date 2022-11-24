import Home from "./src/screens/home";
import { configureStore } from "@reduxjs/toolkit";
import { QueryClient, QueryClientProvider } from "react-query";
import { Provider } from "react-redux";
import modelSlice from "./src/utils/reducers/modelReducer";
import inputSlice from "./src/utils/reducers/inputReducer";

const queryClient = new QueryClient();

let store = configureStore({
  reducer: {
    model: modelSlice,
    input: inputSlice,
  },
});

export default function App() {
  return (
    <Provider store={store}>
      <QueryClientProvider client={queryClient}>
        <Home />
      </QueryClientProvider>
    </Provider>
  );
}
