"use client";
import { useState } from 'react';
import Sidebar from '@/app/component/Slidebar';
import Image from 'next/image';
import Link from 'next/link';
import profileMan from '/public/logoMan.svg';
import EditPic from '/public/Edit.svg';
import SavePic from '/public/Save.svg';
import Navbar from '../component/์Navbar';

const Profile = () => {
  const [editMode, setEditMode] = useState({
    userName: false,
    personalDetails: false,
    address: false,
    contactDetails: false,
  });

  const [profile, setProfile] = useState({
    userName: 'Someone Helpme',
    description: 'Science-Mathematics',
    school: 'xxxxxx',
    fatherAccount: 'xxxxxx',
    motherAccount: 'xxxxxx',
    firstName: 'Someone',
    lastName: 'Helpme',
    dateOfBirth: '29/02/2004',
    age: 18,
    gender: 'Male',
    bloodType: 'AB',
    height: '183 cm',
    weight: '70 kg',
    nationality: 'Thai',
    religion: 'Buddhism',
    hobbies: 'Listening to music, sleeping',
    nickname: 'Eiei',
    country: 'xxxxx',
    city: 'xxxxx',
    province: 'xxxxx',
    zipCode: 'xxxxx',
    email: 'xxx@gmail.com',
    phoneNumber: 'xxxxx',
    facebook: 'xxxxx'
  });

  const handleEditClick = (section: any) => {
    setEditMode((prevEditMode) => ({
      ...prevEditMode,
      [section]: true
    }));
  };

  const handleSaveClick = (section: any) => {
    setEditMode((prevEditMode) => ({
      ...prevEditMode,
      [section]: false
    }));
    // Save the profile information to a database or state management solution
  };

  const handleChange = (e: any) => {
    const { name, value } = e.target;
    setProfile((prevProfile) => ({
      ...prevProfile,
      [name]: value,
    }));
  };

  return (
    <main>
      <Navbar />
      <div className="flex flex-col md:flex-row ml-72">
        <Sidebar />
        <div className="flex-1 p-3">
          <h1 className="text-3xl font-sans font-bold mb-4 ml-4 mt-10">My Profile</h1>
          
          {/* Profile */}
          <div className="border-4 w-full rounded-3xl grid relative">
            <Image
              className='m-5'
              src={profileMan}
              alt="Picture of the author"
              width={100}  
            />
            {editMode.userName ? (
              <div className='pl-7 flex'>
                
                <div>
                <div className='mb-2'>
                  <label className='font-bold'>User Name: </label>
                  <input
                    className='font-medium text-gray-500 w-fit'
                    type="text"
                    name="userName"
                    value={profile.userName}
                    onChange={handleChange}
                  />
                </div>
                <div className='mb-2'>
                  <label className='font-bold'>Describe: </label>
                  <input
                    className='font-medium text-gray-500  w-fit'
                    type="text"
                    name="description"
                    value={profile.description}
                    onChange={handleChange}
                  />
                </div>
                <div className='mb-3'>
                  <label className='font-bold'>School: </label>
                  <input
                    className='font-medium text-gray-500  w-fit'
                    type="text"
                    name="description"
                    value={profile.school}
                    onChange={handleChange}
                  />
                </div>
                </div>

                <div>
                  <div className='mb-3 pl-20'>
                  <label className='font-bold'>Father Account: </label>
                  <input
                    className='font-medium text-gray-500  w-fit'
                    type="text"
                    name="description"
                    value={profile.fatherAccount}
                    onChange={handleChange}
                  />
                  </div>
                  <div className='mb-3 pl-20'>
                  <label className='font-bold'>Mother Account: </label>
                  <input
                    className='font-medium text-gray-500  w-fit'
                    type="text"
                    name="description"
                    value={profile.motherAccount}
                    onChange={handleChange}
                  />
                  </div>
                </div>

                <div className='absolute right-[3%] top-[10%]'>
                  <Link href="#" passHref>
                    <button
                     className="text-white h-[35px] cursor-pointer bg-[#bd88e8] py-2 px-4 rounded-xl flex justify-center items-center"
                      onClick={() => handleSaveClick('userName')}
                    >
                      Save
                    </button>
                  </Link>
                </div>
              </div>
            ) : (
              <div className='flex'>
                <div className='pl-5 ml-2 flex'>

                  <div>
                  <div className='mb-2'>
                    <h1 className='font-bold'>User Name:
                      <span className='font-medium text-gray-500'> {profile.userName}</span>
                    </h1>
                  </div>
                  <div className='mb-2'>
                  <h1 className='font-bold'>Describe:
                    <span className='font-medium text-gray-500'> {profile.description}</span>
                  </h1>
                  </div>
                  <div className='mb-3'>
                    <h1 className='font-bold'>School:
                      <span className='font-medium text-gray-500'> {profile.school}</span>
                    </h1>
                  </div>
                  </div>
                  
                  <div>
                  <div className='mb-3 pl-32'>
                    <h1 className='font-bold'>Father Account:
                      <span className='font-medium text-gray-500'> {profile.fatherAccount}</span>
                    </h1>
                  </div>
                  <div className='mb-3 pl-32'>
                    <h1 className='font-bold'>Mother Account:
                      <span className='font-medium text-gray-500'> {profile.motherAccount}</span>
                    </h1>
                  </div>
                  </div>

                </div>
                <div className='absolute right-[2%] top-[10%]'>
                  <Image
                    className="h-[35px] cursor-pointer"
                    src={EditPic}
                    alt="Edit"
                    onClick={() => handleEditClick('userName')}
                  />
                </div>
              </div>
            )}
          </div>

          {/* Personal Details */}
          <div className="border-4 w-full rounded-3xl grid mt-3 relative">
            <h1 className='text-xl font-sans font-bold mb-3 pt-4 pl-6'>Personal Details</h1>
            <div className="flex pl-6">
              {editMode.personalDetails ? (
                <>
                  <div className='pl-1'>
                    <div className='mb-2'>
                      <label className='font-bold'>First Name: </label>
                      <input
                        className='font-medium text-gray-500  w-fit'
                        type="text"
                        name="firstName"
                        value={profile.firstName}
                        onChange={handleChange}
                      />
                    </div>
                    <div className='mb-2'>
                      <label className='font-bold'>Date of Birth: </label>
                      <input
                        className='font-medium text-gray-500  w-fit'
                        type="text"
                        name="dateOfBirth"
                        value={profile.dateOfBirth}
                        onChange={handleChange}
                      />
                    </div>
                    <div className='mb-2'>
                      <label className='font-bold'>Religion: </label>
                      <input
                        className='font-medium text-gray-500  w-fit'
                        type="text"
                        name="religion"
                        value={profile.religion}
                        onChange={handleChange}
                      />
                    </div>
                    <div className='mb-6'>
                      <label className='font-bold'>Hobbies: </label>
                      <input
                        className='font-medium text-gray-500  w-fit'
                        type="text"
                        name="hobbies"
                        value={profile.hobbies}
                        onChange={handleChange}
                      />
                    </div>
                  </div>
                  <div className='pl-20'>
                    <div className='mb-2'>
                      <label className='font-bold'>Last Name: </label>
                      <input
                        className='font-medium text-gray-500'
                        type="text"
                        name="lastName"
                        value={profile.lastName}
                        onChange={handleChange}
                      />
                    </div>
                    <div className='mb-2'>
                      <label className='font-bold'>Age: </label>
                      <input
                        className='font-medium text-gray-500'
                        type="text"
                        name="age"
                        value={profile.age}
                        onChange={handleChange}
                      />
                    </div>
                    <div className='mb-2'>
                      <label className='font-bold'>Nationality: </label>
                      <input
                        className='font-medium text-gray-500'
                        type="text"
                        name="nationality"
                        value={profile.nationality}
                        onChange={handleChange}
                      />
                    </div>
                    <div className='mb-2'>
                      <label className='font-bold'>Weight: </label>
                      <input
                        className='font-medium text-gray-500'
                        type="text"
                        name="weight"
                        value={profile.weight}
                        onChange={handleChange}
                      />
                    </div>
                  </div>
                  <div className='pl-18'>
                    <div className='mb-2'>
                      <label className='font-bold'>Nickname: </label>
                      <input
                        className='font-medium text-gray-500'
                        type="text"
                        name="nickname"
                        value={profile.nickname}
                        onChange={handleChange}
                      />
                    </div>
                    <div className='mb-2'>
                      <label className='font-bold'>Gender: </label>
                      <input
                        className='font-medium text-gray-500'
                        type="text"
                        name="gender"
                        value={profile.gender}
                        onChange={handleChange}
                      />
                    </div>
                    <div className='mb-2'>
                      <label className='font-bold'>Blood type: </label>
                      <input
                        className='font-medium text-gray-500'
                        type="text"
                        name="bloodType"
                        value={profile.bloodType}
                        onChange={handleChange}
                      />
                    </div>
                    <div className='mb-2'>
                      <label className='font-bold'>Height: </label>
                      <input
                        className='font-medium text-gray-500'
                        type="text"
                        name="height"
                        value={profile.height}
                        onChange={handleChange}
                      />
                    </div>
                  </div>
                  <div className='absolute right-[3%] top-[10%]'>
                    <Link href="#" passHref>
                      <button
                        className="text-white h-[35px] cursor-pointer bg-[#bd88e8] py-2 px-4 rounded-xl flex justify-center items-center"
                        onClick={() => handleSaveClick('personalDetails')}
                      >
                        Save
                      </button>
                    </Link>

                  </div>
                </>
              ) : (
                <>
                  <div className='pl-1'>
                    <div className='mb-2'>
                      <h1 className='font-bold'>First Name:
                        <span className='font-medium text-gray-500'> {profile.firstName}</span>
                      </h1>
                    </div>
                    <div className='mb-2'>
                      <h1 className='font-bold'>Date of Birth:
                        <span className='font-medium text-gray-500'> {profile.dateOfBirth}</span>
                      </h1>
                    </div>
                    <div className='mb-2'>
                      <h1 className='font-bold'>Religion:
                        <span className='font-medium text-gray-500'> {profile.religion}</span>
                      </h1>
                    </div>
                    <div className='mb-6'>
                      <h1 className='font-bold'>Hobbies:
                        <span className='font-medium text-gray-500'> {profile.hobbies}</span>
                      </h1>
                    </div>
                  </div>
                  <div className='pl-28'>
                    <div className='mb-2'>
                      <h1 className='font-bold'>Last Name:
                        <span className='font-medium text-gray-500'> {profile.lastName}</span>
                      </h1>
                    </div>
                    <div className='mb-2'>
                      <h1 className='font-bold'>Age:
                        <span className='font-medium text-gray-500'> {profile.age}</span>
                      </h1>
                    </div>
                    <div className='mb-2'>
                      <h1 className='font-bold'>Nationality:
                        <span className='font-medium text-gray-500'> {profile.nationality}</span>
                      </h1>
                    </div>
                    <div className='mb-2'>
                      <h1 className='font-bold'>Weight:
                        <span className='font-medium text-gray-500'> {profile.weight}</span>
                      </h1>
                    </div>
                  </div>
                  <div className='pl-36'>
                    <div className='mb-2'>
                      <h1 className='font-bold'>Nickname:
                        <span className='font-medium text-gray-500'> {profile.nickname}</span>
                      </h1>
                    </div>
                    <div className='mb-2'>
                      <h1 className='font-bold'>Gender:
                        <span className='font-medium text-gray-500'> {profile.gender}</span>
                      </h1>
                    </div>
                    <div className='mb-2'>
                      <h1 className='font-bold'>Blood type:
                        <span className='font-medium text-gray-500'> {profile.bloodType}</span>
                      </h1>
                    </div>
                    <div className='mb-2'>
                      <h1 className='font-bold'>Height:
                        <span className='font-medium text-gray-500'> {profile.height}</span>
                      </h1>
                    </div>
                  </div>
                  <div className='absolute right-[2%] top-[10%]'>
                    <Image
                      className="h-[35px] cursor-pointer"
                      src={EditPic}
                      alt="Edit"
                      onClick={() => handleEditClick('personalDetails')}
                    />
                  </div>
                </>
              )}
            </div>
          </div>

          {/* Address */}
          <div className="border-4 w-full rounded-3xl grid mt-3 relative">
            <h1 className='text-xl font-sans font-bold mb-3 pt-4 pl-6'>Address</h1>
            <div className="flex pl-6">
              {editMode.address ? (
                <>
                  <div className='mb-2'>
                    <label className='font-bold'>Country: </label>
                    <input
                      className='font-medium text-gray-500  w-[150px]'
                      type="text"
                      name="country"
                      value={profile.country}
                      onChange={handleChange}
                    />
                  </div>
                  <div className='mb-2 pl-26'>
                    <label className='font-bold'>City: </label>
                    <input
                      className='font-medium text-gray-500  w-[150px]'
                      type="text"
                      name="city"
                      value={profile.city}
                      onChange={handleChange}
                    />
                  </div>
                  <div className='mb-2 pl-26'>
                    <label className='font-bold'>Province: </label>
                    <input
                      className='font-medium text-gray-500  w-[150px]'
                      type="text"
                      name="province"
                      value={profile.province}
                      onChange={handleChange}
                    />
                  </div>
                  <div className='mb-5 pl-26'>
                    <label className='font-bold'>Zip Code: </label>
                    <input
                      className='font-medium text-gray-500  w-[150px]'
                      type="text"
                      name="zipCode"
                      value={profile.zipCode}
                      onChange={handleChange}
                    />
                  </div>
                  <div className='absolute right-[3%] top-[30%]'>
                    <Link href="#" passHref>
                      <button
                       className="text-white h-[35px] cursor-pointer bg-[#bd88e8] py-2 px-4 rounded-xl flex justify-center items-center"
                        onClick={() => handleSaveClick('address')}
                      >
                        Save
                      </button>
                    </Link>
                  </div>
                </>
              ) : (
                <>
                  <div className='mb-2'>
                    <h1 className='font-bold'>Country:
                      <span className='font-medium text-gray-500'> {profile.country}</span>
                    </h1>
                  </div>
                  <div className='mb-2 pl-28'>
                    <h1 className='font-bold'>City:
                      <span className='font-medium text-gray-500'> {profile.city}</span>
                    </h1>
                  </div>
                  <div className='mb-2 pl-28'>
                    <h1 className='font-bold'>Province:
                      <span className='font-medium text-gray-500'> {profile.province}</span>
                    </h1>
                  </div>
                  <div className='mb-5 pl-28'>
                    <h1 className='font-bold'>Zip Code:
                      <span className='font-medium text-gray-500'> {profile.zipCode}</span>
                    </h1>
                  </div>
                  <div className='absolute right-[2%] top-[30%]'>
                    <Image
                      className="h-[35px] cursor-pointer"
                      src={EditPic}
                      alt="Edit"
                      onClick={() => handleEditClick('address')}
                    />
                  </div>
                </>
              )}
            </div>
          </div>

          {/* Contact Details */}
          <div className="border-4 w-full rounded-3xl grid mt-3 relative">
            <h1 className='text-xl font-sans font-bold mb-3 pt-4 pl-6'>Contact Details</h1>
            <div className="flex pl-6">
              {editMode.contactDetails ? (
                <>
                  <div className='mb-2'>
                    <label className='font-bold'>Email: </label>
                    <input
                      className='font-medium text-gray-500'
                      type="text"
                      name="email"
                      value={profile.email}
                      onChange={handleChange}
                    />
                  </div>
                  <div className='mb-2'>
                    <label className='font-bold'>Phone number: </label>
                    <input
                      className='font-medium text-gray-500'
                      type="text"
                      name="phoneNumber"
                      value={profile.phoneNumber}
                      onChange={handleChange}
                    />
                  </div>
                  <div className='mb-5'>
                    <label className='font-bold'>Facebook: </label>
                    <input
                      className='font-medium text-gray-500'
                      type="text"
                      name="facebook"
                      value={profile.facebook}
                      onChange={handleChange}
                    />
                  </div>
                  <div className='absolute right-[3%] top-[30%]'>
                    <Link href="#" passHref>
                      <button
                        className="text-white h-[35px] cursor-pointer bg-[#bd88e8] py-2 px-4 rounded-xl flex justify-center items-center"
                        onClick={() => handleSaveClick('contactDetails')}
                      >
                        <span className="text-center">Save</span>
                      </button>
                    </Link>

                  </div>
                </>
              ) : (
                <>
                  <div className='mb-2'>
                    <h1 className='font-bold'>Email:
                      <span className='font-medium text-gray-500'> {profile.email}</span>
                    </h1>
                  </div>
                  <div className='mb-2 pl-14'>
                    <h1 className='font-bold'>Phone number:
                      <span className='font-medium text-gray-500'> {profile.phoneNumber}</span>
                    </h1>
                  </div>
                  <div className='mb-5 pl-20'>
                    <h1 className='font-bold'>Facebook:
                      <span className='font-medium text-gray-500'> {profile.facebook}</span>
                    </h1>
                  </div>
                  <div className='absolute right-[2%] top-[30%]'>
                    <Image
                      className="h-[35px] cursor-pointer"
                      src={EditPic}
                      alt="Edit"
                      onClick={() => handleEditClick('contactDetails')}
                    />
                  </div>
                </>
              )}
            </div>
          </div>

        </div>
      </div>
    </main>
  );
};

export default Profile;
