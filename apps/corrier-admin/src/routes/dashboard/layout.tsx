import Header from "~/components/header";
import { Aside } from "~/components/aside";
import { Icons } from "~/components/icons";
import { Link } from "@builder.io/qwik-city";
import { Slot, component$ } from "@builder.io/qwik";
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
        {/* <Aside.Header>Corrier Admin</Aside.Header> */}
        <Aside.Content>
          <Aside.Section>
            <Aside.Item as={Link} href="/dashboard">
              <Icons.Home />
              <span class="ml-3">Home</span>
            </Aside.Item>

            <Aside.Item as={Link} href="/dashboard/users/">
              <Icons.ChartPie></Icons.ChartPie>
              <span class="ml-3">item 1</span>
            </Aside.Item>

            <Aside.Item as={Link} href="404">
              <Icons.ChartPie></Icons.ChartPie>
              <span class="ml-3">item 2</span>
            </Aside.Item>

            {/* <Aside.DropDown>
            <Aside.Item
              as="button"
              aria-controls="dropdown-pages"
              data-collapse-toggle="dropdown-pages"
              class="w-full"
            >
              <Icons.ChartPie />
              <span class="ml-3 mr-auto">item DP</span>
              <Icons.ChevronDown />
            </Aside.Item>
            <Aside.Section class="hidden" id="dropdown-pages">
              <Aside.Item as={Link} href="sign-in" class="ml-4">
                <Icons.ChartPie></Icons.ChartPie>
                <span class="ml-3">item 1</span>
              </Aside.Item>
              <Aside.Item as={Link} href="sign-in" class="ml-4">
                <Icons.ChartPie />
                <span class="ml-3">item 1</span>
              </Aside.Item>
              <Aside.Item as={Link} href="sign-in" class="ml-4">
                <Icons.ChartPie />
                <span class="ml-3">item 1</span>
              </Aside.Item>
              <Aside.Item as={Link} href="sign-in" class="ml-4">
                <Icons.ChartPie />
                <span class="ml-3">item 1</span>
              </Aside.Item>
            </Aside.Section>
          </Aside.DropDown> */}
          </Aside.Section>
        </Aside.Content>
        <Aside.Footer>dsadas</Aside.Footer>
      </Aside>
      <main class="flex min-h-screen flex-col p-4 pt-20 dark:text-gray-200 md:ml-64">
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
