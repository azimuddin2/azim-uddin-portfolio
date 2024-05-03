import { HashLoader } from 'react-spinners';

const Loading = () => {
    return (
        <div className='flex justify-center my-20'>
            <HashLoader
                color="#14a800"
                size={60}
            />
        </div>
    );
};

export default Loading;