import React from 'react';
import {Row, Col} from 'antd';
export default class AdsDetails extends React.Component {


	render() {
		return (
			<div className ='adscontainer'>

				{/* <Row>
					<Col span={2}></Col>
					<Col span={14} className="adscontainer"> */}

						<img src='https://2.bp.blogspot.com/-YjNRCF8giJA/WXT8YX1e49I/AAAAAAAAGL0/BwruYiJ-DkE8qygi7aJTjhmYa8C3kgJqwCLcBGAs/s320/720x720.jpg' alt='fs' />
            <span className = 'adscontainerspan'>
              Fidelity Service LLC, established in 2011, is a financial service firm. We try to use new

technology to serve the financial market.

We specialize in Data Science and Analytics Solutions and Services. Our goal is to help our

Customers make better decisions using data to get fast-track success. We value diversity

with a focused motto: making better decisions with data.
<hr/>
<p>
  Phone: +1 256 6688848
  E-mail:  hrdep@fidelityservicellc.com
</p>

            </span>
					{/* </Col>
					<Col span={6}>
						<PCNewsImageBlock count={40} type="top" width="100%" cardTitle="相关新闻" imageWidth="150px"/>
					</Col>
					<Col span={2}></Col>
				</Row> */}

			</div>
		);
	};
}
