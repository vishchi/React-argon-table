import React from 'react';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/styles';

const useStyles = makeStyles(theme => ({
  root: {
    display: 'inline-block',
    borderRadius: '50%',
    flexGrow: 0,
    flexShrink: 0
  },
  size: {
    height: 7,
    width: 7
  },
  neutral: { backgroundColor: '#fff' },
  primary: { backgroundColor: '#ccc' },
  info: { backgroundColor: '#3cc' },
  warning: { backgroundColor: '#cc3' },
  danger: { backgroundColor: '#c33' },
  success: { backgroundColor: '#3c3' }
}));

const StatusBullet = props => {
  const { className, status } = props;
  const classes = useStyles();
  const statusColors = {
    completed: "success",
    pending: "warning",
    delayed: "danger",
    "on schedule": "info"
  };
  const color = statusColors[status];
  const size = "size";

  return (
    <span
      className={clsx(
        {
          [classes.root]: true,
          [classes.size]: size,
          [classes[color]]: color
        },
        className
      )}
    />
  );
};

export default StatusBullet;