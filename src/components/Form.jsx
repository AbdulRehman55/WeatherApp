import React from 'react';
import "./style.css";
import Button from '@material-ui/core/Button';
const Form=(props)=>{
    
    return(
        <div className="container">
            <div>{props.error ? error():null}</div>
            <form onSubmit={props.loadweather}>
            <div className="row">
            <div className="col1">
                <input type="text" className="form-control"
                name="city"
                autoComplete="off"
                placeholder="City"
                />

                </div>
                <div className="col2">
                <input type="text" className="form-control"
                name="country"
                autoComplete="off"
                placeholder="Country"
                />
            </div>
            <div className="col3">
                <Button  color="primary" variant="contained" type="submit">Get Weather</Button>
            </div>
            </div>
            </form>
        </div>
    );

}
function error(){
    return(
        
        <div className="box">
            <div className="alert">
            <i class="fas fa-exclamation-triangle"></i>
                Please Enter City and Country
                </div>
        </div>
    )
}
export default Form;