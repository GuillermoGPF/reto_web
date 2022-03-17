import { Routes, Route } from 'react-router-dom'
import Home from '../pages/Home'
import PhoneDetails from '../pages/Phone-details'


const AppRoutes = () => {
    return (
        <>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/details/:id" element={<PhoneDetails />} />
            </Routes>
        </>
    )
}

export default AppRoutes