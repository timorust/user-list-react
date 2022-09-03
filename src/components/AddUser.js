import React from "react";

class AddUser extends React.Component {
  userAdd = {};

  constructor(props) {
    super(props);
    this.state = {
      first_name: "",
      last_name: "",
      age: 1,
      bio: "",
      isHappy: false,
    };
  }
  render() {
    return (
      <form ref={(el) => (this.myForm = el)}>
        <input
          placeholder="First name"
          onChange={(e) => this.setState({ first_name: e.target.value })}
        />
        <input
          placeholder="Last name"
          onChange={(e) => this.setState({ last_name: e.target.value })}
        />
        <textarea
          placeholder="Bio"
          onChange={(e) => this.setState({ bio: e.target.value })}
        ></textarea>
        <input
          placeholder="Age"
          onChange={(e) => this.setState({ age: e.target.value })}
        />
        <label htmlFor="feel">Happy ? </label>
        <input
          type="checkbox"
          id="feel"
          onChange={(e) => this.setState({ isHappy: e.target.checked })}
        />
        <button
          type="button"
          onClick={() => {
            this.myForm.reset();
            this.userAdd = {
              first_name: this.state.first_name,
              last_name: this.state.last_name,
              age: this.state.age,
              bio: this.state.bio,
              isHappy: this.state.isHappy,
            };

            if (this.props.user) this.userAdd.id = this.props.user.id;
            this.props.onAdd(this.userAdd);
          }}
        >
          Add
        </button>
      </form>
    );
  }
}

export default AddUser;
