import { component$, useVisibleTask$ } from "@builder.io/qwik";
import {
  QwikCityProvider,
  RouterOutlet,
  ServiceWorkerRegister,
  useDocumentHead,
  useLocation,
} from "@builder.io/qwik-city";
import { initFlowbite } from "flowbite"; // import the Flowbite module

import "./global.css";

const RouterHead = component$(() => {
  const head = useDocumentHead();
  const loc = useLocation();
  return (
    <>
      <title>{head.title}</title>

      <link rel="canonical" href={loc.url.href} />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <link rel="icon" type="image/svg+xml" href="/favicon.svg" />

      {head.meta.map((m) => (
        <meta key={m.key} {...m} />
      ))}

      {head.links.map((l) => (
        <link key={l.key} {...l} />
      ))}

      {head.styles.map((s) => (
        <style key={s.key} {...s.props} dangerouslySetInnerHTML={s.style} />
      ))}

      {head.scripts.map((s) => (
        <script key={s.key} {...s.props} dangerouslySetInnerHTML={s.script} />
      ))}
    </>
  );
});

export default component$(() => {
  /**
   * Init the Flowbite module with the event listeners for the data attributes on render.
   * Although convenient, "useVisibleTask$()" runs code eagerly and blocks the main thread,
   * preventing user interaction until the task is finished. You can think of it as an escape hatch.
   * In that case, you can add //eslint-disable-next-line qwik/no-use-visible-task
   * to the line before "useVisibleTask$" to remove the warning.
   */

  // eslint-disable-next-line qwik/no-use-visible-task
  useVisibleTask$(() => {
    initFlowbite();
  });

  /**
   * The root of a QwikCity site always start with the <QwikCityProvider> component,
   * immediately followed by the document's <head> and <body>.
   *
   * Don't remove the `<head>` and `<body>` elements.
   */

  return (
    <QwikCityProvider>
      <head>
        <meta charSet="utf-8" />
        <link rel="manifest" href="/manifest.json" />
        <RouterHead />
        <ServiceWorkerRegister />
      </head>
      <body lang="en" class="dark">
        <RouterOutlet />
      </body>
      
    </QwikCityProvider>
  );
});
