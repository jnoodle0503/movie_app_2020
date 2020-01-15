import React from 'react';

class Detail extends React.Component {
    componentDidMount() {
        const { location, history } = this.props; 
        // 여기서 this.props 의 props 객체명은 바꾸면 안된다 (예를들어, this.props -> this.pppp 이런식으로...)
        if(location.state === undefined) {
            history.push("/");
        }
    }
    render() {
        const { state } = this.props.location;
        if(state) {
            return <span>{state.title}</span>
        } 
        else {
            return null;
        }
    }
}
 
export default Detail;