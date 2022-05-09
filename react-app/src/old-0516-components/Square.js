class Square extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: null,
    };
  }
  render() {
    return (
      <button
        className="square"
        onClick={() => {
          this.setState({ value: "X" });
          console.log("click");
        }}
      >
        {this.state.value}
      </button>
    );
  }
}
export default Square;
