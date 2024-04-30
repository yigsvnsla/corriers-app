import type { ClassList } from "@builder.io/qwik";
import type { LinkProps } from "@builder.io/qwik-city";
import { Slot, component$ } from "@builder.io/qwik";
import { Link } from "@builder.io/qwik-city";
import { cn } from "~/utils/cn";

interface CrumbProps extends LinkProps {
  isActive?: boolean;
  class?: ClassList;
}

export const Crumb = component$<CrumbProps>((props) => {
  return (
    <li class="inline-flex items-center">
      <Link
        {...props}
        aria-current={props.isActive ? "page" : "false"}
        href={props.isActive ? "." : props.href}
        class={cn(
          "inline-flex items-center text-sm font-medium capitalize",
          {
            "text-gray-700 dark:text-white cursor-default": props.isActive,
            "cursor-pointer text-gray-400 hover:text-blue-600 dark:hover:text-gray-500":
              !props.isActive,
          },
          props.class,
        )}
      >
        <Slot />
      </Link>
    </li>
  );
});

export const Breadcrumb = component$(() => {
  return (
    <nav class="flex mb-4" aria-label="Breadcrumb">
      <ol class="inline-flex items-center space-x-1 rtl:space-x-reverse md:space-x-2">
        <Slot />
      </ol>
    </nav>
  );
});
