import type { Input } from "valibot";
import type {
  FormResponse,
  InitialValues,
  Maybe,
  ResponseData,
  ResponseStatus,
  SetResponseOptions,
} from "@modular-forms/qwik";
import { component$, useSignal, useTask$ } from "@builder.io/qwik";
import { routeLoader$ } from "@builder.io/qwik-city";
import { formAction$, useForm, valiForm$ } from "@modular-forms/qwik";
import { boolean, email, minLength, object, string, value } from "valibot";

type ActionResponse = Partial<{
  status: ResponseStatus;
  message: string;
  data: ResponseData;
}>;
type ActionResponseOptions = { duration: Maybe<SetResponseOptions> };
declare function setFormActionResponse(
  params: ActionResponse,
  options?: ActionResponseOptions,
): void;

const ChangePasswordSchema = object({
  code: string([
    minLength(1, "Please enter your password."),
    minLength(8, "Your password must have 8 characters or more."),
  ]),
  email: string([
    minLength(1, "Please enter your email."),
    email("The email address is badly formatted."),
  ]),
  password: string([
    minLength(1, "Please enter your password."),
    minLength(8, "Your password must have 8 characters or more."),
  ]),
  passwordConfirmation: string([
    minLength(1, "Please enter your password."),
    minLength(8, "Your password must have 8 characters or more."),
  ]),
  acceptTerms: boolean([value(true)]),
});

type ChangePasswordForm = Input<typeof ChangePasswordSchema>;

export const useFormLoader = routeLoader$<InitialValues<ChangePasswordForm>>(
  ({ params }) => ({
    code: params.code,
    email: "user@strapi.io",
    password: "J27660574esus",
    passwordConfirmation: "J27660574esus",
    acceptTerms: true,
  }),
);

export const useFormAction = formAction$<ChangePasswordForm, FormResponse<any>>(
  async ({ acceptTerms, email, ...x }) => {
    console.log(x);
    // Runs on server
    if (!acceptTerms) return;
    const res = await fetch("http://localhost:1337/api/auth/reset-password", {
      method: "post",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(x),
    });
    const { ok } = await res.json();
    if (!ok) return;

    setFormActionResponse({
      status: "success",
      message: "mail is sended",
    });
  },
  {
    validate: valiForm$(ChangePasswordSchema),
  },
);

export default component$(() => {
  // const loc = useLocation();
  const isMailSend = useSignal(false);

  const [changePasswordForm, { Form, Field }] = useForm<
    ChangePasswordForm,
    FormResponse<any>
  >({
    action: useFormAction(),
    loader: useFormLoader(),
    validate: valiForm$(ChangePasswordSchema),
  });

  useTask$(({ track }) => {
    track(() => changePasswordForm.response);
    if (changePasswordForm.response.status !== "success") return;
    console.log(changePasswordForm.response.data);
    isMailSend.value = true;
  });

  return (
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
        <div class="w-full rounded-lg bg-white p-6 shadow dark:border dark:border-gray-700 dark:bg-gray-800 sm:max-w-md sm:p-8 md:mt-0">
          <h2 class="mb-1 text-xl font-bold leading-tight tracking-tight text-gray-900 dark:text-white md:text-2xl">
            Change Password
          </h2>
          <Form class="mt-4 space-y-4 md:space-y-5 lg:mt-5">
            <div class="hidden">
              <Field name="code" type="string">
                {(field, props) => (
                  <>
                    <label
                      for="email"
                      class="mb-2 block text-sm font-medium text-gray-900 dark:text-white"
                    >
                      Your token
                    </label>
                    <input
                      {...props}
                      value={field.value}
                      type="email"
                      name="email"
                      id="email"
                      class="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-gray-900 focus:border-primary-600 focus:ring-primary-600 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500 sm:text-sm"
                      placeholder="name@company.com"
                      required
                    />
                  </>
                )}
              </Field>
            </div>
            <div>
              <Field name="email" type="string">
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
                      type="email"
                      name="email"
                      id="email"
                      class="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-gray-900 focus:border-primary-600 focus:ring-primary-600 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500 sm:text-sm"
                      placeholder="name@company.com"
                      required
                    />
                  </>
                )}
              </Field>
            </div>
            <div>
              <Field name="password" type="string">
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
                      placeholder="••••••••"
                      class="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-gray-900 focus:border-primary-600 focus:ring-primary-600 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500 sm:text-sm"
                      required
                    />
                  </>
                )}
              </Field>
            </div>
            <div>
              <Field name="passwordConfirmation" type="string">
                {(field, props) => (
                  <>
                    <label
                      for="confirm-password"
                      class="mb-2 block text-sm font-medium text-gray-900 dark:text-white"
                    >
                      Confirm password
                    </label>
                    <input
                      {...props}
                      value={field.value}
                      type="password"
                      name="confirm-password"
                      id="confirm-password"
                      placeholder="••••••••"
                      class="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-gray-900 focus:border-primary-600 focus:ring-primary-600 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500 sm:text-sm"
                      required
                    />
                  </>
                )}
              </Field>
            </div>
            <div class="flex items-start">
              <div class="flex h-5 items-center">
                <Field name="acceptTerms" type="boolean">
                  {(field, props) => (
                    <input
                      {...props}
                      checked={field.value}
                      id="newsletter"
                      aria-describedby="newsletter"
                      type="checkbox"
                      class="focus:ring-3 h-4 w-4 rounded border border-gray-300 bg-gray-50 focus:ring-primary-300 dark:border-gray-600 dark:bg-gray-700 dark:ring-offset-gray-800 dark:focus:ring-primary-600"
                      required
                    />
                  )}
                </Field>
              </div>
              <div class="ml-3 text-sm">
                <label
                  for="newsletter"
                  class="font-light text-gray-500 dark:text-gray-300"
                >
                  I accept the&nbsp;
                  <a
                    class="font-medium text-primary-600 hover:underline dark:text-primary-500"
                    href="#"
                  >
                    Terms and Conditions
                  </a>
                </label>
              </div>
            </div>
            <button
              type="submit"
              class="w-full rounded-lg bg-primary-600 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-primary-700 focus:outline-none focus:ring-4 focus:ring-primary-300 dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
            >
              Reset passwod
            </button>
          </Form>
        </div>
      </div>
    </section>
  );
  // return <div>hola token{loc.url.searchParams.get("code")}</div>;
});

// axios
//   .post("http://localhost:1337/api/auth/reset-password", {
//     code: "privateCode", // code contained in the reset link of step 3.
//     password: "userNewPassword",
//     passwordConfirmation: "userNewPassword",
//   })
//   .then((response) => {
//     console.log("Your user's password has been reset.");
//   })
//   .catch((error) => {
//     console.log("An error occurred:", error.response);
//   });
