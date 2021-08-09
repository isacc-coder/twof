import React from 'react';
import { useForm, Controller } from 'react-hook-form';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    marginTop: 20,
  },
}));

export default function Sample() {
  const classes = useStyles();

  const {
    control,
    formState: { errors },
    handleSubmit,
    reset,
  } = useForm();
  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <div className={classes.root}>
      <form noValidate onSubmit={handleSubmit(onSubmit)}>
        <Controller
          name="username"
          render={({ field }) => (
            <TextField
              helperText={errors['username'] ? errors['username'].message : null}
              error={errors['username']}
              label="userName"
              field={field}
              {...field}
              errors={errors}
              name="username"
              type="text"
              variant="outlined"
            />
          )}
          control={control}
          rules={{ required: 'this field is required' }}
        />
        <Button variant="outlined" type="submit">
          Submit
        </Button>
      </form>
    </div>
  );
}
