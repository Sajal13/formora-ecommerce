"use client";

import Button from "@/components/base/Button";
import FormControl from "@/components/base/FormControl";
import { yupResolver } from "@hookform/resolvers/yup";
import React from "react";
import { useForm } from "react-hook-form";
import * as yup from "yup";

interface SignInFormValue {
  email: string;
  password: string;
}

const signInSchema: yup.ObjectSchema<SignInFormValue> = yup.object({
  email: yup
    .string()
    .email("Email must be a valid email.")
    .required("Email is required."),
  password: yup
    .string()
    .min(6, "Password must be at least 6 characters.")
    .required("Password is required.")
});

const SignInForm = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors }
  } = useForm<SignInFormValue>({
    resolver: yupResolver(signInSchema),
    defaultValues: {
      email: "",
      password: ""
    }
  });
  const onFormSubmit = (data: SignInFormValue) => {
    console.log(data);
    reset();
  };
  return (
    <form onSubmit={handleSubmit(onFormSubmit)} noValidate>
      <div className="mb-3">
        <label htmlFor="email" className="block text-muted mb-2">
          Email Address
        </label>
        <FormControl
          id="email"
          type="email"
          placeholder="Enter email address..."
          className="w-full"
          error={errors.email}
          {...register("email")}
        />
        {errors.email && (
          <p className="text-sm text-red-500 mt-1">{errors.email.message}</p>
        )}
      </div>
      <div className="mb-5">
        <label htmlFor="password" className="text-muted block mb-2">
          Password
        </label>
        <FormControl
          id="password"
          type="password"
          error={errors.password}
          className="w-full"
          placeholder="Enter password..."
          {...register("password")}
        />
        {errors.password && (
          <p className="text-sm text-red-500 mt-1">{errors.password.message}</p>
        )}
      </div>
      <div className="flex justify-end gap-3">
        <Button
          type="button"
          variant="outline"
          className="text-danger border-danger hover:border-danger hover:bg-danger w-full"
          onClick={() => reset()}
        >
          Reset
        </Button>
        <Button
          type="submit"
          variant="solid"
          className="bg-green-600 border-green-600 hover:bg-green-700 hover:border-green-900 w-full"
        >
          Submit
        </Button>
      </div>
    </form>
  );
};

export default SignInForm;
