import Layout from "../components/layout/Layout.js";
import "../styles/globals.css";
import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import Loader from "../components/UI/Loader/Loader.js";
import { store, persistor } from "../redux";
import { PersistGate } from "redux-persist/integration/react";
import { Provider } from "react-redux";

function MyApp({ Component, pageProps }) {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);
  useEffect(() => {
    const handleStart = (url) => {
      url !== router.pathname ? setIsLoading(true) : setIsLoading(false);
    };
    const handleComplete = () => setIsLoading(false);

    router.events.on("routeChangeStart", handleStart);
    router.events.on("routeChangeComplete", handleComplete);
    router.events.on("routeChangeError", handleComplete);
  }, [router]);
  return (
    <Provider store={store}>
      <PersistGate loading={<Loader />} persistor={persistor}>
        <Layout>{isLoading ? <Loader /> : <Component {...pageProps} />}</Layout>
      </PersistGate>
    </Provider>
  );
}

export default MyApp;
