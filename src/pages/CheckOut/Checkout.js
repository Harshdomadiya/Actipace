import React, { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import {PiCurrencyInr} from "react-icons/pi";
import {IoLogoUsd} from "react-icons/io5";
import {useRecoilValue} from "recoil";
import {buycourse} from "../../services/FeaturePayment";
import {Currency} from "../../Atoms";

const Checkout = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const data = location.state;


  
  const [formData, setFormData] = useState({
    fullName: '',
    company: '',
    email: '',
    confirmEmail: '',
    phoneNumber: '',
    country: '',
    city: '',
    state: '',
    zipCode: '',
    gstin: '',
    termsAccepted: false,
    policyAccepted: false,
  });

  let gsta = data.amount*18/100 ;
      gsta =Number(gsta.toFixed(2));

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === 'checkbox' ? checked : value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const finalA = gsta + data.amount;
    data.amount = finalA
    const Data = {...formData,...data};
    await buycourse(Data,navigate);
  };

  return (
    <div className='flex w-full'>
        <div className="w-1/2 bg-white flex items-center justify-center">
        <div className="w-[500px] ml-[60px]">
        <h2 className="text-2xl  text-[#111827] mt-10 font-roboto text-[35px] font-normal mb-6">Checkout</h2>
        <form id="checkoutForm" onSubmit={handleSubmit} className="space-y-4 font-roboto text-[14px]">
            <div>
            <label htmlFor="fullName" className="block text-[#111827] font-medium">Full Name<span className="text-red-500"> *</span></label>
            <input
                type="text"
                className="w-full mt-1 p-4 border border-[#DBDDE3] placeholder-[#A6ADB3]  placeholder-roboto rounded-md"
                id="fullName"
                name="fullName"
                value={formData.fullName}
                onChange={handleChange}
                placeholder='Enter full name'
                required
            />
            </div>

            <div>
            <label htmlFor="company" className="block text-[#111827] font-medium">Company</label>
            <input
                type="text"
                className="w-full mt-1 p-4 border border-[#DBDDE3] placeholder-[#A6ADB3]  placeholder-roboto rounded-md"
                id="company"
                name="company"
                value={formData.company}
                placeholder='Enter company name'
                onChange={handleChange}
            />
            </div>

            <div>
            <label htmlFor="email" className="block text-[#111827] font-medium">Email address<span className="text-red-500"> *</span></label>
            <input
                type="email"
                className="w-full mt-1 p-4 border border-[#DBDDE3] placeholder-[#A6ADB3]  placeholder-roboto rounded-md"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder='Enter email address'
                required
            />
            </div>

            <div>
            <label htmlFor="confirmEmail" className="block text-[#111827] font-medium">Confirm Email address<span className="text-red-500"> *</span></label>
            <input
                type="email"
                className="w-full mt-1 p-4 border border-[#DBDDE3] placeholder-[#A6ADB3]  placeholder-roboto rounded-md"
                id="confirmEmail"
                name="confirmEmail"
                value={formData.confirmEmail}
                placeholder='Enter email address'
                onChange={handleChange}
                required
            />
            </div>

            <div>
            <label htmlFor="phoneNumber" className="block text-[#111827] font-medium">Phone Number<span className="text-red-500"> *</span></label>
            <input
                type="tel"
                className="w-full mt-1 p-4 border border-[#DBDDE3] placeholder-[#A6ADB3]  placeholder-roboto rounded-md"
                id="phoneNumber"
                name="phoneNumber"
                value={formData.phoneNumber}
                onChange={handleChange}
                placeholder="Enter phone number"
                required
            />
            </div>

            <div>
            <label htmlFor="country" className="block text-[#111827] font-medium">Country<span className="text-red-500"> *</span></label>
            <input
                type="text"
                className="w-full mt-1 p-4 border border-[#DBDDE3] placeholder-[#A6ADB3]  placeholder-roboto rounded-md"
                id="country"
                name="country"
                value={formData.country}
                placeholder='Enter country name'
                onChange={handleChange}
                required
            />
            </div>
            
            <div className='flex gap-3'>
            <div>
            <label htmlFor="city" className="block text-[#111827] font-medium">City</label>
            <input
                type="text"
                className="w-full mt-1 p-4 border border-[#DBDDE3] placeholder-[#A6ADB3]  placeholder-roboto rounded-md"
                id="city"
                name="city"
                value={formData.city}
                placeholder='Enter city'
                onChange={handleChange}
            />
            </div>

            <div >
            <label htmlFor="state" className="block text-[#111827] font-medium">State</label>
            <input
                type="text"
                className="w-full mt-1 p-4 border border-[#DBDDE3] placeholder-[#A6ADB3]  placeholder-roboto rounded-md"
                id="state"
                name="state"
                value={formData.state}
                placeholder='Enter state'
                onChange={handleChange}
            />
            </div>

            <div>
            <label htmlFor="zipCode" className="block text-[#111827] font-medium">Zip Code</label>
            <input
                type="text"
                className="w-full mt-1 p-4 border border-[#DBDDE3] placeholder-[#A6ADB3]  placeholder-roboto rounded-md"
                id="zipCode"
                name="zipCode"
                value={formData.zipCode}
                placeholder='Enter zip code'
                onChange={handleChange}
            />
            </div>
            </div>
            <div>
            <label htmlFor="gstin" className="block text-[#111827] font-medium">GSTIN<span className="text-red-500"> *</span></label>
            <input
                type="text"
                className="w-full mt-1 p-4 border border-[#DBDDE3] placeholder-[#A6ADB3]  placeholder-roboto rounded-md"
                id="gstin"
                name="gstin"
                value={formData.gstin}
                placeholder='Enter gst number'
                onChange={handleChange}
                required
            />
            </div>

            <div className="flex items-center">
            <input
                type="checkbox"
                className="w-5 h-5 text-[#31BF5C]  rounded-[6px] bg-[#31BF5C] focus:ring-[#31BF5C]"
                id="termsAccepted"
                name="termsAccepted"
                checked={formData.termsAccepted}
                onChange={handleChange}
            />
            <label htmlFor="termsAccepted" className="ml-2 text-[#111827]">
                  I have read and agree to the Terms and Conditions.
            </label>
            </div>

            <div className="flex ">
              <input
                type="checkbox"
                className="w-5 h-5 text-[#31BF5C] rounded-[6px] bg-[#31BF5C] focus:ring-[#31BF5C]"
                id="policyAccepted"
                name="policyAccepted"
                checked={formData.policyAccepted}
                onChange={handleChange}
              />
              <label htmlFor="policyAccepted" className="ml-2 text-[#111827]">
              I acknowlede that I have read and I agree to the End-User License Agreement, Payment Terms and Conditions, Privacy Policy and website Terms of Use
              </label>
            </div>

        </form>
        </div>
        </div>
        <div className="w-1/2 bg-[#ECFDF1] flex justify-center text-[#111827] font-roboto font-normal">
          <div className='w-[500px] h-[450px] mt-10  flex flex-col gap-5'>
            <div className='text-[35px]'>
                Order Summary
            </div>
            <div className='text-[16px]'>
                Review your cart
            </div>
            <div className='h-[120px] flex justify-between '>
              <div className='flex gap-5'>
                <img src="" alt='img' className='w-[120px] h-[120px] bg-white border rounded-[10px]'/>
                  <div className='flex flex-col justify-between'>
                      <div className='text-[18px] font-semibold'>
                          {data.name}
                      </div>
                      <div className='flex gap-8 text-[14px]'>
                          <div>
                              <div className='text-[#697387] '>Duration</div><div>{data.year} Year</div>
                          </div>
                          <div>
                              <div className='text-[#697387]'>License</div><div>{data.device} User</div>
                          </div>
                      </div>
                      <div className='text-[20px] font-bold flex items-center'>{data.icon === 1 ? <IoLogoUsd className="h-[18px] w-[18px]"/> :
                                                  <PiCurrencyInr className="h-[18px] w-[18px]"/>}{data.amount + gsta}</div>
                  </div>
              </div>
              <button className='text-[#FF070C]  flex items-start'>Delete</button>
            </div>
            <div className='flex flex-col gap-3 mt-[10px]'>
            <div className='flex justify-between text-[14px]'>
                <div className='text-[#A6ADB3] '>Total Amount Before  GST</div>
                <div className='flex items-center gap-[2px]'>{data.icon === 1 ? <IoLogoUsd className="h-[13px] w-[13px]"/> :
                                                  <PiCurrencyInr className="h-[14px] w-[14px]"/>}{data.amount}</div>
            </div>
            <div className='flex justify-between text-[14px]'>
                <div className='text-[#A6ADB3] '>GST 18%</div>
                <div className='flex items-center gap-[2px]'>{data.icon === 1 ? <IoLogoUsd className="h-[13px] w-[13px]"/> :
                                                  <PiCurrencyInr className="h-[14px] w-[14px]"/>}{gsta}</div>
            </div>
            <div className='flex justify-between text-[14px]'>
                <div >Total</div>
                <div className='flex items-center gap-[2px]'>{data.icon === 1 ? <IoLogoUsd className="h-[13px] w-[13px]"/> :
                                                  <PiCurrencyInr className="h-[14px] w-[14px]"/>}{data.amount + gsta}</div>
            </div>
            </div>
            <button form="checkoutForm" type="submit"  className='bg-[#31BF5C] text-white rounded-[10px] text-[16px] font-semibold h-[50px] flex items-center justify-center'>pay now</button>
          </div>
        </div>
    </div>
  );
};

export default Checkout;
