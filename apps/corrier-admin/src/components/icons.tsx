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

const Icons = Object.freeze(Object.assign(IconMain, { ChartPie }));

export { Icons };