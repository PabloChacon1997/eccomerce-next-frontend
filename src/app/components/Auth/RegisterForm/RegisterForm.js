"use client"
import { useFormik } from "formik";
import { useRouter } from "next/navigation";
import { Form } from "semantic-ui-react";

import { initialValues, validationSchema } from "./RegisterForm.form";
import { Auth } from "@/app/api";

const authCtrl = new Auth();

export function RegisterForm() {
  const router = useRouter();
  const formik = useFormik({
    initialValues: initialValues(),
    validationSchema: validationSchema(),
    validateOnChange: false,
    onSubmit: async (formValue) => {
      try {
        await authCtrl.register(formValue);
        router.push("/pages/join/sign-in");
      } catch (error) {
        console.error(error);
      }
    }
  });
  return (
    <Form onSubmit={formik.handleSubmit}>
      <Form.Group widths="equal">
        <Form.Input name="email" type="text" placeholder="Correo electrónico" 
          value={formik.values.email} onChange={formik.handleChange} error={formik.errors.email} />
        <Form.Input name="username" type="text" placeholder="Nombre del usuario" 
          value={formik.values.username} onChange={formik.handleChange} error={formik.errors.username}/>
      </Form.Group>
      <Form.Group widths="equal">
        <Form.Input name="password" type="password" placeholder="Contraseña" 
          value={formik.values.password} onChange={formik.handleChange} error={formik.errors.password}/>
      </Form.Group>
      <Form.Button type="submit" fluid loading={formik.isSubmitting}>Registrarse</Form.Button>
    </Form>
  )
}
