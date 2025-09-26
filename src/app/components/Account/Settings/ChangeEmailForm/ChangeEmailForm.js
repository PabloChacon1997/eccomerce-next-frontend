import { Form } from 'semantic-ui-react'
import { useFormik } from 'formik'
import styles from './ChangeEmailForm.module.scss'
import { initialValues, validationScehma } from './ChangeEmailForm.form';
import { User } from '@/app/api';
import { useAuth } from '@/hooks';

const userCtrl = new User();

export function ChangeEmailForm() {
  const { user, updateUser } = useAuth()
  const formik = useFormik({
    initialValues: initialValues(),
    validationSchema: validationScehma(),
    validateOnChange: false,
    onSubmit: async (formValue) => {
      try {
        await userCtrl.updateMe( user.id, { email: formValue.email } )
        updateUser("email", formValue.email)
        formik.handleReset();
      } catch (error) {
        console.error(error)
      }
    }
  });
  return (
    <Form className={styles.form} onSubmit={formik.handleSubmit}>
      <label>Cambiar correo electronico</label>
      <Form.Input name="email" placeholder="Nuevo correo electronico" value={formik.values.email} onChange={formik.handleChange} error={formik.errors.email} />
      <Form.Input name="repeatEmail" placeholder="Repetir correo electronico" value={formik.values.repeatEmail} onChange={formik.handleChange} error={formik.errors.repeatEmail} />
      <Form.Button type='submit'>Enviar</Form.Button>
    </Form>
  )
}
