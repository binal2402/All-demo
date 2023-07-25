import React from 'react';
import SimpleReactValidator from 'simple-react-validator';

class RegisterForm extends React.Component{
    state = { email: "" };
    validator = new SimpleReactValidator({
        messages: {
          email: "Invalid mail Id",
          required: "plz Enter...",
          alpha:"name Enter."
          // OR
          // will override all messages
        }
      });

      handleSubmit = e => {
        e.preventDefault();
        this.validator.showMessages();
        this.forceUpdate();
      };
    render() {
        return (
          <div className="container">
            <form onSubmit={this.handleSubmit}>
                <label>Title</label>
                <input className="form-control" value={this.state.title} id='title' required="" onChange={e => this.setState({ title: e.target.value })} />
                {this.validator.message('title', this.state.title, 'required|alpha')}

                <label>Email</label>
                <input
                    type="text"
                    className="form-control"
                    id="email"
                    placeholder="Email"
                    required=""
                    name="email"
                    value={this.state.email}
                    onChange={e => this.setState({ email: e.target.value })}
                />
               
                {this.validator.message("email", this.state.email, "required|email")}



                <button type="submit">Submit</button>
            </form>
          </div>
        );
      }
}
export default RegisterForm;