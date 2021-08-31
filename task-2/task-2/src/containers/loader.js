import Loader from "react-loader-spinner";
import './styles.css';

const LoaderComp = () => {
    return (
        <div className='app'>
            <Loader
                type="TailSpin"
                color="#fff"
                style={{ marginLeft: '270px' }}
                height={50}
                width={50}
                timeout={3000}
            />
        </div>
    );
}
export default LoaderComp
