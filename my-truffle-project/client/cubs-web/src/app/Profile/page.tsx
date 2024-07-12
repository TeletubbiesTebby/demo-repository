"use client"
import Sidebar from '@/app/component/Slidebar'
import Image from 'next/image'
import profileMan from '/public/logoMan.svg'
import EditPic from '/public/Edit.svg'

const Profile = () => {
    return (
      <div className="flex flex-col md:flex-row">
        <Sidebar/>
        <div className="flex-1 p-6">
          <h1 className="text-2xl font-sans font-bold mb-4 ml-4 mt-10">My Profile</h1>
          
          {/* Profile */}
          <div className="border border-4 w-full rounded-3xl grid">
            <div className='flex'>
              <Image
                className="m-3 ml-7"
                src={profileMan}
                alt="Picture of the author"
                width={100} 
              />
              <div className='p-5 ml-2 mt-4'>
                <div className='mb-2'>
                  <h1 className='font-bold'>User Name : 
                  <span className='font-medium text-gray-500'> Someone Helpme</span>
                  </h1>
                </div>

                <h1 className='font-bold'>Describe :  
                <span className='font-medium text-gray-500'>  Science-Mathematics</span>
                </h1>
              </div>
            </div>
          </div>


          {/*Personal-Details*/}
          <div className="border border-4 w-full rounded-3xl grid mt-3">
            <div className='flex'>
              <h1 className='text-xl font-sans font-bold mb-3 pt-4 pl-6'>Personal Details</h1>
              <Image
                className="relative left-11"
                src={EditPic}
                alt="Picture of the author"
                width={60} 
              />
            </div>

            <div className="flex pl-6">
              {/* detail-column1 */}
              <div>
                <div className='mb-2'>
                  <h1 className='font-bold'>First Name : 
                  <span className='font-medium text-gray-500'> Someone</span>
                  </h1>
                </div>

                <div className='mb-2'>
                  <h1 className='font-bold'>Date of Birth : 
                  <span className='font-medium text-gray-500'> 29/02/2004</span>
                  </h1>
                </div>

                <div className='mb-2'>
                  <h1 className='font-bold'>Religion : 
                  <span className='font-medium text-gray-500'> Buddhism</span>
                  </h1>
                </div>

                <div className='mb-6'>
                  <h1 className='font-bold'>Hobbies : 
                  <span className='font-medium text-gray-500'> Listening to music, sleeping</span>
                  </h1>
                </div>
              </div>

              {/* detail-column2 */}
              <div className='pl-24'>
                <div className='mb-2'>
                  <h1 className='font-bold'>Last Name : 
                  <span className='font-medium text-gray-500'> Helpme</span>
                  </h1>
                </div>

                <div className='mb-2'>
                  <h1 className='font-bold'>Age : 
                  <span className='font-medium text-gray-500'> 18</span>
                  </h1>
                </div>

                <div className='mb-2'>
                  <h1 className='font-bold'>Nationality : 
                  <span className='font-medium text-gray-500'> Thai</span>
                  </h1>
                </div>

                <div className='mb-2'>
                  <h1 className='font-bold'>Weight : 
                  <span className='font-medium text-gray-500'> 70 kg</span>
                  </h1>
                </div>
              </div>

              {/* detail-column3 */}
              <div className='pl-32'>
                <div className='mb-2'>
                  <h1 className='font-bold'>Nickname : 
                  <span className='font-medium text-gray-500'> Eiei</span>
                  </h1>
                </div>

                <div className='mb-2'>
                  <h1 className='font-bold'>Gender : 
                  <span className='font-medium text-gray-500'> Male</span>
                  </h1>
                </div>

                <div className='mb-2'>
                  <h1 className='font-bold'>Blood type : 
                  <span className='font-medium text-gray-500'> AB</span>
                  </h1>
                </div>

                <div className='mb-2'>
                  <h1 className='font-bold'>Height : 
                  <span className='font-medium text-gray-500'> 183 cm</span>
                  </h1>
                </div>
              </div>  
            </div>
          </div>

          {/*Address*/}
          <div className="border border-4 w-full rounded-3xl grid mt-3">
            <h1 className='text-xl font-sans font-bold mb-3 pt-4 pl-6'>Address</h1>
            <div className="flex pl-6">

                <div className='mb-2'>
                  <h1 className='font-bold'>Country : 
                  <span className='font-medium text-gray-500'> xxxxx</span>
                  </h1>
                </div>

                <div className='mb-2 pl-28'>
                  <h1 className='font-bold'>City : 
                  <span className='font-medium text-gray-500'> xxxxx</span>
                  </h1>
                </div>

                <div className='mb-2 pl-28'>
                  <h1 className='font-bold'>Province : 
                  <span className='font-medium text-gray-500'> xxxxx</span>
                  </h1>
                </div>

                <div className='mb-5 pl-28'>
                  <h1 className='font-bold'>Zip Code : 
                  <span className='font-medium text-gray-500'> xxxxx</span>
                  </h1>
                </div>
            </div>
          </div>

          {/*Contact-Details*/}
          <div className="border border-4 w-full rounded-3xl grid mt-3">
            <h1 className='text-xl font-sans font-bold mb-3 pt-4 pl-6'>Contact Details</h1>
            <div className="flex pl-6">

                <div className='mb-2'>
                  <h1 className='font-bold'>Email : 
                  <span className='font-medium text-gray-500'> xxx@gmail.com</span>
                  </h1>
                </div>

                <div className='mb-2 pl-28'>
                  <h1 className='font-bold'>Phone number : 
                  <span className='font-medium text-gray-500'> xxxxx</span>
                  </h1>
                </div>

                <div className='mb-5 pl-28'>
                  <h1 className='font-bold'>Facebook : 
                  <span className='font-medium text-gray-500'> xxxxx</span>
                  </h1>
                </div>
            </div>
          </div>

        </div>
      </div>
    );
  };
  
  const ProfileField = ({ label, value }: { label: string; value: string }) => (
    <div className="flex flex-col">
      <span className="font-semibold">{label} :</span>
      <span>{value}</span>
    </div>
  );
  
  export default Profile;
  