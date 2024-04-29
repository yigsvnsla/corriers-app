import { Slot, component$ } from "@builder.io/qwik";
import Header from "~/components/header";
import { Aside } from "~/components/aside";
import { Icons } from "~/components/icons";
import { Breadcrumb, Crumb } from "~/components/breadcrumb";
import { useLocation } from "@builder.io/qwik-city";

export default component$(() => {
  const location = useLocation();
  const routes = location.url.pathname
    .split("/")
    .filter((route) => route != "");

  return (
    <section class="bg-gray-50 antialiased dark:bg-gray-900">
      <Header />

      <Aside>
        <Aside.Header>Corrier Admin</Aside.Header>
        <Aside.Content>
          <Aside.Section>
            <Aside.Item href="sign-in">
              <Icons.ChartPie></Icons.ChartPie>
              <span class="ml-3">item 1</span>
            </Aside.Item>
            <Aside.Item href="sign-in">
              <Icons.ChartPie></Icons.ChartPie>
              <span class="ml-3">item 1</span>
            </Aside.Item>
            <Aside.Item href="sign-in">
              <Icons.ChartPie></Icons.ChartPie>
              <span class="ml-3">item 1</span>
            </Aside.Item>
            <Aside.DropDown>
              <Aside.DropDown.Content></Aside.DropDown.Content>
            </Aside.DropDown>
          </Aside.Section>
        </Aside.Content>
        <Aside.Footer></Aside.Footer>
      </Aside>
      <main class="min-h-screen p-4 pt-20 dark:text-gray-200 md:ml-64">
        <Breadcrumb>
          {routes.map((route, index, arr) => (
            <Crumb
              isActive={arr[arr.length - 1] === route}
              key={index}
              href={`/${arr.slice(0, index + 1).join("/")}/`}
            >
              {index === 0 ? <Icons.Home /> : <Icons.ChevronRigth />}
              {route}
            </Crumb>
          ))}
        </Breadcrumb>
        <Slot></Slot>
      </main>
    </section>
  );
});
