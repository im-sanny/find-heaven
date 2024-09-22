import { FaNetworkWired } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import { MdOutlineLock } from "react-icons/md";
import { Card, CardContent } from "@/components/ui/card";
import { FcGoogle } from "react-icons/fc";
import { RiCommunityLine } from "react-icons/ri";
import { GiGrowth } from "react-icons/gi";
import { Input } from "@/components/ui/input";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import Link from "next/link";

function SignIn() {
    return (
        <div className="relative flex items-center justify-center min-h-screen">
            {/* Video Background */}
            <video
                autoPlay
                loop
                muted
                className="absolute top-0 left-0 w-full h-full object-cover z-0"
            >
                <source src="/child.mp4" type="video/mp4" />
            </video>

            <Card className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-0 justify-center items-center my-auto w-full h-full max-w-sm mx-auto overflow-hidden bg-white border-2 dark:bg-gray-800 lg:max-w-2xl rounded-none">
                {/* Text part */}
                <CardContent className="flex flex-col justify-center items-center h-full order-2 lg:order-1 bg-cover p-8 bg-blue-200">
                    <div className="flex flex-col justify-center items-center">
                        <p className="text-2xl font-bold text-center mb-6 w-full">
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
                </CardContent>

                {/* Form */}
                <CardContent className="order-1 lg:order-2 w-full px-6 py-8 md:px-8">
                    <div className="flex justify-center mx-auto">
                        <img className="w-auto h-7 sm:h-8" src="https://merakiui.com/images/logo.svg" alt="" />
                    </div>
                    <p className="mt-3 text-xl text-center text-gray-600 dark:text-gray-200">
                        Welcome back!
                    </p>
                    <div className="flex items-center justify-between mt-4">
                        <span className="w-1/5 border-b dark:border-gray-600 lg:w-1/4"></span>
                        <p className="text-xs text-center text-gray-500 uppercase dark:text-gray-400">
                            Join in need of Humanity
                        </p>
                        <span className="w-1/5 border-b dark:border-gray-400 lg:w-1/4"></span>
                    </div>

                    <div className="relative flex items-center mt-6">
                        <span className="absolute left-3">
                            <HiOutlineMail className="w-6 h-6 text-gray-300 dark:text-gray-500" />
                        </span>
                        <Input type="email" className="pl-11 rounded-full" placeholder="Email address" />
                    </div>

                    <div className="relative flex items-center mt-4">
                        <span className="absolute left-3">
                            <MdOutlineLock className="w-6 h-6 text-gray-300 dark:text-gray-500" />
                        </span>
                        <Input type="password" className="pl-11 rounded-full" placeholder="Password" />
                    </div>

                    <div className="flex justify-between mt-4">
                        <div className="flex items-center space-x-2">
                            <Checkbox id="rememberMe" />
                            <Label htmlFor="rememberMe" className="text-xs text-gray-600 dark:text-gray-200">Remember me</Label>
                        </div>
                        <a href="#" className="text-xs text-gray-500 dark:text-gray-300 hover:underline">Forget Password?</a>
                    </div>

                    <Button type="submit" className="w-full mt-4 rounded-full bg-primary hover:bg-primaryHover">
                        Sign Up
                    </Button>
                    <Button className="w-full rounded-full bg-primary hover:bg-primaryHover mt-4">
                        <div className="flex items-center justify-center">
                            <FcGoogle className="w-6 h-6 mr-2" />
                            <span className="font-semibold">Sign up with Google</span>
                        </div>
                    </Button>

                    <div className="flex items-center justify-between mt-4">
                        <span className="w-1/5 border-b dark:border-gray-600 md:w-1/4"></span>
                        <Link href="/" className="text-xs text-gray-500 uppercase dark:text-gray-400 hover:underline">or sign up</Link>
                        <span className="w-1/5 border-b dark:border-gray-600 md:w-1/4"></span>
                    </div>
                </CardContent>
            </Card>
        </div>
    )
}

export default SignIn;
