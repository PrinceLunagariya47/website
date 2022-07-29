import React from 'react'

const Contact = () => {
    const FormSubmit = (e) => {
        e.preventDefault();
        alert("Form Submited..Thank You");
    }

    return (
        <>
            <div className='my-5'>
                <h1 className='text-center'> Contact Us </h1>
            </div>
            <div className='container contact_div'>
                <div className='row'>
                    <div className='col-md-6 col-10 mx-auto'>
                        <form onSubmit={FormSubmit}>
                            <div className="mb-3">
                                <label htmlFor="exampleFormControlInput1" className="form-label"> FullName </label>
                                <input type="text" className="form-control" id="exampleFormControlInput1" placeholder="Enter your name" />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="exampleFormControlInput1" className="form-label"> Phone </label>
                                <input type="number" className="form-control" id="exampleFormControlInput1" placeholder="Mobile number" />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="exampleFormControlInput1" className="form-label">Email address</label>
                                <input type="email" className="form-control" id="exampleFormControlInput1" placeholder="name@example.com" />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="exampleFormControlTextarea1" className="form-label"> Message </label>
                                <textarea className="form-control" id="exampleFormControlTextarea1" rows="3" />
                            </div>
                            <div className="col-auto">
                                <button type="submit" className="btn btn-outline-primary mb-3">Confirm identity</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Contact;