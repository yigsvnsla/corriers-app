import { component$ } from "@builder.io/qwik";

export default component$(() => (
  //   <header class="antialiased">
  //     <nav class="border-gray-200 bg-white px-4 py-2.5 dark:bg-gray-800 lg:px-6">
  //       <div class="flex flex-wrap items-center justify-between">
  //         <div class="flex items-center justify-start">
  //           <button
  //             id="toggleSidebar"
  //             aria-expanded="true"
  //             aria-controls="sidebar"
  //             class="mr-3 hidden cursor-pointer rounded p-2 text-gray-600 hover:bg-gray-100 hover:text-gray-900 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white lg:inline"
  //           >
  //             <svg
  //               class="h-5 w-5"
  //               aria-hidden="true"
  //               xmlns="http://www.w3.org/2000/svg"
  //               fill="none"
  //               viewBox="0 0 16 12"
  //             >
  //               {" "}
  //               <path
  //                 stroke="currentColor"
  //                 stroke-linecap="round"
  //                 stroke-linejoin="round"
  //                 stroke-width="2"
  //                 d="M1 1h14M1 6h14M1 11h7"
  //               />{" "}
  //             </svg>
  //           </button>
  //           <button
  //             aria-expanded="true"
  //             aria-controls="sidebar"
  //             class="mr-2 cursor-pointer rounded-lg p-2 text-gray-600 hover:bg-gray-100 hover:text-gray-900 focus:bg-gray-100 focus:ring-2 focus:ring-gray-100 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white dark:focus:bg-gray-700 dark:focus:ring-gray-700 lg:hidden"
  //           >
  //             <svg
  //               class="h-[18px] w-[18px]"
  //               aria-hidden="true"
  //               xmlns="http://www.w3.org/2000/svg"
  //               fill="none"
  //               viewBox="0 0 17 14"
  //             >
  //               <path
  //                 stroke="currentColor"
  //                 stroke-linecap="round"
  //                 stroke-linejoin="round"
  //                 stroke-width="2"
  //                 d="M1 1h15M1 7h15M1 13h15"
  //               />
  //             </svg>
  //             <span class="sr-only">Toggle sidebar</span>
  //           </button>
  //           <a href="https://flowbite.com" class="mr-4 flex">
  //             <img
  //               width={32}
  //               height={32}
  //               src="https://flowbite.s3.amazonaws.com/logo.svg"
  //               class="mr-3 h-8"
  //               alt="FlowBite Logo"
  //             />
  //             <span class="self-center whitespace-nowrap text-2xl font-semibold dark:text-white">
  //               Flowbite
  //             </span>
  //           </a>
  //           <form action="#" method="GET" class="hidden lg:block lg:pl-2">
  //             <label for="topbar-search" class="sr-only">
  //               Search
  //             </label>
  //             <div class="relative mt-1 lg:w-96">
  //               <div class="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
  //                 <svg
  //                   class="h-4 w-4 text-gray-500 dark:text-gray-400"
  //                   aria-hidden="true"
  //                   xmlns="http://www.w3.org/2000/svg"
  //                   fill="none"
  //                   viewBox="0 0 20 20"
  //                 >
  //                   <path
  //                     stroke="currentColor"
  //                     stroke-linecap="round"
  //                     stroke-linejoin="round"
  //                     stroke-width="2"
  //                     d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
  //                   />
  //                 </svg>
  //               </div>
  //               <input
  //                 type="text"
  //                 name="email"
  //                 id="topbar-search"
  //                 class="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 pl-9 text-gray-900 focus:border-primary-500 focus:ring-primary-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-primary-500 dark:focus:ring-primary-500 sm:text-sm"
  //                 placeholder="Search"
  //               />
  //             </div>
  //           </form>
  //         </div>
  //         <div class="flex items-center lg:order-2">
  //           <button
  //             type="button"
  //             class="mr-2 hidden items-center justify-center rounded-lg bg-primary-700 px-3 py-1.5 text-xs font-medium text-white hover:bg-primary-800 focus:outline-none focus:ring-4 focus:ring-primary-300 dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800 sm:inline-flex"
  //           >
  //             <svg
  //               aria-hidden="true"
  //               class="-ml-1 mr-1 h-5 w-5"
  //               fill="currentColor"
  //               viewBox="0 0 20 20"
  //               xmlns="http://www.w3.org/2000/svg"
  //             >
  //               <path
  //                 fill-rule="evenodd"
  //                 d="M10 5a1 1 0 011 1v3h3a1 1 0 110 2h-3v3a1 1 0 11-2 0v-3H6a1 1 0 110-2h3V6a1 1 0 011-1z"
  //                 clip-rule="evenodd"
  //               ></path>
  //             </svg>{" "}
  //             New Widget
  //           </button>
  //           <button
  //             id="toggleSidebarMobileSearch"
  //             type="button"
  //             class="rounded-lg p-2 text-gray-500 hover:bg-gray-100 hover:text-gray-900 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white lg:hidden"
  //           >
  //             <span class="sr-only">Search</span>
  //             {/* <!-- Search icon --> */}
  //             <svg
  //               class="h-4 w-4"
  //               aria-hidden="true"
  //               xmlns="http://www.w3.org/2000/svg"
  //               fill="none"
  //               viewBox="0 0 20 20"
  //             >
  //               <path
  //                 stroke="currentColor"
  //                 stroke-linecap="round"
  //                 stroke-linejoin="round"
  //                 stroke-width="2"
  //                 d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
  //               />
  //             </svg>
  //           </button>
  //           {/* <!-- Notifications --> */}
  //           <button
  //             type="button"
  //             data-dropdown-toggle="notification-dropdown"
  //             class="mr-1 rounded-lg p-2 text-gray-500 hover:bg-gray-100 hover:text-gray-900 focus:ring-4 focus:ring-gray-300 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white dark:focus:ring-gray-600"
  //           >
  //             <span class="sr-only">View notifications</span>
  //             {/* <!-- Bell icon --> */}
  //             <svg
  //               class="h-5 w-5"
  //               aria-hidden="true"
  //               xmlns="http://www.w3.org/2000/svg"
  //               fill="currentColor"
  //               viewBox="0 0 14 20"
  //             >
  //               <path d="M12.133 10.632v-1.8A5.406 5.406 0 0 0 7.979 3.57.946.946 0 0 0 8 3.464V1.1a1 1 0 0 0-2 0v2.364a.946.946 0 0 0 .021.106 5.406 5.406 0 0 0-4.154 5.262v1.8C1.867 13.018 0 13.614 0 14.807 0 15.4 0 16 .538 16h12.924C14 16 14 15.4 14 14.807c0-1.193-1.867-1.789-1.867-4.175ZM3.823 17a3.453 3.453 0 0 0 6.354 0H3.823Z" />
  //             </svg>
  //           </button>
  //           {/* <!-- Dropdown menu --> */}
  //           <div
  //             class="z-50 my-4 hidden max-w-sm list-none divide-y divide-gray-100 overflow-hidden rounded bg-white text-base shadow-lg dark:divide-gray-600 dark:bg-gray-700"
  //             id="notification-dropdown"
  //           >
  //             <div class="block bg-gray-50 px-4 py-2 text-center text-base font-medium text-gray-700 dark:bg-gray-700 dark:text-gray-400">
  //               Notifications
  //             </div>
  //             <div>
  //               <a
  //                 href="#"
  //                 class="flex border-b px-4 py-3 hover:bg-gray-100 dark:border-gray-600 dark:hover:bg-gray-600"
  //               >
  //                 <div class="flex-shrink-0">
  //                   {/* <img
  //                     width={44}
  //                     height={44}
  //                     class="h-11 w-11 rounded-full"
  //                     src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/bonnie-green.png"
  //                     alt="Bonnie Green avatar"
  //                   /> */}
  //                   <div class="absolute -mt-5 ml-6 flex h-5 w-5 items-center justify-center rounded-full border border-white bg-primary-700 dark:border-gray-700">
  //                     <svg
  //                       class="h-2 w-2 text-white"
  //                       aria-hidden="true"
  //                       xmlns="http://www.w3.org/2000/svg"
  //                       fill="currentColor"
  //                       viewBox="0 0 18 18"
  //                     >
  //                       <path d="M15.977.783A1 1 0 0 0 15 0H3a1 1 0 0 0-.977.783L.2 9h4.239a2.99 2.99 0 0 1 2.742 1.8 1.977 1.977 0 0 0 3.638 0A2.99 2.99 0 0 1 13.561 9H17.8L15.977.783ZM6 2h6a1 1 0 1 1 0 2H6a1 1 0 0 1 0-2Zm7 5H5a1 1 0 0 1 0-2h8a1 1 0 1 1 0 2Z" />
  //                       <path d="M1 18h16a1 1 0 0 0 1-1v-6h-4.439a.99.99 0 0 0-.908.6 3.978 3.978 0 0 1-7.306 0 .99.99 0 0 0-.908-.6H0v6a1 1 0 0 0 1 1Z" />
  //                     </svg>
  //                   </div>
  //                 </div>
  //                 <div class="w-full pl-3">
  //                   <div class="mb-1.5 text-sm font-normal text-gray-500 dark:text-gray-400">
  //                     New message from{" "}
  //                     <span class="font-semibold text-gray-900 dark:text-white">
  //                       Bonnie Green
  //                     </span>
  //                     : "Hey, what's up? All set for the presentation?"
  //                   </div>
  //                   <div class="text-xs font-medium text-primary-700 dark:text-primary-400">
  //                     a few moments ago
  //                   </div>
  //                 </div>
  //               </a>
  //               <a
  //                 href="#"
  //                 class="flex border-b px-4 py-3 hover:bg-gray-100 dark:border-gray-600 dark:hover:bg-gray-600"
  //               >
  //                 <div class="flex-shrink-0">
  //                   {/* <img
  //                     width={44}
  //                     height={44}
  //                     class="h-11 w-11 rounded-full"
  //                     src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/jese-leos.png"
  //                     alt="Jese Leos avatar"
  //                   /> */}
  //                   <div class="absolute -mt-5 ml-6 flex h-5 w-5 items-center justify-center rounded-full border border-white bg-gray-900 dark:border-gray-700">
  //                     <svg
  //                       class="h-2 w-2 text-white"
  //                       aria-hidden="true"
  //                       xmlns="http://www.w3.org/2000/svg"
  //                       fill="currentColor"
  //                       viewBox="0 0 20 18"
  //                     >
  //                       <path d="M6.5 9a4.5 4.5 0 1 0 0-9 4.5 4.5 0 0 0 0 9ZM8 10H5a5.006 5.006 0 0 0-5 5v2a1 1 0 0 0 1 1h11a1 1 0 0 0 1-1v-2a5.006 5.006 0 0 0-5-5Zm11-3h-2V5a1 1 0 0 0-2 0v2h-2a1 1 0 1 0 0 2h2v2a1 1 0 0 0 2 0V9h2a1 1 0 1 0 0-2Z" />
  //                     </svg>
  //                   </div>
  //                 </div>
  //                 <div class="w-full pl-3">
  //                   <div class="mb-1.5 text-sm font-normal text-gray-500 dark:text-gray-400">
  //                     <span class="font-semibold text-gray-900 dark:text-white">
  //                       Jese leos
  //                     </span>{" "}
  //                     and{" "}
  //                     <span class="font-medium text-gray-900 dark:text-white">
  //                       5 others
  //                     </span>{" "}
  //                     started following you.
  //                   </div>
  //                   <div class="text-xs font-medium text-primary-700 dark:text-primary-400">
  //                     10 minutes ago
  //                   </div>
  //                 </div>
  //               </a>
  //               <a
  //                 href="#"
  //                 class="flex border-b px-4 py-3 hover:bg-gray-100 dark:border-gray-600 dark:hover:bg-gray-600"
  //               >
  //                 <div class="flex-shrink-0">
  //                   {/* <img
  //                     width={44}
  //                     height={44}
  //                     class="h-11 w-11 rounded-full"
  //                     src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/joseph-mcfall.png"
  //                     alt="Joseph McFall avatar"
  //                   /> */}
  //                   <div class="absolute -mt-5 ml-6 flex h-5 w-5 items-center justify-center rounded-full border border-white bg-red-600 dark:border-gray-700">
  //                     <svg
  //                       class="h-2 w-2 text-white"
  //                       aria-hidden="true"
  //                       xmlns="http://www.w3.org/2000/svg"
  //                       fill="currentColor"
  //                       viewBox="0 0 20 18"
  //                     >
  //                       <path d="M17.947 2.053a5.209 5.209 0 0 0-3.793-1.53A6.414 6.414 0 0 0 10 2.311 6.482 6.482 0 0 0 5.824.5a5.2 5.2 0 0 0-3.8 1.521c-1.915 1.916-2.315 5.392.625 8.333l7 7a.5.5 0 0 0 .708 0l7-7a6.6 6.6 0 0 0 2.123-4.508 5.179 5.179 0 0 0-1.533-3.793Z" />{" "}
  //                     </svg>
  //                   </div>
  //                 </div>
  //                 <div class="w-full pl-3">
  //                   <div class="mb-1.5 text-sm font-normal text-gray-500 dark:text-gray-400">
  //                     <span class="font-semibold text-gray-900 dark:text-white">
  //                       Joseph Mcfall
  //                     </span>{" "}
  //                     and{" "}
  //                     <span class="font-medium text-gray-900 dark:text-white">
  //                       141 others
  //                     </span>{" "}
  //                     love your story. See it and view more stories.
  //                   </div>
  //                   <div class="text-xs font-medium text-primary-700 dark:text-primary-400">
  //                     44 minutes ago
  //                   </div>
  //                 </div>
  //               </a>
  //               <a
  //                 href="#"
  //                 class="flex border-b px-4 py-3 hover:bg-gray-100 dark:border-gray-600 dark:hover:bg-gray-600"
  //               >
  //                 <div class="flex-shrink-0">
  //                   {/* <img
  //                     width={44}
  //                     height={44}
  //                     class="h-11 w-11 rounded-full"
  //                     src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/roberta-casas.png"
  //                     alt="Roberta Casas image"
  //                   /> */}
  //                   <div class="absolute -mt-5 ml-6 flex h-5 w-5 items-center justify-center rounded-full border border-white bg-green-400 dark:border-gray-700">
  //                     <svg
  //                       class="h-2 w-2 text-white"
  //                       aria-hidden="true"
  //                       xmlns="http://www.w3.org/2000/svg"
  //                       fill="currentColor"
  //                       viewBox="0 0 20 18"
  //                     >
  //                       <path d="M18 0H2a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h2v4a1 1 0 0 0 1.707.707L10.414 13H18a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2Zm-5 4h2a1 1 0 1 1 0 2h-2a1 1 0 1 1 0-2ZM5 4h5a1 1 0 1 1 0 2H5a1 1 0 0 1 0-2Zm2 5H5a1 1 0 0 1 0-2h2a1 1 0 0 1 0 2Zm9 0h-6a1 1 0 0 1 0-2h6a1 1 0 1 1 0 2Z" />
  //                     </svg>
  //                   </div>
  //                 </div>
  //                 <div class="w-full pl-3">
  //                   <div class="mb-1.5 text-sm font-normal text-gray-500 dark:text-gray-400">
  //                     <span class="font-semibold text-gray-900 dark:text-white">
  //                       Leslie Livingston
  //                     </span>{" "}
  //                     mentioned you in a comment:{" "}
  //                     <span class="font-medium text-primary-700 dark:text-primary-500">
  //                       @bonnie.green
  //                     </span>{" "}
  //                     what do you say?
  //                   </div>
  //                   <div class="text-xs font-medium text-primary-700 dark:text-primary-400">
  //                     1 hour ago
  //                   </div>
  //                 </div>
  //               </a>
  //               <a
  //                 href="#"
  //                 class="flex px-4 py-3 hover:bg-gray-100 dark:hover:bg-gray-600"
  //               >
  //                 <div class="flex-shrink-0">
  //                   {/* <img
  //                     width={44}
  //                     height={44}
  //                     class="h-11 w-11 rounded-full"
  //                     src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/robert-brown.png"
  //                     alt="Robert image"
  //                   /> */}
  //                   <div class="absolute -mt-5 ml-6 flex h-5 w-5 items-center justify-center rounded-full border border-white bg-purple-500 dark:border-gray-700">
  //                     <svg
  //                       class="h-2 w-2 text-white"
  //                       aria-hidden="true"
  //                       xmlns="http://www.w3.org/2000/svg"
  //                       fill="currentColor"
  //                       viewBox="0 0 20 14"
  //                     >
  //                       <path d="M11 0H2a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h9a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2Zm8.585 1.189a.994.994 0 0 0-.9-.138l-2.965.983a1 1 0 0 0-.685.949v8a1 1 0 0 0 .675.946l2.965 1.02a1.013 1.013 0 0 0 1.032-.242A1 1 0 0 0 20 12V2a1 1 0 0 0-.415-.811Z" />
  //                     </svg>
  //                   </div>
  //                 </div>
  //                 <div class="w-full pl-3">
  //                   <div class="mb-1.5 text-sm font-normal text-gray-500 dark:text-gray-400">
  //                     <span class="font-semibold text-gray-900 dark:text-white">
  //                       Robert Brown
  //                     </span>{" "}
  //                     posted a new video: Glassmorphism - learn how to implement
  //                     the new design trend.
  //                   </div>
  //                   <div class="text-xs font-medium text-primary-700 dark:text-primary-400">
  //                     3 hours ago
  //                   </div>
  //                 </div>
  //               </a>
  //             </div>
  //             <a
  //               href="#"
  //               class="block bg-gray-50 py-2 text-center text-base font-medium text-gray-900 hover:bg-gray-100 dark:bg-gray-700 dark:text-white dark:hover:underline"
  //             >
  //               <div class="inline-flex items-center ">
  //                 <svg
  //                   aria-hidden="true"
  //                   class="mr-2 h-5 w-5"
  //                   fill="currentColor"
  //                   viewBox="0 0 20 20"
  //                   xmlns="http://www.w3.org/2000/svg"
  //                 >
  //                   <path d="M10 12a2 2 0 100-4 2 2 0 000 4z"></path>
  //                   <path
  //                     fill-rule="evenodd"
  //                     d="M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z"
  //                     clip-rule="evenodd"
  //                   ></path>
  //                 </svg>
  //                 View all
  //               </div>
  //             </a>
  //           </div>
  //           {/* <!-- Apps --> */}
  //           <button
  //             type="button"
  //             data-dropdown-toggle="apps-dropdown"
  //             class="rounded-lg p-2 text-gray-500 hover:bg-gray-100 hover:text-gray-900 focus:ring-4 focus:ring-gray-300 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white dark:focus:ring-gray-600"
  //           >
  //             <span class="sr-only">View notifications</span>
  //             {/* <!-- Icon --> */}
  //             <svg
  //               class="h-4 w-4"
  //               aria-hidden="true"
  //               xmlns="http://www.w3.org/2000/svg"
  //               fill="currentColor"
  //               viewBox="0 0 18 18"
  //             >
  //               <path d="M6.143 0H1.857A1.857 1.857 0 0 0 0 1.857v4.286C0 7.169.831 8 1.857 8h4.286A1.857 1.857 0 0 0 8 6.143V1.857A1.857 1.857 0 0 0 6.143 0Zm10 0h-4.286A1.857 1.857 0 0 0 10 1.857v4.286C10 7.169 10.831 8 11.857 8h4.286A1.857 1.857 0 0 0 18 6.143V1.857A1.857 1.857 0 0 0 16.143 0Zm-10 10H1.857A1.857 1.857 0 0 0 0 11.857v4.286C0 17.169.831 18 1.857 18h4.286A1.857 1.857 0 0 0 8 16.143v-4.286A1.857 1.857 0 0 0 6.143 10Zm10 0h-4.286A1.857 1.857 0 0 0 10 11.857v4.286c0 1.026.831 1.857 1.857 1.857h4.286A1.857 1.857 0 0 0 18 16.143v-4.286A1.857 1.857 0 0 0 16.143 10Z" />
  //             </svg>
  //           </button>
  //           {/* <!-- Dropdown menu --> */}
  //           <div
  //             class="z-50 my-4 hidden max-w-sm list-none divide-y divide-gray-100 overflow-hidden rounded bg-white text-base shadow-lg dark:divide-gray-600 dark:bg-gray-700"
  //             id="apps-dropdown"
  //           >
  //             <div class="block bg-gray-50 px-4 py-2 text-center text-base font-medium text-gray-700 dark:bg-gray-700 dark:text-gray-400">
  //               Apps
  //             </div>
  //             <div class="grid grid-cols-3 gap-4 p-4">
  //               <a
  //                 href="#"
  //                 class="group block rounded-lg p-4 text-center hover:bg-gray-100 dark:hover:bg-gray-600"
  //               >
  //                 <svg
  //                   class="mx-auto mb-2 h-5 w-5 text-gray-400 group-hover:text-gray-500 dark:text-gray-400 dark:group-hover:text-gray-400"
  //                   aria-hidden="true"
  //                   xmlns="http://www.w3.org/2000/svg"
  //                   fill="currentColor"
  //                   viewBox="0 0 18 20"
  //                 >
  //                   <path d="M17 5.923A1 1 0 0 0 16 5h-3V4a4 4 0 1 0-8 0v1H2a1 1 0 0 0-1 .923L.086 17.846A2 2 0 0 0 2.08 20h13.84a2 2 0 0 0 1.994-2.153L17 5.923ZM7 9a1 1 0 0 1-2 0V7h2v2Zm0-5a2 2 0 1 1 4 0v1H7V4Zm6 5a1 1 0 1 1-2 0V7h2v2Z" />
  //                 </svg>
  //                 <div class="text-sm font-medium text-gray-900 dark:text-white">
  //                   Sales
  //                 </div>
  //               </a>
  //               <a
  //                 href="#"
  //                 class="group block rounded-lg p-4 text-center hover:bg-gray-100 dark:hover:bg-gray-600"
  //               >
  //                 <svg
  //                   class="mx-auto mb-2 h-5 w-5 text-gray-400 group-hover:text-gray-500 dark:text-gray-400 dark:group-hover:text-gray-400"
  //                   aria-hidden="true"
  //                   xmlns="http://www.w3.org/2000/svg"
  //                   fill="currentColor"
  //                   viewBox="0 0 20 19"
  //                 >
  //                   <path d="M14.5 0A3.987 3.987 0 0 0 11 2.1a4.977 4.977 0 0 1 3.9 5.858A3.989 3.989 0 0 0 14.5 0ZM9 13h2a4 4 0 0 1 4 4v2H5v-2a4 4 0 0 1 4-4Z" />
  //                   <path d="M5 19h10v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2ZM5 7a5.008 5.008 0 0 1 4-4.9 3.988 3.988 0 1 0-3.9 5.859A4.974 4.974 0 0 1 5 7Zm5 3a3 3 0 1 0 0-6 3 3 0 0 0 0 6Zm5-1h-.424a5.016 5.016 0 0 1-1.942 2.232A6.007 6.007 0 0 1 17 17h2a1 1 0 0 0 1-1v-2a5.006 5.006 0 0 0-5-5ZM5.424 9H5a5.006 5.006 0 0 0-5 5v2a1 1 0 0 0 1 1h2a6.007 6.007 0 0 1 4.366-5.768A5.016 5.016 0 0 1 5.424 9Z" />
  //                 </svg>
  //                 <div class="text-sm font-medium text-gray-900 dark:text-white">
  //                   Users
  //                 </div>
  //               </a>
  //               <a
  //                 href="#"
  //                 class="group block rounded-lg p-4 text-center hover:bg-gray-100 dark:hover:bg-gray-600"
  //               >
  //                 <svg
  //                   class="mx-auto mb-2 h-5 w-5 text-gray-400 group-hover:text-gray-500 dark:text-gray-400 dark:group-hover:text-gray-400"
  //                   aria-hidden="true"
  //                   xmlns="http://www.w3.org/2000/svg"
  //                   fill="currentColor"
  //                   viewBox="0 0 18 18"
  //                 >
  //                   {" "}
  //                   <path d="M15.977.783A1 1 0 0 0 15 0H3a1 1 0 0 0-.977.783L.2 9h4.239a2.99 2.99 0 0 1 2.742 1.8 1.977 1.977 0 0 0 3.638 0A2.99 2.99 0 0 1 13.561 9H17.8L15.977.783ZM6 2h6a1 1 0 1 1 0 2H6a1 1 0 0 1 0-2Zm7 5H5a1 1 0 0 1 0-2h8a1 1 0 1 1 0 2Z" />{" "}
  //                   <path d="M1 18h16a1 1 0 0 0 1-1v-6h-4.439a.99.99 0 0 0-.908.6 3.978 3.978 0 0 1-7.306 0 .99.99 0 0 0-.908-.6H0v6a1 1 0 0 0 1 1Z" />{" "}
  //                 </svg>
  //                 <div class="text-sm font-medium text-gray-900 dark:text-white">
  //                   Inbox
  //                 </div>
  //               </a>
  //               <a
  //                 href="#"
  //                 class="group block rounded-lg p-4 text-center hover:bg-gray-100 dark:hover:bg-gray-600"
  //               >
  //                 <svg
  //                   class="mx-auto mb-2 h-5 w-5 text-gray-400 group-hover:text-gray-500 dark:text-gray-400 dark:group-hover:text-gray-400"
  //                   aria-hidden="true"
  //                   xmlns="http://www.w3.org/2000/svg"
  //                   fill="currentColor"
  //                   viewBox="0 0 20 20"
  //                 >
  //                   <path d="M10 0a10 10 0 1 0 10 10A10.011 10.011 0 0 0 10 0Zm0 5a3 3 0 1 1 0 6 3 3 0 0 1 0-6Zm0 13a8.949 8.949 0 0 1-4.951-1.488A3.987 3.987 0 0 1 9 13h2a3.987 3.987 0 0 1 3.951 3.512A8.949 8.949 0 0 1 10 18Z" />
  //                 </svg>
  //                 <div class="text-sm font-medium text-gray-900 dark:text-white">
  //                   Profile
  //                 </div>
  //               </a>
  //               <a
  //                 href="#"
  //                 class="group block rounded-lg p-4 text-center hover:bg-gray-100 dark:hover:bg-gray-600"
  //               >
  //                 <svg
  //                   class="mx-auto mb-2 h-5 w-5 text-gray-400 group-hover:text-gray-500 dark:text-gray-400 dark:group-hover:text-gray-400"
  //                   aria-hidden="true"
  //                   xmlns="http://www.w3.org/2000/svg"
  //                   fill="currentColor"
  //                   viewBox="0 0 20 20"
  //                 >
  //                   <path d="M18 7.5h-.423l-.452-1.09.3-.3a1.5 1.5 0 0 0 0-2.121L16.01 2.575a1.5 1.5 0 0 0-2.121 0l-.3.3-1.089-.452V2A1.5 1.5 0 0 0 11 .5H9A1.5 1.5 0 0 0 7.5 2v.423l-1.09.452-.3-.3a1.5 1.5 0 0 0-2.121 0L2.576 3.99a1.5 1.5 0 0 0 0 2.121l.3.3L2.423 7.5H2A1.5 1.5 0 0 0 .5 9v2A1.5 1.5 0 0 0 2 12.5h.423l.452 1.09-.3.3a1.5 1.5 0 0 0 0 2.121l1.415 1.413a1.5 1.5 0 0 0 2.121 0l.3-.3 1.09.452V18A1.5 1.5 0 0 0 9 19.5h2a1.5 1.5 0 0 0 1.5-1.5v-.423l1.09-.452.3.3a1.5 1.5 0 0 0 2.121 0l1.415-1.414a1.5 1.5 0 0 0 0-2.121l-.3-.3.452-1.09H18a1.5 1.5 0 0 0 1.5-1.5V9A1.5 1.5 0 0 0 18 7.5Zm-8 6a3.5 3.5 0 1 1 0-7 3.5 3.5 0 0 1 0 7Z" />
  //                 </svg>
  //                 <div class="text-sm font-medium text-gray-900 dark:text-white">
  //                   Settings
  //                 </div>
  //               </a>
  //               <a
  //                 href="#"
  //                 class="group block rounded-lg p-4 text-center hover:bg-gray-100 dark:hover:bg-gray-600"
  //               >
  //                 <svg
  //                   class="mx-auto mb-2 h-5 w-5 text-gray-400 group-hover:text-gray-500 dark:text-gray-400 dark:group-hover:text-gray-400"
  //                   aria-hidden="true"
  //                   xmlns="http://www.w3.org/2000/svg"
  //                   fill="currentColor"
  //                   viewBox="0 0 20 16"
  //                 >
  //                   <path d="M19 0H1a1 1 0 0 0-1 1v2a1 1 0 0 0 1 1h18a1 1 0 0 0 1-1V1a1 1 0 0 0-1-1ZM2 6v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V6H2Zm11 3a1 1 0 0 1-1 1H8a1 1 0 0 1-1-1V8a1 1 0 0 1 2 0h2a1 1 0 0 1 2 0v1Z" />
  //                 </svg>
  //                 <div class="text-sm font-medium text-gray-900 dark:text-white">
  //                   Products
  //                 </div>
  //               </a>
  //               <a
  //                 href="#"
  //                 class="group block rounded-lg p-4 text-center hover:bg-gray-100 dark:hover:bg-gray-600"
  //               >
  //                 <svg
  //                   class="mx-auto mb-2 h-5 w-5 text-gray-400 group-hover:text-gray-500 dark:text-gray-400 dark:group-hover:text-gray-400"
  //                   aria-hidden="true"
  //                   xmlns="http://www.w3.org/2000/svg"
  //                   fill="none"
  //                   viewBox="0 0 11 20"
  //                 >
  //                   <path
  //                     stroke="currentColor"
  //                     stroke-linecap="round"
  //                     stroke-linejoin="round"
  //                     stroke-width="2"
  //                     d="M1.75 15.363a4.954 4.954 0 0 0 2.638 1.574c2.345.572 4.653-.434 5.155-2.247.502-1.813-1.313-3.79-3.657-4.364-2.344-.574-4.16-2.551-3.658-4.364.502-1.813 2.81-2.818 5.155-2.246A4.97 4.97 0 0 1 10 5.264M6 17.097v1.82m0-17.5v2.138"
  //                   />
  //                 </svg>
  //                 <div class="text-sm font-medium text-gray-900 dark:text-white">
  //                   Pricing
  //                 </div>
  //               </a>
  //               <a
  //                 href="#"
  //                 class="group block rounded-lg p-4 text-center hover:bg-gray-100 dark:hover:bg-gray-600"
  //               >
  //                 <svg
  //                   class="mx-auto mb-2 h-5 w-5 text-gray-400 group-hover:text-gray-500 dark:text-gray-400 dark:group-hover:text-gray-400"
  //                   aria-hidden="true"
  //                   xmlns="http://www.w3.org/2000/svg"
  //                   fill="currentColor"
  //                   viewBox="0 0 16 20"
  //                 >
  //                   <path d="M7 11H5v1h2v-1Zm4 3H9v1h2v-1Zm-4 0H5v1h2v-1ZM5 5V.13a2.98 2.98 0 0 0-1.293.749L.88 3.707A2.98 2.98 0 0 0 .13 5H5Z" />
  //                   <path d="M14.066 0H7v5a2 2 0 0 1-2 2H0v11a1.97 1.97 0 0 0 1.934 2h12.132A1.97 1.97 0 0 0 16 18V2a1.97 1.97 0 0 0-1.934-2ZM13 16a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1v-6a1 1 0 0 1 1-1h8a1 1 0 0 1 1 1v6Zm-1-8H9a1 1 0 0 1 0-2h3a1 1 0 1 1 0 2Zm0-3H9a1 1 0 0 1 0-2h3a1 1 0 1 1 0 2Z" />
  //                   <path d="M11 11H9v1h2v-1Z" />
  //                 </svg>
  //                 <div class="text-sm font-medium text-gray-900 dark:text-white">
  //                   Billing
  //                 </div>
  //               </a>
  //               <a
  //                 href="#"
  //                 class="group block rounded-lg p-4 text-center hover:bg-gray-100 dark:hover:bg-gray-600"
  //               >
  //                 <svg
  //                   class="mx-auto mb-2 h-5 w-5 text-gray-400 group-hover:text-gray-500 dark:text-gray-400 dark:group-hover:text-gray-400"
  //                   aria-hidden="true"
  //                   xmlns="http://www.w3.org/2000/svg"
  //                   fill="none"
  //                   viewBox="0 0 16 16"
  //                 >
  //                   <path
  //                     stroke="currentColor"
  //                     stroke-linecap="round"
  //                     stroke-linejoin="round"
  //                     stroke-width="2"
  //                     d="M4 8h11m0 0-4-4m4 4-4 4m-5 3H3a2 2 0 0 1-2-2V3a2 2 0 0 1 2-2h3"
  //                   />
  //                 </svg>
  //                 <div class="text-sm font-medium text-gray-900 dark:text-white">
  //                   Logout
  //                 </div>
  //               </a>
  //             </div>
  //           </div>
  //           <button
  //             type="button"
  //             class="mx-3 flex rounded-full bg-gray-800 text-sm focus:ring-4 focus:ring-gray-300 dark:focus:ring-gray-600 md:mr-0"
  //             id="user-menu-button"
  //             aria-expanded="false"
  //             data-dropdown-toggle="dropdown"
  //           >
  //             <span class="sr-only">Open user menu</span>
  //             <img
  //               width={32}
  //               height={32}
  //               class="h-8 w-8 rounded-full"
  //               src="https://flowbite.com/docs/images/people/profile-picture-5.jpg"
  //               alt="user photo"
  //             />
  //           </button>
  //           {/* <!-- Dropdown menu --> */}
  //           <div
  //             class="z-50 my-4 hidden w-56 list-none divide-y divide-gray-100 rounded bg-white text-base shadow dark:divide-gray-600 dark:bg-gray-700"
  //             id="dropdown"
  //           >
  //             <div class="px-4 py-3">
  //               <span class="block text-sm font-semibold text-gray-900 dark:text-white">
  //                 Neil sims
  //               </span>
  //               <span class="block truncate text-sm text-gray-500 dark:text-gray-400">
  //                 name@flowbite.com
  //               </span>
  //             </div>
  //             <ul
  //               class="py-1 text-gray-500 dark:text-gray-400"
  //               aria-labelledby="dropdown"
  //             >
  //               <li>
  //                 <a
  //                   href="#"
  //                   class="block px-4 py-2 text-sm hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-600 dark:hover:text-white"
  //                 >
  //                   My profile
  //                 </a>
  //               </li>
  //               <li>
  //                 <a
  //                   href="#"
  //                   class="block px-4 py-2 text-sm hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-600 dark:hover:text-white"
  //                 >
  //                   Account settings
  //                 </a>
  //               </li>
  //             </ul>
  //             <ul
  //               class="py-1 text-gray-500 dark:text-gray-400"
  //               aria-labelledby="dropdown"
  //             >
  //               <li>
  //                 <a
  //                   href="#"
  //                   class="flex items-center px-4 py-2 text-sm hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
  //                 >
  //                   <svg
  //                     class="mr-2 h-4 w-4 text-gray-400"
  //                     aria-hidden="true"
  //                     xmlns="http://www.w3.org/2000/svg"
  //                     fill="currentColor"
  //                     viewBox="0 0 20 18"
  //                   >
  //                     <path d="M17.947 2.053a5.209 5.209 0 0 0-3.793-1.53A6.414 6.414 0 0 0 10 2.311 6.482 6.482 0 0 0 5.824.5a5.2 5.2 0 0 0-3.8 1.521c-1.915 1.916-2.315 5.392.625 8.333l7 7a.5.5 0 0 0 .708 0l7-7a6.6 6.6 0 0 0 2.123-4.508 5.179 5.179 0 0 0-1.533-3.793Z" />
  //                   </svg>
  //                   My likes
  //                 </a>
  //               </li>
  //               <li>
  //                 <a
  //                   href="#"
  //                   class="flex items-center px-4 py-2 text-sm hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
  //                 >
  //                   <svg
  //                     class="mr-2 h-4 w-4 text-gray-400"
  //                     aria-hidden="true"
  //                     xmlns="http://www.w3.org/2000/svg"
  //                     fill="currentColor"
  //                     viewBox="0 0 20 20"
  //                   >
  //                     {" "}
  //                     <path d="m1.56 6.245 8 3.924a1 1 0 0 0 .88 0l8-3.924a1 1 0 0 0 0-1.8l-8-3.925a1 1 0 0 0-.88 0l-8 3.925a1 1 0 0 0 0 1.8Z" />{" "}
  //                     <path d="M18 8.376a1 1 0 0 0-1 1v.163l-7 3.434-7-3.434v-.163a1 1 0 0 0-2 0v.786a1 1 0 0 0 .56.9l8 3.925a1 1 0 0 0 .88 0l8-3.925a1 1 0 0 0 .56-.9v-.786a1 1 0 0 0-1-1Z" />{" "}
  //                     <path d="M17.993 13.191a1 1 0 0 0-1 1v.163l-7 3.435-7-3.435v-.163a1 1 0 1 0-2 0v.787a1 1 0 0 0 .56.9l8 3.925a1 1 0 0 0 .88 0l8-3.925a1 1 0 0 0 .56-.9v-.787a1 1 0 0 0-1-1Z" />{" "}
  //                   </svg>
  //                   Collections
  //                 </a>
  //               </li>
  //               <li>
  //                 <a
  //                   href="#"
  //                   class="flex items-center justify-between px-4 py-2 text-sm hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
  //                 >
  //                   <span class="flex items-center">
  //                     <svg
  //                       class="mr-2 h-4 w-4 text-primary-600 dark:text-primary-500"
  //                       aria-hidden="true"
  //                       xmlns="http://www.w3.org/2000/svg"
  //                       fill="currentColor"
  //                       viewBox="0 0 20 20"
  //                     >
  //                       <path d="m7.164 3.805-4.475.38L.327 6.546a1.114 1.114 0 0 0 .63 1.89l3.2.375 3.007-5.006ZM11.092 15.9l.472 3.14a1.114 1.114 0 0 0 1.89.63l2.36-2.362.38-4.475-5.102 3.067Zm8.617-14.283A1.613 1.613 0 0 0 18.383.291c-1.913-.33-5.811-.736-7.556 1.01-1.98 1.98-6.172 9.491-7.477 11.869a1.1 1.1 0 0 0 .193 1.316l.986.985.985.986a1.1 1.1 0 0 0 1.316.193c2.378-1.3 9.889-5.5 11.869-7.477 1.746-1.745 1.34-5.643 1.01-7.556Zm-3.873 6.268a2.63 2.63 0 1 1-3.72-3.72 2.63 2.63 0 0 1 3.72 3.72Z" />
  //                     </svg>
  //                     Pro version
  //                   </span>
  //                   <svg
  //                     class="h-2.5 w-2.5 text-gray-400"
  //                     aria-hidden="true"
  //                     xmlns="http://www.w3.org/2000/svg"
  //                     fill="none"
  //                     viewBox="0 0 6 10"
  //                   >
  //                     <path
  //                       stroke="currentColor"
  //                       stroke-linecap="round"
  //                       stroke-linejoin="round"
  //                       stroke-width="2"
  //                       d="m1 9 4-4-4-4"
  //                     />
  //                   </svg>
  //                 </a>
  //               </li>
  //             </ul>
  //             <ul
  //               class="py-1 text-gray-500 dark:text-gray-400"
  //               aria-labelledby="dropdown"
  //             >
  //               <li>
  //                 <a
  //                   href="#"
  //                   class="block px-4 py-2 text-sm hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
  //                 >
  //                   Sign out
  //                 </a>
  //               </li>
  //             </ul>
  //           </div>
  //         </div>
  //       </div>
  //     </nav>
  //   </header>
  <nav class="fixed left-0 right-0 top-0 z-50 border-b border-gray-200 bg-white px-4 py-2.5 dark:border-gray-700 dark:bg-gray-800">
    <div class="flex flex-wrap items-center justify-between">
      <div class="flex items-center justify-start">
        <button
          data-drawer-target="drawer-navigation"
          data-drawer-toggle="drawer-navigation"
          aria-controls="drawer-navigation"
          class="mr-2 cursor-pointer rounded-lg p-2 text-gray-600 hover:bg-gray-100 hover:text-gray-900 focus:bg-gray-100 focus:ring-2 focus:ring-gray-100 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white dark:focus:bg-gray-700 dark:focus:ring-gray-700 md:hidden"
        >
          <svg
            aria-hidden="true"
            class="h-6 w-6"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h6a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
              clip-rule="evenodd"
            ></path>
          </svg>
          <svg
            aria-hidden="true"
            class="hidden h-6 w-6"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
              clip-rule="evenodd"
            ></path>
          </svg>
          <span class="sr-only">Toggle sidebar</span>
        </button>
        <a
          href="https://flowbite.com"
          class="mr-4 flex items-center justify-between"
        >
          <img
            width={32}
            height={32}
            src="https://flowbite.s3.amazonaws.com/logo.svg"
            class="mr-3 h-8"
            alt="Flowbite Logo"
          />
          <span class="self-center whitespace-nowrap text-2xl font-semibold dark:text-white">
            Flowbite
          </span>
        </a>
        <form action="#" method="GET" class="hidden md:block md:pl-2">
          <label for="topbar-search" class="sr-only">
            Search
          </label>
          <div class="relative  md:w-96">
            <div class="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
              <svg
                class="h-5 w-5 text-gray-500 dark:text-gray-400"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                ></path>
              </svg>
            </div>
            <input
              type="text"
              name="email"
              id="topbar-search"
              class="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 pl-10 text-sm text-gray-900 focus:border-primary-500 focus:ring-primary-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-primary-500 dark:focus:ring-primary-500"
              placeholder="Search"
            />
          </div>
        </form>
      </div>
      <div class="flex items-center lg:order-2">
        <button
          type="button"
          data-drawer-toggle="drawer-navigation"
          aria-controls="drawer-navigation"
          class="mr-1 rounded-lg p-2 text-gray-500 hover:bg-gray-100 hover:text-gray-900 focus:ring-4 focus:ring-gray-300 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white dark:focus:ring-gray-600 md:hidden"
        >
          <span class="sr-only">Toggle search</span>
          <svg
            aria-hidden="true"
            class="h-6 w-6"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              clip-rule="evenodd"
              fill-rule="evenodd"
              d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
            ></path>
          </svg>
        </button>
        {/* <!-- Notifications --> */}
        <button
          type="button"
          data-dropdown-toggle="notification-dropdown"
          class="mr-1 rounded-lg p-2 text-gray-500 hover:bg-gray-100 hover:text-gray-900 focus:ring-4 focus:ring-gray-300 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white dark:focus:ring-gray-600"
        >
          <span class="sr-only">View notifications</span>
          {/* <!-- Bell icon --> */}
          <svg
            aria-hidden="true"
            class="h-6 w-6"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M10 2a6 6 0 00-6 6v3.586l-.707.707A1 1 0 004 14h12a1 1 0 00.707-1.707L16 11.586V8a6 6 0 00-6-6zM10 18a3 3 0 01-3-3h6a3 3 0 01-3 3z"></path>
          </svg>
        </button>
        {/* <!-- Dropdown menu --> */}
        <div
          class="z-50 my-4 hidden max-w-sm list-none divide-y divide-gray-100 overflow-hidden  rounded-xl bg-white text-base shadow-lg dark:divide-gray-600 dark:bg-gray-700"
          id="notification-dropdown"
        >
          <div class="block bg-gray-50 px-4 py-2 text-center text-base font-medium text-gray-700 dark:bg-gray-600 dark:text-gray-300">
            Notifications
          </div>
          <div>
            <a
              href="#"
              class="flex border-b px-4 py-3 hover:bg-gray-100 dark:border-gray-600 dark:hover:bg-gray-600"
            >
              <div class="flex-shrink-0">
                <img
                  width={44}
                  height={44}
                  class="h-11 w-11 rounded-full"
                  src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/bonnie-green.png"
                  alt="Bonnie Green avatar"
                />
                <div class="absolute -mt-5 ml-6 flex h-5 w-5 items-center justify-center rounded-full border border-white bg-primary-700 dark:border-gray-700">
                  <svg
                    aria-hidden="true"
                    class="h-3 w-3 text-white"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M8.707 7.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l2-2a1 1 0 00-1.414-1.414L11 7.586V3a1 1 0 10-2 0v4.586l-.293-.293z"></path>
                    <path d="M3 5a2 2 0 012-2h1a1 1 0 010 2H5v7h2l1 2h4l1-2h2V5h-1a1 1 0 110-2h1a2 2 0 012 2v10a2 2 0 01-2 2H5a2 2 0 01-2-2V5z"></path>
                  </svg>
                </div>
              </div>
              <div class="w-full pl-3">
                <div class="mb-1.5 text-sm font-normal text-gray-500 dark:text-gray-400">
                  New message from
                  <span class="font-semibold text-gray-900 dark:text-white">
                    Bonnie Green
                  </span>
                  : "Hey, what's up? All set for the presentation?"
                </div>
                <div class="text-xs font-medium text-primary-600 dark:text-primary-500">
                  a few moments ago
                </div>
              </div>
            </a>
            <a
              href="#"
              class="flex border-b px-4 py-3 hover:bg-gray-100 dark:border-gray-600 dark:hover:bg-gray-600"
            >
              <div class="flex-shrink-0">
                <img
                  width={44}
                  height={44}
                  class="h-11 w-11 rounded-full"
                  src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/jese-leos.png"
                  alt="Jese Leos avatar"
                />
                <div class="absolute -mt-5 ml-6 flex h-5 w-5 items-center justify-center rounded-full border border-white bg-gray-900 dark:border-gray-700">
                  <svg
                    aria-hidden="true"
                    class="h-3 w-3 text-white"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M8 9a3 3 0 100-6 3 3 0 000 6zM8 11a6 6 0 016 6H2a6 6 0 016-6zM16 7a1 1 0 10-2 0v1h-1a1 1 0 100 2h1v1a1 1 0 102 0v-1h1a1 1 0 100-2h-1V7z"></path>
                  </svg>
                </div>
              </div>
              <div class="w-full pl-3">
                <div class="mb-1.5 text-sm font-normal text-gray-500 dark:text-gray-400">
                  <span class="font-semibold text-gray-900 dark:text-white">
                    Jese leos
                  </span>
                  and
                  <span class="font-medium text-gray-900 dark:text-white">
                    5 others
                  </span>
                  started following you.
                </div>
                <div class="text-xs font-medium text-primary-600 dark:text-primary-500">
                  10 minutes ago
                </div>
              </div>
            </a>
            <a
              href="#"
              class="flex border-b px-4 py-3 hover:bg-gray-100 dark:border-gray-600 dark:hover:bg-gray-600"
            >
              <div class="flex-shrink-0">
                <img
                  width={44}
                  height={44}
                  class="h-11 w-11 rounded-full"
                  src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/joseph-mcfall.png"
                  alt="Joseph McFall avatar"
                />
                <div class="absolute -mt-5 ml-6 flex h-5 w-5 items-center justify-center rounded-full border border-white bg-red-600 dark:border-gray-700">
                  <svg
                    aria-hidden="true"
                    class="h-3 w-3 text-white"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z"
                      clip-rule="evenodd"
                    ></path>
                  </svg>
                </div>
              </div>
              <div class="w-full pl-3">
                <div class="mb-1.5 text-sm font-normal text-gray-500 dark:text-gray-400">
                  <span class="font-semibold text-gray-900 dark:text-white">
                    Joseph Mcfall
                  </span>
                  and
                  <span class="font-medium text-gray-900 dark:text-white">
                    141 others
                  </span>
                  love your story. See it and view more stories.
                </div>
                <div class="text-xs font-medium text-primary-600 dark:text-primary-500">
                  44 minutes ago
                </div>
              </div>
            </a>
            <a
              href="#"
              class="flex border-b px-4 py-3 hover:bg-gray-100 dark:border-gray-600 dark:hover:bg-gray-600"
            >
              <div class="flex-shrink-0">
                <img
                  width={44}
                  height={44}
                  class="h-11 w-11 rounded-full"
                  src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/roberta-casas.png"
                  alt="Roberta Casas image"
                />
                <div class="absolute -mt-5 ml-6 flex h-5 w-5 items-center justify-center rounded-full border border-white bg-green-400 dark:border-gray-700">
                  <svg
                    aria-hidden="true"
                    class="h-3 w-3 text-white"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M18 13V5a2 2 0 00-2-2H4a2 2 0 00-2 2v8a2 2 0 002 2h3l3 3 3-3h3a2 2 0 002-2zM5 7a1 1 0 011-1h8a1 1 0 110 2H6a1 1 0 01-1-1zm1 3a1 1 0 100 2h3a1 1 0 100-2H6z"
                      clip-rule="evenodd"
                    ></path>
                  </svg>
                </div>
              </div>
              <div class="w-full pl-3">
                <div class="mb-1.5 text-sm font-normal text-gray-500 dark:text-gray-400">
                  <span class="font-semibold text-gray-900 dark:text-white">
                    Leslie Livingston
                  </span>
                  mentioned you in a comment:
                  <span class="font-medium text-primary-600 dark:text-primary-500">
                    @bonnie.green
                  </span>
                  what do you say?
                </div>
                <div class="text-xs font-medium text-primary-600 dark:text-primary-500">
                  1 hour ago
                </div>
              </div>
            </a>
            <a
              href="#"
              class="flex px-4 py-3 hover:bg-gray-100 dark:hover:bg-gray-600"
            >
              <div class="flex-shrink-0">
                <img
                  width={44}
                  height={44}
                  class="h-11 w-11 rounded-full"
                  src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/robert-brown.png"
                  alt="Robert image"
                />
                <div class="absolute -mt-5 ml-6 flex h-5 w-5 items-center justify-center rounded-full border border-white bg-purple-500 dark:border-gray-700">
                  <svg
                    aria-hidden="true"
                    class="h-3 w-3 text-white"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M2 6a2 2 0 012-2h6a2 2 0 012 2v8a2 2 0 01-2 2H4a2 2 0 01-2-2V6zM14.553 7.106A1 1 0 0014 8v4a1 1 0 00.553.894l2 1A1 1 0 0018 13V7a1 1 0 00-1.447-.894l-2 1z"></path>
                  </svg>
                </div>
              </div>
              <div class="w-full pl-3">
                <div class="mb-1.5 text-sm font-normal text-gray-500 dark:text-gray-400">
                  <span class="font-semibold text-gray-900 dark:text-white">
                    Robert Brown
                  </span>
                  posted a new video: Glassmorphism - learn how to implement the
                  new design trend.
                </div>
                <div class="text-xs font-medium text-primary-600 dark:text-primary-500">
                  3 hours ago
                </div>
              </div>
            </a>
          </div>
          <a
            href="#"
            class="text-md block bg-gray-50 py-2 text-center font-medium text-gray-900 hover:bg-gray-100 dark:bg-gray-600 dark:text-white dark:hover:underline"
          >
            <div class="inline-flex items-center">
              <svg
                aria-hidden="true"
                class="mr-2 h-4 w-4 text-gray-500 dark:text-gray-400"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M10 12a2 2 0 100-4 2 2 0 000 4z"></path>
                <path
                  fill-rule="evenodd"
                  d="M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z"
                  clip-rule="evenodd"
                ></path>
              </svg>
              View all
            </div>
          </a>
        </div>
        {/* <!-- Apps --> */}
        <button
          type="button"
          data-dropdown-toggle="apps-dropdown"
          class="rounded-lg p-2 text-gray-500 hover:bg-gray-100 hover:text-gray-900 focus:ring-4 focus:ring-gray-300 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white dark:focus:ring-gray-600"
        >
          <span class="sr-only">View notifications</span>
          {/* <!-- Icon --> */}
          <svg
            class="h-6 w-6"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M5 3a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2V5a2 2 0 00-2-2H5zM5 11a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2v-2a2 2 0 00-2-2H5zM11 5a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V5zM11 13a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z"></path>
          </svg>
        </button>
        {/* <!-- Dropdown menu --> */}
        <div
          class="z-50 my-4 hidden max-w-sm list-none divide-y divide-gray-100 overflow-hidden rounded-xl bg-white text-base shadow-lg dark:divide-gray-600 dark:bg-gray-700"
          id="apps-dropdown"
        >
          <div class="block bg-gray-50 px-4 py-2 text-center text-base font-medium text-gray-700 dark:bg-gray-600 dark:text-gray-300">
            Apps
          </div>
          <div class="grid grid-cols-3 gap-4 p-4">
            <a
              href="#"
              class="group block rounded-lg p-4 text-center hover:bg-gray-100 dark:hover:bg-gray-600"
            >
              <svg
                aria-hidden="true"
                class="mx-auto mb-1 h-7 w-7 text-gray-400 group-hover:text-gray-500 dark:text-gray-400 dark:group-hover:text-gray-400"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  d="M10 2a4 4 0 00-4 4v1H5a1 1 0 00-.994.89l-1 9A1 1 0 004 18h12a1 1 0 00.994-1.11l-1-9A1 1 0 0015 7h-1V6a4 4 0 00-4-4zm2 5V6a2 2 0 10-4 0v1h4zm-6 3a1 1 0 112 0 1 1 0 01-2 0zm7-1a1 1 0 100 2 1 1 0 000-2z"
                  clip-rule="evenodd"
                ></path>
              </svg>
              <div class="text-sm text-gray-900 dark:text-white">Sales</div>
            </a>
            <a
              href="#"
              class="group block rounded-lg p-4 text-center hover:bg-gray-100 dark:hover:bg-gray-600"
            >
              <svg
                aria-hidden="true"
                class="mx-auto mb-1 h-7 w-7 text-gray-400 group-hover:text-gray-500 dark:text-gray-400 dark:group-hover:text-gray-400"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3zM6 8a2 2 0 11-4 0 2 2 0 014 0zM16 18v-3a5.972 5.972 0 00-.75-2.906A3.005 3.005 0 0119 15v3h-3zM4.75 12.094A5.973 5.973 0 004 15v3H1v-3a3 3 0 013.75-2.906z"></path>
              </svg>
              <div class="text-sm text-gray-900 dark:text-white">Users</div>
            </a>
            <a
              href="#"
              class="group block rounded-lg p-4 text-center hover:bg-gray-100 dark:hover:bg-gray-600"
            >
              <svg
                aria-hidden="true"
                class="mx-auto mb-1 h-7 w-7 text-gray-400 group-hover:text-gray-500 dark:text-gray-400 dark:group-hover:text-gray-400"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  d="M5 3a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2V5a2 2 0 00-2-2H5zm0 2h10v7h-2l-1 2H8l-1-2H5V5z"
                  clip-rule="evenodd"
                ></path>
              </svg>
              <div class="text-sm text-gray-900 dark:text-white">Inbox</div>
            </a>
            <a
              href="#"
              class="group block rounded-lg p-4 text-center hover:bg-gray-100 dark:hover:bg-gray-600"
            >
              <svg
                aria-hidden="true"
                class="mx-auto mb-1 h-7 w-7 text-gray-400 group-hover:text-gray-500 dark:text-gray-400 dark:group-hover:text-gray-400"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-6-3a2 2 0 11-4 0 2 2 0 014 0zm-2 4a5 5 0 00-4.546 2.916A5.986 5.986 0 0010 16a5.986 5.986 0 004.546-2.084A5 5 0 0010 11z"
                  clip-rule="evenodd"
                ></path>
              </svg>
              <div class="text-sm text-gray-900 dark:text-white">Profile</div>
            </a>
            <a
              href="#"
              class="group block rounded-lg p-4 text-center hover:bg-gray-100 dark:hover:bg-gray-600"
            >
              <svg
                aria-hidden="true"
                class="mx-auto mb-1 h-7 w-7 text-gray-400 group-hover:text-gray-500 dark:text-gray-400 dark:group-hover:text-gray-400"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  d="M11.49 3.17c-.38-1.56-2.6-1.56-2.98 0a1.532 1.532 0 01-2.286.948c-1.372-.836-2.942.734-2.106 2.106.54.886.061 2.042-.947 2.287-1.561.379-1.561 2.6 0 2.978a1.532 1.532 0 01.947 2.287c-.836 1.372.734 2.942 2.106 2.106a1.532 1.532 0 012.287.947c.379 1.561 2.6 1.561 2.978 0a1.533 1.533 0 012.287-.947c1.372.836 2.942-.734 2.106-2.106a1.533 1.533 0 01.947-2.287c1.561-.379 1.561-2.6 0-2.978a1.532 1.532 0 01-.947-2.287c.836-1.372-.734-2.942-2.106-2.106a1.532 1.532 0 01-2.287-.947zM10 13a3 3 0 100-6 3 3 0 000 6z"
                  clip-rule="evenodd"
                ></path>
              </svg>
              <div class="text-sm text-gray-900 dark:text-white">Settings</div>
            </a>
            <a
              href="#"
              class="group block rounded-lg p-4 text-center hover:bg-gray-100 dark:hover:bg-gray-600"
            >
              <svg
                aria-hidden="true"
                class="mx-auto mb-1 h-7 w-7 text-gray-400 group-hover:text-gray-500 dark:text-gray-400 dark:group-hover:text-gray-400"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M4 3a2 2 0 100 4h12a2 2 0 100-4H4z"></path>
                <path
                  fill-rule="evenodd"
                  d="M3 8h14v7a2 2 0 01-2 2H5a2 2 0 01-2-2V8zm5 3a1 1 0 011-1h2a1 1 0 110 2H9a1 1 0 01-1-1z"
                  clip-rule="evenodd"
                ></path>
              </svg>
              <div class="text-sm text-gray-900 dark:text-white">Products</div>
            </a>
            <a
              href="#"
              class="group block rounded-lg p-4 text-center hover:bg-gray-100 dark:hover:bg-gray-600"
            >
              <svg
                aria-hidden="true"
                class="mx-auto mb-1 h-7 w-7 text-gray-400 group-hover:text-gray-500 dark:text-gray-400 dark:group-hover:text-gray-400"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M8.433 7.418c.155-.103.346-.196.567-.267v1.698a2.305 2.305 0 01-.567-.267C8.07 8.34 8 8.114 8 8c0-.114.07-.34.433-.582zM11 12.849v-1.698c.22.071.412.164.567.267.364.243.433.468.433.582 0 .114-.07.34-.433.582a2.305 2.305 0 01-.567.267z"></path>
                <path
                  fill-rule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-13a1 1 0 10-2 0v.092a4.535 4.535 0 00-1.676.662C6.602 6.234 6 7.009 6 8c0 .99.602 1.765 1.324 2.246.48.32 1.054.545 1.676.662v1.941c-.391-.127-.68-.317-.843-.504a1 1 0 10-1.51 1.31c.562.649 1.413 1.076 2.353 1.253V15a1 1 0 102 0v-.092a4.535 4.535 0 001.676-.662C13.398 13.766 14 12.991 14 12c0-.99-.602-1.765-1.324-2.246A4.535 4.535 0 0011 9.092V7.151c.391.127.68.317.843.504a1 1 0 101.511-1.31c-.563-.649-1.413-1.076-2.354-1.253V5z"
                  clip-rule="evenodd"
                ></path>
              </svg>
              <div class="text-sm text-gray-900 dark:text-white">Pricing</div>
            </a>
            <a
              href="#"
              class="group block rounded-lg p-4 text-center hover:bg-gray-100 dark:hover:bg-gray-600"
            >
              <svg
                aria-hidden="true"
                class="mx-auto mb-1 h-7 w-7 text-gray-400 group-hover:text-gray-500 dark:text-gray-400 dark:group-hover:text-gray-400"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  d="M5 2a2 2 0 00-2 2v14l3.5-2 3.5 2 3.5-2 3.5 2V4a2 2 0 00-2-2H5zm2.5 3a1.5 1.5 0 100 3 1.5 1.5 0 000-3zm6.207.293a1 1 0 00-1.414 0l-6 6a1 1 0 101.414 1.414l6-6a1 1 0 000-1.414zM12.5 10a1.5 1.5 0 100 3 1.5 1.5 0 000-3z"
                  clip-rule="evenodd"
                ></path>
              </svg>
              <div class="text-sm text-gray-900 dark:text-white">Billing</div>
            </a>
            <a
              href="#"
              class="group block rounded-lg p-4 text-center hover:bg-gray-100 dark:hover:bg-gray-600"
            >
              <svg
                aria-hidden="true"
                class="mx-auto mb-1 h-7 w-7 text-gray-400 group-hover:text-gray-500 dark:text-gray-400 dark:group-hover:text-gray-400"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M11 16l-4-4m0 0l4-4m-4 4h14m-5 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h7a3 3 0 013 3v1"
                ></path>
              </svg>
              <div class="text-sm text-gray-900 dark:text-white">Logout</div>
            </a>
          </div>
        </div>
        <button
          type="button"
          class="mx-3 flex rounded-full bg-gray-800 text-sm focus:ring-4 focus:ring-gray-300 dark:focus:ring-gray-600 md:mr-0"
          id="user-menu-button"
          aria-expanded="false"
          data-dropdown-toggle="dropdown"
        >
          <span class="sr-only">Open user menu</span>
          <img
            height={32}
            width={32}
            class="h-8 w-8 rounded-full"
            src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/michael-gough.png"
            alt="user photo"
          />
        </button>
        {/* <!-- Dropdown menu --> */}
        <div
          class="z-50 my-4 hidden w-56 list-none divide-y divide-gray-100 rounded-xl bg-white text-base shadow dark:divide-gray-600 dark:bg-gray-700"
          id="dropdown"
        >
          <div class="px-4 py-3">
            <span class="block text-sm font-semibold text-gray-900 dark:text-white">
              Neil Sims
            </span>
            <span class="block truncate text-sm text-gray-900 dark:text-white">
              name@flowbite.com
            </span>
          </div>
          <ul
            class="py-1 text-gray-700 dark:text-gray-300"
            aria-labelledby="dropdown"
          >
            <li>
              <a
                href="#"
                class="block px-4 py-2 text-sm hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-600 dark:hover:text-white"
              >
                My profile
              </a>
            </li>
            <li>
              <a
                href="#"
                class="block px-4 py-2 text-sm hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-600 dark:hover:text-white"
              >
                Account settings
              </a>
            </li>
          </ul>
          <ul
            class="py-1 text-gray-700 dark:text-gray-300"
            aria-labelledby="dropdown"
          >
            <li>
              <a
                href="#"
                class="flex items-center px-4 py-2 text-sm hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
              >
                <svg
                  class="mr-2 h-5 w-5 text-gray-400"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z"
                    clip-rule="evenodd"
                  ></path>
                </svg>
                My likes
              </a>
            </li>
            <li>
              <a
                href="#"
                class="flex items-center px-4 py-2 text-sm hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
              >
                <svg
                  class="mr-2 h-5 w-5 text-gray-400"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M7 3a1 1 0 000 2h6a1 1 0 100-2H7zM4 7a1 1 0 011-1h10a1 1 0 110 2H5a1 1 0 01-1-1zM2 11a2 2 0 012-2h12a2 2 0 012 2v4a2 2 0 01-2 2H4a2 2 0 01-2-2v-4z"></path>
                </svg>
                Collections
              </a>
            </li>
            <li>
              <a
                href="#"
                class="flex items-center justify-between px-4 py-2 text-sm hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
              >
                <span class="flex items-center">
                  <svg
                    aria-hidden="true"
                    class="mr-2 h-5 w-5 text-primary-600 dark:text-primary-500"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M12.395 2.553a1 1 0 00-1.45-.385c-.345.23-.614.558-.822.88-.214.33-.403.713-.57 1.116-.334.804-.614 1.768-.84 2.734a31.365 31.365 0 00-.613 3.58 2.64 2.64 0 01-.945-1.067c-.328-.68-.398-1.534-.398-2.654A1 1 0 005.05 6.05 6.981 6.981 0 003 11a7 7 0 1011.95-4.95c-.592-.591-.98-.985-1.348-1.467-.363-.476-.724-1.063-1.207-2.03zM12.12 15.12A3 3 0 017 13s.879.5 2.5.5c0-1 .5-4 1.25-4.5.5 1 .786 1.293 1.371 1.879A2.99 2.99 0 0113 13a2.99 2.99 0 01-.879 2.121z"
                      clip-rule="evenodd"
                    ></path>
                  </svg>
                  Pro version
                </span>
                <svg
                  aria-hidden="true"
                  class="h-5 w-5 text-gray-400"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                    clip-rule="evenodd"
                  ></path>
                </svg>
              </a>
            </li>
          </ul>
          <ul
            class="py-1 text-gray-700 dark:text-gray-300"
            aria-labelledby="dropdown"
          >
            <li>
              <a
                href="#"
                class="block px-4 py-2 text-sm hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
              >
                Sign out
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </nav>
));
