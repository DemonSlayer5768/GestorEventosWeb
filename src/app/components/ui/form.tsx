import React from "react";
import {
  useForm,
  FormProvider,
  SubmitHandler,
  FieldValues,
  UseFormReturn,
  FieldPath,
  Controller,
  Control,
  ControllerRenderProps,
  ControllerFieldState,
} from "react-hook-form";

// Props para el componente Form
interface FormProps<T extends FieldValues> {
  children: React.ReactNode;
  onSubmit: SubmitHandler<T>;
  methods?: UseFormReturn<T>;
}

// Componente Form
export const Form = <T extends FieldValues>({
  children,
  onSubmit,
  methods,
}: FormProps<T>) => {
  const defaultMethods = useForm<T>();
  const formMethods = methods || defaultMethods;

  return (
    <FormProvider {...formMethods}>
      <form onSubmit={formMethods.handleSubmit(onSubmit)}>{children}</form>
    </FormProvider>
  );
};

// Props para el componente FormField
interface FormFieldProps<T extends FieldValues> {
  control: Control<T>; // Usamos `Control<T>` de react-hook-form para evitar conflictos
  name: FieldPath<T>;
  render: (props: {
    field: ControllerRenderProps<T, FieldPath<T>>;
    fieldState: ControllerFieldState;
    formState: UseFormReturn<T>["formState"];
  }) => React.ReactNode;
}

// Componente FormField
export const FormField = <T extends FieldValues>({
  control,
  name,
  render,
}: FormFieldProps<T>) => {
  return (
    <Controller
      control={control}
      name={name}
      render={({ field, fieldState, formState }) => (
        <>{render({ field, fieldState, formState })}</>
      )}
    />
  );
};

// Componente FormControl
export const FormControl: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  return <>{children}</>;
};
// Componente FormControlPrivate
export const FormControlPrivate: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => <div className="flex flex-col space-y-2">{children}</div>;

// Componente FormDescription
export const FormDescription: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  return <p className="text-sm text-gray-500">{children}</p>;
};

// Componente FormItem
export const FormItem: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  return <div className="space-y-2">{children}</div>;
};

// Componente FormLabel
export const FormLabel: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  return (
    <label className="block text-sm font-medium text-gray-700">
      {children}
    </label>
  );
};

// Componente FormMessage
export const FormMessage: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  return <p className="text-sm text-red-500">{children}</p>;
};
