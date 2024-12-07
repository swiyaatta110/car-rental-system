import React from 'react'

const Loader = () => {
    return (
        <div className='h-full flex justify-center items-center'>
            <div className='w-20 h-20'>
                <img src="https://img.freepik.com/premium-vector/processing-icon-circular-loader-loading-progress-indicator-isolated-white-background_543062-380.jpg" className='w-full h-full object-center object-contain bg-transparent animate-spin' />
            </div>
        </div>
    )
}

export default Loader