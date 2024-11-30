import React from 'react';
import './ThreeBox.css';
import LocalShippingIcon from '@mui/icons-material/LocalShipping';
import SupportAgentIcon from '@mui/icons-material/SupportAgent';
import TaskAltIcon from '@mui/icons-material/TaskAlt';

const ThreeBox = () => {
  return (
    <div className="three-box-container container py-5">
      <div className="row p-5">
        {/* Box 1 */}
        <div className="col-lg-4 col-md-6 mb-4">
          <div className="box-card">
            <div className="icon-circle">
              <LocalShippingIcon size={40} />
            </div>
            <h3 className="mt-3">FREE AND FAST DELIVERY</h3>
            <p>
            Free delivery for all orders over $140
            </p>
          </div>
        </div>

        {/* Box 2 */}
        <div className="col-lg-4 col-md-6 mb-4">
          <div className="box-card">
            <div className="icon-circle">
              <SupportAgentIcon size={40} />
            </div>
            <h3 className="mt-3">24/7 CUSTOMER SERVICE</h3>
            <p>
            Friendly 24/7 customer support
            </p>
          </div>
        </div>

        {/* Box 3 */}
        <div className="col-lg-4 col-md-6 mb-4">
          <div className="box-card">
            <div className="icon-circle">
              <TaskAltIcon size={40} />
            </div>
            <h3 className="mt-3">MONEY BACK GUARANTEE</h3>
            <p>
            We reurn money within 30 days
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ThreeBox;
