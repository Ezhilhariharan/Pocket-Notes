import React from 'react'
import '../../Components/personaldetails/PersonalDetails.scss';
import { useFormik } from 'formik';
import useScript from 'react-script-hook';


function PersonalDetails() {

  // const status = useScript({
  //   <script src="https://checkout.razorpay.com/v1/payment-button.js" data-payment_button_id="pl_HcmESKe19VXSdd" async>
  //   </script>
  // }
  // );

  const formik = useFormik({
    initialValues: {
      name: '', email: '', number: ''
    },
    onSubmit: values => {
      alert(values.name);
      alert(values.email);
      alert(values.number);

    },
  });
  return (
    <div className="personaldetails d-lg-flex  flex-row justify-content-lg-center">
      <div className="customForm">
        <h2>Personal Detail</h2>
        <form onSubmit={formik.handleSubmit} >
          <div className="form-group">
            <label className="label" htmlFor="name">Name</label>
            <input
              id="name"
              name="name"
              type="text"
              onChange={formik.handleChange}
              value={formik.values.name}
            />
          </div>
          <div className="form-group">
            <label className="label" htmlFor="number">Email</label>
            <input
              id="name"
              name="email"
              type="email"
              onChange={formik.handleChange}
              value={formik.values.email}
            />
          </div>
          <div className="form-group">
            <label className="label" htmlFor="number">Phone Number</label>
            <input
              id="name"
              name="number"
              type="number"
              onChange={formik.handleChange}
              value={formik.values.number}
            />
          </div>
          {/* <div>{status}</div> */}
          <div className="d-flex  flex-row justify-content-center">
            <button type="submit" className="btn-blue mt-5 ">Pay </button>




          </div>
        </form>
        <form>
          {/* <script src="https://checkout.razorpay.com/v1/payment-button.js" data-payment_button_id="pl_HcmESKe19VXSdd" async> */}

          {/* {/* </script> */}

        </form>
      </div>
    </div>
  )
}

export default PersonalDetails
