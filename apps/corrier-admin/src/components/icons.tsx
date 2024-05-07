import type { ClassList, SVGAttributes } from "@builder.io/qwik";
import { Slot, component$ } from "@builder.io/qwik";
import { cn } from "~/utils/cn";

interface IconComponent extends SVGAttributes<SVGElementTagNameMap["svg"]> {
  // more props...
  class: ClassList;
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

const Filter = component$<IconComponent>(({ class: classList, ...props }) => (
  <svg
    {...props}
    xmlns="http://www.w3.org/2000/svg"
    aria-hidden="true"
    class={cn("mr-2 h-4 w-4 text-gray-400", classList)}
    viewBox="0 0 20 20"
    fill="currentColor"
  >
    <path
      fill-rule="evenodd"
      d="M3 3a1 1 0 011-1h12a1 1 0 011 1v3a1 1 0 01-.293.707L12 11.414V15a1 1 0 01-.293.707l-2 2A1 1 0 018 17v-5.586L3.293 6.707A1 1 0 013 6V3z"
      clip-rule="evenodd"
    />
  </svg>
));

const ChevronDown = component$<IconComponent>(
  ({ class: classList, ...props }) => (
    <svg
      {...props}
      class={cn("h-6 w-6 text-gray-800 dark:text-white", classList)}
      aria-hidden="true"
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      fill="none"
      viewBox="0 0 24 24"
    >
      <path
        stroke="currentColor"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="2"
        d="m8 10 4 4 4-4"
      />
    </svg>
  ),
);

const ChevronUp = component$<IconComponent>(() => (
  <svg
    class="h-6 w-6 text-gray-800 dark:text-white"
    aria-hidden="true"
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    fill="none"
    viewBox="0 0 24 24"
  >
    <path
      stroke="currentColor"
      stroke-linecap="round"
      stroke-linejoin="round"
      stroke-width="2"
      d="m16 14-4-4-4 4"
    />
  </svg>
));

const Home = component$<IconComponent>(() => (
  <svg
    class="h-6 w-6 text-gray-800 dark:text-white"
    aria-hidden="true"
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    fill="currentColor"
    viewBox="0 0 24 24"
  >
    <path
      fill-rule="evenodd"
      d="M11.293 3.293a1 1 0 0 1 1.414 0l6 6 2 2a1 1 0 0 1-1.414 1.414L19 12.414V19a2 2 0 0 1-2 2h-3a1 1 0 0 1-1-1v-3h-2v3a1 1 0 0 1-1 1H7a2 2 0 0 1-2-2v-6.586l-.293.293a1 1 0 0 1-1.414-1.414l2-2 6-6Z"
      clip-rule="evenodd"
    />
  </svg>
));

const ChevronRigth = component$<IconComponent>(() => (
  <svg
    class="h-6 w-6 text-gray-800 dark:text-white"
    aria-hidden="true"
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    fill="none"
    viewBox="0 0 24 24"
  >
    <path
      stroke="currentColor"
      stroke-linecap="round"
      stroke-linejoin="round"
      stroke-width="2"
      d="m9 5 7 7-7 7"
    />
  </svg>
));

const Search = component$(() => (
  <svg
    aria-hidden="true"
    class="h-5 w-5 text-gray-500 dark:text-gray-400"
    fill="currentColor"
    viewBox="0 0 20 20"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      fill-rule="evenodd"
      d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
      clip-rule="evenodd"
    />
  </svg>
));

const Add = component$(() => (
  <svg
    class="mr-2 h-3.5 w-3.5"
    fill="currentColor"
    viewBox="0 0 20 20"
    xmlns="http://www.w3.org/2000/svg"
    aria-hidden="true"
  >
    <path
      clip-rule="evenodd"
      fill-rule="evenodd"
      d="M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z"
    />
  </svg>
));

const Icons = Object.freeze(
  Object.assign(IconMain, {
    ChartPie,
    ChevronDown,
    ChevronUp,
    Home,
    ChevronRigth,
    Search,
    Add,
    Filter
  }),
);

export { Icons };
