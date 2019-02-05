import React, {Component} from 'react';
import {ErrorMessage, Field, Form, Formik} from "formik";
import * as yup from "yup";
import * as regexHelper from "./regexHelper";
import './formPage.scss'

export class FormPage extends Component {

    getDefaultFormData = ()=>
    {
        return {firstName:'',lastName:'',address:'',phone:''};
    };

    formSchema = yup.object().shape({
        firstName:
            yup.string()
                .required("First Name is required")
                .min(2, "Please use more then 2 characters")
                .max(35, "Please use up-to 35 characters")
                .matches(regexHelper.ENGLISH_NAME_REGEX, "Invalid first name"),
        lastName:
            yup.string()
                .required("Last Name is required")
                .min(2, "Please use more then 2 characters")
                .max(50, "Please use up-to 50 characters")
                .matches(regexHelper.ENGLISH_NAME_REGEX, "Invalid last name"),
        address:
            yup.string()
                .min(2, "Please use more then 2 characters")
                .max(50, "Please use up-to 50 characters"),
        phone:
            yup.string()
                .required("Phone number is required")
                .matches(regexHelper.ISRAEL_PHONE_REGEX, "Invalid phone number")

    });

    handleSubmit = (values, formMethods) => {
        formMethods.resetForm(this.getDefaultFormData());
        alert(`Hi ${values.firstName}, this highly stylish message is here to inform you that your form has been sent`);
    };

    render() {
        return (
            <div className="container py-5">
                <h2 className="form-title">Registration Form</h2>
                <Formik onSubmit={this.handleSubmit}
                        validationSchema={this.formSchema} initialValues={this.getDefaultFormData()}>
                    {(props) =>{
                        const touched=props.touched;
                        const errors=props.errors;

                        return (
                        <Form className="py-5">
                            <div className="form-row">
                                <div className="form-group col-md-6">
                                    <label htmlFor="firstName">First Name</label>
                                    <Field type="text" name="firstName" id="firstName" className={"form-control " + (errors.firstName && touched.firstName ? 'is-invalid' :'')}/>
                                    <ErrorMessage name="firstName" component="div" className="text-danger mt-1"/>
                                </div>
                                <div className="form-group col-md-6">
                                    <label htmlFor="firstName">Last Name</label>
                                    <Field type="text" name="lastName" id="lastName" className={"form-control " + (errors.lastName && touched.lastName ? 'is-invalid' :'')}/>
                                    <ErrorMessage name="lastName" component="div" className="text-danger mt-1" />
                                </div>
                            </div>
                            <div className="form-group">
                                <label htmlFor="address">Address</label>
                                <Field type="text" name="address" id="address" className={"form-control " + (errors.address && touched.address ? 'is-invalid' :'')}/>
                                <ErrorMessage name="address" component="div" className="text-danger mt-1"/>
                            </div>
                            <div className="form-group">
                                <label htmlFor="phone">Phone Number</label>
                                <Field type="tel" name="phone" id="phone" className={"form-control " + (errors.phone && touched.phone ? 'is-invalid' :'')}/>
                                <ErrorMessage name="phone" component="div" className="text-danger mt-1"/>
                            </div>

                            <button type="submit" className="btn btn-primary">Submit</button>

                        </Form>
                    )}}
                </Formik>
            </div>
        );
    }
}