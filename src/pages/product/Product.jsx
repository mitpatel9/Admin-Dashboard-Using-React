import React from 'react'
import "./Product.css"
import Chart from "../../component/chart/Chart"
import {ProductData} from "../../DummyData"
import PublishIcon from '@mui/icons-material/Publish';

export default function Product() {
    return (
        <div className='product'>
            <div className="prodcutTitleContainer">
                <h1 className="productTitle">Product</h1>
                <button className="productAddButton">Create</button>
            </div>
            <div className="producttop">
                <div className="producttopleft">
                    <Chart data={ProductData} dataKey="Sales" title="Sales Performarce"/>
                </div>
                <div className="producttopright">
                    <div className="productInfoTop">
                        <img src="https://picsum.photos/200/300?grayscale" alt="" className="productInfoImg" />
                        <span className="productName">Real me Mobile</span>
                    </div>
                    <div className="productInfobottom">
                        <div className="productInfoItem">
                            <span className="productInfoKey">id:</span>
                            <span className="productInfoValue">1</span>
                        </div>
                        <div className="productInfoItem">
                            <span className="productInfKey">Sales:</span>
                            <span className="productInfoValue">4123</span>
                        </div>
                        <div className="productInfoItem">
                            <span className="productInfoKey">Active:</span>
                            <span className="productInfoValue">Yes</span>
                        </div>
                        <div className="productInfoItem">
                            <span className="productInfoKey">In Stock:</span>
                            <span className="productInfoValue">No</span>
                        </div>
                    </div>
                </div>
            </div>
            <div className="productbuttom">
                <from className="productform">
                    <div className="productformleft">
                        <label>Product Name</label>
                        <input type="text" name="" id=""  placeholder='Real Me Mobile'/>
                        <label>In Stock</label>
                        <select name="instock" id="idstock">
                            <option value="yes">Yes</option>
                            <option value="no">NO</option>
                        </select>
                        <label>Active</label>
                        <select name="active" id="active">
                            <option value="yes">Yes</option>
                            <option value="no">NO</option>
                        </select>
                    </div>
                    <div className="productformRight">
                        <div className="productUpload">
                        <img src="https://picsum.photos/200/300?grayscale" alt="" className="productUploadImg" />
                        <label For="file"><PublishIcon/></label>
                        <input type="file" id='file' style={{display:"none"}} />
                        </div>
                        <button className="productbutton">Update</button>
                    </div>
                </from>
            </div>

        </div>
    )
}
