import React from "react";
import { useForm, FormProvider, SubmitHandler } from "react-hook-form";

interface FormProps {
  children: React.ReactNode;
  onSubmit: SubmitHandler<Record<string, unknown>>;
}

export const Form: React.FC<FormProps> = ({ children, onSubmit }) => {
  const methods = useForm();
  return (
    <FormProvider {...methods}>
      <form onSubmit={methods.handleSubmit(onSubmit)}>{children}</form>
    </FormProvider>
  );
};

export const FormControl: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  return <>{children}</>;
};

export const FormDescription: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  return <p className="text-sm text-gray-500">{children}</p>;
};

export const FormField: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  return <>{children}</>;
};

export const FormItem: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  return <div className="space-y-2">{children}</div>;
};

export const FormLabel: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  return (
    <label className="block text-sm font-medium text-gray-700">
      {children}
    </label>
  );
};

export const FormMessage: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  return <p className="text-sm text-red-600">{children}</p>;
};
