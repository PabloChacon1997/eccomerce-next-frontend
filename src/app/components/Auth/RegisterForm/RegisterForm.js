"use client"
import { Form } from "semantic-ui-react";

export function RegisterForm() {
  return (
    <Form>
      <Form.Group widths="equal">
        <Form.Input name="email" type="text" placeholder="Correo electrónico" />
      </Form.Group>
    </Form>
  )
}
