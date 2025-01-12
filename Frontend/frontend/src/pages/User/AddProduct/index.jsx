import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import axios from "axios";
import { Container, Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";  
import Swal from "sweetalert2";

function AppProduct() {
  const navigate = useNavigate();  

  const initialValues = {
    name: "",
    price: "",
    description: "",
    image: "",
  };

  const validationSchema = Yup.object({
    name: Yup.string().required("Product name is required"),
    price: Yup.number()
      .typeError("Price must be a number")
      .positive("Price must be positive")
      .required("Price is required"),
    description: Yup.string().required("Description is required"),
    image: Yup.string().url("Must be a valid URL").required("Image URL is required"),
  });

  const handleSubmit = (values, { resetForm }) => {
    axios
      .post("http://localhost:3000/api/products", values)
      .then((res) => {
        Swal.fire("Product added successfully!");
        resetForm(); 

        
        navigate("/");  
      })
      .catch((err) => {
        console.error(err);
        Swal.fire("Failed to add product!");
      });
  };

  return (
    <Container className="mt-5">
      <h2 className="text-center mb-4">Add New Product</h2>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        {({ isSubmitting }) => (
          <Form>
            <div className="mb-3">
              <label htmlFor="name">Product Name</label>
              <Field
                type="text"
                id="name"
                name="name"
                className="form-control"
                placeholder="Enter product name"
              />
              <ErrorMessage name="name" component="div" className="text-danger" />
            </div>

            <div className="mb-3">
              <label htmlFor="price">Price</label>
              <Field
                type="number"
                id="price"
                name="price"
                className="form-control"
                placeholder="Enter product price"
              />
              <ErrorMessage name="price" component="div" className="text-danger" />
            </div>

            <div className="mb-3">
              <label htmlFor="description">Description</label>
              <Field
                as="textarea"
                id="description"
                name="description"
                className="form-control"
                placeholder="Enter product description"
              />
              <ErrorMessage name="description" component="div" className="text-danger" />
            </div>

            <div className="mb-3">
              <label htmlFor="image">Image URL</label>
              <Field
                type="url"
                id="image"
                name="image"
                className="form-control"
                placeholder="Enter product image URL"
              />
              <ErrorMessage name="image" component="div" className="text-danger" />
            </div>

            <Button type="submit" className="btn btn-primary" disabled={isSubmitting}>
              {isSubmitting ? "Submitting..." : "Add Product"}
            </Button>
          </Form>
        )}
      </Formik>
    </Container>
  );
}

export default AppProduct;
