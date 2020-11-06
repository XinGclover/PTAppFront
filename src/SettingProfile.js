import React, { Component } from 'react';
import axios from 'axios';
import Button from '@material-ui/core/Button';
import withStyles from '@material-ui/styles/withStyles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';

const styles = theme => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
  primary: {
    marginRight: theme.spacing(2)
  },
  secondary: {
    background: theme.palette.secondary['100'],
    color: 'white'
  },
  spaceTop: {
    marginTop: 20
  },
  textF: {
    '& > *': {
      margin: theme.spacing(1),
      width: '25ch',
    },
  },
})

class SettingPorfile extends Component {
  constructor(props) {
    super(props);
    this.state = {
      airspeed: 0,
      alpha: 2,
      altitude: null,
      beta: 0,
      density: 1.225,
      mach: null,
      rate_P: 0,
      rate_Q: 0,
      rate_R: 0,
      errormessage: '',
      exampleslist: [],
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    const { target } = event;
    const val = target.type === 'checkbox' ? target.checked : target.value;
    const { name } = target;
    let err = '';
    if (val !== "" && !Number(val)) {
      err = <strong>Input must be a number</strong>;
    }
    this.setState({
      [name]: val,
      errormessage: err,
    })

  }

  handleSubmit(event) {
    alert('A name was submitted: ' + this.state.density);
    event.preventDefault();
  }

  createProject = () => {
    axios.get('http://localhost:8080/pytronado/settings')
      .then(response => {
        console.log(response);
      });
  }

  listExamplesInDB = () => {
    axios.get('http://localhost:8080/pytronado/exampleslist')
      .then(response => {
        console.log(response);
        this.setState({
          exampleslist: response.data
        })
      });
  }



  render() {
    const { classes } = this.props;

    return (
      <div className={classes.root}>
        <Grid container spacing={3}>
          <Grid item xs={12}>
            <Paper className={classes.paper}>

              <Button variant="outlined" color="primary" className={classes.primary}>
                Creating a template project
       </Button>
              <Button variant="outlined" color="primary" className={classes.primary} onClick={this.listExamplesInDB}>
                List example
       </Button>
              <Button variant="outlined" color="primary" className={classes.primary} onClick={this.createProject}>
                Settings file
       </Button>
            </Paper>
            <Paper className={classes.paper}>

              {this.state.exampleslist.map(txt => <p>{txt}</p>)}

            </Paper>



          </Grid>
          <Grid item xs={12}>
            <Paper className={classes.paper}>
              <div>
                <form className={classes.root} noValidate autoComplete="off" onSubmit={this.handleSubmit} >
                  <Grid item xs={12}>
                    <TextField id="standard-basic" label="Airspeed" name="airspeed" value={this.state.value} onChange={this.handleChange} />
                    {this.state.errormessage}
                  </Grid >
                  <Grid item xs={12}>
                    <TextField id="standard-basic" label="Alpha" name="alpha" value={this.state.value} onChange={this.handleChange} />
                    {this.state.errormessage}
                  </Grid>
                  <Grid item xs={12}>
                    <TextField id="standard-basic" label="Altitude" name="altitude" value={this.state.value} onChange={this.handleChange} />
                    {this.state.errormessage}
                  </Grid>
                  <Grid item xs={12}>
                    <TextField id="standard-basic" label="Beta" name="beta" value={this.state.value} onChange={this.handleChange} />
                    {this.state.errormessage}
                  </Grid>
                  <Grid item xs={12}>
                    <TextField id="standard-basic" label="Density" name="density" value={this.state.value} onChange={this.handleChange} />
                    {this.state.errormessage}
                  </Grid>
                  <Grid item xs={12}>
                    <TextField id="standard-basic" label="Rate_P" name="rate_P" value={this.state.value} onChange={this.handleChange} />
                    {this.state.errormessage}
                  </Grid>
                  <Grid item xs={12}>
                    <TextField id="standard-basic" label="Rate_Q" name="rate_Q" value={this.state.value} onChange={this.handleChange} />
                    {this.state.errormessage}
                  </Grid>
                  <Grid item xs={12}>
                    <TextField id="standard-basic" label="Rate_R" name="rate_R" value={this.state.value} onChange={this.handleChange} />
                    {this.state.errormessage}
                  </Grid>

                  <Button variant="outlined" color="primary" type="submit" value="Submit">Submit</Button>
                </form>
              </div>
            </Paper>
          </Grid>
        </Grid>
      </div>

    );
  }
}

export default withStyles(styles)(SettingPorfile);