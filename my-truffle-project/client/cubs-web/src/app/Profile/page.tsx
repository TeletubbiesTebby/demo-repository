"use client"
import Sidebar from '@/app/component/Slidebar'


const Profile = () => {
    return (
      <div className="flex flex-col md:flex-row">
        <Sidebar/>
        <div className="flex-1 p-6">
          <h1 className="text-2xl font-bold mb-4">My Profile</h1>
          <div className="bg-white p-4 rounded-lg shadow-md">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <ProfileField label="Name" value="Someone" />
              <ProfileField label="Surname" value="Helpme" />
              <ProfileField label="Nickname" value="Eiei" />
              <ProfileField label="Age" value="18" />
              <ProfileField label="Birthday" value="29/02/2004" />
              <ProfileField label="Weight" value="56 kg" />
              <ProfileField label="Height" value="183 cm" />
              <ProfileField label="Religion" value="Buddhism" />
              <ProfileField label="Nationality" value="Thai" />
              <ProfileField label="Blood type" value="AB" />
              <ProfileField label="Address" value="xxxxxxxxxxxxxxx" />
              <ProfileField label="School" value="xxxxx" />
              <ProfileField label="Field of study" value="Science-Math" />
              <ProfileField label="Hobbies" value="Listening to music, sleeping" />
              <ProfileField label="Email" value="xxx@gmail.com" />
              <ProfileField label="Phone number" value="08x-xxx-xxx-x" />
              <ProfileField label="Contact" value="instagram facebook" />
              <ProfileField label="Father" value="................" />
              <ProfileField label="Mother" value="................" />
            </div>
            <button className="mt-4 py-2 px-4 bg-purple-500 text-white rounded">Confirm</button>
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
  