import type { Input } from "valibot";
import type { QRL } from "@builder.io/qwik";
import type { FormResponse, SubmitHandler } from "@modular-forms/qwik";
import { component$, $, useSignal } from "@builder.io/qwik";
import { routeLoader$ } from "@builder.io/qwik-city";
import {
  valiForm$,
  type InitialValues,
  useForm,
  formAction$,
} from "@modular-forms/qwik";
import { boolean, email, minLength, object, string, value } from "valibot";

const ForgotPasswordSchema = object({
  email: string([
    minLength(1, "Please enter your email."),
    email("The email address is badly formatted."),
  ]),
  acceptTerms: boolean([value(true)]),
});

type ForgotPasswordForm = Input<typeof ForgotPasswordSchema>;

export const useFormLoader = routeLoader$<InitialValues<ForgotPasswordForm>>(
  () => ({
    email: "user@strapi.io",
    acceptTerms: true,
  }),
);

export const useFormAction = formAction$<ForgotPasswordForm, FormResponse<any>>(
  async ({ acceptTerms, email }) => {
    // Runs on server
    if (!acceptTerms) return;
    const res = await fetch("http://localhost:1337/api/auth/forgot-password", {
      method: "post",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email }),
    });
    const { ok } = await res.json();
    if (ok)
      return {
        status: "success",
        message: "mail is sended",
      };
  },
  valiForm$(ForgotPasswordSchema),
);

export default component$(() => {
  const isMailSend = useSignal(false);

  const [forgotPasswordForm, { Form, Field }] = useForm<
    ForgotPasswordForm,
    FormResponse<any>
  >({
    action: useFormAction(),
    loader: useFormLoader(),
    validate: valiForm$(ForgotPasswordSchema),
  });

  const handleSubmit: QRL<SubmitHandler<ForgotPasswordForm>> = $(() => {
    console.log("handlesubmit client", forgotPasswordForm.response.data);
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
          {isMailSend.value ? (
            <section class="text-center">
              <h1 class="mb-1  text-xl font-bold leading-tight tracking-tight text-gray-900 dark:text-white md:text-2xl">
                The verification email is sended 👌
              </h1>
              <p class="font-semibold text-gray-500 dark:text-gray-400">
                Check your email imbox and search the invitation for change
                password
              </p>
            </section>
          ) : (
            <>
              <h1 class="mb-1 text-xl font-bold leading-tight tracking-tight text-gray-900 dark:text-white md:text-2xl">
                Forgot your password?
              </h1>
              <p class="font-light text-gray-500 dark:text-gray-400">
                Don't fret! Just type in your email and we will send you a code
                to reset your password!
              </p>
              <Form
                responseDuration={3}
                class="mt-4 space-y-4 md:space-y-5 lg:mt-5"
                onSubmit$={handleSubmit}
              >
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
                          required
                          type="email"
                          name="email"
                          id="email"
                          class="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-gray-900 focus:border-primary-600 focus:ring-primary-600 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500 sm:text-sm"
                          placeholder="name@company.com"
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
                          required
                          type="checkbox"
                          aria-describedby="terms"
                          name="terms"
                          id="terms"
                          class="focus:ring-3 h-4 w-4 rounded border border-gray-300 bg-gray-50 focus:ring-primary-300 dark:border-gray-600 dark:bg-gray-700 dark:ring-offset-gray-800 dark:focus:ring-primary-600"
                        />
                      )}
                    </Field>
                  </div>
                  <div class="ml-3 text-sm">
                    <label
                      for="terms"
                      class="font-light text-gray-500 dark:text-gray-300"
                    >
                      I accept the &nbsp;
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
                  disabled={forgotPasswordForm.submitting}
                  type="submit"
                  class="w-full rounded-lg bg-primary-600 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-primary-700 focus:outline-none focus:ring-4 focus:ring-primary-300 dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
                >
                  {forgotPasswordForm.submitting ? (
                    <svg
                      aria-hidden="true"
                      role="status"
                      class="me-3 inline h-4 w-4 animate-spin text-white"
                      viewBox="0 0 100 101"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                        fill="#E5E7EB"
                      />
                      <path
                        d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                        fill="currentColor"
                      />
                    </svg>
                  ) : (
                    "Reset password"
                  )}
                </button>
              </Form>
            </>
          )}
        </div>
      </div>
    </section>
  );
});
