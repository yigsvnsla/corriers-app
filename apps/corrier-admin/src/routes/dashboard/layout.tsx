import { Slot, component$ } from "@builder.io/qwik";
import Header from "~/components/header";
import { Aside } from "~/components/aside";
import { Icons } from "~/components/icons";

export default component$(() => (
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
            <Aside.DropDown.Content>
              
            </Aside.DropDown.Content>
          </Aside.DropDown>
        </Aside.Section>
      </Aside.Content>
      <Aside.Footer></Aside.Footer>
    </Aside>

    <main class="h-auto p-4 pt-20 md:ml-64">
      <Slot></Slot>
    </main>
  </section>
));
