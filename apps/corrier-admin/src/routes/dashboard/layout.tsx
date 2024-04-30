import Header from "~/components/header";
import { Aside } from "~/components/aside";
import { Icons } from "~/components/icons";
import { Link } from "@builder.io/qwik-city";
import { Slot, component$ } from "@builder.io/qwik";

export default component$(() => (
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

    <main class="h-screen p-4 pt-20 md:ml-64">
      <Slot></Slot>
    </main>
  </section>
));
