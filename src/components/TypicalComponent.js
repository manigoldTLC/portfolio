import Typical from 'react-typical'

const TypicalComponent = ({texto}) => {
    return (
        <Typical
            steps={[texto, 1000]}
            loop={Infinity}
            wrapper="p"
        />
    )
}

export default TypicalComponent