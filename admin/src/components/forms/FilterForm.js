import React, { Component, Fragment } from 'react';
import { Field, reduxForm } from 'redux-form';
import { connect } from 'react-redux'
import { renderTextField, Button } from '../../helpers/FormsInputs';
import { Grid, Typography } from '@material-ui/core';
import { DropzoneArea } from 'material-ui-dropzone';
import ReactQuill from 'react-quill';
import { height } from '@material-ui/system';

export default reduxForm({
    form: "filterAdminForm"
})(connect((state) => {
    return {
        HttpReducer: state.HttpReducer,
        NotificationReducer: state.NotificationReducer,
    };
})(class FilterForm extends Component {




    render() {
        const { classes, handleSubmit, handleUploadChange } = this.props;
        return (
            <Fragment>
                <form onSubmit={handleSubmit}>
                    <Grid className={classes.marginInputs}>
                        <Field component={renderTextField} fullWidth type="text" name="filterTitle" label="Title" required/>
                    </Grid>
                    <Grid className={classes.marginInputs}>
                        <Field component={renderTextField} fullWidth type="text" name="filterValue" label="Value" required/>
                    </Grid>
                    <Grid className={classes.marginInputs}>
                        <Field component={renderTextField} fullWidth multiline rowsMax="4"
                            type="text" name="filterDescription" label="Description" required/>
                    </Grid>

                    <Grid className={classes.marginInputs}>
                        <Typography variant="h6" color="primary">
                            upload image
                        </Typography>
                        <DropzoneArea onChange={handleUploadChange}></DropzoneArea>
                    </Grid>
                    <Grid className={classes.marginInputs}>
                        <Typography variant="h6" color="primary">
                            Description
                        </Typography>
                        <ReactQuill style={{ height: "200px" }}></ReactQuill>
                        <br /><br />
                    </Grid>
                    <Grid className={classes.marginInputs} alignItems="center">
                        <Button  fullWidth size="large" variant="contained" color="primary">Save</Button>
                    </Grid>
                </form>
            </Fragment>
        );
    }

}
));