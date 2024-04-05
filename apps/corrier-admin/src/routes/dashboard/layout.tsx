import { Slot, component$ } from "@builder.io/qwik";
import Aside from "~/components/aside";
import Header from "~/components/header";

export default component$(() => (
  <section class="bg-gray-50 antialiased dark:bg-gray-900">
    <Header />
    <Aside />
    <main class="h-auto p-4 pt-20 md:ml-64">
      <Slot></Slot>
    </main>
  </section>
));
