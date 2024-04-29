import type { SVGAttributes } from "@builder.io/qwik";
import { Slot, component$ } from "@builder.io/qwik";

interface IconComponent extends SVGAttributes<SVGElementTagNameMap["svg"]> {
  // more props...
}

const IconMain = component$<IconComponent>(() => <Slot />);

const ChartPie = component$<IconComponent>(() => (
  <svg
    class="h-6 w-6 text-gray-800 dark:text-white"
    aria-hidden="true"
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    fill="currentColor"
    viewBox="0 0 24 24"
  >
    <path d="M13.5 2c-.178 0-.356.013-.492.022l-.074.005a1 1 0 0 0-.934.998V11a1 1 0 0 0 1 1h7.975a1 1 0 0 0 .998-.934l.005-.074A7.04 7.04 0 0 0 22 10.5 8.5 8.5 0 0 0 13.5 2Z" />
    <path d="M11 6.025a1 1 0 0 0-1.065-.998 8.5 8.5 0 1 0 9.038 9.039A1 1 0 0 0 17.975 13H11V6.025Z" />
  </svg>
));

const ChevronRigth = component$<IconComponent>(() => (
  <svg
    class="mx-1 h-3 w-3 text-gray-400 rtl:rotate-180"
    aria-hidden="true"
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 6 10"
  >
    <path
      stroke="currentColor"
      stroke-linecap="round"
      stroke-linejoin="round"
      stroke-width="2"
      d="m1 9 4-4-4-4"
    />
  </svg>
));

const Home = component$<IconComponent>(() => (
  <svg
    class="me-2.5 h-3 w-3"
    aria-hidden="true"
    xmlns="http://www.w3.org/2000/svg"
    fill="currentColor"
    viewBox="0 0 20 20"
  >
    <path d="m19.707 9.293-2-2-7-7a1 1 0 0 0-1.414 0l-7 7-2 2a1 1 0 0 0 1.414 1.414L2 10.414V18a2 2 0 0 0 2 2h3a1 1 0 0 0 1-1v-4a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v4a1 1 0 0 0 1 1h3a2 2 0 0 0 2-2v-7.586l.293.293a1 1 0 0 0 1.414-1.414Z" />
  </svg>
));

const Icons = Object.freeze(
  Object.assign(IconMain, { ChartPie, Home, ChevronRigth }),
);

export { Icons };
