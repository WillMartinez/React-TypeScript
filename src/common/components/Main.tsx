import * as React from 'react';
import {
  Grid,
  createStyles,
  Theme,
  Paper,
  WithStyles,
  withStyles
} from '@material-ui/core';
import theme from '../../theme';
// import { Paper } from '@material-ui/core';

// Theme-dependent styles
const styles = ({ palette, spacing }: Theme) =>
  createStyles({
    root: {
      flexGrow: 1
    },
    paper: {
      padding: theme.spacing.unit * 2,
      textAlign: 'center',
      color: theme.palette.text.secondary,
      height: 200
    }
  });

type State = {
  open: boolean;
};

class Main extends React.Component<WithStyles<typeof styles>, State> {
  public render() {
    return (
      <Grid className={'Main'} container={true} spacing={24}>
        <Grid item={true} xs={12}>
          <Paper className={this.props.classes.paper}>Main</Paper>
        </Grid>
      </Grid>
    );
  }
}

export default withStyles(styles)(Main);
