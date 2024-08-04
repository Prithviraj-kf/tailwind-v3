import { Switch, Route, Link, useLocation } from "react-router-dom";
import { TopNav } from "./TopNav.jsx";

import { Home } from "./pages/Home.jsx";
import { AccordionComponent } from "./pages/Accordion.jsx";
import { AlertDialogComponent } from "./pages/AlertDialog.jsx";
import { InputComponent } from "./pages/Input.jsx";
import { SliderComponent } from "./pages/Slider.jsx";
import { ButtonComponent } from "./pages/Button.jsx";
import { ProgressComponent } from "./pages/Progress.jsx";
import { DatePickerComponent } from "./pages/Datepicker.jsx";

const ROUTES = [
  {
    Name: "Home",
    Path: "/home",
    Component: Home,
    Exact: true
  },
  {
    Name: "Accordion",
    Path: "/accordion",
    Component: AccordionComponent
  },
  {
    Name: "Alert",
    Path: "/alert",
    Component: AlertDialogComponent
  },
  {
    Name: "Button",
    Path: "/button",
    Component: ButtonComponent
  },
  {
    Name: "Input",
    Path: "/input",
    Component: InputComponent
  },
  {
    Name: "Progress",
    Path: "/progress",
    Component: ProgressComponent
  },
  {
    Name: "Slider",
    Path: "/slider",
    Component: SliderComponent
  },
  {
    Name: "DatePicker",
    Path: "/datepicker",
    Component: DatePickerComponent
  }
];

function App() {
  const location = useLocation();
  return (
    <>
      <TopNav />
      <div className="flex flex-1">
        <aside className="flex min-w-[250px] flex-col border-e border-gray-200 px-4 py-4">
          {ROUTES.map(({ Name, Path }) => (
            <Link key={Name} to={Path}>
              <p
                className="smallplus flex min-h-[50px] cursor-pointer items-center rounded-4 px-20 py-8 hover:bg-primary-100 hover:text-primary-500 data-[active=true]:text-primary-500"
                data-active={location.pathname === Path}
              >
                {Name}
              </p>
            </Link>
          ))}
        </aside>
        <main className="flex flex-1 flex-col bg-bg-overlay-white px-20">
          <Switch>
            {ROUTES.map(({ Name, Path, Component, Exact }) => (
              <Route key={Name} path={Path} exact={Exact}>
                <label className="base-600 flex min-h-[50px] w-full items-center gap-8 self-start">
                  <p>Components</p>
                  <span>{">"}</span>
                  <p>{Name}</p>
                </label>
                <Component />
              </Route>
            ))}
          </Switch>
        </main>
      </div>
    </>
  );
}

export default App;
