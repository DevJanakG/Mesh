import React from 'react';
import GPUMarketplace from './GPUMarketplace';
import HomePage from './Home';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Signin from './Signin';
import WalletPage from './Wallet';
import Jobs from './Jobs';
import Rewards from './Rewards';
import NFTDashboard from './Rewards';
import ProviderDashboard from './Dashboard'
import JobHistoryDashboard from './History';
import CommunityPlatform from './Community';

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/marketplace' element={<GPUMarketplace />}></Route>
        <Route path='/' element={<HomePage />}></Route>    
        <Route path='/signin' element=  {<Signin />}>
        </Route>
        <Route path='/wallet' element=  {<WalletPage />}>
        </Route>
        <Route path='/jobs' element=  {<Jobs />}>
        </Route>
        <Route path='/rewards' element=  {<NFTDashboard />}>
        </Route>
        <Route path='/dashboard' element=  {<ProviderDashboard />}>
        </Route>
        <Route path='/history' element=  {<JobHistoryDashboard />}>
        </Route>
        <Route path='/community' element=  {<CommunityPlatform />}>
        </Route>
      </Routes>
    </Router>
  );
}

export default App;