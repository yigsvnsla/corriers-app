import { component$, useSignal } from "@builder.io/qwik";
import { useQwikTable } from "~/utils/useQwikTable";
import type { ColumnDef } from "@tanstack/qwik-table";
import { flexRender, getCoreRowModel } from "@tanstack/qwik-table";

//TData
type User = {
  firstName: string;
  lastName: string;
  age: number;
  visits: number;
  progress: number;
  status: string;
};

export default component$(() => {
  const columns: ColumnDef<User>[] = [
    { accessorKey: "firstName" },
    { accessorKey: "lastName" },
  ];
  const data = useSignal<User[]>([
    {
      firstName: "Tanner",
      lastName: "Linsley",
      age: 33,
      visits: 100,
      progress: 50,
      status: "Married",
    },
    {
      firstName: "Kevin",
      lastName: "Vandy",
      age: 27,
      visits: 200,
      progress: 100,
      status: "Single",
    },
  ]);

  const table = useQwikTable({
    columns,
    data: data.value,
    getCoreRowModel: getCoreRowModel(),
  });

  return (
    <>
      <h2 class="mb-4 text-3xl font-extrabold leading-none tracking-tight text-gray-900 dark:text-white md:text-4xl">
        Team management
      </h2>

      <section class="relative overflow-x-auto shadow-md sm:rounded-lg">
        <div class="relative bg-white dark:bg-gray-800 ">
          <div class="flex flex-col items-center justify-between space-y-3 p-4 md:flex-row md:space-x-4 md:space-y-0">
            <div class="w-full md:w-1/2">
              <form class="flex items-center">
                <label for="simple-search" class="sr-only">
                  Search
                </label>
                <div class="relative w-full">
                  <div class="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
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
                  </div>
                  <input
                    type="text"
                    id="simple-search"
                    class="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2 pl-10 text-sm text-gray-900 focus:border-primary-500 focus:ring-primary-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-primary-500 dark:focus:ring-primary-500"
                    placeholder="Search"
                    required
                  />
                </div>
              </form>
            </div>
            <div class="flex w-full flex-shrink-0 flex-col items-stretch justify-end space-y-2 md:w-auto md:flex-row md:items-center md:space-x-3 md:space-y-0">
              <button
                type="button"
                class="flex items-center justify-center rounded-lg bg-primary-700 px-4 py-2 text-sm font-medium text-white hover:bg-primary-800 focus:outline-none focus:ring-4 focus:ring-primary-300 dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
              >
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
                Add product
              </button>
              <div class="flex w-full items-center space-x-3 md:w-auto">
                <button
                  id="actionsDropdownButton"
                  data-dropdown-toggle="actionsDropdown"
                  class="flex w-full items-center justify-center rounded-lg border border-gray-200 bg-white px-4 py-2 text-sm font-medium text-gray-900 hover:bg-gray-100 hover:text-primary-700 focus:z-10 focus:outline-none focus:ring-4 focus:ring-gray-200 dark:border-gray-600 dark:bg-gray-800 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white dark:focus:ring-gray-700 md:w-auto"
                  type="button"
                >
                  <svg
                    class="-ml-1 mr-1.5 h-5 w-5"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                    aria-hidden="true"
                  >
                    <path
                      clip-rule="evenodd"
                      fill-rule="evenodd"
                      d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                    />
                  </svg>
                  Actions
                </button>
                <div
                  id="actionsDropdown"
                  class="z-10 hidden w-44 divide-y divide-gray-100 rounded bg-white shadow dark:divide-gray-600 dark:bg-gray-700"
                >
                  <ul
                    class="py-1 text-sm text-gray-700 dark:text-gray-200"
                    aria-labelledby="actionsDropdownButton"
                  >
                    <li>
                      <a
                        href="#"
                        class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                      >
                        Mass Edit
                      </a>
                    </li>
                  </ul>
                  <div class="py-1">
                    <a
                      href="#"
                      class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-200 dark:hover:bg-gray-600 dark:hover:text-white"
                    >
                      Delete all
                    </a>
                  </div>
                </div>
                <button
                  id="filterDropdownButton"
                  data-dropdown-toggle="filterDropdown"
                  class="flex w-full items-center justify-center rounded-lg border border-gray-200 bg-white px-4 py-2 text-sm font-medium text-gray-900 hover:bg-gray-100 hover:text-primary-700 focus:z-10 focus:outline-none focus:ring-4 focus:ring-gray-200 dark:border-gray-600 dark:bg-gray-800 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white dark:focus:ring-gray-700 md:w-auto"
                  type="button"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    aria-hidden="true"
                    class="mr-2 h-4 w-4 text-gray-400"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M3 3a1 1 0 011-1h12a1 1 0 011 1v3a1 1 0 01-.293.707L12 11.414V15a1 1 0 01-.293.707l-2 2A1 1 0 018 17v-5.586L3.293 6.707A1 1 0 013 6V3z"
                      clip-rule="evenodd"
                    />
                  </svg>
                  Filter
                  <svg
                    class="-mr-1 ml-1.5 h-5 w-5"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                    aria-hidden="true"
                  >
                    <path
                      clip-rule="evenodd"
                      fill-rule="evenodd"
                      d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                    />
                  </svg>
                </button>
                {/* <!-- Dropdown menu --> */}
                <div
                  id="filterDropdown"
                  class="z-10 hidden w-48 rounded-lg bg-white p-3 shadow dark:bg-gray-700"
                >
                  <h6 class="mb-3 text-sm font-medium text-gray-900 dark:text-white">
                    Category
                  </h6>
                  <ul
                    class="space-y-2 text-sm"
                    aria-labelledby="dropdownDefault"
                  >
                    <li class="flex items-center">
                      <input
                        id="apple"
                        type="checkbox"
                        value=""
                        class="h-4 w-4 rounded border-gray-300 bg-gray-100 text-primary-600 focus:ring-2 focus:ring-primary-500 dark:border-gray-500 dark:bg-gray-600 dark:ring-offset-gray-700 dark:focus:ring-primary-600"
                      />
                      <label
                        for="apple"
                        class="ml-2 text-sm font-medium text-gray-900 dark:text-gray-100"
                      >
                        Apple (56)
                      </label>
                    </li>
                    <li class="flex items-center">
                      <input
                        id="fitbit"
                        type="checkbox"
                        value=""
                        class="h-4 w-4 rounded border-gray-300 bg-gray-100 text-primary-600 focus:ring-2 focus:ring-primary-500 dark:border-gray-500 dark:bg-gray-600 dark:ring-offset-gray-700 dark:focus:ring-primary-600"
                      />
                      <label
                        for="fitbit"
                        class="ml-2 text-sm font-medium text-gray-900 dark:text-gray-100"
                      >
                        Fitbit (56)
                      </label>
                    </li>
                    <li class="flex items-center">
                      <input
                        id="dell"
                        type="checkbox"
                        value=""
                        class="h-4 w-4 rounded border-gray-300 bg-gray-100 text-primary-600 focus:ring-2 focus:ring-primary-500 dark:border-gray-500 dark:bg-gray-600 dark:ring-offset-gray-700 dark:focus:ring-primary-600"
                      />
                      <label
                        for="dell"
                        class="ml-2 text-sm font-medium text-gray-900 dark:text-gray-100"
                      >
                        Dell (56)
                      </label>
                    </li>
                    <li class="flex items-center">
                      <input
                        id="asus"
                        type="checkbox"
                        value=""
                        checked
                        class="h-4 w-4 rounded border-gray-300 bg-gray-100 text-primary-600 focus:ring-2 focus:ring-primary-500 dark:border-gray-500 dark:bg-gray-600 dark:ring-offset-gray-700 dark:focus:ring-primary-600"
                      />
                      <label
                        for="asus"
                        class="ml-2 text-sm font-medium text-gray-900 dark:text-gray-100"
                      >
                        Asus (97)
                      </label>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
        <table class="w-full text-left text-sm text-gray-500 rtl:text-right dark:text-gray-400 ">
          <thead class="bg-gray-50 text-xs uppercase text-gray-700 dark:bg-gray-700 dark:text-gray-400">
            {table.getHeaderGroups().map((headerGroup) => (
              <tr key={headerGroup.id}>
                {headerGroup.headers.map((header) => (
                  <th scope="col" key={header.id} class="px-6 py-3">
                    {header.isPlaceholder
                      ? null
                      : flexRender(
                          header.column.columnDef.header,
                          header.getContext(),
                        )}
                  </th>
                ))}
              </tr>
            ))}
          </thead>

          <tbody>
            {table.getRowModel().rows.map((row) => {
              return (
                <tr
                  class="group border-b odd:bg-white even:bg-gray-50 dark:border-gray-700 odd:dark:bg-gray-900 even:dark:bg-gray-800"
                  key={row.id}
                >
                  {row.getVisibleCells().map((cell) => (
                    <td
                      scope="row"
                      class="whitespace-nowrap px-6 py-4 font-medium text-gray-900 dark:text-white"
                      key={cell.id}
                    >
                      {flexRender(
                        cell.column.columnDef.cell,
                        cell.getContext(),
                      )}
                    </td>
                  ))}
                </tr>
              );
            })}
          </tbody>
        </table>
      </section>
    </>
  );
});
