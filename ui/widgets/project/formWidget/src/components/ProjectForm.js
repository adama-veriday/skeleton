import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { formValues, formTouched, formErrors } from 'components/__types__/project';
import { withFormik } from 'formik';
import { withTranslation } from 'react-i18next';
import { withStyles } from '@material-ui/core/styles';
import { compose } from 'recompose';
import * as Yup from 'yup';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import ConfirmationDialogTrigger from 'components/common/ConfirmationDialogTrigger';

const styles = (theme) => ({
  root: {
    margin: theme.spacing(3),
  },
  textField: {
    width: '100%',
  },
});
class ProjectForm extends PureComponent {
  constructor(props) {
    super(props);
    this.handleConfirmationDialogAction = this.handleConfirmationDialogAction.bind(this);
  }

  handleConfirmationDialogAction(action) {
    const { onDelete, values } = this.props;
    switch (action) {
      case ConfirmationDialogTrigger.CONFIRM: {
        onDelete(values);
        break;
      }
      default:
        break;
    }
  }

  render() {
    const {
      classes,
      values,
      touched,
      errors,
      handleChange,
      handleBlur,
      handleSubmit: formikHandleSubmit,
      onDelete,
      onCancelEditing,
      isSubmitting,
      t,
    } = this.props;

    const getHelperText = (field) => (errors[field] && touched[field] ? errors[field] : '');

    const handleSubmit = (e) => {
      e.stopPropagation(); // avoids double submission caused by react-shadow-dom-retarget-events
      formikHandleSubmit(e);
    };

    return (
      <form onSubmit={handleSubmit} className={classes.root} data-testid="project-form">
        <Grid container spacing={2}>
          <Grid item xs={12} sm={6}>
            <TextField
              id="project-name"
              error={errors.name && touched.name}
              helperText={getHelperText('name')}
              className={classes.textField}
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.name}
              name="name"
              label={t('entities.project.name')}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              id="project-partner_id"
              error={errors.partner_id && touched.partner_id}
              helperText={getHelperText('partner_id')}
              className={classes.textField}
              type="number"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.partner_id}
              name="partner_id"
              label={t('entities.project.partner_id')}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              id="project-customer_id"
              error={errors.customer_id && touched.customer_id}
              helperText={getHelperText('customer_id')}
              className={classes.textField}
              type="number"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.customer_id}
              name="customer_id"
              label={t('entities.project.customer_id')}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              id="project-procurment_officer_name"
              error={errors.procurment_officer_name && touched.procurment_officer_name}
              helperText={getHelperText('procurment_officer_name')}
              className={classes.textField}
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.procurment_officer_name}
              name="procurment_officer_name"
              label={t('entities.project.procurment_officer_name')}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              id="project-procurment_contact_no"
              error={errors.procurment_contact_no && touched.procurment_contact_no}
              helperText={getHelperText('procurment_contact_no')}
              className={classes.textField}
              type="number"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.procurment_contact_no}
              name="procurment_contact_no"
              label={t('entities.project.procurment_contact_no')}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              id="project-tickets"
              error={errors.tickets && touched.tickets}
              helperText={getHelperText('tickets')}
              className={classes.textField}
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.tickets}
              name="tickets"
              label={t('entities.project.tickets')}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              id="project-subscriptions"
              error={errors.subscriptions && touched.subscriptions}
              helperText={getHelperText('subscriptions')}
              className={classes.textField}
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.subscriptions}
              name="subscriptions"
              label={t('entities.project.subscriptions')}
            />
          </Grid>
          {onDelete && (
            <ConfirmationDialogTrigger
              onCloseDialog={this.handleConfirmationDialogAction}
              dialog={{
                title: t('entities.project.deleteDialog.title'),
                description: t('entities.project.deleteDialog.description'),
                confirmLabel: t('common.yes'),
                discardLabel: t('common.no'),
              }}
              Renderer={({ onClick }) => (
                <Button onClick={onClick} disabled={isSubmitting}>
                  {t('common.delete')}
                </Button>
              )}
            />
          )}

          <Button onClick={onCancelEditing} disabled={isSubmitting} data-testid="cancel-btn">
            {t('common.cancel')}
          </Button>

          <Button type="submit" color="primary" disabled={isSubmitting} data-testid="submit-btn">
            {t('common.save')}
          </Button>
        </Grid>
      </form>
    );
  }
}

ProjectForm.propTypes = {
  classes: PropTypes.shape({
    root: PropTypes.string,
    textField: PropTypes.string,
    submitButton: PropTypes.string,
    button: PropTypes.string,
    downloadAnchor: PropTypes.string,
  }),
  values: formValues,
  touched: formTouched,
  errors: formErrors,
  handleChange: PropTypes.func.isRequired,
  handleBlur: PropTypes.func.isRequired,
  handleSubmit: PropTypes.func.isRequired,
  onDelete: PropTypes.func,
  onCancelEditing: PropTypes.func,
  isSubmitting: PropTypes.bool.isRequired,
  t: PropTypes.func.isRequired,
  i18n: PropTypes.shape({ language: PropTypes.string }).isRequired,
};

ProjectForm.defaultProps = {
  onCancelEditing: () => {},
  classes: {},
  values: {},
  touched: {},
  errors: {},
  onDelete: null,
};

const emptyProject = {
  name: '',
  partner_id: '',
  customer_id: '',
  procurment_officer_name: '',
  procurment_contact_no: '',
  tickets: '',
  subscriptions: '',
};

const validationSchema = Yup.object().shape({
  name: Yup.string(),
  partner_id: Yup.number(),
  customer_id: Yup.number(),
  procurment_officer_name: Yup.string(),
  procurment_contact_no: Yup.number(),
  tickets: Yup.string(),
  subscriptions: Yup.string(),
});

const formikBag = {
  mapPropsToValues: ({ project }) => project || emptyProject,

  enableReinitialize: true,

  validationSchema,

  handleSubmit: (values, { setSubmitting, props: { onSubmit } }) => {
    onSubmit(values);
    setSubmitting(false);
  },

  displayName: 'ProjectForm',
};

export default compose(
  withStyles(styles, { withTheme: true }),
  withTranslation(),
  withFormik(formikBag)
)(ProjectForm);
