import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { RouterProvider } from "react-router";
import './styles/global.css';
import { worker } from "./mocks/browser.js";
import router from "./router";

// 모의 API가 준비된 뒤에 앱을 렌더링한다.
worker.start({ onUnhandledRequest: "bypass" }).then(() => {
  createRoot(document.getElementById("root")).render(
    <StrictMode>
      <RouterProvider router={router}/>
    </StrictMode>,
  );
});
