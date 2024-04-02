import { component$ } from "@builder.io/qwik";
import { formAction$, useForm, valiForm$ } from "@modular-forms/qwik";
import { Link, routeLoader$ } from "@builder.io/qwik-city";
import type { InitialValues } from "@modular-forms/qwik";
import { email, type Input, minLength, object, string } from "valibot";

const LoginSchema = object({
  identifier: string([
    minLength(1, "Please enter your email."),
    email("The email address is badly formatted."),
  ]),
  password: string([
    minLength(1, "Please enter your password."),
    minLength(8, "Your password must have 8 characters or more."),
  ]),
});

type LoginForm = Input<typeof LoginSchema>;

export const useFormLoader = routeLoader$<InitialValues<LoginForm>>(() => ({
  identifier: "user@strapi.io",
  password: "strapiPassword",
}));

export const useFormAction = formAction$<LoginForm>(async (formValue) => {
  // Runs on server
  const auth = await fetch("http://localhost:1337/api/auth/local", {
    method: "post",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(formValue),
  });

  console.info(await auth.json());
}, valiForm$(LoginSchema));

export default component$(() => {
  const [, { Form, Field }] = useForm<LoginForm>({
    action: useFormAction(),
    loader: useFormLoader(),
    validate: valiForm$(LoginSchema),
  });

  return (
    <>
      <section class="bg-gray-50 dark:bg-gray-900">
        <div class="mx-auto flex flex-col items-center justify-center px-6 py-8 md:h-screen lg:py-0">
          <a
            href="#"
            class="mb-6 flex items-center text-2xl font-semibold text-gray-900 dark:text-white"
          >
            <img
              width={32}
              height={32}
              class="mr-2 h-8 w-8"
              src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/logo.svg"
              alt="logo"
            />
            Flowbite
          </a>
          <div class="w-full rounded-lg bg-white shadow dark:border dark:border-gray-700 dark:bg-gray-800 sm:max-w-md md:mt-0 xl:p-0">
            <div class="space-y-4 p-6 sm:p-8 md:space-y-6">
              <h1 class="text-xl font-bold leading-tight tracking-tight text-gray-900 dark:text-white md:text-2xl">
                Sign in to your account
              </h1>
              <Form class="space-y-4 md:space-y-6">
                <div>
                  <Field name="identifier">
                    {(field, props) => (
                      <>
                        <label
                          for="email"
                          class="mb-2 block text-sm font-medium text-gray-900 dark:text-white"
                        >
                          Your email
                        </label>

                        <input
                          {...props}
                          value={field.value}
                          required
                          autoComplete="email"
                          type="email"
                          name="email"
                          id="email"
                          class="focus:ring-primary-600 focus:border-primary-600 block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-gray-900 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500 sm:text-sm"
                          placeholder="name@company.com"
                        />
                        {field.error && <div>{field.error}</div>}
                      </>
                    )}
                  </Field>
                </div>
                <div>
                  <Field name="password">
                    {(field, props) => (
                      <>
                        <label
                          for="password"
                          class="mb-2 block text-sm font-medium text-gray-900 dark:text-white"
                        >
                          Password
                        </label>
                        <input
                          {...props}
                          value={field.value}
                          type="password"
                          name="password"
                          id="password"
                          autoComplete="current-password"
                          placeholder="••••••••"
                          class="focus:ring-primary-600 focus:border-primary-600 block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-gray-900 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500 sm:text-sm"
                        />
                      </>
                    )}
                  </Field>
                </div>
                <div class="flex items-center justify-between">
                  <div class="flex items-start">
                    <div class="flex h-5 items-center">
                      <input
                        id="remember"
                        aria-describedby="remember"
                        type="checkbox"
                        class="focus:ring-3 focus:ring-primary-300 dark:focus:ring-primary-600 h-4 w-4 rounded border border-gray-300 bg-gray-50 dark:border-gray-600 dark:bg-gray-700 dark:ring-offset-gray-800"
                        required
                      />
                    </div>
                    <div class="ml-3 text-sm">
                      <label
                        for="remember"
                        class="text-gray-500 dark:text-gray-300"
                      >
                        Remember me
                      </label>
                    </div>
                  </div>
                  <Link
                    href="/forgot-password"
                    class="text-primary-600 dark:text-primary-500 text-sm font-medium hover:underline"
                  >
                    Forgot password?
                  </Link>
                </div>
                <button
                  type="submit"
                  class="bg-primary-600 hover:bg-primary-700 focus:ring-primary-300 dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800 w-full rounded-lg px-5 py-2.5 text-center text-sm font-medium text-white focus:outline-none focus:ring-4"
                >
                  Sign in
                </button>
                <p class="text-sm font-light text-gray-500 dark:text-gray-400">
                  Don’t have an account yet?
                  <a
                    href="#"
                    class="text-primary-600 dark:text-primary-500 font-medium hover:underline"
                  >
                    Sign up
                  </a>
                </p>
              </Form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
});
