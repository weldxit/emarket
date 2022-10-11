import React from 'react';
import axios from 'axios';
import Layout from './Layout';
import './css/signup.css'

class Contact extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      email: '',
      message: ''
    }
  }
  handleSubmit(e){
    e.preventDefault();
    // axios({
    //   method: "POST",
    //   url:"http://localhost:3002/send",
    //   data:  this.state
    // }).then((response)=>{
    //   if (response.data.status === 'success') {
    //     alert("Message Sent.");
    //     this.resetForm()
    //   } else if (response.data.status === 'fail') {
    //     alert("Message failed to send.")
    //   }
    // })
    alert('wait for backend to be deployed')
  }
  resetForm(){
    this.setState({name: '', email: '', message: ''})
  }
  render() {
    return(
        <Layout>
       <form className='sig'  onSubmit={this.handleSubmit.bind(this)}>
                <h3 >Sign Up</h3>
            

                <div className='left'>

                <div className="mb-3">
                    <label>First name</label>
                    <input
                        type="text"
                        className="form-control"
                        placeholder="First name"
                    />
                </div>
                <div className="mb-3">
                    <label>Last name</label>
                    <input type="text" className="form-control" placeholder="Last name" />
                </div>
                <div className="mb-3">
                    <label>Village</label>
                    <input
                        type="test"
                        className="form-control"
                        placeholder="Enter Village"
                        />
                </div>
                <div className="mb-3">
                    <label>Gram Panchayat</label>
                    <input
                        type="test"
                        className="form-control"
                        placeholder="Enter Gram Panchayat"
                        />
                </div>
                <div className="mb-3">
                    <label>Block</label>
                    <input
                        type="text"
                        className="form-control"
                        placeholder="Enter Block"
                        />
                </div>
                <div className="mb-3">
                    <label>Dist</label>
                    <input
                        type="text"
                        className="form-control"
                        placeholder="Enter Dist"
                        />
                    </div>
                        </div>
                        <div className="right">

                    <div className="mb-3">
                    <label>Farmer Id Number</label>
                    <input
                        type="text"
                        className="form-control"
                        placeholder="Enter FIN"
                        />
                    </div>
                    <div className="mb-3">
                    <label>Adhar No</label>
                    <input
                        type="text"
                        className="form-control"
                        placeholder="Enter password"
                        />
                    </div>
                    </div>
                    </form>
      </Layout>
    );
  }
  onNameChange(event) {
	  this.setState({name: event.target.value})
  }
  onEmailChange(event) {
	  this.setState({email: event.target.value})
  }
  onMessageChange(event) {
	  this.setState({message: event.target.value})
  }
}
export default Contact;