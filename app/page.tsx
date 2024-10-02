"use client"
import { useState } from 'react';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Label } from "@/components/ui/label"
import { Eye, EyeOff } from 'lucide-react'
import { FcGoogle } from 'react-icons/fc';
import { FaNetworkWired } from 'react-icons/fa';
import { RiCommunityLine } from 'react-icons/ri';
import { GiGrowth } from 'react-icons/gi';
import Link from 'next/link';

const SignUp = () => {
  const [userType, setUserType] = useState('');
  const [otherPet, setOtherPet] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword((prev) => !prev);
  };

  const toggleConfirmPasswordVisibility = () => {
    setShowConfirmPassword((prev) => !prev);
  }

  return (
    <div className="relative min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <video
        autoPlay
        loop
        muted
        className="absolute top-0 left-0 w-full h-full object-cover z-0"
      >
        <source src="/assets/child.mp4" type="video/mp4" />
      </video>
     
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-0 justify-center items-center my-auto w-full h-full max-w-sm mx-auto overflow-hidden bg-white border-2 dark:bg-gray-800 lg:max-w-2xl z-10">
        {/* text part */}
        <div className=" flex flex-col justify-center items-center order-2 lg:order-1 bg-cover p-8 z-10 bg-blue-200 h-full">
          <div className="flex flex-col justify-center items-center">
            <p className="text-2xl font-bold text-center mb-6 w-full text-black">
              Join the Club
            </p>
            <p className="text-sm text-start text-gray-600 dark:text-gray-200 w-full mb-6">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus.
            </p>
            {/* Info Boxes */}
            <div className="space-y-6 w-full max-w-md">
              <div className="flex items-center gap-4">
                <div className="border rounded-lg p-3 border-black">
                  <RiCommunityLine className="w-6 h-6" />
                </div>
                <div className="text-left">
                  <p className="text-lg font-bold">Community</p>
                  <p className="text-sm text-gray-500">At vero eos et accusamus et.</p>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="border rounded-lg p-3 border-black">
                  <FaNetworkWired className="w-6 h-6" />
                </div>
                <div className="text-left">
                  <p className="text-lg font-bold">Networking</p>
                  <p className="text-sm text-gray-500">At vero eos et accusamus et.</p>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="border rounded-lg p-3 border-black">
                  <GiGrowth className="w-6 h-6" />
                </div>
                <div className="text-left">
                  <p className="text-lg font-bold">Growth</p>
                  <p className="text-sm text-gray-500">At vero eos et accusamus et.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* form */}
        <div className="max-w-md w-full space-y-8 p-6 relative z-10 order-1 lg:order-1">
          <h2 className=" text-center text-3xl font-bold text-gray-900">Sign Up</h2>

          <form className="space-y-2">
            <Input placeholder="First Name" required className='rounded-full' />
            <Input placeholder="Last Name" required className='rounded-full' />

            <Select onValueChange={(value) => console.log(value)}>
              <SelectTrigger className='rounded-full text-gray-600'>
                <SelectValue placeholder="Select Gender" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="male" className='rounded-full'>Male</SelectItem>
                <SelectItem value="female" className='rounded-full'>Female</SelectItem>
                <SelectItem value="custom" className='rounded-full'>Custom</SelectItem>
              </SelectContent>
            </Select>

            {/* <Label htmlFor="profile-picture" className='text-gray-600'>Profile Picture</Label> */}
            <Input id="profile-picture" type="file" accept="image/*" className='rounded-full text-blue-400' placeholder='Chose profile picture' />

            <Select onValueChange={setUserType}>
              <SelectTrigger className='rounded-full text-gray-600'>
                <SelectValue placeholder="Select User Type" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="Child's parent" className='rounded-full'>Child&apos;s parent</SelectItem>
                <SelectItem value="Old people giver" className='rounded-full'>Old people giver</SelectItem>
                <SelectItem value="Pet parent" className='rounded-full'>Pet parent</SelectItem>
                <SelectItem value="Children careGiver" className='rounded-full'>Children Care Giver</SelectItem>
                <SelectItem value="OldPeople CareGiver" className='rounded-full'>Old People Care Giver</SelectItem>
                <SelectItem value="Pet CareGiver" className='rounded-full'>Pet Care Giver</SelectItem>
                <SelectItem value="charity" className='rounded-full'>Charity page</SelectItem>
              </SelectContent>
            </Select>

            {userType === "Child's parent" && (
              <>
                <Input placeholder="Children's age" type="number" className='rounded-full' />
                <Input placeholder="Children's Name" className='rounded-full' />
                <Input placeholder="Emergency (health issues, medicine schedule)" className='rounded-full' />
                <Input placeholder="Location" className='rounded-full' />
              </>
            )}

            {userType === "Old people giver" && (
              <>
                <Input placeholder="Old people's age" type="number" className='rounded-full' />
                <Input placeholder="Old people's name" className='rounded-full' />
                <Select>
                  <SelectTrigger className='rounded-full'>
                    <SelectValue placeholder="Old people's gender" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="male" className='rounded-full'>Male</SelectItem>
                    <SelectItem value="female" className='rounded-full'>Female</SelectItem>
                    <SelectItem value="other" className='rounded-full'>Other</SelectItem>
                  </SelectContent>
                </Select>
                <Input placeholder="Emergency (health issues, medicine schedule)" className='rounded-full' />
                <Input placeholder="Location" className='rounded-full' />
              </>
            )}

            {userType === "Pet parent" && (
              <>
                <Input placeholder="Pet's age" type="number" className='rounded-full' />
                <Select onValueChange={(value) => value === 'other' && setOtherPet('')}>
                  <SelectTrigger className='rounded-full'>
                    <SelectValue placeholder="Pet's type" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="cat" className='rounded-full'>Cat</SelectItem>
                    <SelectItem value="dog" className='rounded-full'>Dog</SelectItem>
                    <SelectItem value="bird" className='rounded-full'>Bird</SelectItem>
                    <SelectItem value="fish" className='rounded-full'>Fish</SelectItem>
                    <SelectItem value="other" className='rounded-full'>Other</SelectItem>
                  </SelectContent>
                </Select>
                {otherPet === 'other' && <Input placeholder="Specify pet type" onChange={(e) => setOtherPet(e.target.value)} />}
                <Input placeholder="Emergency (health issues, medicine schedule)" className='rounded-full' />
                <Input placeholder="Location" className='rounded-full' />
              </>
            )}

            {(userType === "Children careGiver" || userType === "OldPeople CareGiver" || userType === "Pet CareGiver") && (
              <>
                <Input placeholder="CareGiver's age" type="number" className='rounded-full' />
                <Input placeholder="CareGiver's name" className='rounded-full' />
                <Select>
                  <SelectTrigger className='rounded-full'>
                    <SelectValue placeholder="CareGiver's gender" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="male" className='rounded-full'>Male</SelectItem>
                    <SelectItem value="female" className='rounded-full'>Female</SelectItem>
                    <SelectItem value="other" className='rounded-full'>Other</SelectItem>
                  </SelectContent>
                </Select>
                <Select>
                  <SelectTrigger className='rounded-full'>
                    <SelectValue placeholder="Experience" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="fresher" className='rounded-full'>Fresher</SelectItem>
                    <SelectItem value="midlevel" className='rounded-full'>MidLevel (1-3 years)</SelectItem>
                    <SelectItem value="senior" className='rounded-full'>Senior (3-5 years)</SelectItem>
                  </SelectContent>
                </Select>
                <Input placeholder="Location" className='rounded-full' />
              </>
            )}

            {userType === "charity" && (
              <>
                <Input placeholder="Charity's Name" className='rounded-full' />
                <Input placeholder="Charity's Honor's Name" className='rounded-full' />
                <Select>
                  <SelectTrigger className='rounded-full'>
                    <SelectValue placeholder="Charity For" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="people" className='rounded-full'>People</SelectItem>
                    <SelectItem value="animals" className='rounded-full'>Animals</SelectItem>
                  </SelectContent>
                </Select>
                <Input placeholder="License Number" type="number" className='rounded-full' />
                <Input placeholder="Location" className='rounded-full' />
              </>
            )}

            <Input placeholder="Email" type="email" required className='rounded-full' />

            <div className="relative">
              <Input
                placeholder="Password"
                type={showPassword ? "text" : "password"}
                required
                className='rounded-full'
              />
              <button
                type="button"
                onClick={togglePasswordVisibility}
                className="absolute inset-y-0 right-0 pr-3 flex items-center text-sm leading-5"
              >
                {showPassword ? <EyeOff className="h-6 w-6 text-gray-700" /> : <Eye className="h-6 w-6 text-gray-700" />}
              </button>
            </div>
            <div className="relative">
              <Input
                placeholder="Confirm Password"
                type={showConfirmPassword ? "text" : "password"}
                required
                className="rounded-full"
              />
              <button
                type="button"
                onClick={toggleConfirmPasswordVisibility}
                className="absolute inset-y-0 right-0 pr-3 flex items-center text-sm leading-5"
              >
                {showConfirmPassword ? (
                  <EyeOff className="h-6 w-6 text-gray-700" />
                ) : (
                  <Eye className="h-6 w-6 text-gray-700" />
                )}
              </button>
            </div>

            <Button type="submit" className="w-full rounded-full bg-primary hover:bg-primaryHover">
              Sign Up
            </Button>
            <Button className="w-full rounded-full bg-primary hover:bg-primaryHover mt-4">
              <div className="flex items-center justify-center">
                <FcGoogle className="w-6 h-6 mr-2" />
                <span className="font-semibold">Sign up with Google</span>
              </div>
            </Button>
            <Label>
              <p className="text-center mt-4 text-xs text-gray-500 uppercase dark:text-gray-400">

                already a user? <Link href="/" className="text-xs text-gray-500 uppercase dark:text-gray-400 hover:underline">sign in</Link>
              </p>
            </Label>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SignUp;