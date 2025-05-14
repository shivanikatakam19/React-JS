// Higher Order Components(HOC) in react is a technique for reusing component logic 
// these components returns another component with additional props

function withName(WrappedComponent) {
    return function EnhancedComponent(props) {
        console.log('Props:', props);
        return <WrappedComponent {...props} />;
    };
}

function Hello({ name }) {
    return <div>Hello, {name}</div>;
}

export const HelloWithLogger = withName(Hello);