import { Link, Outlet, Routes, Route, useLocation } from 'react-router-dom';
import Nav from 'react-bootstrap/Nav';
import UseCallback from './UseCallback';
import UseContext from './UseContext';
import { UseDebugValue, IsFriendOnline } from './UseDebugValue';
import { UseEffect } from './UseEffect';
import { UseImperativeHandle } from './useImperativeHandle';
import { LayoutEffectExample } from './UseLayoutEffect';
import UseMemo from './UseMemo';
import UseReducer from './UseReducer';
import UseRef from './UseRef';
import UseState from './UseState';
import { useEffect } from 'react';

export function MainPredefinedHook() {

    const location = useLocation();

    // useEffect(() => {
    //     console.log('Route changed to:', location.pathname);
    //     // You can also perform other actions here, such as analytics tracking
    // }, [location]);

    return (
        <div className='predefined-link-container d-flex'>
            <div className='col-2 ps-5'>
                <Nav className='d-grid justify-items-start'>
                    <Link to="callback">Use Callback</Link>
                    <Link to="context">Use Context</Link>
                    <Link to="debugval">Use Debug Val</Link>
                    <Link to="effect">Use Effect</Link>
                    <Link to="imperativehandle">Use Imperative Handle</Link>
                    <Link to="layouteffect">Use Layout Effect</Link>
                    <Link to="memo">Use Memo</Link>
                    <Link to="reducer">Use Reducer</Link>
                    <Link to="ref">Use Ref</Link>
                    <Link to="state">Use State</Link>
                </Nav>
            </div>
            <div className='col-10 ps-5'>
                <Routes>
                    <Route path="callback" element={<UseCallback />} />
                    <Route path="context" element={<UseContext />} />
                    <Route path="debugval" element={<UseDebugValue friendID={0.1} />} />
                    <Route path="effect" element={<UseEffect />} />
                    <Route path="imperativehandle" element={<UseImperativeHandle />} />
                    <Route path="layouteffect" element={<LayoutEffectExample />} />
                    <Route path="memo" element={<UseMemo a={6} b={6} />} />
                    <Route path="reducer" element={<UseReducer />} />
                    <Route path="ref" element={<UseRef />} />
                    <Route path="state" element={<UseState />} />
                </Routes>
                <Outlet />
                {location.pathname === '/predefined/debugval' && <IsFriendOnline />}
            </div>
        </div>
    )
}