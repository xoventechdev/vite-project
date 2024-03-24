class hero extends Component {
    render() {
        return (
            <div>
                <div colssName='container'>
            <div className="row">
                <div className="col-12">
                    <h2>Hello, this is developed with BootsTrap</h2>
                </div>
            </div>
            
        </div>
            </div>
        );
    }
}

export default connect(
    mapStateToProps,
)(hero);