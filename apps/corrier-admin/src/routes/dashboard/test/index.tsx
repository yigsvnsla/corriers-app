import { component$, useSignal } from "@builder.io/qwik";
import { useQwikTable } from "~/utils/useQwikTable";
import type { ColumnDef } from "@tanstack/qwik-table";
import {
  flexRender,
  getCoreRowModel,
  getSortedRowModel,
} from "@tanstack/qwik-table";
import { Icons } from "~/components/icons";

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
    {
      accessorKey: "Id",
      sortingFn: "basic",
      cell(props) {
        return `${props.row.index}`;
      },
    },
    { accessorKey: "firstName" },
    { accessorKey: "lastName" },
    {
      accessorKey: "actions",
      cell() {
        return (
          <div class="inline-flex rounded-md shadow-sm" role="group">
            <button
              type="button"
              class="rounded-s-lg border border-gray-200 bg-white px-4 py-2 text-sm font-medium text-gray-900 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:text-blue-700 focus:ring-2 focus:ring-blue-700 dark:border-gray-700 dark:bg-gray-800 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white dark:focus:text-white dark:focus:ring-blue-500"
            >
              Profile
            </button>
            <button
              type="button"
              class="border-b border-t border-gray-200 bg-white px-4 py-2 text-sm font-medium text-gray-900 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:text-blue-700 focus:ring-2 focus:ring-blue-700 dark:border-gray-700 dark:bg-gray-800 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white dark:focus:text-white dark:focus:ring-blue-500"
            >
              Settings
            </button>
            <button
              type="button"
              class="rounded-e-lg border border-gray-200 bg-white px-4 py-2 text-sm font-medium text-gray-900 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:text-blue-700 focus:ring-2 focus:ring-blue-700 dark:border-gray-700 dark:bg-gray-800 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white dark:focus:text-white dark:focus:ring-blue-500"
            >
              Messages
            </button>
          </div>
        );
      },
    },
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
    initialState: {
      sorting: [
        {
          id: "id",
          desc: true, //sort by age in descending order by default
        },
      ],
    },
    getSortedRowModel: getSortedRowModel(),
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
                    <Icons.Search />
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
                <Icons.Add />
                Add product
              </button>
              <div class="flex w-full items-center space-x-3 md:w-auto">
                <button
                  id="actionsDropdownButton"
                  data-dropdown-toggle="actionsDropdown"
                  class="flex w-full items-center justify-center rounded-lg border border-gray-200 bg-white px-4 py-2 text-sm font-medium text-gray-900 hover:bg-gray-100 hover:text-primary-700 focus:z-10 focus:outline-none focus:ring-4 focus:ring-gray-200 dark:border-gray-600 dark:bg-gray-800 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white dark:focus:ring-gray-700 md:w-auto"
                  type="button"
                >
                  <Icons.ChevronDown class="-ml-1 mr-1.5 h-5 w-5" />
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
                  <Icons.Filter class="-ml-1 mr-1.5 h-5 w-5" />
                  Filter
                  <Icons.ChevronDown class="-mr-1 ml-1.5 h-5 w-5" />
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
          <thead class="bg-gray-50 text-xs uppercase text-gray-700 dark:bg-gray-700 dark:text-gray-400 ">
            {table.getHeaderGroups().map((headerGroup) => (
              <tr key={headerGroup.id}>
                {headerGroup.headers.map((header) => (
                  <th
                    key={header.id}
                    colSpan={header.colSpan}
                    scope="col"
                    class="px-6 py-3 last:text-center"
                    {...{
                      onclick: header.column.getToggleSortingHandler,
                    }}
                  >
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
                  class="group border-b  odd:bg-white even:bg-gray-50 dark:border-gray-700 odd:dark:bg-gray-900 even:dark:bg-gray-800"
                  key={row.id}
                >
                  {row.getVisibleCells().map((cell) => (
                    <td
                      scope="row"
                      class="whitespace-nowrap px-6 py-4 font-medium text-gray-900 last:text-center dark:text-white"
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
