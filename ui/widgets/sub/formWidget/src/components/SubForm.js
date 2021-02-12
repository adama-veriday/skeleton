import 'date-fns';
import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { formValues, formTouched, formErrors } from 'components/__types__/sub';
import { withFormik } from 'formik';
import { withTranslation } from 'react-i18next';
import { withStyles } from '@material-ui/core/styles';
import { compose } from 'recompose';
import * as Yup from 'yup';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import { DatePicker, MuiPickersUtilsProvider } from '@material-ui/pickers';
import DateFnsUtils from '@date-io/date-fns';
import dateFnsLocales from 'i18n/dateFnsLocales';
import ConfirmationDialogTrigger from 'components/common/ConfirmationDialogTrigger';

const styles = (theme) => ({
  root: {
    margin: theme.spacing(3),
  },
  textField: {
    width: '100%',
  },
});
class SubForm extends PureComponent {
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
      setFieldValue,
      t,
      i18n,
    } = this.props;

    const handleDateChange = (field) => (value) => {
      setFieldValue(field, value);
    };

    const dateLabelFn = (date) => (date ? new Date(date).toLocaleDateString(i18n.language) : '');
    const getHelperText = (field) => (errors[field] && touched[field] ? errors[field] : '');

    const handleSubmit = (e) => {
      e.stopPropagation(); // avoids double submission caused by react-shadow-dom-retarget-events
      formikHandleSubmit(e);
    };

    return (
      <MuiPickersUtilsProvider utils={DateFnsUtils} locale={dateFnsLocales[i18n.language]}>
        <form onSubmit={handleSubmit} className={classes.root} data-testid="sub-form">
          <Grid container spacing={2}>
            <Grid item xs={12} sm={6}>
              <TextField
                id="sub-level"
                error={errors.level && touched.level}
                helperText={getHelperText('level')}
                className={classes.textField}
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.level}
                name="level"
                label={t('entities.sub.level')}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                id="sub-length"
                error={errors.length && touched.length}
                helperText={getHelperText('length')}
                className={classes.textField}
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.length}
                name="length"
                label={t('entities.sub.length')}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                id="sub-status"
                error={errors.status && touched.status}
                helperText={getHelperText('status')}
                className={classes.textField}
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.status}
                name="status"
                label={t('entities.sub.status')}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                id="sub-project_id"
                error={errors.project_id && touched.project_id}
                helperText={getHelperText('project_id')}
                className={classes.textField}
                type="number"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.project_id}
                name="project_id"
                label={t('entities.sub.project_id')}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <DatePicker
                id="sub-start_date"
                error={errors.start_date && touched.start_date}
                helperText={getHelperText('start_date')}
                className={classes.textField}
                onChange={handleDateChange('start_date')}
                value={values.start_date}
                labelFunc={dateLabelFn}
                name="start_date"
                label={t('entities.sub.start_date')}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                id="sub-customer_id"
                error={errors.customer_id && touched.customer_id}
                helperText={getHelperText('customer_id')}
                className={classes.textField}
                type="number"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.customer_id}
                name="customer_id"
                label={t('entities.sub.customer_id')}
              />
            </Grid>
            {onDelete && (
              <ConfirmationDialogTrigger
                onCloseDialog={this.handleConfirmationDialogAction}
                dialog={{
                  title: t('entities.sub.deleteDialog.title'),
                  description: t('entities.sub.deleteDialog.description'),
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
      </MuiPickersUtilsProvider>
    );
  }
}

SubForm.propTypes = {
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
  setFieldValue: PropTypes.func.isRequired,
  t: PropTypes.func.isRequired,
  i18n: PropTypes.shape({ language: PropTypes.string }).isRequired,
};

SubForm.defaultProps = {
  onCancelEditing: () => {},
  classes: {},
  values: {},
  touched: {},
  errors: {},
  onDelete: null,
};

const emptySub = {
  level: '',
  length: '',
  status: '',
  project_id: '',
  start_date: null,
  customer_id: '',
};

const validationSchema = Yup.object().shape({
  level: Yup.string(),
  length: Yup.string(),
  status: Yup.string(),
  project_id: Yup.number(),
  start_date: Yup.date().nullable(),
  customer_id: Yup.number(),
});

const formikBag = {
  mapPropsToValues: ({ sub }) => sub || emptySub,

  enableReinitialize: true,

  validationSchema,

  handleSubmit: (values, { setSubmitting, props: { onSubmit } }) => {
    onSubmit(values);
    setSubmitting(false);
  },

  displayName: 'SubForm',
};

export default compose(
  withStyles(styles, { withTheme: true }),
  withTranslation(),
  withFormik(formikBag)
)(SubForm);
